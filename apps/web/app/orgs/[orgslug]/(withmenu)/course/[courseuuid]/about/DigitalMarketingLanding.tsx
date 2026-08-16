'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCourseMeta } from '@/hooks/queries/useCourses'
import { useOrg } from '@/hooks/queries/useOrg'
import { ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'
import { getCourseThumbnailMediaDirectory } from '@services/media/media'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'

interface DigitalMarketingLandingProps {
  courseuuid: string
  orgslug: string
}

export default function DigitalMarketingLanding({ courseuuid, orgslug }: DigitalMarketingLandingProps) {
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

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />
      <HeroSection course={course} orgslug={orgslug} orgUuid={org?.org_uuid} />
      <ApproachSection />
      <CareerOutcomesSection />
      <SalarySection />
      <SkillsToolsSection />
      <DiplomaSection />
      <PracticeSection />
      <ProgramSection />
      <PricingSection courseuuid={courseuuid} orgslug={orgslug} />
      <FaqSection />
      <FooterSection />
    </div>
  )
}

/* ============================================================
   SECTION 1: HERO
   Dark background, title, description, badges, consultation
   form on the right, 4 stats cards below
   ============================================================ */
function HeroSection({ course, orgslug, orgUuid }: { course: any; orgslug: string; orgUuid?: string }) {
  const thumbnailImage = course?.thumbnail_image && orgUuid
    ? getCourseThumbnailMediaDirectory(orgUuid, course?.course_uuid, course?.thumbnail_image)
    : null

  const stats = [
    { title: 'When', value: 'August 21, 2026 – October 14, 2027' },
    { title: 'Training format', value: 'Video lectures, webinars, training sessions, case studies, assignments with assessment, and mentoring from an experienced specialist' },
    { title: 'Escort', value: 'Individual consultations, support in training and job search' },
    { title: 'Document', value: 'Diploma of professional retraining' },
  ]

  return (
    <section className="relative overflow-hidden min-h-[654px] max-[1239px]:min-h-0" style={{ backgroundColor: '#1B2126' }}>
      {/* Background image - absolute, covers entire section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/course/hero_bg_marketing.svg"
          alt=""
          className="absolute top-0 left-1/2 transform -translate-x-1/2 min-w-full min-h-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Main content wrapper */}
      <div className="relative max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full pt-[110px] pb-[80px] max-[1023px]:pt-[140px] max-[1023px]:pb-[63px] max-[767px]:pt-0 max-[767px]:pb-[30px] max-[767px]:px-5 box-border z-[1]">
        {/* Two-column row */}
        <div className="flex justify-between w-full gap-5 max-[767px]:flex-col max-[767px]:gap-0">

          {/* LEFT COLUMN - Course info */}
          <div className="flex flex-col max-w-[553px] max-[767px]:max-w-none max-[767px]:w-full relative z-[1]">
            {/* Subtitle badges row */}
            <div className="flex gap-2 justify-start flex-wrap w-[85%] max-[767px]:w-full max-[767px]:mb-4 max-[767px]:pt-[20px]">
              <div className="flex items-center px-[15px] py-[6px] min-h-[24px] rounded-full bg-[#0b3a82] text-white text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] w-fit border-0">
                Includes an employment program
              </div>
              <div className="flex items-center px-[15px] py-[6px] min-h-[24px] rounded-full border border-[#9b9fa3] text-white text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] w-fit">
                The program includes classes on AI
              </div>
            </div>

            {/* MOBILE 3D illustration - shown only on mobile, between badges and title card */}
            {/* The title card below overlaps it by ~1/4 */}
            <div className="hidden max-[767px]:flex justify-center -mt-2 mb-[-60px] relative z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/course/hero_3d_marketing.webp"
                alt=""
                className="w-full max-w-[420px] h-auto object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Hero title + description block */}
            <div className="max-[767px]:bg-[#282d33] max-[767px]:p-6 max-[767px]:rounded-[32px] max-[767px]:mt-[10px] max-[767px]:z-[1] relative">
              {/* Title */}
              <h1 className="text-[57px] max-[1023px]:text-[57px] max-[767px]:text-[28px] leading-[1.12] max-[767px]:leading-[32px] font-bold text-white my-6 max-[767px]:mt-0 max-[767px]:mb-4 max-w-[680px] max-[1023px]:max-w-full">
                Internet Marketer: Advanced Course
              </h1>

              {/* Description */}
              <p className="text-[18px] max-[767px]:text-[16px] leading-[28px] max-[767px]:leading-[24px] text-white mb-0 max-w-[553px]">
                Learn the basics of internet marketing, two specializations, and neural networks to work faster and more effectively. Practice your skills on a simulator or on your own project.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-10 max-[767px]:mt-6">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors"
              >
                To tariffs
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 border border-white/40 hover:border-white text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors bg-white/10"
              >
                View the program
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - 3D graphic + Registration form */}
          <div className="flex flex-col relative max-[767px]:w-full max-[767px]:mt-8">
            {/* 3D illustration - absolute, behind the form, only on large desktop */}
            {/* 667x640px positioned top-right, hidden below 1239px */}
            <div className="absolute top-0 right-0 w-[667px] h-[640px] max-[1239px]:hidden pointer-events-none z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/course/hero_3d_marketing.webp"
                alt=""
                className="max-w-full max-h-full object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Registration form wrapper */}
            <div className="relative w-[344px] max-[1023px]:w-full max-[767px]:w-full shrink-0 z-[1]">
              {/* Registration / Consultation card */}
              <div className="rounded-[20px] overflow-hidden relative bg-white">
                {/* Discount ribbon */}
                <div className="absolute top-[-7px] right-[-9px] max-[767px]:top-[-9px] max-[767px]:right-[-14px] w-[143px] h-[123px] z-[1] rotate-45 pointer-events-none">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                    <span className="text-[10px] uppercase leading-tight">PROMOTION</span>
                    <span className="text-[16px] leading-tight">-50<span className="text-[12px]">%</span></span>
                  </div>
                </div>

                {/* Form content */}
                <div className="p-6 max-[767px]:p-5">
                  <p className="text-[18px] font-semibold text-[#000] mb-5 leading-[24px]">
                    We&apos;ll help you choose the right training
                  </p>

                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-[48px] px-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0087CD]"
                    />
                    <input
                      type="tel"
                      placeholder="+237 (600) 000-000"
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
                          I want to receive news and current offers
                        </span>
                      </label>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full h-[52px] mt-2 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] text-[16px] font-semibold rounded-[12px] border-0 cursor-pointer transition-colors"
                    >
                      Get a consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS CARDS - 4 column grid */}
        <div className="grid grid-cols-4 max-[1023px]:grid-cols-2 gap-7 max-[767px]:gap-2 mt-[60px] max-[767px]:mt-[40px]">
          {stats.map((stat, i) => (
            <div key={i} className="flex h-full bg-white rounded-[32px] box-border relative">
              <div className="flex flex-col p-4 pb-6">
                <span className="inline-flex items-center px-2 py-[2px] bg-[#dbedfb] text-[#000] text-[12px] leading-[18px] rounded-[16px] w-fit break-words">
                  {stat.title}
                </span>
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
   SECTION 3: CAREER OUTCOMES
   "This course will give you a solid foundation in the digital field"
   One item with image on left (reversed) and text on right
   ============================================================ */
function CareerOutcomesSection() {
  return (
    <section className="bg-white py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Section title */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[60px] max-[767px]:mb-[40px] max-w-[880px]">
          This course will give you a solid foundation in the digital field.
        </h2>

        {/* Item card - reversed (image on left, text on right) */}
        <div className="bg-white rounded-[32px] overflow-hidden border border-[#eee]">
          <div className="flex items-stretch max-[767px]:flex-col-reverse">
            {/* Image - left side (reversed) */}
            <div className="overflow-hidden w-[613px] h-[552px] max-[1239px]:w-full max-[1239px]:h-[500px] max-[1023px]:h-auto max-[1023px]:max-h-[600px] max-[767px]:w-full max-[767px]:h-[300px] flex justify-center items-center box-border shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/course/career_flexibility.webp"
                alt="Work flexibly and confidently"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text - right side */}
            <div className="flex-1 flex flex-col justify-center p-[60px] max-[1239px]:p-[68px] max-[767px]:p-6 max-[767px]:pb-8">
              {/* Title */}
              <h3 className="text-[34px] max-[767px]:text-[22px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">
                Work flexibly and confidently
              </h3>

              {/* Subtitle */}
              <p className="text-[18px] leading-[24px] text-black/70 mt-10 max-[1023px]:mt-12 max-[767px]:mt-[26px] m-0">
                Relevant theory, modern tools, and two <u>specializations</u> will help you tackle complex projects.
              </p>

              {/* Description */}
              <p className="text-[18px] leading-[24px] text-black/70 mt-6 max-[767px]:text-[16px] m-0">
                You will be able to perform creative and strategic tasks and become a versatile digital specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 4: SALARY
   "Earn a salary above the market average" - interactive slider
   showing Junior/Middle/Senior salaries in FCFA
   ============================================================ */
function SalarySection() {
  const salaryPoints = [
    {
      label: 'Junior',
      sublabel: 'Experience up to 1 year',
      position: 0,
      salary: '200,000',
      description: 'Entry-level in small companies. Handles basic social media and assists with campaigns.',
    },
    {
      label: 'Middle',
      sublabel: '2-3 years of experience',
      position: 50,
      salary: '450,000',
      description: 'Manages full campaigns and advertising budgets. Specializes in SEO, SMM, or contextual ads.',
    },
    {
      label: 'Senior',
      sublabel: 'Experience from 3 years',
      position: 100,
      salary: '850,000',
      description: 'Leads strategy and teams. Works in large companies and multinationals.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(1)
  const active = salaryPoints[activeIndex]

  return (
    <section className="bg-[#F3F4F7] py-[50px] max-[767px]:py-[40px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Title + subtitle */}
        <div className="mb-[64px] max-[767px]:mb-[32px]">
          <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0">
            Earn a salary above the market average
          </h2>
          <p className="text-[16px] max-[767px]:text-[14px] max-[767px]:font-medium leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 mt-4 m-0 max-w-[600px]">
            Combine several areas of internet marketing—this combination of knowledge and skills will make you an attractive candidate for large companies.
          </p>
        </div>

        {/* White card */}
        <div className="bg-white rounded-[32px] p-8 max-[767px]:p-5 relative">
          {/* Card title */}
          <p className="text-[20px] font-medium leading-[28px] text-[#27292d] m-0">
            Internet Marketer Salary
          </p>

          {/* Price section - updates with slider */}
          <div className="flex items-end mt-8 max-[767px]:mt-4">
            <span
              key={active.salary}
              className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#27292d] transition-opacity duration-300"
              style={{ animation: 'fadeIn 0.3s ease-in-out' }}
            >
              {active.salary} FCFA&nbsp;
            </span>
            <span className="text-[16px] leading-[22px] text-[#8e8e8e] ml-3 mb-1">
              per month
            </span>
          </div>

          {/* Description - updates with slider */}
          <p
            key={active.description}
            className="text-[16px] leading-[22px] text-[#8e8e8e] mt-4 max-w-[600px] m-0"
            style={{ animation: 'fadeIn 0.3s ease-in-out' }}
          >
            {active.description}
          </p>

          {/* Interactive slider */}
          <div className="mt-12 max-[767px]:mt-8 relative">
            {/* Track */}
            <div className="relative h-[6px] bg-[#d4f6ec] rounded-full">
              {/* Progress fill - follows active position */}
              <div
                className="absolute h-[6px] bg-[#47c397] rounded-l-full left-0 top-0 z-[1] transition-all duration-300"
                style={{ width: `${active.position}%` }}
              />
              {/* Stop dots */}
              {salaryPoints.map((point, i) => (
                <div
                  key={i}
                  className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-[2] transition-all duration-300 ${
                    i <= activeIndex
                      ? 'bg-[#47c397] shadow-[inset_0_0_0_4px_#d4f6ec]'
                      : 'bg-[#d4f6ec] shadow-[inset_0_0_0_4px_#d4f6ec]'
                  }`}
                  style={{ left: `${point.position}%` }}
                />
              ))}
            </div>

            {/* Invisible range input overlay - covers full track for dragging */}
            <input
              type="range"
              min="0"
              max="2"
              step="1"
              value={activeIndex}
              onChange={(e) => setActiveIndex(Number(e.target.value))}
              className="absolute top-[-9px] left-0 right-0 w-full h-6 opacity-0 cursor-pointer z-[3] m-0"
              style={{ pointerEvents: 'auto' }}
              aria-label="Experience level slider"
            />

            {/* Labels below the bar - clickable */}
            <div className="relative mt-6 h-[60px]">
              {salaryPoints.map((point, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="absolute flex flex-col items-center bg-transparent border-0 p-0 cursor-pointer"
                  style={{
                    left: `${point.position}%`,
                    top: 0,
                    transform: i === 0 ? 'translateX(0%)' : i === salaryPoints.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)',
                  }}
                >
                  <span className={`text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] whitespace-nowrap transition-colors duration-300 ${
                    i === activeIndex ? 'font-bold text-[#47c397]' : 'font-semibold max-[767px]:font-medium text-[#27292d]'
                  }`}>
                    {point.label}
                  </span>
                  <span className="text-[12px] max-[767px]:text-[10px] leading-[18px] max-[767px]:leading-[12px] text-[#8e8e8e] mt-1 whitespace-nowrap">
                    {point.sublabel}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Source note */}
          <p className="text-[14px] leading-[20px] text-[#8e8e8e] mt-8 max-[767px]:mt-6 m-0">
            Source: <span className="font-medium">Glassdoor Cameroon</span>&nbsp;&amp; <span className="font-medium">WorldSalaries</span>&nbsp;2025 report
          </p>
        </div>
      </div>

      {/* Keyframe animation for salary/description transitions */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

/* ============================================================
   SECTION 5: SKILLS & TOOLS
   "We teach what works" - Resume-style card with Key skills,
   Soft skills (bullet lists) and Tools grid with real icons
   ============================================================ */
function SkillsToolsSection() {
  const keySkills = [
    'I analyze the target audience and competitors',
    "I formulate a unique selling proposition and analyze the website's usability.",
    'I create CJMs and build product hypotheses',
    'I plan KPIs and calculate unit economics',
    'I set up advertising campaigns and evaluate the effectiveness of online marketing channels.',
    'I plan online promotion and create a media plan',
    'I work with web analytics systems at an advanced level and visualize marketing reports.',
    'I develop a marketing strategy and create a budget',
  ]

  const softSkills = [
    'I can think about a product systemically',
    'I build processes and communicate productively with colleagues from related departments.',
    'I provide environmentally friendly feedback, and I know how to resolve conflicts and seek compromises.',
  ]

  const tools = [
    { name: 'Yandex Metrica', desc: 'Web analytics tool', icon: '/images/course/tool_yandex_metrica.png' },
    { name: 'Google Analytics', desc: 'Web analytics tool', icon: '/images/course/tool_google_analytics.png' },
    { name: 'Yandex Direct', desc: 'A system for placing search and thematic contextual advertising', icon: '/images/course/tool_yandex_direct.png' },
    { name: 'Google Ads', desc: 'Contextual advertising service', icon: '/images/course/tool_google_ads.png' },
    { name: 'VKontakte', desc: 'Advertising account for creating and managing advertising', icon: '/images/course/tool_vkontakte.png' },
    { name: 'myTarget', desc: 'A platform for placing targeted advertising', icon: '/images/course/tool_mytarget.png' },
    { name: 'Yandex Webmaster', desc: 'A toolbar for evaluating website indexing and customizing the site description in Yandex search results', icon: '/images/course/tool_yandex_webmaster.png' },
    { name: 'LiveDune', desc: 'Social media account analytics service', icon: '/images/course/tool_livedune.png' },
    { name: 'Zen', desc: 'A platform for viewing and creating content with a personalized feed', icon: '/images/course/tool_zen.png' },
    { name: 'BotHelp', desc: 'A platform for newsletters, autofunnels, and chatbots in messengers and social networks', icon: '/images/course/tool_bothelp.png' },
    { name: 'ChatGPT and other neural networks', desc: 'A versatile AI-powered chatbot that can answer queries, write code, and solve various problems.', icon: '/images/course/tool_chatgpt.png' },
  ]

  return (
    <section className="bg-white py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Title */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0">
          We teach what works
        </h2>
        <p className="text-[14px] leading-[20px] text-[#1B2126]/70 m-0 mt-2">
          You will add these skills and tools to your resume.
        </p>

        {/* Resume card */}
        <div className="mt-10 max-[479px]:mt-5">
          {/* Header - profession name */}
          <div className="flex items-center">
            <p className="text-[28px] max-[479px]:text-[16px] leading-[32px] max-[479px]:leading-[24px] font-medium text-[#1B2126] m-0">
              Internet marketer&nbsp;
            </p>
          </div>

          {/* Inner content - two columns */}
          <div className="flex mt-10 max-[1023px]:flex-col max-[479px]:mt-5">
            {/* LEFT - Skills (max 510px) */}
            <div className="w-[510px] max-w-full relative border-t border-[#e5e5e5] pt-6 max-[479px]:pt-5">
              {/* Key skills */}
              <p className="text-[18px] max-[479px]:text-[16px] leading-[24px] max-[479px]:leading-[24px] font-medium text-[#1B2126] m-0">
                Key skills
              </p>
              <ul className="m-0 p-0 list-none">
                {keySkills.map((skill, i) => (
                  <li key={i} className="flex mt-3 max-[479px]:mt-2 text-[16px] leading-[22px] text-[#1B2126]">
                    <span className="pr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Soft skills */}
              <div className="mt-6 max-[479px]:mt-5">
                <p className="text-[18px] max-[479px]:text-[16px] leading-[24px] font-medium text-[#1B2126] m-0">
                  Soft skills
                </p>
                <ul className="m-0 p-0 list-none">
                  {softSkills.map((skill, i) => (
                    <li key={i} className="flex mt-3 max-[479px]:mt-2 text-[16px] leading-[22px] text-[#1B2126]">
                      <span className="pr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT - Tools (margin-left 60px, max 490px) */}
            <div className="w-[490px] max-w-full ml-[60px] max-[1023px]:ml-0 max-[1023px]:mt-5 relative border-t border-[#e5e5e5] pt-6 max-[479px]:pt-5">
              {/* Tools title */}
              <p className="text-[18px] max-[479px]:text-[16px] leading-[24px] font-medium text-[#1B2126] m-0">
                Tools
              </p>

              {/* Tools grid - flex wrap, 2 columns (220px each) */}
              <div className="flex flex-wrap py-4 max-[1023px]:flex-col">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className="group relative w-[220px] max-[479px]:w-full mb-[25px] max-[479px]:mb-3 cursor-pointer"
                    style={{ marginRight: i % 2 === 0 ? '20px' : '0' }}
                  >
                    {/* Tool line - icon + name */}
                    <div className="flex items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-8 h-8 max-[479px]:w-6 max-[479px]:h-6 mr-2 object-contain"
                      />
                      <p className="text-[16px] max-[479px]:text-[14px] leading-[22px] max-[479px]:leading-[20px] font-medium text-[#1B2126] m-0 line-clamp-2">
                        {tool.name}
                      </p>
                    </div>

                    {/* Description - hidden, shows on hover as tooltip */}
                    <div className="hidden group-hover:block absolute z-10 top-[-8px] left-[-12px] w-[260px] bg-white rounded-[12px] p-2 pb-4 pl-3 shadow-lg border border-[#eee]">
                      <div className="flex items-center mb-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-8 h-8 mr-2 object-contain"
                        />
                        <p className="text-[16px] leading-[22px] font-medium text-[#1B2126] m-0">
                          {tool.name}
                        </p>
                      </div>
                      <p className="text-[12px] leading-[18px] text-[#1B2126] m-0 mt-2">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 6: DIPLOMA
   "Your skills will be confirmed by a professional retraining
   diploma" - white card with text and rotated diploma image
   ============================================================ */
function DiplomaSection() {
  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* White card with overflow hidden */}
        <div className="bg-white rounded-[32px] p-[60px] max-[767px]:p-5 relative overflow-hidden">
          {/* Text container */}
          <div className="flex flex-col gap-5 max-[767px]:gap-4 w-[690px] max-[1239px]:w-[577px] max-[1023px]:w-full max-[1023px]:mb-[224px] max-[767px]:mb-[154px] relative z-[1]">
            {/* Title */}
            <h3 className="text-[34px] max-[767px]:text-[22px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">
              Your skills will be confirmed by a professional retraining diploma
            </h3>

            {/* Description with link */}
            <p className="text-[22px] max-[767px]:text-[18px] leading-[28px] max-[767px]:leading-[26px] text-black/60 m-0">
              We teach under&nbsp;<a href="#" className="text-[#0087CD] underline">a state license.</a>
            </p>

            {/* Text */}
            <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-black/60 m-0">
              Upon successful defense of your final project, you will receive a document that you can add to your resume and show when applying for a job.
            </p>
          </div>

          {/* Diploma image - absolute, rotated, bottom-right */}
          <div className="absolute right-[-125px] bottom-[-97px] w-[532px] h-[371px] max-[1239px]:right-[-273px] max-[1239px]:bottom-[-45px] max-[1239px]:w-[540px] max-[1239px]:h-[380px] max-[1023px]:right-[39px] max-[1023px]:bottom-[-192px] max-[1023px]:w-[578px] max-[1023px]:h-[406px] max-[767px]:right-[20px] max-[767px]:bottom-[-67px] max-[767px]:w-[286px] max-[767px]:h-[201px] z-0 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/course/diploma_sample.webp"
              alt="Sample document"
              className="w-full h-full object-cover rounded-[10px] max-[767px]:rounded-[8px]"
              style={{ transform: 'rotate(-3deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 7: PRACTICE
   "Practice from the first weeks" - dark bg, 3 cards with
   images, titles and descriptions in a carousel
   ============================================================ */
function PracticeSection() {
  const cards = [
    {
      title: 'Work on real projects from partners',
      texts: [
        'You will be able to quickly begin to develop skills – develop a strategy, set up promotion channels and test hypotheses',
        'Get a detailed analysis of practical tasks from current marketers - see what works and track the dynamics of leads, applications and payments',
      ],
      image: '/images/course/practice_projects.webp',
    },
    {
      title: 'Take real orders',
      texts: [
        "Learn how to find clients on Russia's largest freelance exchange FL.ru under the guidance of a curator",
        "Get access to a PRO account and a 20% rating boost—this will help you get started and start earning while you're still learning. It'll also give you the opportunity to practice and gain confidence in your skills.",
      ],
      image: '/images/course/practice_orders.webp',
    },
    {
      title: 'Build a portfolio',
      texts: [
        'Complete tasks from the practice of internet marketers and create a portfolio that will be appreciated by employers',
        'Back up your achievements with real metrics and analytics to clearly demonstrate the results of your work',
      ],
      image: '/images/course/practice_portfolio.webp',
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () => setActiveIdx((i) => (i === 0 ? cards.length - 1 : i - 1))
  const next = () => setActiveIdx((i) => (i === cards.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-black py-[100px] max-[767px]:py-[50px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Title + controls row */}
        <div className="flex items-center justify-between mb-[60px] max-[767px]:mb-[40px]">
          <h2 className="text-[56px] max-[767px]:text-[28px] leading-[58px] max-[767px]:leading-[32px] font-semibold text-white m-0">
            Practice from the first weeks
          </h2>

          {/* Navigation controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Counter */}
            <span className="text-[16px] text-white/50 mr-2">
              {String(activeIdx + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
            </span>
            {/* Prev button */}
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-[#f3f4f7] flex items-center justify-center border-0 cursor-pointer hover:bg-white transition-colors"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Next button */}
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-[#f3f4f7] flex items-center justify-center border-0 cursor-pointer hover:bg-white transition-colors"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          {/* Sliding track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="w-full shrink-0 pr-5"
              >
                <div className="bg-[#202023] rounded-[32px] p-10 max-[767px]:p-5">
                  <div className="flex gap-8 max-[1023px]:flex-col max-[767px]:gap-5">
                    {/* Image */}
                    <div className="w-[560px] h-[315px] max-[1239px]:w-[392px] max-[1239px]:h-auto max-[1023px]:w-full shrink-0 overflow-hidden rounded-[16px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col justify-center gap-4 flex-1">
                      <h3 className="text-[24px] max-[767px]:text-[20px] leading-[32px] max-[767px]:leading-[26px] font-semibold text-white m-0">
                        {card.title}
                      </h3>
                      {card.texts.map((text, j) => (
                        <p key={j} className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-white/70 m-0">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-8 justify-center">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 border-0 cursor-pointer ${
                i === activeIdx ? 'w-8 bg-[#4BD0A0]' : 'w-2 bg-white/30'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 10: PROGRAM / CURRICULUM
   "The training program is up to 14 months" - header with
   research note, accordion modules, specializations, CTA
   ============================================================ */
function ProgramSection() {
  const mainProgram = [
    {
      title: 'Marketing Basics',
      bonus: false,
      description: 'Introduction to internet marketing fundamentals. Learn how the digital marketing ecosystem works, key terms, and the role of a marketer in a company. Study consumer behavior, target audience analysis, and competitor research.',
    },
    {
      title: 'Promotion channels and tools',
      bonus: false,
      description: 'Overview of all major promotion channels: contextual advertising, targeted ads, SMM, SEO, email marketing, and content marketing. Learn to select the right channels for different business goals and budgets.',
    },
    {
      title: 'Data analytics',
      bonus: false,
      description: 'Learn to collect, analyze, and interpret marketing data. Work with key metrics, KPIs, unit economics, and ROI calculations. Build dashboards and visualize data for decision-making.',
    },
    {
      title: 'Web analytics',
      bonus: false,
      description: 'Master web analytics tools: Yandex Metrica and Google Analytics. Set up tracking, configure goals and funnels, analyze user behavior, and create reports to measure campaign effectiveness.',
    },
    {
      title: 'Marketing strategy',
      bonus: false,
      description: 'Develop comprehensive marketing strategies. Learn to create CJMs, build product hypotheses, formulate USPs, plan promotional activities, and create media plans and budgets.',
    },
    {
      title: 'Final project',
      bonus: false,
      description: 'Apply all acquired knowledge to develop a complete marketing strategy for a real or partner company. Present your project for defense and receive feedback from industry experts.',
    },
    {
      title: 'Working with tables',
      bonus: true,
      description: 'Practical skills in Google Sheets and Excel for marketers: data organization, formulas, pivot tables, and dashboards for tracking marketing metrics and budgets.',
    },
    {
      title: 'Advertising marking',
      bonus: true,
      description: 'Learn the legal requirements for advertising marking, working with the ORD system, and compliance with advertising regulations.',
    },
    {
      title: 'How to start freelancing',
      bonus: true,
      description: 'Step-by-step guide to launching your freelance career: finding clients on FL.ru, creating a profile, pricing your services, and managing projects independently.',
    },
    {
      title: 'Branding Basics',
      bonus: false,
      description: 'Fundamentals of brand building: brand identity, positioning, brand architecture, and visual communication. Learn to develop and maintain a consistent brand strategy.',
    },
    {
      title: 'Neural networks for internet marketers',
      bonus: true,
      description: 'Practical use of AI tools in marketing: ChatGPT for content creation, Midjourney for visuals, and automation of routine tasks with neural networks.',
    },
  ]

  const specializations = [
    { title: 'Contextual advertising', isNew: false, description: 'Set up and manage search and thematic contextual advertising campaigns in Yandex Direct and Google Ads.' },
    { title: 'Targeted advertising', isNew: false, description: 'Master targeted advertising on social media platforms. Create audiences, set up campaigns, and optimize for conversions.' },
    { title: 'SMM', isNew: false, description: 'Social media marketing: content strategy, community management, promotion, and analytics across social platforms.' },
    { title: 'Marketplaces', isNew: false, description: 'Learn to sell on major marketplaces: product listings, pricing strategies, advertising tools, and analytics.' },
    { title: 'SEO', isNew: false, description: 'Search engine optimization: technical SEO, content optimization, link building, and ranking strategies.' },
    { title: 'Brand management', isNew: true, description: 'Manage and develop brands: brand strategy, identity management, positioning, and long-term brand growth.' },
  ]

  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const [openSpecIdx, setOpenSpecIdx] = useState<number | null>(null)

  return (
    <section id="curriculum" className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Header */}
        <div className="flex justify-between items-start gap-8 max-[1023px]:flex-col mb-[40px]">
          {/* Left - title + subtitle */}
          <div className="max-w-[880px]">
            <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0">
              The training program is
              <br />
              up to 14 months
            </h2>
            <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-[#1B2126]/70 mt-5 m-0">
              First, complete the main course, then choose one of the specializations.
            </p>
          </div>

          {/* Right - research note */}
          <div className="w-[380px] max-[1239px]:w-[300px] max-[1023px]:w-full max-[1023px]:max-w-[620px] shrink-0">
            <p className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 m-0">
              To ensure the program meets the needs of the labor market, we conduct three stages of research
            </p>
          </div>
        </div>

        {/* Bullet points */}
        <div className="flex flex-col gap-2 mb-[40px]">
          <p className="text-[18px] leading-[24px] text-[#1B2126] m-0">
            ● Advanced training program
          </p>
          <p className="text-[18px] leading-[24px] text-[#1B2126] m-0">
            ● Working with a mentor
          </p>
        </div>

        {/* Main program module */}
        <div className="bg-white rounded-[32px] p-8 max-[767px]:p-5">
          <div className="flex justify-between items-center mb-[40px]">
            <h3 className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">
              Main program
            </h3>
          </div>

          {/* Accordion modules */}
          <div className="flex flex-col">
            {mainProgram.map((mod, i) => {
              const isOpen = openIdx === i
              return (
                <div
                  key={i}
                  className="border-t border-black/20 first:border-t-0 transition-all"
                >
                  {/* Clickable header */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex items-center justify-between w-full py-[23px] max-[767px]:py-3 text-left cursor-pointer bg-transparent border-0 p-0"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-[20px] max-[767px]:text-[18px] font-medium text-[#1B2126] leading-[28px] max-[767px]:leading-[24px]">
                        {mod.title}
                      </span>
                      {mod.bonus && (
                        <span className="px-[18px] py-[2px] bg-[#f3f4f7] text-[#1B2126] text-[16px] leading-[22px] rounded-full shrink-0 whitespace-nowrap max-[767px]:text-[14px]">
                          Bonus
                        </span>
                      )}
                    </div>
                    {/* Arrow */}
                    <svg
                      className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M6 9L12 15L18 9" stroke="#1B2126" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Expandable content */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{ maxHeight: isOpen ? '200px' : '0px' }}
                  >
                    <p className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 m-0 pb-[23px] max-[767px]:pb-3 pr-12">
                      {mod.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-8 bg-white rounded-[32px] p-8 max-[767px]:p-5">
          <h3 className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0 mb-2">
            Specializations
          </h3>
          <p className="text-[16px] leading-[22px] text-[#1B2126]/70 m-0 mb-[40px]">
            Study any 2 of your choice after the main program
          </p>

          {/* Accordion specializations */}
          <div className="flex flex-col">
            {specializations.map((spec, i) => {
              const isOpen = openSpecIdx === i
              return (
                <div
                  key={i}
                  className="border-t border-black/20 first:border-t-0 transition-all"
                >
                  <button
                    onClick={() => setOpenSpecIdx(isOpen ? null : i)}
                    className="flex items-center justify-between w-full py-[23px] max-[767px]:py-3 text-left cursor-pointer bg-transparent border-0 p-0"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-[20px] max-[767px]:text-[18px] font-medium text-[#1B2126] leading-[28px] max-[767px]:leading-[24px]">
                        {spec.title}
                      </span>
                      {spec.isNew && (
                        <span className="px-[18px] py-[2px] bg-[#0b3a82] text-white text-[14px] leading-[22px] rounded-full shrink-0 whitespace-nowrap">
                          New specialization
                        </span>
                      )}
                    </div>
                    <svg
                      className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M6 9L12 15L18 9" stroke="#1B2126" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{ maxHeight: isOpen ? '200px' : '0px' }}
                  >
                    <p className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 m-0 pb-[23px] max-[767px]:pb-3 pr-12">
                      {spec.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-[#1B2126] m-0 mb-6 max-w-[600px]">
            Submit a request - we will tell you more about the program and answer all your questions
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors"
          >
            Get a consultation
          </a>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 12: PRICING / TARIFFS
   "Choose a tariff that suits your goals" - 3 pricing cards
   with old price, monthly price, features list, CTA button
   ============================================================ */
function PricingSection({ courseuuid, orgslug }: { courseuuid: string; orgslug: string }) {
  const tariffs = [
    {
      title: 'Internet Marketing: The Basics',
      description: 'A basic course to get acquainted with the profession and start working',
      oldPrice: '180,000 FCFA',
      discountBadge: '- 40% until August 14',
      monthlyPrice: '7,500',
      monthlyLabel: 'FCFA/month',
      duration: '24 months',
      durationLabel: 'without overpayments',
      onePayment: '108,000 FCFA',
      onePaymentLabel: 'one payment',
      features: [
        '5 months',
        'Internet Marketing Basics',
        '13 instruments',
        '1 final project – marketing strategy, 12 portfolio cases',
        'Content Marketing and Analytics Classes',
        'Workshops, webinars, recorded video lectures, practice with feedback',
        'Certificate of advanced training',
      ],
      recommended: false,
      gradient: false,
    },
    {
      title: 'Internet marketer',
      description: 'All the base and focus on specialization in one direction',
      oldPrice: '320,000 FCFA',
      discountBadge: '- 40% until August 14',
      monthlyPrice: '8,900',
      monthlyLabel: 'FCFA/month',
      duration: '36 months',
      durationLabel: 'without overpayments',
      onePayment: '192,000 FCFA',
      onePaymentLabel: 'one payment',
      features: [
        '9 months',
        'Internet Marketing Fundamentals + Selectable Specialization',
        'Additional classes on advertising labeling, spreadsheets, and freelancing basics',
        '13 instruments',
        '2 final projects, group strategy, 20 cases',
        'Help with finding a job',
        'Diploma of professional retraining',
      ],
      recommended: true,
      gradient: true,
    },
    {
      title: 'Internet Marketer: Advanced',
      description: 'Full base and 2 specializations for more flexible work',
      oldPrice: '400,000 FCFA',
      discountBadge: '- 40% until August 14',
      monthlyPrice: '11,100',
      monthlyLabel: 'FCFA/month',
      duration: '36 months',
      durationLabel: 'without overpayments',
      onePayment: '240,000 FCFA',
      onePaymentLabel: 'one payment',
      features: [
        '14 months',
        'Internet Marketing Fundamentals + 2 Specializations to Choose From',
        'Additional classes on advertising labeling, spreadsheets, automation, and brand management',
        '13 instruments',
        '4 final projects, group strategy, 30 cases',
        'Internship opportunities with partner companies',
        'Diploma of professional retraining',
      ],
      recommended: false,
      gradient: false,
    },
  ]

  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Title */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[60px] max-[767px]:mb-[45px]">
          Choose a tariff that suits your goals
        </h2>

        {/* Cards */}
        <div className="flex justify-between gap-5 max-[1023px]:gap-[10px] max-[767px]:flex-col max-[767px]:gap-4">
          {tariffs.map((tariff, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col rounded-[32px] p-7 max-[767px]:p-4 box-border relative ${
                tariff.gradient
                  ? 'bg-[linear-gradient(132deg,#d4dcff,#dbfff2)]'
                  : 'bg-white'
              }`}
            >
              {/* Recommended badge */}
              {tariff.recommended && (
                <div className="absolute -top-[26px] left-0 right-0 flex justify-center items-center text-white text-[14px] leading-[18px] py-[3px] px-2 rounded-t-[12px] bg-[#0574e1] z-[-1]">
                  We recommend
                </div>
              )}

              {/* Header */}
              <div className="flex flex-col">
                {/* Title */}
                <h3 className="text-[24px] max-[767px]:text-[22px] leading-[28px] max-[767px]:leading-[26px] font-semibold text-[#1B2126] m-0">
                  {tariff.title}
                </h3>
                {/* Description */}
                <p className="text-[16px] leading-[20px] text-[#1B2126]/70 m-0 mt-3">
                  {tariff.description}
                </p>
              </div>

              {/* Price wrapper */}
              <div className="max-w-[400px] mt-6">
                {/* Old price + discount badge */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[18px] font-medium leading-[24px] text-[#636363] line-through">
                    {tariff.oldPrice}
                  </span>
                  <span className="rounded-full px-2 py-[2px] bg-[#c4fae7] text-[#038255] text-[14px] leading-[18px] whitespace-nowrap">
                    {tariff.discountBadge}
                  </span>
                </div>

                {/* Price info - monthly vs one payment */}
                <div className="flex justify-between items-end">
                  {/* Monthly */}
                  <div>
                    <div className="flex items-center gap-[2px]">
                      <span className="text-[28px] leading-[32px] font-semibold text-[#1B2126]">
                        {tariff.monthlyPrice}
                      </span>
                      <span className="text-[18px] leading-[24px] font-medium text-[#1B2126]">
                        {' '}{tariff.monthlyLabel}
                      </span>
                    </div>
                    <p className="text-[14px] max-[767px]:text-[12px] leading-[18px] max-[767px]:leading-[16px] text-[#636363] m-0 mt-2 max-[767px]:mt-[6px]">
                      {tariff.duration} {tariff.durationLabel}
                    </p>
                  </div>
                  {/* One payment */}
                  <div className="text-right">
                    <p className="text-[18px] leading-[24px] font-medium text-[#1B2126] m-0">
                      {tariff.onePayment}
                    </p>
                    <p className="text-[14px] max-[767px]:text-[12px] leading-[18px] max-[767px]:leading-[16px] text-[#636363] m-0 mt-1">
                      {tariff.onePaymentLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col gap-2 pt-6">
                <Link
                  href={getUriWithOrg(orgslug, `/course/${courseuuid}/checkout?tariff=${i}`)}
                  className={`w-full h-[48px] rounded-[8px] text-[16px] font-medium border-0 cursor-pointer transition-colors flex items-center justify-center no-underline ${
                    tariff.recommended
                      ? 'bg-[#0087CD] text-white hover:bg-[#006ba3]'
                      : 'bg-[#1B2126] text-white hover:bg-[#000]'
                  }`}
                >
                  Choose
                </Link>
                <p className="text-[14px] max-[767px]:text-[12px] leading-[18px] max-[767px]:leading-[16px] text-[#636363] text-center m-0">
                  Got a promo code? Apply it at checkout.
                </p>
              </div>

              {/* Features list */}
              <ul className="flex flex-col gap-3 mt-6 m-0 p-0 list-none">
                {tariff.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-[14px] leading-[20px] text-[#1B2126]">
                    <svg className="shrink-0 mt-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 5" stroke="#4BD0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 17: FAQ
   "Answering questions" - tab filters + accordion items
   ============================================================ */
function FaqSection() {
  const tabs = ['Payment', 'Education', 'Profession']
  const [activeTab, setActiveTab] = useState('Payment')

  const allQuestions: Record<string, { q: string; a: string }[]> = {
    Payment: [
      {
        q: 'How to arrange an installment plan, what are the terms and conditions for an installment plan?',
        a: 'You can pay for the course in installments for up to 36 months without overpayments. To arrange an installment plan, select the appropriate option at checkout. You will need to fill out a short form and wait for approval. The installment plan is available without a guarantor and without a bank visit.',
      },
      {
        q: 'What is payment by installments?',
        a: 'Payment by installments means you divide the total cost of the course into equal monthly payments over a period of up to 36 months. There are no additional fees or interest — you pay exactly the same amount as with a one-time payment, just spread out over time.',
      },
      {
        q: 'How do I get a refund if I don\'t like the course?',
        a: 'You can request a full refund within 14 days of the start of training, no questions asked. After this period, a proportional refund is possible for the unused portion of the course. To request a refund, contact our support team.',
      },
      {
        q: 'How to pay for tuition from abroad?',
        a: 'We accept international payments via bank card (Visa, Mastercard) and international wire transfer. You can also use PayPal or other international payment systems. Contact our support team for detailed instructions on international payments.',
      },
      {
        q: 'What is a tax deduction for education and how to get it?',
        a: 'A tax deduction allows you to return part of the money spent on education. You can get back up to 13% of the course cost if you have an official employment contract and pay personal income tax. To receive the deduction, you need to collect the necessary documents (license, payment receipt, contract) and submit them to the tax authority.',
      },
    ],
    Education: [
      {
        q: 'How is the training structured?',
        a: 'The training combines recorded video lectures, live webinars, practical assignments, and tests. You study according to a schedule but can always return to materials you need. Lesson recordings are stored in your personal account for three years.',
      },
      {
        q: 'How much time per week do I need to study?',
        a: 'On average, studying takes up to 10 hours per week. You can speed up or slow down the course depending on your schedule. Online classes are held up to 2 times a week in the evening.',
      },
      {
        q: 'Can I study and work at the same time?',
        a: 'Yes, the program is designed for working professionals. Classes are held in the evening, and all materials are available in your personal account. You can also pause your studies for up to 6 months if needed.',
      },
    ],
    Profession: [
      {
        q: 'Will I be able to find a job after completing the course?',
        a: 'Yes, we provide career support including resume preparation, interview preparation, and job search assistance. 84% of our graduates achieve their career goals within 3 months of completing the course.',
      },
      {
        q: 'Do I need prior experience to start?',
        a: 'No, the course is designed for beginners. We start with the fundamentals and gradually move to advanced topics. You just need basic computer skills and a desire to learn.',
      },
      {
        q: 'What documents will I receive upon completion?',
        a: 'Upon successful completion and defense of your final project, you will receive a diploma of professional retraining. You can add this document to your resume and show it when applying for jobs.',
      },
    ],
  }

  const questions = allQuestions[activeTab] || []
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  // Reset open index when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setOpenIdx(0)
  }

  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Title */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[40px]">
          Answering questions
        </h2>

        {/* Tab filters */}
        <div className="flex flex-wrap gap-5 max-[1023px]:gap-[10px] mb-[40px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`rounded-[50px] px-5 py-[14px] max-[767px]:px-5 max-[767px]:py-[10px] cursor-pointer text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[18px] border-0 transition-colors ${
                activeTab === tab
                  ? 'bg-[#1B2126] text-white'
                  : 'bg-[#e5e7eb] text-[#1B2126] hover:bg-[#d1d5db]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ accordion list */}
        <div className="mt-[-30px]">
          {questions.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={i}
                className="border-b border-[#9a9a9a]/65 relative"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex justify-between items-center w-full text-left py-12 max-[1023px]:py-[30px] first:pt-7 cursor-pointer bg-transparent border-0 p-0"
                >
                  <span className="text-[20px] max-[767px]:text-[18px] leading-[28px] max-[767px]:leading-[24px] font-medium text-[#1B2126] flex-1 pr-4">
                    {item.q}
                  </span>
                  <svg
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M6 9L12 15L18 9" stroke="#27292d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <p className="text-[16px] leading-[24px] text-[#1B2126]/70 m-0 mt-[30px] max-w-[990px] pb-12 max-[1023px]:pb-[30px]">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom links */}
        <div className="flex items-center justify-between mt-[50px] max-[767px]:flex-col max-[767px]:gap-4">
          <a
            href="#"
            className="text-[16px] leading-[22px] text-[#1B2126] underline cursor-pointer hover:no-underline"
          >
            all questions
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center h-[48px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors"
          >
            To tariffs
          </a>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FOOTER
   Black bg, breadcrumbs at top, two-part layout:
   left column (logo, social, QR, contacts, copyright) +
   right section (3 link columns: Information, Education, Projects)
   ============================================================ */
function FooterSection() {
  const columns = [
    {
      title: 'Information',
      links: [
        'About Hybreed', 'Bring a friend', 'Affiliate program',
        'For experts', 'Work at Hybreed', 'Hybreed Vacancies',
        'Legal information', 'Information about the Academy',
        'Contacts', 'Reviews',
      ],
    },
    {
      title: 'Education',
      links: [
        'Study for free', 'Course Catalog', 'Popular courses', 'Tests',
        'Marketing', 'Business and Management', 'Design and UX',
        'Programming', 'Analytics', 'Team management',
        'Programs with universities', 'Creative professions',
        'Professions in education', 'Corporate training', 'New professions',
        'Marketplaces', 'Finance and Investments', 'Computer games',
        'Health', 'Neural networks', 'Psychology', 'Online college',
      ],
    },
    {
      title: 'Projects',
      links: [
        'Hybreed Media', 'Career Development Center',
        'For business: find a contractor',
        'Universities and colleges: online courses',
        'Gift certificate', 'Glossary', 'Training for NGOs',
        'Hybreed Community', 'State license',
      ],
    },
  ]

  return (
    <footer className="bg-black text-white px-[30px] max-[767px]:px-5">
      {/* Breadcrumbs */}
      <div className="max-w-[1240px] max-[1239px]:max-w-[980px] mx-auto w-full pt-6 text-[12px] leading-[18px] text-[#a0a0a0]">
        <a href="#" className="hover:underline no-underline">Home</a>
        {' / '}
        <a href="#" className="hover:underline no-underline">Catalog</a>
        {' / '}
        <a href="#" className="hover:underline no-underline">Marketing</a>
        {' / '}
        <span className="text-white">Internet Marketer: Advanced</span>
      </div>

      {/* Main columns: left (info) + right (link menus) */}
      <div className="max-w-[1240px] max-[1239px]:max-w-[980px] max-[1023px]:max-w-full mx-auto w-full flex py-20 max-[767px]:flex-col-reverse max-[767px]:pt-6 max-[767px]:pb-[200px] mb-10">
        {/* LEFT column - logo, social, QR, contacts, copyright */}
        <div className="flex flex-col w-[280px] max-[1239px]:w-[220px] max-[1023px]:w-[340px] max-[767px]:w-[240px] mr-5 shrink-0">
          {/* Logo placeholder */}
          <div className="text-[24px] font-bold text-white">Hybreed</div>

          {/* Social icons */}
          <div className="flex gap-3 mt-[35px]">
            {/* VK */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center no-underline" aria-label="VK">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12.785 16.241s.288-.032.435-.193c.135-.148.131-.426.131-.426s-.019-1.302.582-1.495c.593-.19 1.354 1.27 2.159 1.832.609.425 1.072.332 1.072.332l2.155-.03s1.127-.071.593-.964c-.044-.073-.31-.661-1.598-1.87-1.348-1.263-1.167-1.058.456-3.24.989-1.332 1.385-2.146 1.262-2.494-.117-.333-.844-.245-.844-.245l-2.426.015s-.18-.025-.314.056c-.13.079-.214.265-.214.265s-.382 1.039-.892 1.922c-1.075 1.862-1.504 1.96-1.681 1.846-.41-.267-.307-1.075-.307-1.65 0-1.793.27-2.54-.527-2.733-.265-.064-.46-.107-1.135-.114-.868-.009-1.601.003-2.017.207-.276.137-.489.441-.36.459.16.021.522.099.714.364.248.341.239 1.107.239 1.107s.143 2.099-.333 2.36c-.327.179-.775-.186-1.733-1.848-.489-.849-.858-1.787-.858-1.787s-.071-.176-.2-.27c-.156-.115-.374-.151-.374-.151l-2.305.015s-.346.01-.473.161c-.113.135-.009.413-.009.413s1.805 4.23 3.851 6.366c1.874 1.954 4.002 1.825 4.002 1.825h.964z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center no-underline" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* Telegram */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center no-underline" aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.387 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>

          {/* QR code section */}
          <div className="mt-[30px]">
            {/* QR code placeholder */}
            <div className="w-[100px] h-[100px] bg-white rounded-[8px] flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                <rect x="10" y="10" width="30" height="30" stroke="#000" strokeWidth="3" fill="none"/>
                <rect x="60" y="10" width="30" height="30" stroke="#000" strokeWidth="3" fill="none"/>
                <rect x="10" y="60" width="30" height="30" stroke="#000" strokeWidth="3" fill="none"/>
                <rect x="20" y="20" width="10" height="10" fill="#000"/>
                <rect x="70" y="20" width="10" height="10" fill="#000"/>
                <rect x="20" y="70" width="10" height="10" fill="#000"/>
                <rect x="50" y="50" width="10" height="10" fill="#000"/>
                <rect x="65" y="55" width="8" height="8" fill="#000"/>
                <rect x="55" y="70" width="8" height="8" fill="#000"/>
                <rect x="70" y="65" width="8" height="8" fill="#000"/>
              </svg>
            </div>
            <p className="w-[200px] max-w-[190px] mt-[14px] text-[14px] leading-[20px] text-white m-0 max-[767px]:hidden">
              Point your camera and download the free Hybreed{' '}
              <a href="#" className="text-white underline">app</a>
            </p>
            {/* App store icons */}
            <div className="flex gap-2 mt-4 max-[767px]:flex-col">
              <div className="px-3 py-2 bg-white/10 rounded-[6px] text-[11px] text-white/80">Google Play</div>
              <div className="px-3 py-2 bg-white/10 rounded-[6px] text-[11px] text-white/80">App Store</div>
              <div className="px-3 py-2 bg-white/10 rounded-[6px] text-[11px] text-white/80">RuStore</div>
            </div>
          </div>

          {/* Phone 1 */}
          <div className="mt-5 mb-5">
            <a href="tel:+79651788020" className="text-white text-[18px] font-medium no-underline">+7 (965) 178-80-20</a>
            <p className="text-[12px] text-[#a0a0a0] max-w-[190px] m-0 mt-1">For questions about purchasing courses</p>
          </div>

          {/* Phone 2 */}
          <div className="mb-5">
            <a href="tel:+79672118828" className="text-white text-[18px] font-medium no-underline">+7 (967) 211-88-28</a>
            <p className="text-[12px] text-[#a0a0a0] max-w-[190px] m-0 mt-1">For corporate clients</p>
          </div>

          {/* Email */}
          <div className="mb-5">
            <p className="text-[14px] text-white m-0">
              <a href="#" className="text-white underline">Write in chat</a>
              {' or email: '}
              <a href="mailto:support@hybreed.com" className="text-white underline">support@hybreed.com</a>
            </p>
            <p className="text-[12px] text-[#a0a0a0] m-0 mt-1">For current students</p>
          </div>

          {/* Address */}
          <p className="text-[14px] text-[#a0a0a0] max-w-[170px] m-0">
            Moscow, Varshavskoe shosse, 1, building 6, 3rd floor, office 315A
          </p>

          {/* Copyright */}
          <p className="text-[14px] text-[#828181] mt-[146px] max-[767px]:mt-12 m-0">
            © Hybreed Inc., 2024-2026
          </p>
        </div>

        {/* RIGHT section - 3 link columns */}
        <div className="flex max-[1023px]:flex-col flex-1">
          {columns.map((col, i) => (
            <div
              key={i}
              className={`flex flex-col w-[280px] max-[1239px]:w-[220px] max-[1023px]:w-[340px] max-[767px]:w-[240px] max-[1023px]:border-b max-[1023px]:border-white/20 max-[1023px]:pb-5 ${i < columns.length ? 'mr-5 max-[1023px]:mr-0 max-[1023px]:mb-5' : ''}`}
            >
              {/* Column header */}
              <div className="text-[17px] font-medium leading-[30px] text-white pb-5 max-[1023px]:cursor-pointer max-[1023px]:py-5 max-[1023px]:pb-[26px]">
                {col.title}
              </div>
              {/* Links */}
              <div className="flex flex-col">
                {col.links.map((link, j) => (
                  <a
                    key={j}
                    href="#"
                    className="text-[16px] max-[1023px]:text-[18px] leading-[20px] text-[#a0a0a0] hover:text-white no-underline mt-3 first:mt-0 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   SECTION 2: OUR APPROACH
   "Our approach to your growth" - 4 cards with icons, titles,
   descriptions, and background images at bottom-right
   ============================================================ */
function ApproachSection() {
  const cards = [
    {
      title: 'Live communication',
      description: 'Up to 40 webinars with experts, up to 8 individual consultations, assignment review and feedback throughout the course',
      bgImage: '/images/course/approach_live.webp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="8" width="32" height="24" rx="4" stroke="#0087CD" strokeWidth="2" fill="none"/>
          <path d="M4 12L20 22L36 12" stroke="#0087CD" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Current knowledge',
      description: 'We monitor changes with the help of experts, AI, and methodologists. If anything changes, we update the course to reflect job openings and trends.',
      bgImage: '/images/course/approach_knowledge.webp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="#0087CD" strokeWidth="2" fill="none"/>
          <path d="M20 12V20L26 24" stroke="#0087CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Selecting a profile',
      description: "You can enhance your basic skills with two additional specializations and take your first orders on FL.ru – we'll give you access to a PRO account.",
      bgImage: '/images/course/approach_profile.webp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M8 32L8 8L20 14L32 8L32 32L20 26L8 32Z" stroke="#0087CD" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      title: 'AI as a base',
      description: 'We help you use neural networks professionally – we share working guides and prompts to make you more effective and in-demand.',
      bgImage: '/images/course/approach_ai.webp',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="10" y="10" width="20" height="20" rx="4" stroke="#0087CD" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="20" r="4" stroke="#0087CD" strokeWidth="2" fill="none"/>
          <path d="M20 4V10M20 30V36M4 20H10M30 20H36" stroke="#0087CD" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Section title */}
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[60px] max-[767px]:mb-[40px]">
          Our approach to your growth
        </h2>

        {/* Cards row */}
        <div className="flex gap-5 max-[1239px]:flex-wrap max-[767px]:flex-col max-[767px]:gap-[10px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 max-[767px]:gap-3 p-8 max-[767px]:p-5 rounded-[32px] bg-white relative overflow-hidden w-full max-[1239px]:w-[460px] max-[1023px]:w-[340px] max-[767px]:w-full"
              style={{ paddingBottom: '180px' }}
            >
              {/* Icon */}
              <div className="relative z-[1]">
                {card.icon}
              </div>

              {/* Title */}
              <p className="text-[24px] max-[767px]:text-[18px] leading-[32px] max-[767px]:leading-[24px] font-medium text-[#1B2126] m-0 relative z-[1]">
                {card.title}
              </p>

              {/* Description */}
              <p className="text-[16px] leading-[22px] max-[767px]:leading-[24px] text-[#1B2126]/80 m-0 relative z-[1]">
                {card.description}
              </p>

              {/* Background image - bottom right, 700x700 */}
              <div className="absolute bottom-0 right-0 w-[700px] h-[700px] z-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="w-full h-full object-contain object-bottom object-right"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
