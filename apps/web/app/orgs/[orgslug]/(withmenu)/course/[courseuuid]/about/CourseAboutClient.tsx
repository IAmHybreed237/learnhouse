'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCourseMeta } from '@/hooks/queries/useCourses'
import { useOrg } from '@/hooks/queries/useOrg'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'
import { getCourseThumbnailMediaDirectory } from '@services/media/media'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'
import DigitalMarketingLanding from './DigitalMarketingLanding'

// Course UUIDs that have custom landing pages
const CUSTOM_COURSE_PAGES: Record<string, React.ComponentType<{ courseuuid: string; orgslug: string }>> = {
  '1df3527b-ed86-449a-9f45-e4de0bb306a1': DigitalMarketingLanding,
}

interface CourseAboutClientProps {
  courseuuid: string
  orgslug: string
}

export default function CourseAboutClient({ courseuuid, orgslug }: CourseAboutClientProps) {
  const { data: courseMeta, isLoading } = useCourseMeta(courseuuid)
  const { data: org } = useOrg(orgslug)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1B2126] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const course = courseMeta

  // Check if this course has a custom landing page
  const CustomPage = CUSTOM_COURSE_PAGES[courseuuid]
  if (CustomPage) {
    return <CustomPage courseuuid={courseuuid} orgslug={orgslug} />
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />
      <HeroSection course={course} orgslug={orgslug} orgUuid={org?.org_uuid} />
      <FeaturesWithImagesSection />
      <SalarySection />
      <SkillsSection />
      <DiplomaSection />
      <GrowthSection />
      <DescriptionSection course={course} />
      <CurriculumSection course={course} />
      <PricingSection course={course} orgslug={orgslug} />
      <FAQSection />
    </div>
  )
}

/* ============================================================
   HERO SECTION - Dark background with title, description, CTA
   ============================================================ */
function HeroSection({ course, orgslug, orgUuid }: { course: any; orgslug: string; orgUuid?: string }) {
  const thumbnailImage = course?.thumbnail_image && orgUuid
    ? getCourseThumbnailMediaDirectory(orgUuid, course?.course_uuid, course?.thumbnail_image)
    : null

  const stats = [
    { title: 'When', value: 'Enroll anytime — self-paced' },
    { title: 'Duration', value: course?.duration || 'From 11 months — depends on chosen program' },
    { title: 'Practice', value: 'Up to 20 projects, partner tasks, team practice' },
    { title: 'Certificate', value: 'Professional retraining diploma' },
  ]

  return (
    <section className="relative overflow-hidden min-h-[654px] max-[1239px]:min-h-0" style={{ backgroundColor: '#1B2126' }}>
      {/* Main content wrapper */}
      <div className="relative max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full pt-[60px] pb-[80px] max-[1023px]:pt-[60px] max-[1023px]:pb-[63px] max-[767px]:pt-0 max-[767px]:pb-[30px] max-[767px]:px-5 box-border">
        {/* Two-column row */}
        <div className="flex justify-between w-full gap-5 max-[767px]:flex-col max-[767px]:gap-0">

          {/* LEFT COLUMN - Course info (text content) */}
          <div className="flex flex-col max-w-[553px] max-[767px]:max-w-none max-[767px]:w-full relative z-[1]">
            {/* Subtitle badges row */}
            <div className="flex gap-2 justify-start flex-wrap w-[85%] max-[767px]:w-full max-[767px]:mb-4 max-[767px]:pt-[20px]">
              {/* Job hunt badge - blue bg */}
              <div className="flex items-center px-[15px] py-[6px] min-h-[24px] rounded-full bg-[#0b3a82] text-white text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] w-fit border-0">
                Includes career program
              </div>
              {/* Course type badge - border outline */}
              <div className="flex items-center px-[15px] py-[6px] min-h-[24px] rounded-full border border-[#9b9fa3] text-white text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] w-fit">
                Course from scratch
              </div>
              {/* Partner badge */}
              <div className="flex items-center px-[15px] py-[6px] min-h-[24px] rounded-full border border-[#9b9fa3] text-white text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] w-fit gap-2">
                <span>Course partner</span>
              </div>
            </div>

            {/* Hero title + description block */}
            <div className="max-[767px]:bg-[#282d33] max-[767px]:p-6 max-[767px]:rounded-[32px] max-[767px]:mt-[10px] max-[767px]:z-[1]">
              {/* Title */}
              <h1 className="text-[57px] max-[1023px]:text-[57px] max-[767px]:text-[28px] leading-[1.12] max-[767px]:leading-[32px] font-bold text-white my-6 max-[767px]:mt-0 max-[767px]:mb-4 max-w-[680px] max-[1023px]:max-w-full">
                {course?.name || 'Frontend Developer'}
              </h1>

              {/* Description */}
              <p className="text-[18px] max-[767px]:text-[16px] leading-[28px] max-[767px]:leading-[24px] text-white mb-0 max-w-[553px]">
                {course?.description || 'Learn to design website and application interfaces, work with HTML layout and JavaScript. You can apply for entry-level positions or start freelancing within 6 months of training.'}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-10 max-[767px]:mt-6">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors"
              >
                View Pricing
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 border border-white/40 hover:border-white text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors bg-white/10"
              >
                View Program
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Background graphic + Registration block */}
          {/* The graphic_hero_fe.webp is inside this column, positioned absolute behind the form */}
          <div className="flex flex-col relative max-[767px]:w-full max-[767px]:mt-8">
            {/* 3D Hero graphic - absolute, behind the form, only on large desktop */}
            {/* Shifted left so it peeks out from behind the form card */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/course/graphic_hero_fe.webp"
              alt=""
              className="absolute top-0 right-0 max-[1239px]:hidden pointer-events-none z-0"
              style={{ transform: 'translateX(0px) scale(2)', transformOrigin: 'top right' }}
            />

            {/* Registration form wrapper */}
            <div className="relative w-[344px] max-[1023px]:w-full max-[767px]:w-full shrink-0 z-[1]">
              {/* Mobile hero image - shows on top of card on mobile only */}
              <div className="hidden max-[767px]:block w-full h-[188px] rounded-t-[20px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/course/graphic_hero_fe.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Registration / Consultation card */}
              <div className="rounded-[20px] max-[767px]:rounded-t-none overflow-hidden relative bg-white">
                {/* Discount ribbon - tape image */}
                <div className="absolute top-[-7px] right-[-9px] max-[767px]:top-[-9px] max-[767px]:right-[-14px] w-[143px] h-[123px] max-[767px]:w-[210px] max-[767px]:h-[160px] z-[1] rotate-45 pointer-events-none">
                  <Image
                    src="/images/course/tape.webp"
                    alt="Sale"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                    <span className="text-[10px] uppercase leading-tight">SALE</span>
                    <span className="text-[16px] leading-tight">-40<span className="text-[12px]">%</span></span>
                  </div>
                </div>

                {/* Form content */}
                <div className="p-6 max-[767px]:p-5">
                  <p className="text-[18px] font-semibold text-[#000] mb-5 leading-[24px]">
                    We&apos;ll help you choose the right program
                  </p>

                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-[48px] px-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0087CD]"
                    />
                    <input
                      type="tel"
                      placeholder="+256 (700) 000-000"
                      className="w-full h-[48px] px-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0087CD]"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full h-[48px] px-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0087CD]"
                    />

                    {/* Checkboxes */}
                    <div className="flex flex-col gap-2 mt-1">
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-[#4BD0A0] shrink-0" />
                        <span className="text-[12px] leading-[16px] text-[#8e8e8e]">
                          I accept the terms of the user agreement
                        </span>
                      </label>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-[#4BD0A0] shrink-0" />
                        <span className="text-[12px] leading-[16px] text-[#8e8e8e]">
                          I want to receive news and relevant offers
                        </span>
                      </label>
                    </div>

                    {/* Submit button - green */}
                    <button
                      type="submit"
                      className="w-full h-[52px] mt-2 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] text-[16px] font-semibold rounded-[12px] border-0 cursor-pointer transition-colors"
                    >
                      Get Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS CARDS - 4 column grid of white rounded cards */}
        <div className="grid grid-cols-4 max-[1023px]:grid-cols-2 gap-7 max-[767px]:gap-2 mt-[60px] max-[767px]:mt-[40px]">
          {stats.map((stat, i) => (
            <div key={i} className="flex h-full bg-white rounded-[32px] box-border relative">
              <div className="flex flex-col p-4 pb-6">
                {/* Title badge - light blue pill */}
                <span className="inline-flex items-center px-2 py-[2px] bg-[#dbedfb] text-[#000] text-[12px] leading-[18px] rounded-[16px] w-fit break-words">
                  {stat.title}
                </span>
                {/* Value text */}
                <p className="mt-2 text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] text-[#000] text-left break-words m-0">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FEATURES WITH IMAGES SECTION - "Most visible profession in IT"
   ============================================================ */
function FeaturesWithImagesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5 py-[80px] max-[767px]:py-[48px]">
        {/* Block title */}
        <div className="flex mb-[60px] max-[767px]:mb-[45px] max-w-[880px] max-[1023px]:max-w-[700px] max-[479px]:max-w-[280px]">
          <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] w-full m-0">
            The most visible profession in IT
          </h2>
        </div>

        {/* Feature card - white bg, rounded corners, image on right */}
        <div className="relative bg-white rounded-[32px] overflow-hidden border border-[#eee]">
          <div className="flex items-stretch max-[767px]:flex-col-reverse">
            {/* Text wrapper - left side, inside the card */}
            <div className="py-[60px] pl-[60px] pr-[60px] max-[767px]:p-6 max-w-[510px] max-[767px]:max-w-none">
              <h3 className="text-[34px] max-[767px]:text-[22px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">
                Specialists work with the appearance of websites and applications
              </h3>
              <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-black/70 mt-[40px] max-[767px]:mt-[26px] m-0">
                They lay out interfaces, transfer design mockups to code, and ensure logical operation of content and buttons — such specialists are needed by every IT product.
              </p>
              <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-black/70 mt-[24px] m-0">
                Frontend is studied to start or develop a career: designers upgrade their layout skills, and backend developers become universal specialists.
              </p>
            </div>

            {/* Image wrapper - right side, fills remaining space with padding */}
            <div className="flex-1 flex items-center justify-center min-h-[300px] max-[767px]:w-full p-6 max-[767px]:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/course/graphic_fe_1.webp"
                alt=""
                className="w-full h-full max-h-[552px] max-[767px]:max-h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SALARY SECTION - Median salaries with progress bar graph
   ============================================================ */
function SalarySection() {
  const salaryPoints = [
    { label: 'Beginner', value: '87,000 ₽', position: 0 },
    { label: 'Experienced', value: '197,000 ₽', position: 50 },
    { label: 'Lead', value: '337,000 ₽', position: 100 },
  ]

  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[40px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* White card */}
        <div className="bg-white rounded-[32px] p-8 max-[767px]:p-4 relative">
          {/* Title */}
          <h2 className="text-[20px] font-medium leading-[28px] text-[#27292d] m-0">
            <u>Median</u> salaries of frontend developers
          </h2>

          {/* Price section */}
          <div className="flex items-end mt-8 max-[767px]:mt-4">
            <span className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#27292d]">
              197,000 ₽
            </span>
            <span className="text-[16px] leading-[22px] text-[#8e8e8e] ml-3 mb-1">
              per month
            </span>
          </div>

          {/* Description */}
          <p className="text-[16px] leading-[22px] text-[#8e8e8e] mt-4 max-w-[600px] m-0">
            Earned by developers with about 2 years of experience. Specialists know advanced JS, can optimize projects and conduct reviews.
          </p>

          {/* Progress bar graph */}
          <div className="mt-12 max-[767px]:mt-8 relative">
            {/* Track with progress */}
            <div className="relative h-[6px] bg-[#d4f6ec] rounded-full mx-3">
              {/* Progress fill - 50% to show "experienced" level */}
              <div className="absolute h-[6px] bg-[#47c397] rounded-l-full left-0 top-0 z-[1]" style={{ width: '50%' }} />
              {/* Stop dots */}
              {salaryPoints.map((point, i) => (
                <div
                  key={i}
                  className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-[2] transition-all ${
                    i <= 1 ? 'bg-[#47c397] shadow-[inset_0_0_0_4px_#d4f6ec]' : 'bg-[#d4f6ec] shadow-[inset_0_0_0_4px_#d4f6ec]'
                  }`}
                  style={{ left: `${point.position}%` }}
                />
              ))}
            </div>

            {/* Labels below the bar */}
            <div className="relative mt-6 mx-3 h-[60px]">
              {salaryPoints.map((point, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center transform -translate-x-1/2"
                  style={{ left: `${point.position}%`, top: 0 }}
                >
                  <span className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] font-semibold max-[767px]:font-medium text-[#27292d] whitespace-nowrap">
                    {point.value}
                  </span>
                  <span className="text-[12px] max-[767px]:text-[10px] leading-[18px] max-[767px]:leading-[12px] text-[#8e8e8e] mt-1 whitespace-nowrap">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Source note */}
          <p className="text-[14px] leading-[20px] text-[#8e8e8e] mt-8 max-[767px]:mt-6 m-0">
            Source — Habr Career. Data is constantly updated and may differ from that provided.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   TECH ICONS - Real SVG icons for technologies
   ============================================================ */
function TechIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, React.ReactElement> = {
    html5: (
      <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none">
        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
        <path fill="#EBEBEB" d="M64 52.455H45.788L44.531 38.36H64V24.568H27.496l.331 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H32.816l1.928 21.609 28.193 7.826.063-.017z"/>
        <path fill="#fff" d="M63.952 52.455v13.794h16.947l-1.597 17.849-15.35 4.143v14.386l28.215-7.82.207-2.325 3.234-36.233.336-3.694h-3.708zM63.952 24.568V38.36h33.294l.276-3.092.628-6.913.331-3.692z"/>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none">
        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"/>
        <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.36H64.001V22.961h34.682l-.332 3.711-3.4 38.155H64.001V51.429z"/>
        <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.865.063-.018v-14.392z"/>
        <path fill="#fff" d="M63.948 51.429v14.398h17.032l-1.605 17.929-15.427 4.164v14.392l28.35-7.856.208-2.326 3.249-36.381.339-3.72H63.948z"/>
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none">
        <rect width="128" height="128" fill="#F7DF1E" rx="8"/>
        <path d="M76.44 99.48c1.84 3.77 4.21 6.57 8.43 6.57 3.74 0 6.13-1.87 6.13-4.46 0-3.1-2.45-4.2-6.59-6.01l-2.26-.97c-6.53-2.78-10.87-6.27-10.87-13.64 0-6.79 5.17-11.95 13.25-11.95 5.75 0 9.88 2 12.85 7.24l-7.04 4.52c-1.55-2.78-3.22-3.88-5.81-3.88-2.64 0-4.31 1.67-4.31 3.88 0 2.71 1.67 3.81 5.55 5.49l2.26.97c7.69 3.3 12.03 6.66 12.03 14.22 0 8.15-6.4 12.62-14.99 12.62-8.41 0-13.84-4.01-16.5-9.26l7.27-4.39zM38.31 99.68c1.42 2.52 2.71 4.65 5.82 4.65 2.97 0 4.84-1.16 4.84-5.68V69.89h9.04v28.85c0 9.37-5.49 13.64-13.51 13.64-7.24 0-11.42-3.74-13.58-8.24l7.39-4.46z"/>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none">
        <circle cx="64" cy="64" r="11" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="4" fill="none">
          <ellipse cx="64" cy="64" rx="56" ry="22"/>
          <ellipse cx="64" cy="64" rx="56" ry="22" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="56" ry="22" transform="rotate(120 64 64)"/>
        </g>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 128 128" width="100%" height="100%" fill="#181717">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.671.413-3.671 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.526-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.072-1.623 16.61 6.191 4.813-1.338 9.977-2.009 15.107-2.032 5.13.023 10.303.694 15.125 2.032 11.526-7.814 16.59-6.191 16.59-6.191 3.287 8.318 1.22 14.46.592 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.302-27.574 29.796 2.167 1.874 4.097 5.549 4.097 11.183 0 8.087-.069 14.583-.069 16.574 0 1.607 1.088 3.49 4.148 2.897 23.981-7.994 41.263-30.622 41.263-57.294C124.388 32.138 97.35 5.103 64 5.103z"/>
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke={color} strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="4"/>
        <path d="M7 8h2M7 12h2M7 16h3M13 8h4M13 12h4M13 16h4" strokeLinecap="round"/>
      </svg>
    ),
    websockets: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke={color} strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2" strokeLinecap="round"/>
        <path d="M8 14l-2 4M16 14l2 4" strokeLinecap="round"/>
      </svg>
    ),
    jsx: (
      <svg viewBox="0 0 128 128" width="100%" height="100%" fill="none">
        <circle cx="64" cy="64" r="11" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="4" fill="none">
          <ellipse cx="64" cy="64" rx="56" ry="22"/>
          <ellipse cx="64" cy="64" rx="56" ry="22" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="56" ry="22" transform="rotate(120 64 64)"/>
        </g>
        <text x="64" y="72" textAnchor="middle" fontSize="20" fill="#61DAFB" fontWeight="bold">JSX</text>
      </svg>
    ),
    reactrouter: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#CA4245" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M6 12h12M12 6v12" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="#CA4245"/>
      </svg>
    ),
    virtualdom: (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#61DAFB" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <rect x="7" y="7" width="10" height="10" rx="1" fill="#61DAFB" opacity="0.3"/>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  }

  return icons[name] || (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill={color}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}

/* ============================================================
   SKILLS SECTION - "We teach what works" with skills list + tech tags
   ============================================================ */
function SkillsSection() {
  const coreSkills = [
    'Adaptive and mobile layout using flexboxes',
    'Working with variables, data types, expressions and modules in JavaScript',
    'Creating prototypes, constructors, iterators, generators',
    'Developing interactive pages with media processing',
    'Understanding client-server interaction, creating SPA',
    'Using React, JSX, React Router and VirtualDOM for interfaces',
  ]

  const advancedSkills = [
    'Asynchronous programming',
    'Advanced work with Proxy, Reflection, containers',
    'Testing, CI, working with forms, Drag-and-drop, HTTP',
    'State management via Redux Toolkit and Redux Saga',
  ]

  const techTags = [
    { name: 'HTML5', icon: 'html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'css3', color: '#1572B6' },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
    { name: 'React', icon: 'react', color: '#61DAFB' },
    { name: 'GitHub', icon: 'github', color: '#181717' },
    { name: 'API', icon: 'api', color: '#48a1e6' },
    { name: 'WebSockets', icon: 'websockets', color: '#48a1e6' },
    { name: 'JSX', icon: 'jsx', color: '#61DAFB' },
    { name: 'React Router', icon: 'reactrouter', color: '#CA4245' },
    { name: 'VirtualDOM', icon: 'virtualdom', color: '#61DAFB' },
  ]

  return (
    <section className="bg-white py-[80px] max-[767px]:py-[40px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Block title */}
        <div className="mb-[60px] max-[767px]:mb-[45px] max-w-[880px]">
          <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0">
            We teach what works
          </h2>
          <p className="text-[16px] leading-[22px] text-[#8e8e8e] mt-[20px] max-[767px]:mt-[15px] m-0">
            Your skills will match employer and market requirements
          </p>
        </div>

        {/* Resume card - gray bg, rounded */}
        <div className="bg-[#f3f4f7] rounded-[32px] p-8 max-[767px]:p-5">
          {/* Profession name */}
          <div className="mt-[40px] max-[479px]:mt-5">
            <p className="text-[28px] max-[479px]:text-[16px] leading-[32px] max-[479px]:leading-[24px] font-medium text-[#1B2126] m-0">
              Frontend developer, interface developer
            </p>
          </div>

          {/* Two columns - core skills | advanced skills */}
          <div className="flex mt-[40px] max-[1023px]:flex-col max-[479px]:mt-5">
            {/* Left column - core skills */}
            <div className="w-full max-w-[510px] relative border-t border-black/20 pt-6 max-[479px]:pt-5">
              <ul className="m-0 p-0 list-none">
                {coreSkills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 mb-[10px] max-[479px]:mb-0 last:mb-0">
                    <span className="text-[16px] leading-[22px] text-[#1B2126] font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column - advanced skills */}
            <div className="w-full max-w-[510px] relative border-t border-black/20 pt-6 max-[1023px]:mt-6 max-[479px]:pt-5 ml-auto">
              {/* Section label */}
              <p className="text-[16px] leading-[22px] text-[#8e8e8e] font-medium mb-4 m-0">
                After the extended program
              </p>
              <ul className="m-0 p-0 list-none">
                {advancedSkills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 mb-[10px] max-[479px]:mb-0 last:mb-0">
                    <span className="text-[16px] leading-[22px] text-[#1B2126] font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology icons - flex-wrap, 220px items with 32x32 icons, 2 columns on mobile */}
          <div className="flex flex-wrap pt-4 max-[1023px]:flex-col max-[479px]:flex-row max-[479px]:flex-wrap">
            {techTags.map((tech, i) => (
              <div key={i} className="box-border w-[220px] max-[479px]:w-[50%] mb-[25px] max-[479px]:mb-3 relative cursor-pointer">
                <div className="flex items-center">
                  {/* Icon - 32x32 (24x24 on mobile) */}
                  <span className="w-8 h-8 max-[479px]:w-6 max-[479px]:h-6 mr-2 inline-block shrink-0">
                    <TechIcon name={tech.icon} color={tech.color} />
                  </span>
                  {/* Title */}
                  <span className="text-[16px] max-[479px]:text-[14px] leading-[22px] max-[479px]:leading-[20px] font-medium text-[#1B2126] overflow-hidden">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   DIPLOMA SECTION - Certificate with diploma image
   ============================================================ */
function DiplomaSection() {
  return (
    <section className="bg-[#F3F4F7] pt-5 pb-[80px] max-[767px]:pt-[10px] max-[767px]:pb-[40px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* White card */}
        <div className="bg-white rounded-[32px] p-[60px] max-[767px]:p-5 relative overflow-hidden">
          {/* Text container */}
          <div className="flex flex-col gap-5 w-[690px] max-[1239px]:w-[577px] max-[1023px]:w-full max-[1023px]:mb-[224px] max-[767px]:mb-[154px] max-[767px]:gap-4">
            {/* Title */}
            <h3 className="text-[34px] max-[767px]:text-[22px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">
              Your qualification will be confirmed by a diploma of professional retraining
            </h3>
            {/* Description */}
            <p className="text-[22px] max-[767px]:text-[18px] leading-[28px] max-[767px]:leading-[26px] text-black/60 m-0">
              We teach under a <a href="#" className="text-[#0087CD] underline">state license</a>
            </p>
            <p className="text-[16px] leading-[22px] text-black/60 m-0">
              Upon successful defense of the final project, you will receive a document that you can add to your resume and show when applying for a job.
            </p>
            {/* Example button */}
            <a href="#" className="inline-flex items-center justify-center h-[48px] px-6 border border-[#1B2126] rounded-[8px] text-[#1B2126] text-[14px] font-medium no-underline w-fit hover:bg-[#1B2126] hover:text-white transition-colors">
              Example document
            </a>
          </div>

          {/* Diploma image - absolute positioned on the right */}
          <div className="absolute bottom-0 right-0 max-[1023px]:right-5 max-[1023px]:bottom-auto max-[1023px]:top-[200px] max-[767px]:top-[120px] max-[767px]:right-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/course/diploma.webp"
              alt="Diploma example"
              className="w-[400px] max-[1023px]:w-[300px] max-[767px]:w-[220px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   GROWTH SECTION - "Approach for your professional growth" with 3 cards
   ============================================================ */
function GrowthSection() {
  const cards = [
    {
      title: '22 webinars and 19 Q&A sessions with experts',
      description: 'You will break down complex topics and current tools in online classes. Chat with developers about work tasks and career development.',
      bgImage: '/images/course/graphic_utp.webp',
    },
    {
      title: 'Program aligned with 2026 market requirements',
      description: 'More than 100 experts and an AI-agent orchestrator constantly analyze course content. We update the program for new requirements on average within 2 weeks.',
      bgImage: '/images/course/graphic_ocamid_goal_b_8.webp',
    },
    {
      title: 'Continuous support',
      description: 'The course team, assistants and coordinators will help with assignments, software installation, and answer your questions within 24 hours.',
      bgImage: null,
    },
  ]

  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[40px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Section title */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] mb-[50px] max-[767px]:mb-[40px] max-w-[880px] m-0">
          An approach aimed at your professional growth
        </h2>

        {/* 3 cards in a row */}
        <div className="flex gap-5 max-[1239px]:flex-wrap max-[767px]:flex-col max-[767px]:gap-[10px]">
          {cards.map((card, i) => (
            <div key={i} className="flex-1 relative">
              <div className="flex flex-col gap-4 max-[767px]:gap-3 p-8 max-[767px]:p-5 rounded-[32px] bg-white w-full box-border relative overflow-hidden min-h-[280px]">
                {/* Background image - absolute, bottom right, behind text */}
                {card.bgImage && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={card.bgImage}
                    alt=""
                    className="absolute bottom-0 right-0 w-[700px] h-[700px] max-w-none max-h-none object-contain z-0 pointer-events-none max-[767px]:hidden"
                    style={{ opacity: 0.9 }}
                  />
                )}
                <h3 className="text-[24px] max-[767px]:text-[18px] leading-[32px] max-[767px]:leading-[24px] font-medium text-[#1B2126] m-0 z-[1] relative">
                  {card.title}
                </h3>
                <p className="text-[16px] leading-[22px] max-[767px]:leading-[24px] text-black/80 m-0 z-[1] relative">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   DESCRIPTION SECTION - What you'll learn, skills
   ============================================================ */
function DescriptionSection({ course }: { course: any }) {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-10 max-[1023px]:px-6 max-[767px]:px-4 py-[80px] max-[767px]:py-[48px]">
        {/* Section title */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] mb-10 max-[767px]:mb-6">
          What you&apos;ll learn
        </h2>

        {/* Skills grid */}
        <div className="grid grid-cols-2 max-[767px]:grid-cols-1 gap-6">
          {[
            'Build responsive web interfaces',
            'Work with modern JavaScript frameworks',
            'Create pixel-perfect layouts from designs',
            'Collaborate using Git and modern dev tools',
            'Debug and optimize web applications',
            'Deploy projects to production',
          ].map((skill, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-[#f5f5f5] rounded-[16px]">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#d4f6ec] rounded-full">
                <Check className="w-4 h-4 text-[#29a680]" />
              </div>
              <span className="text-[16px] leading-[24px] text-[#1B2126]">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CURRICULUM SECTION - Collapsible modules list
   ============================================================ */
function CurriculumSection({ course }: { course: any }) {
  // Get chapters from course data if available
  const chapters = course?.chapters || []

  return (
    <section id="curriculum" className="bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-10 max-[1023px]:px-6 max-[767px]:px-4 py-[80px] max-[767px]:py-[48px]">
        {/* Section header */}
        <div className="mb-10 max-[767px]:mb-6">
          <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] mb-4">
            Course Program
          </h2>
          {chapters.length > 0 && (
            <p className="text-[16px] text-[#8e8e8e]">
              {chapters.length} modules in the program
            </p>
          )}
        </div>

        {/* Modules list */}
        <div className="flex flex-col gap-3">
          {chapters.length > 0 ? (
            chapters.map((chapter: any, index: number) => (
              <ModuleAccordion key={chapter.id || index} module={chapter} index={index} />
            ))
          ) : (
            /* Placeholder modules when no chapters data */
            <>
              <ModuleAccordion module={{ name: 'Introduction & Setup', activities: [] }} index={0} />
              <ModuleAccordion module={{ name: 'Core Concepts', activities: [] }} index={1} />
              <ModuleAccordion module={{ name: 'Advanced Topics', activities: [] }} index={2} />
              <ModuleAccordion module={{ name: 'Projects & Practice', activities: [] }} index={3} />
              <ModuleAccordion module={{ name: 'Final Assessment', activities: [] }} index={4} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function ModuleAccordion({ module, index }: { module: any; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0)
  const activities = module?.activities || []

  return (
    <div className="bg-white rounded-[20px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 max-[767px]:p-4 text-left hover:bg-[#fafafa] transition-colors"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="text-[14px] font-medium text-[#8e8e8e] shrink-0 w-8">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-[20px] max-[767px]:text-[16px] font-semibold text-[#1B2126] truncate">
            {module.name || module.title || `Module ${index + 1}`}
          </h3>
        </div>
        <div className="shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5f5]">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#1B2126]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#1B2126]" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 max-[767px]:px-4 pb-6 max-[767px]:pb-4 border-t border-[#f0f0f0]">
          {activities.length > 0 ? (
            <ul className="pt-4 space-y-3">
              {activities.map((activity: any, i: number) => (
                <li key={activity.id || i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#29a680] shrink-0" />
                  <span className="text-[15px] leading-[22px] text-[#1B2126]">
                    {activity.name || activity.title || `Lesson ${i + 1}`}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="pt-4 text-[14px] text-[#8e8e8e]">
              Course content will be available after enrollment
            </p>
          )}
        </div>
      )}
    </div>
  )
}

/* ============================================================
   PRICING SECTION - Plan cards (dark bg)
   ============================================================ */
function PricingSection({ course, orgslug }: { course: any; orgslug: string }) {
  return (
    <section id="pricing" className="bg-[#141516] rounded-t-[40px] max-[767px]:rounded-t-[24px]">
      <div className="max-w-[1200px] mx-auto px-10 max-[1023px]:px-6 max-[767px]:px-4 py-[100px] max-[767px]:py-[60px]">
        {/* Section header */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-white mb-4">
          Pricing
        </h2>
        <p className="text-[16px] text-white/60 mb-10 max-[767px]:mb-6">
          Choose the plan that works for you
        </p>

        {/* Pricing cards */}
        <div className="grid grid-cols-2 max-[767px]:grid-cols-1 gap-5">
          {/* Basic Plan */}
          <div className="bg-[#27292d] rounded-[24px] p-8 max-[767px]:p-6 flex flex-col">
            <h3 className="text-[24px] max-[767px]:text-[20px] font-bold text-white mb-3">
              Basic Program
            </h3>
            <p className="text-[14px] text-white/60 mb-6 leading-[20px]">
              Get started with the fundamentals and build your first projects
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-bold text-white">Free</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Access to all course materials',
                'Hands-on projects',
                'Community support',
                'Certificate upon completion',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4BD0A0] shrink-0 mt-0.5" />
                  <span className="text-[14px] leading-[20px] text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={getUriWithOrg(orgslug, `/course/${course?.course_uuid?.replace('course_', '')}`)}
              className="inline-flex items-center justify-center h-[52px] w-full bg-[#4BD0A0] hover:bg-[#3dba8e] text-[#1B2126] text-[16px] font-semibold rounded-[12px] no-underline transition-colors"
            >
              Start Learning
            </Link>
          </div>

          {/* Premium Plan - Recommended */}
          <div className="relative bg-gradient-to-br from-[#1a3a5c] to-[#27292d] rounded-[24px] p-8 max-[767px]:p-6 flex flex-col border border-[#0087CD]/30">
            {/* Badge */}
            <div className="absolute -top-3 left-8">
              <span className="inline-flex items-center px-4 py-1.5 bg-[#0087CD] text-white text-[12px] font-semibold rounded-full">
                Recommended
              </span>
            </div>

            <h3 className="text-[24px] max-[767px]:text-[20px] font-bold text-white mb-3 mt-2">
              Extended Program
            </h3>
            <p className="text-[14px] text-white/60 mb-6 leading-[20px]">
              Everything from Basic, plus advanced topics and mentorship
            </p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-bold text-white">Contact Us</span>
              </div>
              <p className="text-[13px] text-white/40 mt-1">For enterprise and team pricing</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Everything in Basic program',
                'Advanced topics & frameworks',
                'Personal mentor support',
                '1-on-1 career guidance',
                'Priority support',
                'Extended certificate',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4BD0A0] shrink-0 mt-0.5" />
                  <span className="text-[14px] leading-[20px] text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className="inline-flex items-center justify-center h-[52px] w-full bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-semibold rounded-[12px] no-underline transition-colors border-0 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FAQ SECTION - Collapsible questions
   ============================================================ */
function FAQSection() {
  const faqs = [
    {
      question: 'What are the prerequisites for this course?',
      answer: 'No prior programming experience is required. We start from the basics and gradually build up to advanced concepts.',
    },
    {
      question: 'How long do I have access to the course?',
      answer: 'You get lifetime access to all course materials from the moment of enrollment.',
    },
    {
      question: 'Is there a certificate upon completion?',
      answer: 'Yes, upon successful completion of the course and all assignments, you will receive a professional certificate.',
    },
    {
      question: 'Can I study at my own pace?',
      answer: 'Yes, the course is designed to be flexible. You can study at your own pace while having access to scheduled live sessions with instructors.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept MTN Mobile Money, bank cards, and bank transfers. Installment plans are also available.',
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-10 max-[1023px]:px-6 max-[767px]:px-4 py-[80px] max-[767px]:py-[48px]">
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] mb-10 max-[767px]:mb-6">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 max-[767px]:py-4 text-left"
      >
        <h3 className="text-[18px] max-[767px]:text-[16px] font-medium text-[#1B2126] pr-4">
          {question}
        </h3>
        <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5f5]">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#1B2126]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#1B2126]" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 max-[767px]:pb-4">
          <p className="text-[16px] max-[767px]:text-[14px] leading-[24px] text-[#8e8e8e]">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}
