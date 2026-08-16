from datetime import datetime
from enum import Enum
from typing import Optional
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, Index
from sqlmodel import Field, SQLModel


class ScheduleEntryType(str, Enum):
    """Type of scheduled session."""
    LIVE_SESSION = "LIVE_SESSION"
    VIDEO_CALL = "VIDEO_CALL"
    IN_PERSON = "IN_PERSON"
    SELF_STUDY = "SELF_STUDY"
    EXAM = "EXAM"
    DEADLINE = "DEADLINE"


class WeekdayEnum(int, Enum):
    """ISO weekday: 1=Monday ... 7=Sunday"""
    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6
    SUNDAY = 7


class CourseScheduleBase(SQLModel):
    """A recurring or one-time scheduled session for a course."""
    title: str
    description: Optional[str] = None
    entry_type: ScheduleEntryType = ScheduleEntryType.LIVE_SESSION
    # For recurring sessions: weekday + start/end time (HH:MM)
    weekday: Optional[int] = None  # 1-7 (ISO weekday), null for one-time events
    start_time: Optional[str] = None  # "HH:MM" 24h format
    end_time: Optional[str] = None  # "HH:MM" 24h format
    # For one-time sessions: specific datetime
    scheduled_at: Optional[str] = None  # ISO datetime string
    duration_minutes: Optional[int] = 60
    location: Optional[str] = None  # room name, video call link, etc.
    meeting_url: Optional[str] = None  # zoom/meet link
    is_recurring: bool = True
    published: bool = False


class CourseSchedule(CourseScheduleBase, table=True):
    __table_args__ = (
        Index("ix_courseschedule_course_org", "course_id", "org_id"),
    )
    id: Optional[int] = Field(default=None, primary_key=True)
    schedule_uuid: str = Field(default="", index=True)
    course_id: int = Field(
        sa_column=Column(Integer, ForeignKey("course.id", ondelete="CASCADE"), index=True)
    )
    org_id: int = Field(
        sa_column=Column(Integer, ForeignKey("organization.id", ondelete="CASCADE"), index=True)
    )
    creation_date: str = ""
    update_date: str = ""


class CourseScheduleCreate(CourseScheduleBase):
    course_id: int


class CourseScheduleUpdate(SQLModel):
    title: Optional[str] = None
    description: Optional[str] = None
    entry_type: Optional[ScheduleEntryType] = None
    weekday: Optional[int] = None
    start_time: Optional[str] = None
    end_time: Optional[str] = None
    scheduled_at: Optional[str] = None
    duration_minutes: Optional[int] = None
    location: Optional[str] = None
    meeting_url: Optional[str] = None
    is_recurring: Optional[bool] = None
    published: Optional[bool] = None


class CourseScheduleRead(CourseScheduleBase):
    id: int
    schedule_uuid: str
    course_id: int
    org_id: int
    creation_date: str
    update_date: str
    # Joined from Course
    course_name: Optional[str] = None
    course_uuid: Optional[str] = None
