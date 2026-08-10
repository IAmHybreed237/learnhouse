'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCourses } from '@/hooks/queries/useCourses'
import { useOrg } from '@/hooks/queries/useOrg'
import { getUriWithOrg } from '@services/config/config'
import { getCourseThumbnailMediaDirectory } from '@services/media/media'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'
import { Search, ArrowRight } from 'lucide-react'

interface FreeCoursesProps {
  orgslug: string
}

const directions = [
  'All directions',
  'Marketing',
  'Business & Management',
  'Design & UX',
  'Programming',
  'Data Science & Analytics',
  'University Programs',
  'Corporate Training',
  'New Professions',
  'Health',
  'Career Choice',
]

export default function FreeCourses({ orgslug }: FreeCoursesProps) {
  const { data: org } = useOrg(orgslug)
  const { data: coursesData, isLoading } = useCourses(orgslug)
  const [selectedDirection, setSelectedDirection] = useState('All directions')
  const [searchQuery, setSearchQuery] = useState('')

  const allCourses = coursesData || []
  // Filter for free courses (price is 0 or null, or has "free" in name)
  const freeCourses = allCourses.filter((course: any) => {
    const isFree = course?.price === 0 || course?.price === null || course?.price === undefined
    const matchesSearch = !searchQuery || course?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    return isFree && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />

      {/* HERO SECTION - White bg with decorative circle */}
      <section className="relative bg-white pt-[130px] pb-[120px] max-[1239px]:pb-[135px] max-[1023px]:py-[110px] overflow-hidden">
        {/* Decorative circle - desktop only */}
        <div className="absolute w-[554px] h-[554px] left-[170px] top-[-130px] rounded-full bg-[#f3f4f7] z-0 max-[1023px]:hidden" />

        <div className="relative max-w-[1160px] max-[1239px]:max-w-[990px] max-[1023px]:max-w-[740px] mx-auto px-5 z-[1]">
          {/* Title */}
          <h1 className="text-[76px] max-[1023px]:text-[60px] max-[767px]:text-[40px] max-[479px]:text-[32px] leading-[78px] max-[1023px]:leading-[60px] max-[767px]:leading-[44px] max-[479px]:leading-[36px] font-medium text-[#1B2126] mb-[50px] max-[1023px]:mb-[50px] max-[767px]:mb-[30px] m-0">
            <span className="text-[#0066ff]">Free</span> courses, lectures<br />and useful materials
          </h1>

          {/* Row: description + direction filters */}
          <div className="flex max-[1023px]:flex-col">
            {/* Description */}
            <div className="flex-0 flex-shrink-0 basis-[310px] text-[24px] max-[1023px]:text-[20px] max-[767px]:text-[16px] leading-[32px] max-[767px]:leading-[24px] font-medium text-[#1B2126] pr-[23px] max-[1023px]:pr-0 max-[1023px]:mb-5 max-[767px]:mb-[15px]">
              Choose a direction and start learning what interests you
            </div>

            {/* Direction filter buttons */}
            <div className="border-l border-black max-[1023px]:border-l-0 pl-[26px] max-[1023px]:pl-0">
              <div className="flex flex-wrap m-[-40px -40px -44px 0] max-[1023px]:m-0 max-[767px]:m-0">
                {directions.map((dir) => (
                  <button
                    key={dir}
                    onClick={() => setSelectedDirection(dir)}
                    className={`h-[34px] flex items-center justify-center rounded-[20px] m-0 mr-[10px] mb-[10px] border px-[10px] text-[14px] font-normal transition-all ${
                      selectedDirection === dir
                        ? 'text-white bg-[#0066ff] border-[#0066ff]'
                        : 'text-[#1B2126] border-black hover:text-[#0066ff] hover:border-[#0066ff]'
                    }`}
                  >
                    {dir}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PROGRAMS SECTION - Card slider */}
      <section className="bg-white py-16 max-[767px]:py-8">
        <div className="max-w-[1280px] mx-auto px-5">
          <h2 className="text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] mb-8 max-[767px]:mb-5">
            Popular programs
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-2 border-[#0066ff] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : freeCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {freeCourses.slice(0, 8).map((course: any) => (
                <FreeCourseCard key={course.course_uuid} course={course} orgslug={orgslug} orgUuid={org?.org_uuid} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[18px] text-[#8e8e8e]">No free courses available yet.</p>
              <Link
                href={getUriWithOrg(orgslug, '/courses')}
                className="inline-flex items-center gap-2 mt-4 text-[#0066ff] text-[16px] font-medium no-underline hover:underline"
              >
                Browse all courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FREE COURSES BENEFITS SECTION */}
      <section className="bg-[#f3f4f7] py-16 max-[767px]:py-8">
        <div className="max-w-[1160px] max-[1023px]:max-w-[740px] mx-auto px-5">
          <h2 className="text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] mb-8 max-[767px]:mb-5">
            Free courses and lectures
          </h2>
          <p className="text-[20px] max-[767px]:text-[16px] leading-[28px] text-[#1B2126] mb-8 max-w-[600px]">
            This is an opportunity to get acquainted with an interesting profession, gain new skills that can be applied immediately, a compact program, and learning at a convenient time.
          </p>

          {/* Benefits list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {[
              'Opportunity to get acquainted with an interesting profession',
              'New skills that can be applied immediately',
              'Compact program',
              'Learning at a convenient time',
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-[20px] p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0066ff]/10 flex items-center justify-center">
                  <span className="text-[#0066ff] text-[18px] font-bold">{i + 1}</span>
                </div>
                <p className="text-[16px] leading-[22px] text-[#1B2126] m-0">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL FREE COURSES LIST */}
      <section className="bg-white py-16 max-[767px]:py-8">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex items-center justify-between mb-8 max-[767px]:mb-5">
            <h2 className="text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126]">
              All free courses
            </h2>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8e8e8e]" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-[44px] pl-10 pr-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0066ff] w-[280px] max-[767px]:w-[180px]"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-2 border-[#0066ff] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {freeCourses.map((course: any) => (
                <FreeCourseCard key={course.course_uuid} course={course} orgslug={orgslug} orgUuid={org?.org_uuid} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-[#1B2126] py-16 max-[767px]:py-8">
        <div className="max-w-[740px] mx-auto px-5 text-center">
          <h2 className="text-[32px] max-[767px]:text-[24px] font-bold text-white mb-4">
            Subscribe to our free lessons newsletter
          </h2>
          <p className="text-[16px] leading-[24px] text-white/70 mb-8">
            Once a week you will receive a selection of online lectures from our experts. No spam.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 h-[48px] px-4 bg-white/10 border border-white/20 rounded-[12px] text-[15px] text-white placeholder:text-white/50 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="h-[48px] px-8 bg-[#0066ff] hover:bg-[#0052cc] text-white text-[16px] font-medium rounded-[12px] border-0 cursor-pointer transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[12px] text-white/50 mt-4">
            I confirm my consent to the processing of personal data
          </p>
        </div>
      </section>
    </div>
  )
}

/* ============================================================
   FREE COURSE CARD - Card with bg image, badges, title, button
   ============================================================ */
function FreeCourseCard({ course, orgslug, orgUuid }: { course: any; orgslug: string; orgUuid?: string }) {
  const thumbnail = course?.thumbnail_image && orgUuid
    ? getCourseThumbnailMediaDirectory(orgUuid, course?.course_uuid, course?.thumbnail_image)
    : null

  return (
    <Link
      href={getUriWithOrg(orgslug, `/course/${course.course_uuid}/about`)}
      className="block no-underline group"
    >
      <div className="relative rounded-[20px] overflow-hidden bg-[#1B2126] min-h-[280px] flex flex-col justify-end">
        {/* Background image */}
        {thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt={course.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative p-5 flex flex-col gap-3 z-[1]">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center h-[24px] px-3 rounded-full bg-white/20 text-white text-[12px] font-medium backdrop-blur-sm">
              Free course
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[18px] leading-[24px] font-semibold text-white m-0 group-hover:text-[#0066ff] transition-colors">
            {course.name}
          </h3>

          {/* Button */}
          <div className="flex items-center gap-2 mt-1">
            <span className="inline-flex items-center justify-center h-[36px] px-5 bg-white/20 hover:bg-white/30 text-white text-[14px] font-medium rounded-[10px] backdrop-blur-sm transition-colors border border-white/30">
              Study for free
            </span>
            <span className="inline-flex items-center justify-center h-[36px] px-5 text-white text-[14px] font-medium rounded-[10px] border border-white/30 hover:bg-white/10 transition-colors">
              Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
