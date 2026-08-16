from fastapi import APIRouter, Depends, Request
from src.core.events.database import get_db_session
from src.db.courses.course_schedules import (
    CourseScheduleCreate,
    CourseScheduleRead,
    CourseScheduleUpdate,
)
from src.security.auth import get_current_user
from src.security.features_utils.dependencies import require_courses_feature
from src.services.courses.schedules import (
    get_student_schedule,
    create_course_schedule,
    get_course_schedule,
)

router = APIRouter(dependencies=[Depends(require_courses_feature)])


@router.get(
    "/org/{org_id}/student",
    summary="Get student schedule by organization",
    description="Retrieve all published schedule entries for courses the current user is enrolled in.",
    responses={
        200: {"description": "Schedule entries retrieved."},
        401: {"description": "Authentication required"},
    },
)
async def api_get_student_schedule(
    request: Request,
    org_id: int,
    user=Depends(get_current_user),
    db_session=Depends(get_db_session),
) -> list:
    """
    Get the current student's schedule within an organization
    """
    return await get_student_schedule(request, user, org_id=org_id, db_session=db_session)


@router.get(
    "/course/{course_uuid}",
    summary="Get schedule for a course",
    description="Retrieve all published schedule entries for a specific course.",
    responses={
        200: {"description": "Schedule entries retrieved."},
        404: {"description": "Course not found"},
    },
)
async def api_get_course_schedule(
    request: Request,
    course_uuid: str,
    user=Depends(get_current_user),
    db_session=Depends(get_db_session),
) -> list:
    """
    Get all schedule entries for a course
    """
    return await get_course_schedule(request, course_uuid, db_session)


@router.post(
    "/course/{course_uuid}",
    response_model=CourseScheduleRead,
    summary="Create a schedule entry for a course",
    description="Create a new schedule entry (admin/instructor only).",
    responses={
        200: {"description": "Schedule entry created.", "model": CourseScheduleRead},
        401: {"description": "Authentication required"},
        404: {"description": "Course not found"},
    },
)
async def api_create_course_schedule(
    request: Request,
    course_uuid: str,
    schedule_data: CourseScheduleCreate,
    user=Depends(get_current_user),
    db_session=Depends(get_db_session),
) -> CourseScheduleRead:
    """
    Create a schedule entry for a course
    """
    return await create_course_schedule(request, user, course_uuid, schedule_data, db_session)
