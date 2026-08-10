'use client'
import { useOrg } from '@components/Contexts/OrgContext'
import AuthenticatedClientElement from '@components/Security/AuthenticatedClientElement'
import ConfirmationModal from '@components/Objects/StyledElements/ConfirmationModal/ConfirmationModal'
import Modal from '@components/Objects/StyledElements/Modal/Modal'
import ManageAccessPopover from '@components/Dashboard/Library/ManageAccessPopover'
import { getUriWithOrg } from '@services/config/config'
import { deleteCourseFromBackend, cloneCourse } from '@services/courses/courses'
import { exportCourse, downloadBlob, ExportStatus } from '@services/courses/transfer'
import { exportToast } from '@components/Objects/StyledElements/Toast/ExportToast'
import { getCourseThumbnailMediaDirectory, getUserAvatarMediaDirectory } from '@services/media/media'
import { useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@/lib/query/keys'
import { getCourseMetadata } from '@services/courses/courses'
import { BookMinus, FilePenLine, Settings2, MoreVertical, Copy, Download, CheckSquare, Square, Lock } from 'lucide-react'
import { useLHSession } from '@components/Contexts/LHSessionContext'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import UserAvatar from '@components/Objects/UserAvatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import { useTranslation } from 'react-i18next'
import { useLHAnalytics, AnalyticsEvent } from '@services/analytics'

type Course = {
  course_uuid: string
  name: string
  description: string
  thumbnail_image: string
  org_id: string | number
  update_date: string
  public?: boolean
  published?: boolean
  authors?: Array<{
    user: {
      id: string
      user_uuid: string
      avatar_image: string
      first_name: string
      last_name: string
      username: string
    }
    authorship: 'CREATOR' | 'CONTRIBUTOR' | 'MAINTAINER' | 'REPORTER'
    authorship_status: 'ACTIVE' | 'INACTIVE' | 'PENDING'
  }>
}

type PropsType = {
  course: Course
  orgslug: string
  customLink?: string
  isDashboard?: boolean
  isSelected?: boolean
  onToggleSelect?: (_courseUuid: string) => void
  isPriority?: boolean
}

export const removeCoursePrefix = (course_uuid: string) => course_uuid.replace('course_', '')

function CourseThumbnail({ course, orgslug, customLink, isDashboard = false, isSelected = false, onToggleSelect, isPriority = false }: PropsType) {
  const { t, i18n } = useTranslation()
  const org = useOrg() as any
  const session = useLHSession() as any
  const queryClient = useQueryClient()
  const { track } = useLHAnalytics('learner')

  const cleanUuid = removeCoursePrefix(course.course_uuid)

  const handleCardOpen = () => {
    track(AnalyticsEvent.CourseCardOpened, {
      course_uuid: cleanUuid,
      source: isDashboard ? 'dashboard' : 'catalog',
    })
  }

  // Prefetch course meta on hover so the course page feels instant
  const handleMouseEnter = () => {
    queryClient.prefetchQuery({
      queryKey: queryKeys.courses.meta(cleanUuid),
      queryFn: () => getCourseMetadata(cleanUuid, {}, session?.data?.tokens?.access_token, { slim: true }),
      staleTime: 60_000,
    })
  }

  const handleSelectClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onToggleSelect?.(course.course_uuid)
  }

  const activeAuthors = course.authors?.filter(author => author.authorship_status === 'ACTIVE') || []
  const displayedAuthors = activeAuthors.slice(0, 3)
  const hasMoreAuthors = activeAuthors.length > 3
  const remainingAuthorsCount = activeAuthors.length - 3

  const deleteCourse = async () => {
    const toastId = toast.loading(t('courses.deleting_course'))
    try {
      await deleteCourseFromBackend(course.course_uuid, session.data?.tokens?.access_token)
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      toast.success(t('courses.course_deleted_success'))
    } catch (_error) {
      toast.error(t('courses.course_deleted_error'))
    } finally {
      toast.dismiss(toastId)
    }
  }

  const handleCloneCourse = async () => {
    const toastId = toast.loading(t('courses.cloning_course'))
    try {
      const result = await cloneCourse(course.course_uuid, session.data?.tokens?.access_token)
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ['courses'] })
        toast.success(t('courses.course_cloned_success'))
      } else {
        toast.error(result.HTTPmessage || t('courses.course_cloned_error'))
      }
    } catch (_error) {
      toast.error(t('courses.course_cloned_error'))
    } finally {
      toast.dismiss(toastId)
    }
  }

  const handleExportCourse = async () => {
    const toastId = exportToast.start('single', course.name)

    try {
      const blob = await exportCourse(
        course.course_uuid,
        session.data?.tokens?.access_token,
        (progress, status) => {
          exportToast.update(toastId, status as ExportStatus, progress, course.name, undefined, 'single')
        }
      )
      const timestamp = new Date().toISOString().split('T')[0]
      downloadBlob(blob, `${course.name.replace(/[^a-z0-9]/gi, '_')}-${timestamp}.zip`)
      exportToast.complete(toastId, course.name, undefined, 'single')
    } catch (error: any) {
      exportToast.error(toastId, error.message || t('courses.course_exported_error'), course.name, undefined, 'single')
    }
  }

  const thumbnailImage = course.thumbnail_image
    ? getCourseThumbnailMediaDirectory(org?.org_uuid, course.course_uuid, course.thumbnail_image)
    : '/empty_thumbnail.png'

  const courseLink = customLink ? customLink : getUriWithOrg(orgslug, `/course/${removeCoursePrefix(course.course_uuid)}${isDashboard ? '' : '/about'}`)

  return (
    <div onMouseEnter={handleMouseEnter} className={`group relative bg-white rounded-[24px] w-full transition-all duration-200 hover:outline hover:outline-1 hover:outline-[#ccc] ${isSelected ? 'ring-2 ring-black ring-offset-2' : ''}`}>
      {/* Selection checkbox - visible on hover or when selected (dashboard only) */}
      {isDashboard && onToggleSelect && (
        <button
          onClick={handleSelectClick}
          aria-label={isSelected ? 'Deselect course' : 'Select course'}
          className={`absolute top-4 left-4 z-20 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-md ${
            isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {isSelected ? (
            <CheckSquare className="w-4 h-4 text-black" />
          ) : (
            <Square className="w-4 h-4 text-gray-500" />
          )}
        </button>
      )}

      {/* Options menu - visible on hover or when dropdown is open */}
      <AdminEditOptions
        course={course}
        orgSlug={orgslug}
        deleteCourse={deleteCourse}
        cloneCourse={handleCloneCourse}
        exportCourse={handleExportCourse}
        isDashboard={isDashboard}
      />

      {/* Main card link area - horizontal layout with image on left */}
      <Link prefetch={false} href={courseLink} onClick={handleCardOpen} className="flex p-5 max-[767px]:p-4 no-underline text-inherit relative">
        {/* Hidden img for LCP priority */}
        {isPriority && (
          <img
            src={thumbnailImage}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute w-0 h-0 opacity-0 pointer-events-none"
          />
        )}

        {/* Thumbnail image (left side, smaller on mobile) */}
        <div className="mr-5 max-[767px]:mr-3 shrink-0 relative">
          <div
            className="w-[124px] h-[124px] max-[1023px]:w-[100px] max-[1023px]:h-[100px] max-[767px]:w-[72px] max-[767px]:h-[72px] bg-cover bg-center bg-no-repeat rounded-[12px] max-[767px]:rounded-[8px]"
            style={{ backgroundImage: `url(${thumbnailImage})` }}
          />
        </div>

        {/* Content area (right side) */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 mb-3 max-[767px]:mb-2 min-h-[22px] pr-10 max-[767px]:pr-0">
            {isDashboard && (
              course.published ? (
                <span className="text-[12px] leading-[14px] text-[#1B2126] whitespace-nowrap px-3 h-[22px] flex items-center rounded-full border border-[#4BD0A0] bg-[#d4f6ec] box-border">
                  {t('courses.published')}
                </span>
              ) : (
                <span className="text-[12px] leading-[14px] text-[#1B2126] whitespace-nowrap px-3 h-[22px] flex items-center rounded-full border border-[#ffd401] bg-[#fff8d4] box-border">
                  {t('courses.unpublished')}
                </span>
              )
            )}
            <span className="text-[12px] leading-[14px] text-[#000] whitespace-nowrap px-3 h-[22px] flex items-center rounded-full border border-[#ccc] box-border">
              {t('courses.course', 'Course')}
            </span>
          </div>

          {/* Course title */}
          <h3 className="text-[20px] max-[767px]:text-[16px] font-semibold leading-[26px] max-[767px]:leading-[20px] text-[#000] mb-1 max-w-[640px] group-hover:text-[#4BD0A0] transition-colors line-clamp-2">
            {course.name}
          </h3>

          {/* Description / Duration */}
          {course.description && (
            <p className="text-[14px] max-[767px]:text-[12px] leading-[20px] max-[767px]:leading-[16px] text-[#8e8e8e] max-w-[400px] line-clamp-2 max-[767px]:line-clamp-1 mb-0">
              {course.description}
            </p>
          )}
        </div>
      </Link>

      {/* Bottom section with authors and date */}
      <div className="px-5 max-[767px]:px-4 py-3 relative">
        <div className="absolute left-5 max-[767px]:left-4 right-5 max-[767px]:right-4 top-0 h-[1px] bg-[#ccc]/30" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {displayedAuthors.length > 0 && (
              <div className="flex -space-x-2 items-center">
                {displayedAuthors.map((author, index) => (
                  <div 
                    key={author.user.user_uuid} 
                    className="relative"
                    style={{ zIndex: displayedAuthors.length - index }}
                  >
                    <UserAvatar
                      border="border-2"
                      rounded="rounded-full"
                      avatar_url={author.user.avatar_image ? getUserAvatarMediaDirectory(author.user.user_uuid, author.user.avatar_image) : ''}
                      predefined_avatar={author.user.avatar_image ? undefined : 'empty'}
                      width={24}
                      showProfilePopup={true}
                      userId={author.user.id}
                    />
                  </div>
                ))}
                {hasMoreAuthors && (
                  <div className="relative z-0">
                    <div className="flex items-center justify-center w-[24px] h-[24px] text-[9px] font-bold text-[#8e8e8e] bg-[#f5f5f5] border-2 border-white rounded-full">
                      +{remainingAuthorsCount}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {course.update_date && (
              <span className="text-[12px] font-medium text-[#8e8e8e]">
                {new Date(course.update_date).toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            )}
          </div>
          
          <Link
            prefetch={false}
            href={courseLink}
            onClick={handleCardOpen}
            className="text-[12px] font-semibold text-[#8e8e8e] hover:text-[#4BD0A0] transition-colors"
          >
            {t('courses.start_learning')}
          </Link>
        </div>
      </div>
    </div>
  )
}

const AdminEditOptions = ({ course, orgSlug, deleteCourse, cloneCourse, exportCourse, isDashboard = false }: {
  course: Course
  orgSlug: string
  deleteCourse: () => Promise<void>
  cloneCourse: () => Promise<void>
  exportCourse: () => Promise<void>
  isDashboard?: boolean
}) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)
  const [accessOpen, setAccessOpen] = React.useState(false)

  return (
    <AuthenticatedClientElement
      action="update"
      ressourceType="courses"
      checkMethod="roles"
      orgId={course.org_id}
    >
      <div className={`absolute top-2 right-2 z-20 transition-opacity ${
        isDashboard && !isOpen ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
      }`}>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <button aria-label="Course actions"className="p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-md">
              <MoreVertical size={18} className="text-gray-700" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuItem asChild>
              <Link prefetch={false} href={getUriWithOrg(orgSlug, `/dash/courses/course/${removeCoursePrefix(course.course_uuid)}/content`)} className="flex items-center cursor-pointer">
                <FilePenLine className="mr-2 h-4 w-4" /> {t('courses.edit_content')}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link prefetch={false} href={getUriWithOrg(orgSlug, `/dash/courses/course/${removeCoursePrefix(course.course_uuid)}/general`)} className="flex items-center cursor-pointer">
                <Settings2 className="mr-2 h-4 w-4" /> {t('common.settings')}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <ConfirmationModal
                confirmationButtonText={t('courses.clone_course')}
                confirmationMessage={t('courses.clone_course_confirm')}
                dialogTitle={t('courses.clone_course_title', { name: course.name })}
                dialogTrigger={
                  <button className="w-full text-left flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                    <Copy className="mr-2 h-4 w-4" /> {t('courses.clone_course')}
                  </button>
                }
                functionToExecute={cloneCourse}
                status="info"
              />
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                onClick={exportCourse}
                className="w-full text-left flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Download className="mr-2 h-4 w-4" /> {t('courses.export_course')}
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                onClick={() => setAccessOpen(true)}
                className="w-full text-left flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Lock className="mr-2 h-4 w-4" /> {t('library.manage_access')}
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <ConfirmationModal
                confirmationButtonText={t('courses.delete_course')}
                confirmationMessage={t('courses.delete_course_confirm')}
                dialogTitle={t('courses.delete_course_title', { name: course.name })}
                dialogTrigger={
                  <button className="w-full text-left flex items-center px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
                    <BookMinus className="mr-2 h-4 w-4" /> {t('courses.delete_course')}
                  </button>
                }
                functionToExecute={deleteCourse}
                status="warning"
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Modal
          isDialogOpen={accessOpen}
          onOpenChange={setAccessOpen}
          minHeight="no-min"
          minWidth="md"
          dialogTitle={t('library.manage_access')}
          dialogContent={
            <ManageAccessPopover
              resource_uuid={course.course_uuid}
              resourceType="courses"
              orgslug={orgSlug}
            />
          }
        />
      </div>
    </AuthenticatedClientElement>
  )
}

export default CourseThumbnail
