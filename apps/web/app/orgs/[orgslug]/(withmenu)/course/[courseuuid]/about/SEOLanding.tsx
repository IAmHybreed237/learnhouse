'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCourseMeta } from '@/hooks/queries/useCourses'
import { useOrg } from '@/hooks/queries/useOrg'
import { ChevronDown, ChevronUp, Check, ArrowRight, Heart } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'
import { getCourseThumbnailMediaDirectory } from '@services/media/media'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'

interface SEOLandingProps {
  courseuuid: string
  orgslug: string
}

export default function SEOLanding({ courseuuid, orgslug }: SEOLandingProps) {
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
      <TargetAudienceSection />
      {/* More sections will be added here */}
    </div>
  )
}

/* ============================================================
   SECTION 1: HERO
   Dark background, title, bullet descriptions, consultation
   form on the right, 4 stats cards below, sale info bar
   ============================================================ */
function HeroSection({ course, orgslug, orgUuid }: { course: any; orgslug: string; orgUuid?: string }) {
  const thumbnailImage = course?.thumbnail_image && orgUuid
    ? getCourseThumbnailMediaDirectory(orgUuid, course?.course_uuid, course?.thumbnail_image)
    : null

  const stats = [
    { title: 'When', value: 'August 20, 2026 – August 12, 2027', label: 'The set is about to end' },
    { title: 'Duration', value: 'From 4 to 11 months - depends on the tariff' },
    { title: 'Employment', value: 'Access to case studies from employers and a career club with job openings' },
    { title: 'Format', value: 'Webinars, workshops, assignments with expert review, lectures' },
  ]

  const bulletPoints = [
    'Learn how to optimize SEO, promote projects in Yandex and Google, and implement SEO strategies.',
    'Add projects to your portfolio and you\'ll be able to take on your first orders after 4 months of training.',
    'Explore neural networks, neural search results, Yandex Metrica, and optimization and promotion tools.',
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
                Profession
              </div>
            </div>

            {/* MOBILE illustration - shown only on mobile, between badges and title card */}
            <div className="hidden max-[767px]:flex w-full -mt-2 mb-[-40px] relative z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/course/seo_hero_form_bg.webp"
                alt=""
                className="w-full h-auto object-cover object-top"
                aria-hidden="true"
              />
            </div>

            {/* Hero title + bullet points block */}
            <div className="max-[767px]:bg-[#282d33] max-[767px]:p-6 max-[767px]:rounded-[32px] max-[767px]:mt-0 max-[767px]:z-[1] relative">
              {/* Title */}
              <h1 className="text-[50px] max-[1023px]:text-[50px] max-[767px]:text-[28px] leading-[1.12] max-[767px]:leading-[32px] font-bold text-white my-6 max-[767px]:mt-0 max-[767px]:mb-4 max-w-[680px] max-[1023px]:max-w-full">
                Search Engine Optimization (SEO)
              </h1>

              {/* Bullet points with small circle bullets */}
              <div className="flex flex-col gap-3 max-w-[553px]">
                {bulletPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-white/20 shrink-0 mt-[10px]" />
                    <p className="text-[18px] max-[767px]:text-[16px] leading-[28px] max-[767px]:leading-[24px] text-white m-0">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
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
              <button
                type="button"
                className="inline-flex items-center justify-center w-[56px] h-[56px] max-[767px]:h-[48px] max-[767px]:w-[48px] border border-white/40 hover:border-white text-white rounded-[14px] transition-colors bg-white/10"
                aria-label="Add to favorites"
              >
                <Heart size={24} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - 3D graphic + Registration form */}
          <div className="flex flex-col relative max-[767px]:w-full max-[767px]:mt-8">
            {/* Background image behind the form - exact image from reference */}
            <div className="absolute top-0 right-0 w-[667px] h-[640px] max-[1239px]:hidden pointer-events-none z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/course/seo_hero_form_bg.webp"
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
                {stat.label && (
                  <p className="mt-1 text-[12px] leading-[16px] text-[#0087CD] m-0">
                    {stat.label}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* SALE INFO BAR */}
        <div className="mt-[40px] max-[767px]:mt-[20px] rounded-[20px] flex items-center justify-between gap-6 px-8 py-5 max-[767px]:px-5 max-[767px]:py-4 max-[767px]:flex-col max-[767px]:gap-3" style={{ backgroundColor: 'rgb(156,210,254)' }}>
          {/* Discount amount */}
          <div className="flex flex-col shrink-0">
            <span className="text-[28px] max-[767px]:text-[20px] font-bold leading-tight" style={{ color: 'rgb(0,0,0)' }}>50%</span>
            <span className="text-[13px] max-[767px]:text-[11px] leading-tight" style={{ color: 'rgb(0,0,0)' }}>from August 19 to August 21</span>
          </div>

          {/* Sale text */}
          <div className="flex flex-col flex-1 min-w-0">
            <p className="text-[18px] max-[767px]:text-[14px] font-semibold leading-[24px] max-[767px]:leading-[20px] m-0" style={{ color: 'rgb(0,0,0)' }}>
              We exchange zucchini for knowledge
            </p>
            <p className="text-[14px] max-[767px]:text-[12px] leading-[20px] max-[767px]:leading-[16px] m-0 mt-1" style={{ color: 'rgb(0,0,0)' }}>
              The price is already discounted. Pay for the course before August 21st to keep your savings.
            </p>
          </div>

          {/* Terms button */}
          <div className="shrink-0">
            <button
              className="inline-flex items-center justify-center h-[40px] px-5 text-[14px] font-medium rounded-[10px] border-2 bg-transparent transition-colors hover:bg-black/5"
              style={{ borderColor: 'rgb(0,0,0)', color: 'rgb(0,0,0)' }}
            >
              Terms of the promotion
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 2: APPROACH - "Our approach to your growth"
   3 cards with background images on light gray bg
   ============================================================ */
function ApproachSection() {
  const cards = [
    {
      title: 'Current knowledge',
      description: 'We monitor changes using AI and methodologists. If anything changes, we update the program based on job posting requirements and professional trends.',
      bgImage: '/images/course/seo_approach_card_0.webp',
    },
    {
      title: 'Experience of practitioners',
      description: 'Live communication with experienced SEO specialists: up to 16 webinars, individual consultations, assignment review, and answering questions throughout the course',
      bgImage: '/images/course/seo_approach_card_1.webp',
    },
    {
      title: 'Advanced knowledge',
      description: 'With the SEO Specialist plan, complete two major projects and add them to your portfolio. They\'ll be a plus when applying for a job.',
      bgImage: '/images/course/seo_approach_card_2.webp',
    },
  ]

  return (
    <section className="bg-[#F3F4F7] py-[120px] max-[1023px]:py-[80px] max-[767px]:py-[40px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Section title */}
        <h2 className="text-[56px] max-[1023px]:text-[40px] max-[767px]:text-[28px] font-semibold leading-[58px] max-[767px]:leading-[32px] text-[#000] m-0 mb-[60px] max-[767px]:mb-[40px]">
          Our approach to your growth
        </h2>

        {/* Cards row */}
        <div className="flex gap-5 max-[1023px]:flex-wrap max-[767px]:flex-col max-[767px]:gap-[10px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 max-[767px]:gap-3 p-8 max-[767px]:p-5 rounded-[32px] bg-white relative overflow-hidden w-full max-[1023px]:w-[450px] max-[767px]:w-full"
              style={{ paddingBottom: '200px' }}
            >
              {/* Title */}
              <p className="text-[24px] max-[767px]:text-[18px] leading-[32px] max-[767px]:leading-[24px] font-medium text-[#000] m-0 relative z-[1]">
                {card.title}
              </p>

              {/* Description */}
              <p className="text-[16px] leading-[22px] max-[767px]:leading-[24px] text-[#000]/70 m-0 relative z-[1]">
                {card.description}
              </p>

              {/* Background image - bottom right */}
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] z-0 pointer-events-none">
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

/* ============================================================
   SECTION 3: CAREER OUTCOMES - "Bring your projects to the top"
   White card with image on left, text on right (reversed)
   ============================================================ */
function CareerOutcomesSection() {
  return (
    <section className="bg-[#F3F4F7] pt-0 pb-[40px] max-[767px]:pb-[20px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <div className="bg-white rounded-[32px] overflow-hidden relative">
          <div className="flex items-stretch max-[767px]:flex-col-reverse">
            {/* Image - left side (reversed layout) */}
            <div className="flex-1 flex items-center justify-center min-h-[300px] max-[767px]:w-full p-6 max-[767px]:p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/course/seo_career_outcomes.webp"
                alt="SEO specialist working on search rankings"
                className="w-full h-full max-h-[552px] max-[767px]:max-h-[300px] object-contain"
              />
            </div>

            {/* Text - right side */}
            <div className="py-[60px] pl-[60px] pr-[60px] max-[767px]:p-6 max-w-[510px] max-[767px]:max-w-none">
              <h3 className="text-[34px] max-[767px]:text-[22px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">
                Bring your projects to the top of search results
              </h3>
              <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-black/70 mt-[40px] max-[767px]:mt-[26px] m-0">
                An SEO specialist understands search engine algorithms and optimizes websites to rank high in search results and attract more customers.
              </p>
              <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-black/70 mt-[24px] m-0">
                He selects and adds to the site keywords that are relevant to the site&apos;s topic and that are often searched for by the target audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 4: SALARY - "Good SEO is a big step towards business success"
   White card with salary slider on F3F4F7 bg
   ============================================================ */
function SalarySection() {
  const salaryPoints = [
    { label: 'Beginning', value: '50,000 ₽', sublabel: 'No experience', position: 0 },
    { label: 'Experienced', value: '110,000 ₽', sublabel: 'Experience 1-3 years', position: 50 },
    { label: 'Expert', value: '250,000 ₽', sublabel: 'Experience from 3 years', position: 100 },
  ]

  return (
    <section className="bg-[#F3F4F7] py-[120px] max-[1023px]:py-[80px] max-[767px]:py-[50px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Title + subtitle */}
        <div className="mb-[60px] max-[767px]:mb-[40px] max-w-[880px]">
          <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold leading-[1.2] text-[#000] m-0">
            Good SEO is a big step towards business success.
          </h2>
          <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-[#000]/70 mt-[20px] max-[767px]:mt-[15px] m-0">
            Companies are competing for leading positions in Google, Yandex, and other search engines, so the demand for SEO specialists is growing.
          </p>
        </div>

        {/* White card */}
        <div className="bg-white rounded-[32px] p-8 max-[767px]:p-5">
          {/* Card title */}
          <p className="text-[24px] max-[767px]:text-[18px] leading-[32px] max-[767px]:leading-[24px] font-medium text-[#000] m-0">
            SEO Specialist Salary
          </p>

          {/* Price section */}
          <div className="flex items-end mt-6 max-[767px]:mt-4">
            <span className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#000]">
              110,000 ₽
            </span>
            <span className="text-[16px] leading-[22px] text-[#8e8e8e] ml-3 mb-1">
              per month
            </span>
          </div>

          {/* Description */}
          <p className="text-[16px] leading-[22px] text-[#8e8e8e] mt-3 m-0">
            at the middle level
          </p>

          {/* Progress bar graph */}
          <div className="mt-10 max-[767px]:mt-8 relative">
            {/* Track with progress */}
            <div className="relative h-[6px] bg-[#d4f6ec] rounded-full mx-3">
              <div className="absolute h-[6px] bg-[#47c397] rounded-l-full left-0 top-0 z-[1]" style={{ width: '50%' }} />
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
                  <span className="text-[16px] max-[767px]:text-[14px] leading-[22px] font-semibold text-[#000] whitespace-nowrap">
                    {point.value}
                  </span>
                  <span className="text-[14px] max-[767px]:text-[12px] leading-[18px] text-[#000] font-medium mt-1 whitespace-nowrap">
                    {point.label}
                  </span>
                  <span className="text-[12px] max-[767px]:text-[10px] leading-[16px] text-[#8e8e8e] mt-1 whitespace-nowrap">
                    {point.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Source note */}
          <p className="text-[14px] leading-[20px] text-[#8e8e8e] mt-8 max-[767px]:mt-6 m-0">
            Source: <a href="https://drive.google.com/file/d/1N8rTXghaYPKcyFEshmIRUOIKDZzInXfJ/view" target="_blank" rel="noopener noreferrer" className="text-[#0087CD] underline">RealHR</a>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTION 5: TARGET AUDIENCE - "We hear you and help you achieve results"
   3 cards with background images on F3F4F7 bg
   ============================================================ */
function TargetAudienceSection() {
  const cards = [
    {
      title: 'I am a beginner or related specialist',
      description: "I deal with SEO a lot at my current job, but I'm not very knowledgeable about it. Or I'm already working with SEO and want to become an expert.",
      bgImage: '/images/course/seo_practice_0.webp',
    },
    {
      title: 'I am an entrepreneur or small business owner',
      description: "I hire contractors, but I can't figure out what I'm paying them for. I want to cut marketing costs and promote my business myself.",
      bgImage: '/images/course/seo_practice_1.webp',
    },
    {
      title: 'I am a freelancer or self-employed',
      description: 'I want to earn more, but I can only promote websites through paid advertising and I am limited by the limited list of services I can provide.',
      bgImage: '/images/course/seo_practice_2.webp',
    },
  ]

  return (
    <section className="bg-[#F3F4F7] py-[100px] max-[1023px]:py-[80px] max-[767px]:py-[50px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        {/* Title + subtitle */}
        <div className="mb-[60px] max-[767px]:mb-[40px] max-w-[880px]">
          <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold leading-[1.2] text-[#000] m-0">
            We hear you and help you achieve results
          </h2>
          <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-[#000]/70 mt-[20px] max-[767px]:mt-[15px] m-0">
            You&apos;ve come to the right place if you recognize yourself in the text.
          </p>
        </div>

        {/* 3 cards */}
        <div className="flex gap-5 max-[1023px]:flex-wrap max-[767px]:flex-col max-[767px]:gap-[10px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 max-[767px]:gap-3 p-8 max-[767px]:p-5 rounded-[32px] bg-white relative overflow-hidden w-full max-[1023px]:w-[450px] max-[767px]:w-full min-h-[400px]"
            >
              <p className="text-[24px] max-[767px]:text-[18px] leading-[32px] max-[767px]:leading-[24px] font-medium text-[#000] m-0 relative z-[1]">
                {card.title}
              </p>
              <p className="text-[16px] leading-[22px] text-[#000]/70 m-0 relative z-[1]">
                {card.description}
              </p>

              {/* Background image - full width at bottom */}
              <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] z-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
