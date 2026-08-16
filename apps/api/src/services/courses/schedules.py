from datetime import datetime, timedelta
from typing import List, Optional
from uuid import uuid4
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from fastapi import HTTPException, Request, status

from src.db.courses.course_schedules import (
    CourseSchedule,
    CourseScheduleCreate,
    CourseScheduleRead,
    CourseScheduleUpdate,
)
from src.db.courses.courses import Course
from src.db.trail_runs import TrailRun
from src.db.trails import Trail
from src.db.users import AnonymousUser, PublicUser
from src.services.trail.trail import check_trail_presence


async def get_student_schedule(
    request: Request,
    user: PublicUser | AnonymousUser,
    org_id: int,
    db_session: AsyncSession,
) -> List[dict]:
    """
    Get all published schedule entries for courses the student is enrolled in.
    Returns a flat list of schedule dicts with course info attached.
    """
    if isinstance(user, AnonymousUser):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Anonymous users cannot access this endpoint",
        )

    # 1. Get the user's trail for this org (creates if missing)
    trail = await check_trail_presence(
        org_id=org_id,
        user_id=user.id,
        request=request,
        user=user,
        db_session=db_session,
    )

    # 2. Get enrolled course IDs from trail runs
    statement = select(TrailRun).where(
        TrailRun.trail_id == trail.id, TrailRun.user_id == user.id
    )
    trail_runs = (await db_session.execute(statement)).scalars().all()

    if not trail_runs:
        return []

    course_ids = [tr.course_id for tr in trail_runs if tr.course_id is not None]
    if not course_ids:
        return []

    # 3. Batch fetch courses
    courses = (await db_session.execute(
        select(Course).where(Course.id.in_(course_ids))  # type: ignore
    )).scalars().all()
    course_map = {c.id: c for c in courses}

    # 4. Batch fetch all published schedule entries for these courses
    schedules = (await db_session.execute(
        select(CourseSchedule).where(
            CourseSchedule.course_id.in_(course_ids),  # type: ignore
            CourseSchedule.published == True,  # noqa: E712
        ).order_by(CourseSchedule.weekday, CourseSchedule.start_time)
    )).scalars().all()

    # 5. Build result with course info
    result = []
    for sched in schedules:
        course = course_map.get(sched.course_id)
        result.append({
            "id": sched.id,
            "schedule_uuid": sched.schedule_uuid,
            "title": sched.title,
            "description": sched.description,
            "entry_type": sched.entry_type.value if sched.entry_type else "LIVE_SESSION",
            "weekday": sched.weekday,
            "start_time": sched.start_time,
            "end_time": sched.end_time,
            "scheduled_at": sched.scheduled_at,
            "duration_minutes": sched.duration_minutes,
            "location": sched.location,
            "meeting_url": sched.meeting_url,
            "is_recurring": sched.is_recurring,
            "course_id": sched.course_id,
            "course_name": course.name if course else None,
            "course_uuid": course.course_uuid if course else None,
            "org_id": sched.org_id,
        })

    return result


async def create_course_schedule(
    request: Request,
    user: PublicUser,
    course_uuid: str,
    schedule_data: CourseScheduleCreate,
    db_session: AsyncSession,
) -> CourseScheduleRead:
    """Create a schedule entry for a course (admin/instructor only)."""
    statement = select(Course).where(Course.course_uuid == course_uuid)
    course = (await db_session.execute(statement)).scalars().first()
    if not course:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")

    schedule = CourseSchedule(
        **schedule_data.model_dump(),
        course_id=course.id,
        org_id=course.org_id,
        schedule_uuid=f"schedule_{uuid4()}",
        creation_date=str(datetime.now()),
        update_date=str(datetime.now()),
    )
    db_session.add(schedule)
    await db_session.commit()
    await db_session.refresh(schedule)

    return CourseScheduleRead(
        **schedule.model_dump(),
        course_name=course.name,
        course_uuid=course.course_uuid,
    )


async def get_course_schedule(
    request: Request,
    course_uuid: str,
    db_session: AsyncSession,
) -> List[CourseScheduleRead]:
    """Get all schedule entries for a specific course."""
    statement = select(Course).where(Course.course_uuid == course_uuid)
    course = (await db_session.execute(statement)).scalars().first()
    if not course:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")

    schedules = (await db_session.execute(
        select(CourseSchedule).where(
            CourseSchedule.course_id == course.id,
            CourseSchedule.published == True,  # noqa: E712
        ).order_by(CourseSchedule.weekday, CourseSchedule.start_time)
    )).scalars().all()

    return [
        CourseScheduleRead(
            **s.model_dump(),
            course_name=course.name,
            course_uuid=course.course_uuid,
        )
        for s in schedules
    ]
