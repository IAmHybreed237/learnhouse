'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLHSession } from '@components/Contexts/LHSessionContext'
import { useOrg } from '@components/Contexts/OrgContext'
import { useTrail } from '@/hooks/queries/useTrail'
import { useCourses } from '@/hooks/queries/useCourses'
import { useAssignments } from '@/hooks/queries/useAssignments'
import { useStudentSchedule } from '@/hooks/queries/useSchedules'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/lib/query/keys'
import { getAllUserCertificates } from '@services/courses/certifications'
import { asArray } from '@services/utils/ts/requests'
import { getUriWithOrg } from '@services/config/config'
import { getCourseThumbnailMediaDirectory } from '@services/media/media'
import { updateProfile } from '@services/settings/profile'
import { updatePassword } from '@services/settings/password'
import { updateUserAvatar } from '@services/users/users'
import { signOut } from '@components/Contexts/AuthContext'
import { toast } from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import UserAvatar from '@components/Objects/UserAvatar'
import {
  LayoutGrid,
  BookOpen,
  Award,
  Calendar,
  ClipboardList,
  Settings,
  Bell,
  LogOut,
  TrendingUp,
  Clock,
  ArrowRight,
  Sparkles,
  Compass,
  Upload,
  Save,
  Lock,
  User as UserIcon,
  AlertTriangle,
} from 'lucide-react'

type SidebarSection =
  | 'overview'
  | 'my-courses'
  | 'recommended'
  | 'assignments'
  | 'certificates'
  | 'schedule'
  | 'settings'

interface MyLearningClientProps {
  orgslug: string
}

export default function MyLearningClient({ orgslug }: MyLearningClientProps) {
  const session = useLHSession() as any
  const org = useOrg() as any
  const router = useRouter()
  const access_token = session?.data?.tokens?.access_token
  const isAuthenticated = session?.status === 'authenticated'
  const isLoading = session?.status === 'loading'
  const orgId = org?.id

  const [activeSection, setActiveSection] = useState<SidebarSection>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace(getUriWithOrg(orgslug, '/login'))
    }
  }, [isLoading, isAuthenticated, router, orgslug])

  // Fetch trail data (courses in progress)
  const { data: trail } = useTrail(orgId)

  // Fetch all org courses (for recommended section)
  const { data: allCoursesData } = useCourses(orgslug)
  const allCourses: any[] = allCoursesData || []

  // Fetch assignments
  const { data: assignmentsData } = useAssignments(orgId)
  const assignments: any[] = assignmentsData || []

  // Fetch student schedule
  const { data: scheduleData } = useStudentSchedule(orgId)
  const schedule: any[] = scheduleData || []

  // Fetch certificates
  const { data: certificatesData } = useQuery({
    queryKey: queryKeys.certifications.detail(`user_all_${orgId}`),
    queryFn: () => getAllUserCertificates(orgId, access_token),
    select: (res: any) => asArray(res),
    enabled: !!access_token && !!orgId,
    staleTime: 60_000,
  })

  const trailRuns: any[] = trail?.runs ?? []
  const certificates: any[] = certificatesData ?? []

  // Compute stats
  const coursesInProgress = trailRuns.filter((run: any) => {
    const progress =
      run.course_total_steps > 0
        ? Math.round((run.steps.length / run.course_total_steps) * 100)
        : 0
    return progress < 100
  }).length

  const coursesCompleted = trailRuns.filter((run: any) => {
    const progress =
      run.course_total_steps > 0
        ? Math.round((run.steps.length / run.course_total_steps) * 100)
        : 0
    return progress >= 100
  }).length

  const totalCourses = trailRuns.length
  const totalCertificates = certificates.length

  const showLoader = isLoading || !isAuthenticated

  const sidebarItems: { id: SidebarSection; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutGrid size={20} /> },
    { id: 'my-courses', label: 'My Courses', icon: <BookOpen size={20} />, badge: totalCourses },
    { id: 'recommended', label: 'Recommended', icon: <Compass size={20} /> },
    { id: 'assignments', label: 'Assignments', icon: <ClipboardList size={20} />, badge: assignments.filter((a: any) => !a.completed).length || undefined },
    { id: 'certificates', label: 'Certificates', icon: <Award size={20} />, badge: totalCertificates },
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e5e5e5] h-[64px] flex items-center px-5 max-[767px]:px-3">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="min-[1024px]:hidden mr-3 p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Logo / breadcrumb */}
        <Link
          href={getUriWithOrg(orgslug, '/')}
          className="flex items-center gap-2 mr-auto"
        >
          {org?.logo_image ? (
            <img
              src={`/api/v1/media/org/${org?.org_uuid}/logo/${org?.logo_image}`}
              alt={org?.name || 'Logo'}
              className="h-[22px] object-contain"
            />
          ) : (
            <span className="text-[18px] font-bold text-[#1B2126]">
              {org?.name || 'LearnHouse'}
            </span>
          )}
        </Link>

        {/* Page title */}
        <span className="text-[16px] font-semibold text-[#1B2126] mr-auto min-[1024px]:mr-0">
          My Learning
        </span>

        {/* Right side: notifications + avatar */}
        <div className="flex items-center gap-3 ml-auto">
          <button className="relative p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors">
            <Bell size={20} className="text-[#8e8e8e]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#4BD0A0] rounded-full" />
          </button>
          {isAuthenticated && (
            <UserAvatar border="border-2" rounded="rounded-full" width={32} />
          )}
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 min-[1024px]:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed min-[1024px]:sticky top-[64px] left-0 z-40 w-[260px] h-[calc(100vh-64px)] bg-white border-r border-[#e5e5e5] flex flex-col transition-transform duration-200 min-[1024px]:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* User info block */}
          <div className="p-5 border-b border-[#e5e5e5]">
            <div className="flex items-center gap-3">
              {isAuthenticated && (
                <UserAvatar border="border-2" rounded="rounded-full" width={40} />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-[#1B2126] truncate capitalize">
                  {session?.data?.user?.first_name} {session?.data?.user?.last_name}
                </p>
                <p className="text-[12px] text-[#8e8e8e] truncate">
                  {session?.data?.user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 overflow-y-auto">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setSidebarOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-[14px] font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#1B2126] text-white'
                      : 'text-[#1B2126] hover:bg-[#f5f5f5]'
                  }`}
                >
                  <span className={activeSection === item.id ? 'text-white' : 'text-[#8e8e8e]'}>
                    {item.icon}
                  </span>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        activeSection === item.id
                          ? 'bg-white/20 text-white'
                          : 'bg-[#e6e9ef] text-[#1B2126]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Bottom: back to site */}
          <div className="p-3 border-t border-[#e5e5e5]">
            <Link
              href={getUriWithOrg(orgslug, '/courses')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-[14px] font-medium text-[#8e8e8e] hover:bg-[#f5f5f5] transition-colors"
            >
              <ArrowRight size={20} className="rotate-180" />
              <span>Browse Courses</span>
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-[1024px]:ml-0 p-5 max-[767px]:p-3 max-w-[1100px] mx-auto w-full">
          {showLoader ? (
            <DashboardSkeleton />
          ) : activeSection === 'overview' ? (
            <OverviewSection
              orgslug={orgslug}
              org={org}
              trailRuns={trailRuns}
              certificates={certificates}
              coursesInProgress={coursesInProgress}
              coursesCompleted={coursesCompleted}
              totalCourses={totalCourses}
              totalCertificates={totalCertificates}
              onNavigate={setActiveSection}
            />
          ) : activeSection === 'my-courses' ? (
            <MyCoursesSection orgslug={orgslug} org={org} trailRuns={trailRuns} />
          ) : activeSection === 'recommended' ? (
            <RecommendedSection orgslug={orgslug} org={org} allCourses={allCourses} trailRuns={trailRuns} />
          ) : activeSection === 'certificates' ? (
            <CertificatesSection orgslug={orgslug} org={org} certificates={certificates} />
          ) : activeSection === 'assignments' ? (
            <AssignmentsSection orgslug={orgslug} assignments={assignments} />
          ) : activeSection === 'schedule' ? (
            <ScheduleSection orgslug={orgslug} schedule={schedule} />
          ) : activeSection === 'settings' ? (
            <SettingsSection orgslug={orgslug} />
          ) : (
            <ComingSoonSection section={activeSection} />
          )}
        </main>
      </div>
    </div>
  )
}

// --- Overview Section ---

function OverviewSection({
  orgslug,
  org,
  trailRuns,
  certificates,
  coursesInProgress,
  coursesCompleted,
  totalCourses,
  totalCertificates,
  onNavigate,
}: {
  orgslug: string
  org: any
  trailRuns: any[]
  certificates: any[]
  coursesInProgress: number
  coursesCompleted: number
  totalCourses: number
  totalCertificates: number
  onNavigate: (section: SidebarSection) => void
}) {
  const user = (useLHSession() as any)?.data?.user
  const firstName = user?.first_name || 'there'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  // Continue learning — sort by least progress first (most actionable)
  const continueLearning = [...trailRuns]
    .map((run) => {
      const progress =
        run.course_total_steps > 0
          ? Math.round((run.steps.length / run.course_total_steps) * 100)
          : 0
      return { ...run, progress }
    })
    .filter((r) => r.progress < 100)
    .sort((a, b) => a.progress - b.progress)
    .slice(0, 3)

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-[28px] max-[767px]:text-[22px] font-bold text-[#1B2126] leading-tight">
          {greeting}, {firstName}!
        </h1>
        <p className="text-[15px] text-[#8e8e8e] mt-1">
          Here's an overview of your learning progress.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 min-[768px]:grid-cols-4 gap-4">
        <StatCard
          icon={<BookOpen size={20} />}
          label="In Progress"
          value={coursesInProgress}
          color="bg-[#4BD0A0]"
          onClick={() => onNavigate('my-courses')}
        />
        <StatCard
          icon={<TrendingUp size={20} />}
          label="Completed"
          value={coursesCompleted}
          color="bg-[#27292d]"
          onClick={() => onNavigate('my-courses')}
        />
        <StatCard
          icon={<Award size={20} />}
          label="Certificates"
          value={totalCertificates}
          color="bg-[#f59e0b]"
          onClick={() => onNavigate('certificates')}
        />
        <StatCard
          icon={<Clock size={20} />}
          label="Total Courses"
          value={totalCourses}
          color="bg-[#6366f1]"
          onClick={() => onNavigate('my-courses')}
        />
      </div>

      {/* Continue Learning */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-bold text-[#1B2126]">Continue Learning</h2>
          {totalCourses > 3 && (
            <button
              onClick={() => onNavigate('my-courses')}
              className="text-[14px] font-medium text-[#4BD0A0] hover:underline"
            >
              View all
            </button>
          )}
        </div>

        {continueLearning.length === 0 ? (
          <EmptyState
            icon={<BookOpen size={32} />}
            title="No courses in progress"
            message="Start a course from the catalog to see it here."
            actionLabel="Browse Courses"
            actionHref={getUriWithOrg(orgslug, '/courses')}
          />
        ) : (
          <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 gap-5">
            {continueLearning.map((run) => (
              <ContinueLearningCard key={run.course.course_uuid} run={run} orgslug={orgslug} org={org} />
            ))}
          </div>
        )}
      </div>

      {/* Recent Certificates */}
      {certificates.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] font-bold text-[#1B2126]">Recent Certificates</h2>
            <button
              onClick={() => onNavigate('certificates')}
              className="text-[14px] font-medium text-[#4BD0A0] hover:underline"
            >
              View all
            </button>
          </div>
          <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 gap-5">
            {certificates.slice(0, 3).map((cert) => (
              <CertificateCard key={cert.certificate_user.user_certification_uuid} certificate={cert} orgslug={orgslug} org={org} />
            ))}
          </div>
        </div>
      )}

      {/* Recommended */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-bold text-[#1B2126]">Recommended for You</h2>
        </div>
        <div className="bg-white rounded-[16px] p-6 border border-[#e5e5e5] flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-[#d4f6ec] flex-shrink-0">
            <Sparkles size={24} className="text-[#4BD0A0]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[16px] font-semibold text-[#1B2126]">Explore new courses</h3>
            <p className="text-[14px] text-[#8e8e8e] mt-0.5">
              Discover courses that match your interests and goals.
            </p>
          </div>
          <button
            onClick={() => onNavigate('recommended')}
            className="flex-shrink-0 px-5 py-2.5 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] font-semibold text-[14px] rounded-[8px] transition-colors"
          >
            Browse
          </button>
        </div>
      </div>
    </div>
  )
}

// --- My Courses Section ---

function MyCoursesSection({ orgslug, org, trailRuns }: { orgslug: string; org: any; trailRuns: any[] }) {
  const [filter, setFilter] = useState<'all' | 'in-progress' | 'completed'>('all')

  const coursesWithProgress = trailRuns.map((run) => {
    const progress =
      run.course_total_steps > 0
        ? Math.round((run.steps.length / run.course_total_steps) * 100)
        : 0
    return { ...run, progress }
  })

  const filtered = coursesWithProgress.filter((c) => {
    if (filter === 'in-progress') return c.progress < 100
    if (filter === 'completed') return c.progress >= 100
    return true
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-[#1B2126]">My Courses</h1>
        <p className="text-[14px] text-[#8e8e8e] mt-1">
          All courses you are currently learning.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {(['all', 'in-progress', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-colors ${
              filter === f
                ? 'bg-[#1B2126] text-white'
                : 'bg-white text-[#1B2126] border border-[#e5e5e5] hover:border-[#1B2126]'
            }`}
          >
            {f === 'all' ? 'All' : f === 'in-progress' ? 'In Progress' : 'Completed'}
            <span className="ml-2 text-[12px] opacity-70">
              {f === 'all'
                ? coursesWithProgress.length
                : f === 'in-progress'
                ? coursesWithProgress.filter((c) => c.progress < 100).length
                : coursesWithProgress.filter((c) => c.progress >= 100).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<BookOpen size={32} />}
          title={filter === 'all' ? 'No courses yet' : `No ${filter.replace('-', ' ')} courses`}
          message="Start a course from the catalog to see it here."
          actionLabel="Browse Courses"
          actionHref={getUriWithOrg(orgslug, '/courses')}
        />
      ) : (
        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 gap-5">
          {filtered.map((run) => (
            <ContinueLearningCard key={run.course.course_uuid} run={run} orgslug={orgslug} org={org} />
          ))}
        </div>
      )}
    </div>
  )
}

// --- Certificates Section ---

function CertificatesSection({ orgslug, org, certificates }: { orgslug: string; org: any; certificates: any[] }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-[#1B2126]">My Certificates</h1>
        <p className="text-[14px] text-[#8e8e8e] mt-1">
          Certificates you have earned by completing courses.
        </p>
      </div>

      {certificates.length === 0 ? (
        <EmptyState
          icon={<Award size={32} />}
          title="No certificates yet"
          message="Complete a course to earn your first certificate."
          actionLabel="Browse Courses"
          actionHref={getUriWithOrg(orgslug, '/courses')}
        />
      ) : (
        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <CertificateCard key={cert.certificate_user.user_certification_uuid} certificate={cert} orgslug={orgslug} org={org} />
          ))}
        </div>
      )}
    </div>
  )
}

// --- Recommended Section ---

function RecommendedSection({
  orgslug,
  org,
  allCourses,
  trailRuns,
}: {
  orgslug: string
  org: any
  allCourses: any[]
  trailRuns: any[]
}) {
  const [searchQuery, setSearchQuery] = useState('')

  // Get UUIDs of courses the student is already learning
  const trailCourseUuids = new Set(trailRuns.map((r: any) => r.course.course_uuid))

  // Filter out trail courses, then apply search
  const recommended = allCourses
    .filter((course: any) => !trailCourseUuids.has(course.course_uuid))
    .filter((course: any) => {
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      return (
        course.name?.toLowerCase().includes(q) ||
        course.description?.toLowerCase().includes(q)
      )
    })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-[#1B2126]">Recommended Courses</h1>
        <p className="text-[14px] text-[#8e8e8e] mt-1">
          Courses you haven't started yet. Find your next learning path.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-[480px]">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e8e8e]"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search courses..."
          className="w-full h-[44px] pl-12 pr-4 bg-white rounded-[12px] border border-[#e5e5e5] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#4BD0A0] focus:ring-1 focus:ring-[#4BD0A0] transition-colors"
        />
      </div>

      {recommended.length === 0 ? (
        <EmptyState
          icon={<Compass size={32} />}
          title={searchQuery.trim() ? 'No courses found' : 'No new courses to recommend'}
          message={
            searchQuery.trim()
              ? 'Try a different search term.'
              : 'You are already enrolled in all available courses. Check back later for new content!'
          }
          actionLabel={!searchQuery.trim() ? 'Browse Full Catalog' : undefined}
          actionHref={!searchQuery.trim() ? getUriWithOrg(orgslug, '/courses') : undefined}
        />
      ) : (
        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 gap-5">
          {recommended.map((course: any) => (
            <RecommendedCourseCard key={course.course_uuid} course={course} orgslug={orgslug} org={org} />
          ))}
        </div>
      )}
    </div>
  )
}

function RecommendedCourseCard({ course, orgslug, org }: { course: any; orgslug: string; org: any }) {
  const courseId = course.course_uuid.replace('course_', '')
  const courseLink = getUriWithOrg(orgslug, '/course/' + courseId)

  return (
    <Link
      href={courseLink}
      className="group bg-white rounded-[16px] overflow-hidden border border-[#e5e5e5] hover:shadow-lg transition-all w-full block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-[#f5f5f5]">
        {course.thumbnail_image && org?.org_uuid ? (
          <img
            src={getCourseThumbnailMediaDirectory(org.org_uuid, course.course_uuid, course.thumbnail_image)}
            alt={course.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-[#ccc]">
            <BookOpen size={40} strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[16px] font-semibold text-[#1B2126] leading-tight line-clamp-1 group-hover:text-black transition-colors">
          {course.name}
        </h3>
        <p className="text-[13px] text-[#8e8e8e] mt-1 line-clamp-2">
          {course.description || 'No description available'}
        </p>
        {course.tags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {(Array.isArray(course.tags) ? course.tags : course.tags?.split(',') || [])
              .slice(0, 3)
              .map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#f5f5f5] text-[#8e8e8e]"
                >
                  {tag.trim()}
                </span>
              ))}
          </div>
        )}
        <div className="mt-3 flex items-center justify-between border-t border-[#f0f0f0] pt-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e8e]">
            Not Started
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4BD0A0] group-hover:underline">
            Start Course
          </span>
        </div>
      </div>
    </Link>
  )
}

// --- Coming Soon Section ---

function ComingSoonSection({ section }: { section: string }) {
  const labels: Record<string, string> = {
    settings: 'Settings',
  }
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#e6e9ef] mb-4">
        <Clock size={32} className="text-[#8e8e8e]" />
      </div>
      <h2 className="text-[20px] font-bold text-[#1B2126]">{labels[section] || section}</h2>
      <p className="text-[14px] text-[#8e8e8e] mt-2">This section is coming soon.</p>
    </div>
  )
}

// --- Schedule Section ---

const WEEKDAYS = [
  { num: 1, short: 'Mon', full: 'Monday' },
  { num: 2, short: 'Tue', full: 'Tuesday' },
  { num: 3, short: 'Wed', full: 'Wednesday' },
  { num: 4, short: 'Thu', full: 'Thursday' },
  { num: 5, short: 'Fri', full: 'Friday' },
  { num: 6, short: 'Sat', full: 'Saturday' },
  { num: 7, short: 'Sun', full: 'Sunday' },
]

const ENTRY_TYPE_COLORS: Record<string, { bg: string; text: string; border: string; label: string }> = {
  LIVE_SESSION: { bg: 'bg-[#d4f6ec]', text: 'text-[#0d9488]', border: 'border-[#4BD0A0]', label: 'Live' },
  VIDEO_CALL: { bg: 'bg-[#dbeafe]', text: 'text-[#2563eb]', border: 'border-[#3b82f6]', label: 'Video' },
  IN_PERSON: { bg: 'bg-[#fef3c7]', text: 'text-[#d97706]', border: 'border-[#f59e0b]', label: 'In-Person' },
  SELF_STUDY: { bg: 'bg-[#f3e8ff]', text: 'text-[#7c3aed]', border: 'border-[#8b5cf6]', label: 'Self-Study' },
  EXAM: { bg: 'bg-[#fee2e2]', text: 'text-[#dc2626]', border: 'border-[#ef4444]', label: 'Exam' },
  DEADLINE: { bg: 'bg-[#fee2e2]', text: 'text-[#dc2626]', border: 'border-[#ef4444]', label: 'Deadline' },
}

function ScheduleSection({ orgslug, schedule }: { orgslug: string; schedule: any[] }) {
  const [view, setView] = useState<'week' | 'list'>('week')

  // Separate recurring (weekly) and one-time events
  const recurring = schedule.filter((s) => s.is_recurring && s.weekday != null)
  const oneTime = schedule.filter((s) => !s.is_recurring || s.weekday == null)

  // Group recurring by weekday
  const byWeekday: Record<number, any[]> = {}
  recurring.forEach((s) => {
    const day = s.weekday
    if (!byWeekday[day]) byWeekday[day] = []
    byWeekday[day].push(s)
  })
  // Sort each day by start_time
  Object.values(byWeekday).forEach((items) => items.sort((a, b) => (a.start_time || '').localeCompare(b.start_time || '')))

  // Sort one-time events by scheduled_at
  const sortedOneTime = [...oneTime].sort((a, b) => (a.scheduled_at || '').localeCompare(b.scheduled_at || ''))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-[24px] font-bold text-[#1B2126]">Schedule</h1>
          <p className="text-[14px] text-[#8e8e8e] mt-1">
            Your weekly timetable and upcoming sessions.
          </p>
        </div>
        {/* View toggle */}
        <div className="flex gap-1 bg-white border border-[#e5e5e5] rounded-[8px] p-1">
          <button
            onClick={() => setView('week')}
            className={`px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors ${
              view === 'week' ? 'bg-[#1B2126] text-white' : 'text-[#1B2126] hover:bg-[#f5f5f5]'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors ${
              view === 'list' ? 'bg-[#1B2126] text-white' : 'text-[#1B2126] hover:bg-[#f5f5f5]'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {schedule.length === 0 ? (
        <EmptyState
          icon={<Calendar size={32} />}
          title="No scheduled sessions yet"
          message="Your course timetable will appear here once your instructor schedules sessions."
          actionLabel="Browse Courses"
          actionHref={getUriWithOrg(orgslug, '/courses')}
        />
      ) : view === 'week' ? (
        /* Weekly timetable grid */
        <div className="space-y-4">
          {/* Recurring weekly schedule */}
          <div className="bg-white rounded-[16px] border border-[#e5e5e5] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#f0f0f0] bg-[#fafafa]">
              <Calendar size={18} className="text-[#8e8e8e]" />
              <h2 className="text-[16px] font-semibold text-[#1B2126]">Weekly Timetable</h2>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-7 min-w-[700px]">
                {WEEKDAYS.map((day) => {
                  const items = byWeekday[day.num] || []
                  const hasItems = items.length > 0
                  return (
                    <div key={day.num} className={`border-r border-[#f0f0f0] last:border-r-0 ${hasItems ? '' : 'min-h-[120px]'}`}>
                      {/* Day header */}
                      <div className={`px-2 py-3 text-center border-b border-[#f0f0f0] ${day.num === new Date().getDay() || (day.num === 7 && new Date().getDay() === 0) ? 'bg-[#d4f6ec]' : 'bg-[#fafafa]'}`}>
                        <p className="text-[13px] font-bold text-[#1B2126]">{day.short}</p>
                      </div>
                      {/* Sessions */}
                      <div className="p-1.5 space-y-1.5 min-h-[100px]">
                        {items.map((s) => {
                          const colors = ENTRY_TYPE_COLORS[s.entry_type] || ENTRY_TYPE_COLORS.LIVE_SESSION
                          return (
                            <ScheduleBlock key={s.schedule_uuid} entry={s} orgslug={orgslug} colors={colors} compact />
                          )
                        })}
                        {items.length === 0 && (
                          <div className="flex items-center justify-center h-[60px]">
                            <span className="text-[11px] text-[#ccc]">—</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* One-time events */}
          {sortedOneTime.length > 0 && (
            <div className="bg-white rounded-[16px] border border-[#e5e5e5] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#f0f0f0] bg-[#fafafa]">
                <Clock size={18} className="text-[#8e8e8e]" />
                <h2 className="text-[16px] font-semibold text-[#1B2126]">Upcoming Sessions</h2>
              </div>
              <div className="p-4 space-y-2">
                {sortedOneTime.map((s) => (
                  <ScheduleRow key={s.schedule_uuid} entry={s} orgslug={orgslug} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* List view */
        <div className="space-y-4">
          {recurring.length > 0 && (
            <div className="bg-white rounded-[16px] border border-[#e5e5e5] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#f0f0f0] bg-[#fafafa]">
                <Calendar size={18} className="text-[#8e8e8e]" />
                <h2 className="text-[16px] font-semibold text-[#1B2126]">Recurring Sessions</h2>
              </div>
              <div className="p-4 space-y-2">
                {recurring
                  .sort((a, b) => (a.weekday - b.weekday) || (a.start_time || '').localeCompare(b.start_time || ''))
                  .map((s) => (
                    <ScheduleRow key={s.schedule_uuid} entry={s} orgslug={orgslug} />
                  ))}
              </div>
            </div>
          )}
          {sortedOneTime.length > 0 && (
            <div className="bg-white rounded-[16px] border border-[#e5e5e5] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#f0f0f0] bg-[#fafafa]">
                <Clock size={18} className="text-[#8e8e8e]" />
                <h2 className="text-[16px] font-semibold text-[#1B2126]">Upcoming Sessions</h2>
              </div>
              <div className="p-4 space-y-2">
                {sortedOneTime.map((s) => (
                  <ScheduleRow key={s.schedule_uuid} entry={s} orgslug={orgslug} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      {schedule.length > 0 && (
        <div className="flex flex-wrap gap-3 px-1">
          {Object.entries(ENTRY_TYPE_COLORS).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={`w-3 h-3 rounded ${val.bg} border ${val.border}`} />
              <span className="text-[12px] text-[#8e8e8e]">{val.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ScheduleBlock({ entry, orgslug, colors, compact }: { entry: any; orgslug: string; colors: any; compact?: boolean }) {
  const courseId = entry.course_uuid?.replace('course_', '')
  const link = courseId ? getUriWithOrg(orgslug, '/course/' + courseId) : '#'

  const content = (
    <div className={`rounded-[8px] border-l-2 ${colors.border} ${colors.bg} p-2 hover:shadow-sm transition-all cursor-pointer`}>
      <p className={`text-[11px] font-bold ${colors.text} leading-tight`}>
        {entry.start_time}
        {entry.end_time ? `-${entry.end_time}` : ''}
      </p>
      <p className="text-[11px] font-medium text-[#1B2126] leading-tight mt-0.5 line-clamp-2">
        {entry.title}
      </p>
      {!compact && (
        <p className="text-[10px] text-[#8e8e8e] mt-0.5 truncate">{entry.course_name}</p>
      )}
    </div>
  )

  return link !== '#' ? (
    <Link href={link} className="block">{content}</Link>
  ) : (
    content
  )
}

function ScheduleRow({ entry, orgslug }: { entry: any; orgslug: string }) {
  const courseId = entry.course_uuid?.replace('course_', '')
  const link = courseId ? getUriWithOrg(orgslug, '/course/' + courseId) : '#'
  const colors = ENTRY_TYPE_COLORS[entry.entry_type] || ENTRY_TYPE_COLORS.LIVE_SESSION

  const weekdayName = entry.weekday ? WEEKDAYS.find((d) => d.num === entry.weekday)?.short : null
  const dateStr = entry.scheduled_at
    ? new Date(entry.scheduled_at).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    : null

  return (
    <Link
      href={link}
      className="group flex items-center gap-4 bg-white rounded-[12px] border border-[#e5e5e5] hover:border-[#1B2126] px-4 py-3 transition-colors"
    >
      {/* Time/date block */}
      <div className="flex flex-col items-center justify-center w-16 flex-shrink-0">
        {weekdayName ? (
          <>
            <span className="text-[11px] font-bold uppercase text-[#8e8e8e]">{weekdayName}</span>
            <span className="text-[15px] font-bold text-[#1B2126]">{entry.start_time}</span>
          </>
        ) : dateStr ? (
          <>
            <span className="text-[11px] font-medium text-[#8e8e8e]">{dateStr.split(',')[0]}</span>
            <span className="text-[14px] font-bold text-[#1B2126]">{entry.start_time || 'TBD'}</span>
          </>
        ) : (
          <span className="text-[14px] font-bold text-[#1B2126]">{entry.start_time || 'TBD'}</span>
        )}
      </div>

      {/* Type badge */}
      <div className={`flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 ${colors.bg}`}>
        <span className={`text-[10px] font-bold ${colors.text}`}>{colors.label[0]}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-medium text-[#1B2126] truncate group-hover:text-black transition-colors">
          {entry.title}
        </h3>
        <p className="text-[12px] text-[#8e8e8e] mt-0.5 truncate">
          {entry.course_name}
          {entry.location ? ` · ${entry.location}` : ''}
        </p>
      </div>

      {/* Meeting link */}
      {entry.meeting_url && (
        <span
          onClick={(e) => { e.preventDefault(); window.open(entry.meeting_url, '_blank') }}
          className="text-[12px] font-medium text-[#4BD0A0] hover:underline flex-shrink-0"
        >
          Join
        </span>
      )}

      <ArrowRight size={16} className="text-[#8e8e8e] group-hover:text-[#1B2126] transition-colors flex-shrink-0" />
    </Link>
  )
}

// --- Assignments Section ---

function AssignmentsSection({ orgslug, assignments }: { orgslug: string; assignments: any[] }) {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')

  const filtered = assignments.filter((a) => {
    if (filter === 'pending') return !a.completed
    if (filter === 'completed') return a.completed
    return true
  })

  const pendingCount = assignments.filter((a) => !a.completed).length
  const completedCount = assignments.filter((a) => a.completed).length

  // Group by course
  const grouped: Record<string, { courseName: string; courseUuid: string; items: any[] }> = {}
  filtered.forEach((a) => {
    const key = a.course_uuid
    if (!grouped[key]) {
      grouped[key] = { courseName: a.course_name, courseUuid: a.course_uuid, items: [] }
    }
    grouped[key].items.push(a)
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-[#1B2126]">Assignments</h1>
        <p className="text-[14px] text-[#8e8e8e] mt-1">
          All assignments from your enrolled courses, with completion status.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {(['all', 'pending', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-colors ${
              filter === f
                ? 'bg-[#1B2126] text-white'
                : 'bg-white text-[#1B2126] border border-[#e5e5e5] hover:border-[#1B2126]'
            }`}
          >
            {f === 'all' ? 'All' : f === 'pending' ? 'Pending' : 'Completed'}
            <span className="ml-2 text-[12px] opacity-70">
              {f === 'all' ? assignments.length : f === 'pending' ? pendingCount : completedCount}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<ClipboardList size={32} />}
          title={filter === 'all' ? 'No assignments yet' : `No ${filter} assignments`}
          message="Assignments from your enrolled courses will appear here."
          actionLabel="Browse Courses"
          actionHref={getUriWithOrg(orgslug, '/courses')}
        />
      ) : (
        <div className="space-y-6">
          {Object.values(grouped).map((group) => (
            <div key={group.courseUuid}>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-[#8e8e8e]" />
                <Link
                  href={getUriWithOrg(orgslug, '/course/' + group.courseUuid.replace('course_', ''))}
                  className="text-[16px] font-semibold text-[#1B2126] hover:text-[#4BD0A0] transition-colors"
                >
                  {group.courseName}
                </Link>
                <span className="text-[12px] text-[#8e8e8e]">
                  ({group.items.filter((i) => i.completed).length}/{group.items.length})
                </span>
              </div>
              <div className="space-y-2">
                {group.items.map((assignment) => (
                  <AssignmentRow key={assignment.activity_uuid} assignment={assignment} orgslug={orgslug} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function AssignmentRow({ assignment, orgslug }: { assignment: any; orgslug: string }) {
  const courseId = assignment.course_uuid.replace('course_', '')
  const activityLink = getUriWithOrg(orgslug, `/course/${courseId}/activity/${assignment.activity_uuid}`)

  return (
    <Link
      href={activityLink}
      className="group flex items-center gap-4 bg-white rounded-[12px] border border-[#e5e5e5] hover:border-[#1B2126] px-4 py-3 transition-colors"
    >
      {/* Status icon */}
      <div
        className={`flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 ${
          assignment.completed ? 'bg-[#d4f6ec]' : 'bg-[#fef3c7]'
        }`}
      >
        {assignment.completed ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4BD0A0" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <ClipboardList size={18} className="text-[#f59e0b]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-medium text-[#1B2126] truncate group-hover:text-black transition-colors">
          {assignment.activity_name}
        </h3>
        <p className="text-[12px] text-[#8e8e8e] mt-0.5">
          {assignment.activity_sub_type?.replace('SUBTYPE_ASSIGNMENT_', '').replace('_', ' ') || 'Assignment'}
        </p>
      </div>

      {/* Status badge */}
      <span
        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0 ${
          assignment.completed
            ? 'bg-[#d4f6ec] text-[#4BD0A0]'
            : 'bg-[#fef3c7] text-[#f59e0b]'
        }`}
      >
        {assignment.completed ? 'Done' : 'Pending'}
      </span>

      <ArrowRight size={16} className="text-[#8e8e8e] group-hover:text-[#1B2126] transition-colors flex-shrink-0" />
    </Link>
  )
}

// --- Settings Section ---

function SettingsSection({ orgslug }: { orgslug: string }) {
  const session = useLHSession() as any
  const access_token = session?.data?.tokens?.access_token
  const user = session?.data?.user

  const [profileForm, setProfileForm] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    username: user?.username || '',
    email: user?.email || '',
    bio: user?.bio || '',
  })
  const [savingProfile, setSavingProfile] = useState(false)

  const [passwordForm, setPasswordForm] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  })
  const [savingPassword, setSavingPassword] = useState(false)

  const [avatarUploading, setAvatarUploading] = useState(false)

  const handleProfileSave = async () => {
    if (!user?.id || !access_token) return
    setSavingProfile(true)
    try {
      await updateProfile(profileForm, user.id, access_token)
      toast.success('Profile updated successfully')
    } catch (e: any) {
      toast.error(e?.data?.detail || 'Failed to update profile')
    } finally {
      setSavingProfile(false)
    }
  }

  const handlePasswordSave = async () => {
    if (!user?.id || !access_token) return
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      toast.error('New passwords do not match')
      return
    }
    if (passwordForm.new_password.length < 8) {
      toast.error('Password must be at least 8 characters')
      return
    }
    setSavingPassword(true)
    try {
      await updatePassword(
        String(user.id),
        {
          current_password: passwordForm.current_password,
          new_password: passwordForm.new_password,
        },
        access_token
      )
      toast.success('Password changed successfully')
      setPasswordForm({ current_password: '', new_password: '', confirm_password: '' })
    } catch (e: any) {
      toast.error(e?.data?.detail || 'Failed to change password')
    } finally {
      setSavingPassword(false)
    }
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user?.user_uuid || !access_token) return
    setAvatarUploading(true)
    try {
      await updateUserAvatar(user.user_uuid, file, access_token)
      toast.success('Avatar updated')
      window.location.reload()
    } catch (e: any) {
      toast.error(e?.data?.detail || 'Failed to upload avatar')
    } finally {
      setAvatarUploading(false)
    }
  }

  return (
    <div className="space-y-8">
      <Toaster position="top-right" />
      <div>
        <h1 className="text-[24px] font-bold text-[#1B2126]">Settings</h1>
        <p className="text-[14px] text-[#8e8e8e] mt-1">
          Manage your profile, password and account preferences.
        </p>
      </div>

      {/* Profile Picture */}
      <SettingsCard title="Profile Picture" icon={<UserIcon size={18} />}>
        <div className="flex items-center gap-5">
          <UserAvatar border="border-4" rounded="rounded-full" width={80} />
          <div className="flex flex-col gap-2">
            <input
              type="file"
              id="avatarInput"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="hidden"
              onChange={handleAvatarChange}
            />
            <button
              onClick={() => document.getElementById('avatarInput')?.click()}
              disabled={avatarUploading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#e5e5e5] hover:border-[#1B2126] rounded-[8px] text-[14px] font-medium text-[#1B2126] transition-colors disabled:opacity-50"
            >
              <Upload size={16} />
              {avatarUploading ? 'Uploading...' : 'Change Avatar'}
            </button>
            <p className="text-[12px] text-[#8e8e8e]">JPG, PNG, WebP or GIF. Max 5MB.</p>
          </div>
        </div>
      </SettingsCard>

      {/* Personal Information */}
      <SettingsCard title="Personal Information" icon={<UserIcon size={18} />}>
        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-4">
          <SettingsInput
            label="First Name"
            value={profileForm.first_name}
            onChange={(v) => setProfileForm({ ...profileForm, first_name: v })}
          />
          <SettingsInput
            label="Last Name"
            value={profileForm.last_name}
            onChange={(v) => setProfileForm({ ...profileForm, last_name: v })}
          />
          <SettingsInput
            label="Username"
            value={profileForm.username}
            onChange={(v) => setProfileForm({ ...profileForm, username: v })}
          />
          <SettingsInput
            label="Email"
            type="email"
            value={profileForm.email}
            onChange={(v) => setProfileForm({ ...profileForm, email: v })}
          />
        </div>
        <div className="mt-4">
          <label className="block text-[13px] font-medium text-[#1B2126] mb-1.5">Bio</label>
          <textarea
            value={profileForm.bio}
            onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
            placeholder="Tell us about yourself..."
            maxLength={400}
            rows={4}
            className="w-full px-3 py-2.5 bg-white border border-[#e5e5e5] rounded-[8px] text-[14px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#4BD0A0] focus:ring-1 focus:ring-[#4BD0A0] transition-colors resize-none"
          />
          <p className="text-[12px] text-[#8e8e8e] mt-1">{400 - (profileForm.bio?.length || 0)} characters remaining</p>
        </div>
        <div className="mt-5 flex justify-end">
          <button
            onClick={handleProfileSave}
            disabled={savingProfile}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] font-semibold text-[14px] rounded-[8px] transition-colors disabled:opacity-50"
          >
            <Save size={16} />
            {savingProfile ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </SettingsCard>

      {/* Change Password */}
      <SettingsCard title="Change Password" icon={<Lock size={18} />}>
        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-4">
          <SettingsInput
            label="Current Password"
            type="password"
            value={passwordForm.current_password}
            onChange={(v) => setPasswordForm({ ...passwordForm, current_password: v })}
          />
          <div className="hidden min-[768px]:block" />
          <SettingsInput
            label="New Password"
            type="password"
            value={passwordForm.new_password}
            onChange={(v) => setPasswordForm({ ...passwordForm, new_password: v })}
          />
          <SettingsInput
            label="Confirm New Password"
            type="password"
            value={passwordForm.confirm_password}
            onChange={(v) => setPasswordForm({ ...passwordForm, confirm_password: v })}
          />
        </div>
        <div className="mt-5 flex justify-end">
          <button
            onClick={handlePasswordSave}
            disabled={savingPassword}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B2126] hover:bg-[#3a3d42] text-white font-semibold text-[14px] rounded-[8px] transition-colors disabled:opacity-50"
          >
            <Lock size={16} />
            {savingPassword ? 'Changing...' : 'Change Password'}
          </button>
        </div>
      </SettingsCard>

      {/* Danger Zone */}
      <SettingsCard title="Danger Zone" icon={<AlertTriangle size={18} />} danger>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[15px] font-semibold text-[#dc2626]">Sign Out</h3>
            <p className="text-[13px] text-[#8e8e8e] mt-0.5">
              Sign out of your account on this device.
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#e5e5e5] hover:bg-[#f5f5f5] rounded-[8px] text-[14px] font-medium text-[#1B2126] transition-colors"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </SettingsCard>
    </div>
  )
}

function SettingsCard({
  title,
  icon,
  children,
  danger,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  danger?: boolean
}) {
  return (
    <div className={`bg-white rounded-[16px] border ${danger ? 'border-[#fecaca]' : 'border-[#e5e5e5]'} overflow-hidden`}>
      <div className={`flex items-center gap-2 px-5 py-4 border-b ${danger ? 'border-[#fecaca] bg-[#fef2f2]' : 'border-[#f0f0f0] bg-[#fafafa]'}`}>
        <span className={danger ? 'text-[#dc2626]' : 'text-[#8e8e8e]'}>{icon}</span>
        <h2 className={`text-[16px] font-semibold ${danger ? 'text-[#dc2626]' : 'text-[#1B2126]'}`}>{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function SettingsInput({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-[#1B2126] mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 bg-white border border-[#e5e5e5] rounded-[8px] text-[14px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#4BD0A0] focus:ring-1 focus:ring-[#4BD0A0] transition-colors"
      />
    </div>
  )
}

// --- Shared Components ---

function StatCard({
  icon,
  label,
  value,
  color,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  value: number
  color: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-[16px] p-5 border border-[#e5e5e5] hover:border-[#1B2126] transition-colors text-left w-full"
    >
      <div className={`flex items-center justify-center w-10 h-10 rounded-[10px] ${color} text-white mb-3`}>
        {icon}
      </div>
      <p className="text-[28px] font-bold text-[#1B2126] leading-none">{value}</p>
      <p className="text-[13px] text-[#8e8e8e] mt-1.5">{label}</p>
    </button>
  )
}

function ContinueLearningCard({ run, orgslug, org }: { run: any; orgslug: string; org: any }) {
  const course = run.course
  const courseId = course.course_uuid.replace('course_', '')
  const progress = run.progress
  const completedSteps = run.steps.length
  const totalSteps = run.course_total_steps
  const courseLink = getUriWithOrg(orgslug, '/course/' + courseId)

  return (
    <Link
      href={courseLink}
      className="group bg-white rounded-[16px] overflow-hidden border border-[#e5e5e5] hover:shadow-lg transition-all w-full block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-[#f5f5f5]">
        {course.thumbnail_image && org?.org_uuid ? (
          <img
            src={getCourseThumbnailMediaDirectory(org.org_uuid, course.course_uuid, course.thumbnail_image)}
            alt={course.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-[#ccc]">
            <BookOpen size={40} strokeWidth={1.5} />
          </div>
        )}
        {/* Progress bar overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20">
          <div
            className={`h-full ${progress === 100 ? 'bg-[#4BD0A0]' : 'bg-[#4BD0A0]'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[16px] font-semibold text-[#1B2126] leading-tight line-clamp-1 group-hover:text-black transition-colors">
          {course.name}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[14px] font-semibold text-[#4BD0A0]">{progress}%</span>
          <span className="text-[12px] text-[#8e8e8e]">
            {completedSteps}/{totalSteps} lessons
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e8e]">
            {progress === 100 ? 'Completed' : 'In Progress'}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4BD0A0] group-hover:underline">
            {progress === 100 ? 'Review' : 'Continue'}
          </span>
        </div>
      </div>
    </Link>
  )
}

function CertificateCard({ certificate, orgslug, org }: { certificate: any; orgslug: string; org: any }) {
  const verificationLink = getUriWithOrg(
    orgslug,
    `/certificates/${certificate.certificate_user.user_certification_uuid}/verify`
  )
  const awardedDate = new Date(certificate.certificate_user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={verificationLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-[16px] overflow-hidden border border-[#e5e5e5] hover:shadow-lg transition-all w-full block"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#fef3c7] to-[#fde68a]">
        {certificate.course?.thumbnail_image && org?.org_uuid ? (
          <img
            src={getCourseThumbnailMediaDirectory(
              org.org_uuid,
              certificate.course.course_uuid,
              certificate.course.thumbnail_image
            )}
            alt={certificate.course.name}
            className="w-full h-full object-cover opacity-40"
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
            <Award className="w-8 h-8 text-[#f59e0b]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[16px] font-semibold text-[#1B2126] leading-tight line-clamp-1 group-hover:text-black transition-colors">
          {certificate.certification.config.certification_name || certificate.course.name}
        </h3>
        <p className="text-[13px] text-[#8e8e8e] mt-1 truncate">{certificate.course.name}</p>
        <div className="mt-3 flex items-center justify-between border-t border-[#f0f0f0] pt-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e8e]">
            {awardedDate}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4BD0A0] group-hover:underline">
            View
          </span>
        </div>
      </div>
    </Link>
  )
}

function EmptyState({
  icon,
  title,
  message,
  actionLabel,
  actionHref,
}: {
  icon: React.ReactNode
  title: string
  message: string
  actionLabel?: string
  actionHref?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed border-[#e5e5e5] rounded-[16px] bg-white">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f5f5f5] mb-4">
        <span className="text-[#ccc]">{icon}</span>
      </div>
      <h3 className="text-[18px] font-bold text-[#1B2126] mb-1">{title}</h3>
      <p className="text-[14px] text-[#8e8e8e] text-center max-w-xs mb-4">{message}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="px-5 py-2.5 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] font-semibold text-[14px] rounded-[8px] transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  )
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-[#e5e5e5] rounded w-64" />
      <div className="grid grid-cols-2 min-[768px]:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-[#e5e5e5] rounded-[16px]" />
        ))}
      </div>
      <div className="h-6 bg-[#e5e5e5] rounded w-48" />
      <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#e5e5e5] rounded-[16px] aspect-video" />
        ))}
      </div>
    </div>
  )
}
