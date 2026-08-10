'use client'
import CreateCourseModal from '@components/Objects/Modals/Course/Create/CreateCourse'
import Modal from '@components/Objects/StyledElements/Modal/Modal'
import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import AuthenticatedClientElement from '@components/Security/AuthenticatedClientElement'
import CourseThumbnail from '@components/Objects/Thumbnails/CourseThumbnail'
import useAdminStatus from '@components/Hooks/useAdminStatus'
import { useTranslation } from 'react-i18next'
import { BookCopy, Search, X, Users, LogIn, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'
import { getUriWithOrg } from '@services/config/config'
import FeatureGate from '@components/Dashboard/Shared/FeatureGate/FeatureGate'
import { useOrg } from '@components/Contexts/OrgContext'
import { useLHSession } from '@components/Contexts/LHSessionContext'
import { searchMatchesAny } from '@/lib/search/normalize'
import { getUserGroups, getUserGroupResources } from '@services/usergroups/usergroups'
import { useCourses } from '@/hooks/queries/useCourses'
import { useLHAnalytics, AnalyticsEvent } from '@services/analytics'
import CatalogPagination, { useCatalogPagination } from '@components/Objects/Catalog/CatalogPagination'
import { asArray } from '@services/utils/ts/requests'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'

interface CourseProps {
  orgslug: string
}

function Courses(props: CourseProps) {
  const { t } = useTranslation()
  const orgslug = props.orgslug
  const searchParams = useSearchParams()
  const isCreatingCourse = searchParams.get('new') ? true : false
  const [newCourseModal, setNewCourseModal] = React.useState(isCreatingCourse)
  const { isAdmin: isUserAdmin } = useAdminStatus()
  const org = useOrg() as any
  const session = useLHSession() as any
  const access_token = session?.data?.tokens?.access_token
  const isAuthenticated = session?.status === 'authenticated'
  const { track } = useLHAnalytics('learner')
  const { data: coursesData, isLoading: coursesLoading } = useCourses(orgslug)

  const allCourses = coursesData || []

  // Usergroup filter — shown only when the org's plan actually includes
  // usergroups (a standard+ feature per the backend), via resolved features.
  const usergroupsAvailable = org?.config?.config?.resolved_features?.usergroups?.enabled ?? false
  const [usergroups, setUsergroups] = useState<any[]>([])
  const [selectedUsergroupId, setSelectedUsergroupId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lh_course_usergroup_filter') || ''
    }
    return ''
  })
  const [usergroupResourceUuids, setUsergroupResourceUuids] = useState<Set<string> | null>(null)
  const [showUsergroupInfo, setShowUsergroupInfo] = useState(false) // kept for potential future use

  // Fetch usergroups
  useEffect(() => {
    if (!usergroupsAvailable || !access_token || !org?.id) return
    getUserGroups(org?.id, access_token)
      .then((res: any) => {
        const list = asArray(res)
        setUsergroups(list)
        if (selectedUsergroupId && !list.some((ug: any) => String(ug.id) === selectedUsergroupId)) {
          setSelectedUsergroupId('')
          localStorage.removeItem('lh_course_usergroup_filter')
        }
      })
      .catch(() => setUsergroups([]))
  }, [usergroupsAvailable, access_token, org?.id])

  // Fetch resource UUIDs for selected usergroup
  useEffect(() => {
    if (!selectedUsergroupId || !access_token || !org?.id) {
      setUsergroupResourceUuids(null)
      return
    }
    getUserGroupResources(selectedUsergroupId, org?.id, access_token)
      .then((res: any) => {
        const uuids = asArray(res)
        setUsergroupResourceUuids(new Set(uuids))
      })
      .catch(() => setUsergroupResourceUuids(null))
  }, [selectedUsergroupId, access_token, org?.id])

  const handleUsergroupChange = (value: string) => {
    setSelectedUsergroupId(value)
    if (value) {
      localStorage.setItem('lh_course_usergroup_filter', value)
    } else {
      localStorage.removeItem('lh_course_usergroup_filter')
    }
  }

  // Search state
  const [searchQuery, setSearchQuery] = useState('')

  // Filter courses based on search and usergroup
  const filteredCourses = useMemo(() => {
    let courses = allCourses

    // Usergroup filter
    if (usergroupResourceUuids) {
      courses = courses.filter((course: any) => usergroupResourceUuids.has(course.course_uuid))
    }

    // Search filter
    if (searchQuery.trim()) {
      courses = courses.filter((course: any) =>
        searchMatchesAny([course.name, course.description, course.tags], searchQuery)
      )
    }

    return courses
  }, [allCourses, searchQuery, usergroupResourceUuids])

  // Track non-empty searches (debounced so we don't fire on every keystroke)
  useEffect(() => {
    const query = searchQuery.trim()
    if (!query) return
    const timer = setTimeout(() => {
      track(AnalyticsEvent.CourseSearched, {
        results_count: filteredCourses.length,
        total_courses: allCourses.length,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [searchQuery, filteredCourses.length, allCourses.length, track])

  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedCourses,
    pageNumbers,
    goToPage,
    resetPage,
  } = useCatalogPagination(filteredCourses)

  // Reset to page 1 when search or filter changes
  React.useEffect(() => {
    resetPage()
  }, [searchQuery, selectedUsergroupId, resetPage])

  async function closeNewCourseModal() {
    setNewCourseModal(false)
  }

  // Sidebar filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPricing, setSelectedPricing] = useState<string>('')
  const [showFiltersOnMobile, setShowFiltersOnMobile] = useState(false)
  const [skillSearchQuery, setSkillSearchQuery] = useState('')

  // Default direction categories (always shown, like Netology's navigation)
  const defaultDirections = [
    'AI & Neural Networks',
    'Marketing',
    'Business & Management',
    'Design & UX',
    'Programming',
    'Analytics',
    'Team Management',
    'Creative Professions',
    'Education',
    'New Professions',
    'Finance & Investments',
    'Health & Psychology',
  ]

  // Categories derived from course tags (if available), fallback to defaults
  const categories = useMemo(() => {
    const cats = new Set<string>()
    allCourses.forEach((course: any) => {
      if (course.tags) {
        const tagList = Array.isArray(course.tags) ? course.tags : course.tags.split(',')
        tagList.forEach((tag: string) => cats.add(tag.trim()))
      }
    })
    const fromTags = Array.from(cats).filter(Boolean).sort()
    return fromTags.length > 0 ? fromTags : defaultDirections
  }, [allCourses])

  // Filtered skills based on skill search
  const filteredSkills = useMemo(() => {
    if (!skillSearchQuery.trim()) return categories
    return categories.filter((cat) =>
      cat.toLowerCase().includes(skillSearchQuery.toLowerCase())
    )
  }, [categories, skillSearchQuery])

  if (coursesLoading && !coursesData) {
    return (
      <div className="w-full min-h-screen bg-[#f5f5f5] animate-pulse">
        <div className="max-w-[1280px] mx-auto px-5 py-8">
          {/* Breadcrumb placeholder */}
          <div className="h-4 bg-[#e5e5e5] rounded w-40 mb-6" />
          {/* Title placeholder */}
          <div className="h-10 bg-[#e5e5e5] rounded w-64 mb-8" />
          {/* Search placeholder */}
          <div className="h-[44px] bg-[#e5e5e5] rounded-[12px] w-full max-w-[480px] mb-8" />
          {/* Layout: sidebar + cards */}
          <div className="flex gap-5">
            <div className="w-[260px] shrink-0 max-[1023px]:hidden">
              <div className="bg-white rounded-[24px] p-5 space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-5 bg-[#f5f5f5] rounded w-full" />
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-[24px] p-5 flex items-start">
                  <div className="flex-1">
                    <div className="h-[22px] bg-[#f5f5f5] rounded-full w-24 mb-4" />
                    <div className="h-7 bg-[#f5f5f5] rounded w-3/4 mb-3" />
                    <div className="h-4 bg-[#f5f5f5] rounded w-1/2" />
                  </div>
                  <div className="w-[124px] h-[124px] bg-[#f5f5f5] rounded-[12px] ml-5 shrink-0 max-[1023px]:hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <FeatureGate feature="courses" orgslug={orgslug} context="public">
    <div className="w-full min-h-screen bg-[#f5f5f5]">
      {/* Hybreed Header - same as homepage */}
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />

      {/* Full-width page container */}
      <div className="max-w-[1280px] mx-auto px-5 max-[767px]:px-3 pt-6 pb-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-[14px] text-[#8e8e8e] mb-6">
          <Link href={getUriWithOrg(orgslug, '/')} className="hover:text-[#1B2126] transition-colors">
            {t('navigation.home', 'Home')}
          </Link>
          <span>/</span>
          <span className="text-[#1B2126] font-medium">{t('courses.all_courses', 'All Courses')}</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-[40px] max-[767px]:text-[28px] font-bold text-[#1B2126] leading-tight mb-8">
          {t('courses.catalog_title', 'Courses')}
        </h1>

        {/* Search bar */}
        <div className="flex items-center gap-2 mb-8">
          <div className="relative flex-1 max-w-[600px]">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8e8e8e] w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={t('courses.search_courses')}
              placeholder={t('courses.search_catalog', 'Search catalog')}
              className="w-full h-[48px] pl-12 pr-10 bg-white rounded-[12px] border border-[#e5e5e5] text-[16px] leading-[20px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#4BD0A0] focus:ring-1 focus:ring-[#4BD0A0] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8e8e8e] hover:text-[#1B2126] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mobile filter toggle button */}
          <button
            onClick={() => setShowFiltersOnMobile(!showFiltersOnMobile)}
            className="flex items-center gap-2 h-[48px] px-4 bg-[#d4f6ec] rounded-[12px] border border-[#ccc] text-[16px] text-[#1B2126] min-[1024px]:hidden"
          >
            <SlidersHorizontal className="w-5 h-5" />
            {t('courses.filters', 'Filters')}
          </button>

          {/* Admin create course button */}
          <AuthenticatedClientElement
            checkMethod="roles"
            action="create"
            ressourceType="courses"
            orgId={org?.id}
          >
            <Modal
              isDialogOpen={newCourseModal}
              onOpenChange={setNewCourseModal}
              minHeight="md"
              minWidth="lg"
              dialogContent={
                <CreateCourseModal
                  closeModal={closeNewCourseModal}
                  orgslug={orgslug}
                />
              }
              dialogTitle={t('courses.create_course')}
              dialogDescription={t('courses.create_new_course')}
              dialogTrigger={
                <button className="h-[48px] px-5 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] font-semibold text-[14px] rounded-[12px] transition-colors whitespace-nowrap">
                  + {t('courses.create_course')}
                </button>
              }
            />
          </AuthenticatedClientElement>
        </div>

        {/* Directions / Category tabs - Netology style */}
        <div className="mb-10 max-[767px]:mb-4 max-[1239px]:-mx-[150px] max-[1239px]:px-[150px] max-[1023px]:-mx-[34px] max-[1023px]:px-[34px] max-[767px]:-mx-3 max-[767px]:px-3 overflow-x-auto max-[1239px]:overflow-x-auto scrollbar-hide">
          <div className="flex flex-wrap gap-2 max-[1023px]:flex-nowrap max-[1023px]:min-w-0">
            {/* All Courses tab */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`inline-flex justify-center items-center h-[44px] max-[1023px]:h-[40px] px-[14px] max-[1023px]:px-[12px] text-[16px] max-[1023px]:text-[14px] rounded-[8px] cursor-pointer border whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#27292d] border-[#27292d] text-white'
                  : 'bg-white border-[#ccc] text-[#000] hover:border-[#000]'
              }`}
            >
              {t('courses.all_courses', 'All Courses')}
            </button>
            {/* Category tabs */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex justify-center items-center h-[44px] max-[1023px]:h-[40px] px-[14px] max-[1023px]:px-[12px] text-[16px] max-[1023px]:text-[14px] rounded-[8px] cursor-pointer border whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#27292d] border-[#27292d] text-white'
                    : 'bg-white border-[#ccc] text-[#000] hover:border-[#000]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main layout: Sidebar + Cards */}
        <div className="flex gap-5 items-start">

          {/* LEFT SIDEBAR - Filters (Netology style) */}
          <aside className={`w-[260px] shrink-0 max-[1023px]:fixed max-[1023px]:inset-0 max-[1023px]:z-[100] max-[1023px]:w-auto max-[1023px]:bg-white max-[1023px]:overflow-auto max-[1023px]:p-5 ${showFiltersOnMobile ? 'max-[1023px]:block' : 'max-[1023px]:hidden'}`}>
            {/* Mobile close button */}
            <div className="hidden max-[1023px]:flex items-center justify-between mb-6">
              <span className="text-[20px] font-medium text-[#1B2126]">{t('courses.filters', 'Filters')}</span>
              <button onClick={() => setShowFiltersOnMobile(false)} className="p-2 text-[#8e8e8e] hover:text-[#1B2126]">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* PRICING Section */}
            <div className="mb-10 max-[1023px]:mb-8">
              <div className="flex items-center mb-4 max-[1023px]:mb-3">
                <h3 className="text-[20px] leading-[24px] font-medium text-[#1B2126]">{t('courses.pricing', 'Pricing')}</h3>
              </div>
              <div className="max-[1023px]:flex max-[1023px]:flex-wrap max-[1023px]:gap-2">
                <label className="flex items-center cursor-pointer min-[1024px]:mb-4 max-[1023px]:inline-flex max-[1023px]:items-center max-[1023px]:px-4 max-[1023px]:py-2 max-[1023px]:rounded-full max-[1023px]:bg-[#e6e9ef]">
                  <input
                    type="checkbox"
                    checked={selectedPricing === 'free'}
                    onChange={() => setSelectedPricing(selectedPricing === 'free' ? '' : 'free')}
                    className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#ccc] appearance-none cursor-pointer checked:bg-[#29a680] checked:border-[#29a680] relative after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100 max-[1023px]:hidden"
                  />
                  <span className="ml-2 text-[16px] leading-[24px] text-[#1B2126] max-[1023px]:ml-0 max-[1023px]:text-[14px]">
                    {t('courses.free', 'Free')} <span className="text-[#8e8e8e]">({allCourses.length})</span>
                  </span>
                </label>
                <label className="flex items-center cursor-pointer max-[1023px]:inline-flex max-[1023px]:items-center max-[1023px]:px-4 max-[1023px]:py-2 max-[1023px]:rounded-full max-[1023px]:bg-[#e6e9ef]">
                  <input
                    type="checkbox"
                    checked={selectedPricing === 'paid'}
                    onChange={() => setSelectedPricing(selectedPricing === 'paid' ? '' : 'paid')}
                    className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#ccc] appearance-none cursor-pointer checked:bg-[#29a680] checked:border-[#29a680] relative after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100 max-[1023px]:hidden"
                  />
                  <span className="ml-2 text-[16px] leading-[24px] text-[#1B2126] max-[1023px]:ml-0 max-[1023px]:text-[14px]">
                    {t('courses.paid', 'Paid')} <span className="text-[#8e8e8e]">(0)</span>
                  </span>
                </label>
              </div>
            </div>

            {/* SKILLS / TAGS Section */}
            {categories.length > 0 && (
              <div className="mb-10 max-[1023px]:mb-8">
                <div className="flex items-center mb-4 max-[1023px]:mb-3">
                  <h3 className="text-[20px] leading-[24px] font-medium text-[#1B2126]">{t('courses.skills', 'Skills')}</h3>
                </div>
                {/* Search skills input */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8e8e8e]" />
                  <input
                    type="text"
                    value={skillSearchQuery}
                    onChange={(e) => setSkillSearchQuery(e.target.value)}
                    placeholder={t('courses.search_skills', 'Search skills')}
                    className="w-full h-[40px] pl-9 pr-3 bg-white border border-[#ccc] rounded-[8px] text-[14px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#29a680]"
                  />
                </div>
                {/* Scrollable skills list */}
                <div className="border-t border-b border-[#ccc] mr-3.5">
                  <div className="max-h-[385px] overflow-y-auto py-6 -mr-3.5 pr-3.5 scrollbar-thin scrollbar-thumb-[#d4d6d8] scrollbar-thumb-rounded">
                    <div className="max-[1023px]:flex max-[1023px]:flex-wrap max-[1023px]:gap-2">
                      {filteredSkills.map((cat) => (
                        <label key={cat} className="flex items-center cursor-pointer min-[1024px]:mb-4 last:min-[1024px]:mb-0 max-[1023px]:inline-flex max-[1023px]:items-center max-[1023px]:px-4 max-[1023px]:py-2 max-[1023px]:rounded-full max-[1023px]:bg-[#e6e9ef]">
                          <input
                            type="checkbox"
                            checked={selectedCategory === cat}
                            onChange={() => setSelectedCategory(selectedCategory === cat ? 'all' : cat)}
                            className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#ccc] appearance-none cursor-pointer checked:bg-[#29a680] checked:border-[#29a680] relative after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100 max-[1023px]:hidden"
                          />
                          <span className="ml-2 text-[16px] leading-[24px] text-[#1B2126] max-[1023px]:ml-0 max-[1023px]:text-[14px]">
                            {cat}
                          </span>
                        </label>
                      ))}
                      {filteredSkills.length === 0 && (
                        <p className="text-[14px] text-[#8e8e8e] py-2">{t('courses.no_skills_found', 'No skills found')}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* USERGROUP Section */}
            {usergroupsAvailable && usergroups.length > 0 && (
              <div className="mb-10 max-[1023px]:mb-8">
                <div className="flex items-center mb-4 max-[1023px]:mb-3">
                  <h3 className="text-[20px] leading-[24px] font-medium text-[#1B2126]">{t('courses.usergroup_filter.groups', 'Groups')}</h3>
                </div>
                <div className="max-[1023px]:flex max-[1023px]:flex-wrap max-[1023px]:gap-2">
                  {usergroups.map((ug: any) => (
                    <label key={ug.id} className="flex items-center cursor-pointer min-[1024px]:mb-4 last:min-[1024px]:mb-0 max-[1023px]:inline-flex max-[1023px]:items-center max-[1023px]:px-4 max-[1023px]:py-2 max-[1023px]:rounded-full max-[1023px]:bg-[#e6e9ef]">
                      <input
                        type="checkbox"
                        checked={selectedUsergroupId === String(ug.id)}
                        onChange={() => handleUsergroupChange(selectedUsergroupId === String(ug.id) ? '' : String(ug.id))}
                        className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#ccc] appearance-none cursor-pointer checked:bg-[#29a680] checked:border-[#29a680] relative after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100 max-[1023px]:hidden"
                      />
                      <span className="ml-2 text-[16px] leading-[24px] text-[#1B2126] max-[1023px]:ml-0 max-[1023px]:text-[14px]">
                        {ug.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* GOAL Section */}
            <div className="mb-10 max-[1023px]:mb-8">
              <div className="flex items-center mb-4 max-[1023px]:mb-3">
                <h3 className="text-[20px] leading-[24px] font-medium text-[#1B2126]">{t('courses.goal', 'Goal')}</h3>
              </div>
              <div className="max-[1023px]:flex max-[1023px]:flex-wrap max-[1023px]:gap-2">
                <label className="flex items-center cursor-pointer min-[1024px]:mb-4 max-[1023px]:inline-flex max-[1023px]:items-center max-[1023px]:px-4 max-[1023px]:py-2 max-[1023px]:rounded-full max-[1023px]:bg-[#e6e9ef]">
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => {}}
                    className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#ccc] appearance-none cursor-pointer checked:bg-[#29a680] checked:border-[#29a680] relative after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100 max-[1023px]:hidden"
                  />
                  <span className="ml-2 text-[16px] leading-[24px] text-[#1B2126] max-[1023px]:ml-0 max-[1023px]:text-[14px]">
                    {t('courses.get_profession', 'Get a profession')} <span className="text-[#8e8e8e]">({allCourses.length})</span>
                  </span>
                </label>
                <label className="flex items-center cursor-pointer max-[1023px]:inline-flex max-[1023px]:items-center max-[1023px]:px-4 max-[1023px]:py-2 max-[1023px]:rounded-full max-[1023px]:bg-[#e6e9ef]">
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => {}}
                    className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#ccc] appearance-none cursor-pointer checked:bg-[#29a680] checked:border-[#29a680] relative after:content-[''] after:absolute after:left-[5px] after:top-[2px] after:w-[5px] after:h-[9px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100 max-[1023px]:hidden"
                  />
                  <span className="ml-2 text-[16px] leading-[24px] text-[#1B2126] max-[1023px]:ml-0 max-[1023px]:text-[14px]">
                    {t('courses.learn_skill', 'Learn a skill')} <span className="text-[#8e8e8e]">(0)</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Mobile action buttons */}
            <div className="hidden max-[1023px]:flex gap-3 mt-6">
              <button
                onClick={() => setShowFiltersOnMobile(false)}
                className="flex-1 h-[48px] bg-[#27292d] text-white font-medium text-[14px] rounded-[8px]"
              >
                {t('courses.show_courses', 'Show Courses')}
              </button>
              <button
                onClick={() => { setSelectedCategory('all'); setSelectedPricing(''); handleUsergroupChange(''); setShowFiltersOnMobile(false) }}
                className="h-[48px] px-5 border border-[#27292d] text-[#27292d] font-medium text-[14px] rounded-[8px]"
              >
                {t('courses.reset', 'Reset')}
              </button>
            </div>
          </aside>

          {/* RIGHT SIDE - Course cards */}
          <div className="flex-1 min-w-0">

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mb-4 text-[14px] text-[#8e8e8e]">
                {t('courses.search_results', { count: filteredCourses.length, query: searchQuery })}
              </div>
            )}

            {/* Course cards list - Netology catalog style (one per row, stacked) */}
            <div className="flex flex-col gap-5">
            {paginatedCourses.map((course: any, index: number) => (
              <div key={course.course_uuid}>
                <CourseThumbnail course={course} orgslug={orgslug} isPriority={currentPage === 1 && index < 3} />
              </div>
            ))}
            {filteredCourses.length === 0 && searchQuery && (
              <div className="w-full flex flex-col justify-center items-center py-16 px-4 bg-white rounded-[24px]">
                <Search className="w-12 h-12 text-[#ccc] mb-4" />
                <h2 className="text-[20px] font-semibold text-[#1B2126] mb-2">
                  {t('courses.no_search_results')}
                </h2>
                <p className="text-[14px] text-[#8e8e8e]">
                  {t('courses.try_different_search')}
                </p>
              </div>
            )}
            {allCourses.length === 0 && !searchQuery && (
              <div className="w-full flex flex-col justify-center items-center py-16 px-4 bg-white rounded-[24px]">
                <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center mb-4">
                  {isAuthenticated ? (
                    <BookCopy className="w-8 h-8 text-[#ccc]" strokeWidth={1.5} />
                  ) : (
                    <LogIn className="w-8 h-8 text-[#ccc]" strokeWidth={1.5} />
                  )}
                </div>
                <h1 className="text-[20px] font-bold text-[#1B2126] mb-2">
                  {isAuthenticated
                    ? t('courses.no_courses')
                    : t('courses.sign_in_to_see_courses', 'Log in to see your courses')}
                </h1>
                <p className="text-[14px] text-[#8e8e8e] mb-6 text-center max-w-xs">
                  {!isAuthenticated ? (
                    t(
                      'courses.sign_in_to_see_courses_description',
                      'Courses in this academy may only be visible once you are signed in.',
                    )
                  ) : isUserAdmin ? (
                    t('courses.create_courses_placeholder')
                  ) : (
                    t('courses.no_courses_available')
                  )}
                </p>
                {!isAuthenticated && (
                  <Link
                    href={getUriWithOrg(orgslug, '/login')}
                    className="inline-flex items-center gap-2 justify-center h-[44px] px-6 bg-[#1B2126] text-white rounded-[8px] text-[14px] font-semibold hover:bg-[#2d3339] transition-colors"
                  >
                    <LogIn size={16} />
                    {t('auth.sign_in', 'Sign in')}
                  </Link>
                )}
                {isAuthenticated && isUserAdmin && (
                  <div className="mt-4">
                    <AuthenticatedClientElement
                      action="create"
                      ressourceType="courses"
                      checkMethod="roles"
                      orgId={org?.id}
                    >
                      <button onClick={() => setNewCourseModal(true)} className="h-10 px-5 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] font-semibold text-[14px] rounded-[8px] transition-colors">
                        + {t('courses.create_course')}
                      </button>
                    </AuthenticatedClientElement>
                  </div>
                )}
              </div>
            )}
            </div>

            <CatalogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              pageNumbers={pageNumbers}
              onPageChange={goToPage}
              previousLabel={t('pagination.previous')}
              nextLabel={t('pagination.next')}
              className="mt-8"
            />

            {/* Pagination info */}
            {totalPages > 1 && (
              <div className="mt-3 text-center text-[13px] text-[#8e8e8e]">
                {t('pagination.showing_page', { current: currentPage, total: totalPages })}
              </div>
            )}
          </div>{/* end right side */}

        </div>{/* end flex sidebar+cards */}
      </div>{/* end page container */}
    </div>{/* end min-h-screen */}
    </FeatureGate>
  )
}

export default Courses
