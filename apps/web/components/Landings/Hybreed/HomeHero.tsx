'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUriWithOrg } from '@services/config/config'
import { ArrowRight } from 'lucide-react'

interface HomeHeroProps {
  orgslug: string
}

const HERO_SLIDES = [
  {
    image: '/images/home/slide1.webp',
    caption: '4.88 out of 5 stars for our support team, based on a survey of 200,000 students',
  },
  {
    image: '/images/home/slide2.webp',
    caption: '1.5 million people have chosen Hybreed courses to achieve their goals.',
  },
  {
    image: '/images/home/slide3.webp',
    caption: '4,000 partners have already offered internships and made offers to the best students.',
  },
  {
    image: '/images/home/slide4.webp',
    caption: 'A live chat with experts to discuss issues and complex topics',
  },
]

const QUICK_CARDS = [
  { label: 'Master a profession', image: '/images/home/hero-card1.svg' },
  { label: 'Master the skills', image: '/images/home/hero-card2.svg' },
  { label: 'Decide on a profession', image: '/images/home/hero-card3.svg' },
]

const TAGS = [
  'Professions with neural networks',
  'Neural networks',
  'Remote work',
  'Create websites',
  'Self-development',
  'Become a freelancer',
]

export default function HomeHero({ orgslug }: HomeHeroProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const coursesHref = getUriWithOrg(orgslug, '/courses')
  const slide = HERO_SLIDES[activeSlide]

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  return (
    <section className="w-full bg-white">
      {/* Hero container with rounded bottom corners */}
      <div className="bg-[#f3f4f7] rounded-b-[40px] p-[40px_40px_60px] max-[1239px]:p-[30px_40px_40px] max-[1023px]:p-[20px_34px_40px] max-[767px]:p-[20px_12px_36px]">
          {/* Top: flex row on desktop, column on tablet/mobile */}
          <div className="flex justify-between max-[1023px]:flex-col">
            {/* Header: title + slider + tags — block on desktop, grid on tablet, flex-col on mobile */}
            <div className="flex-shrink-0 w-[560px] max-[1239px]:w-[460px] max-[1023px]:w-auto max-[1023px]:grid max-[1023px]:grid-cols-[1fr_min-content] max-[1023px]:grid-rows-[min-content_1fr] max-[1023px]:gap-x-[22px] max-[767px]:!flex max-[767px]:!flex-col max-[767px]:!w-full">
              {/* Title */}
              <h1 className="text-[50px] font-semibold leading-[54px] m-0 mb-4 max-[1239px]:text-[38px] max-[1239px]:leading-[42px] max-[1023px]:mb-6 max-[767px]:text-[28px] max-[767px]:leading-[32px] max-[767px]:text-center max-[767px]:px-2.5 max-[767px]:mb-4">
                We teach and help at every stage
              </h1>

              {/* Slider */}
              <div
                className="mb-2 w-[560px] max-[1239px]:w-[460px] max-[1023px]:w-[340px] max-[1023px]:mb-0 max-[1023px]:row-span-2 max-[767px]:w-full max-[767px]:max-w-full max-[767px]:mb-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="overflow-hidden rounded-3xl">
                  <div className="bg-white">
                    <p className="px-5 pt-4 pb-3 text-[22px] font-medium leading-7 max-[1239px]:text-lg max-[1239px]:leading-[22px] max-[1239px]:px-4 max-[1023px]:text-xs max-[1023px]:leading-4 max-[1023px]:px-4 max-[1023px]:pt-3 max-[767px]:min-h-8">
                      {slide.caption}
                    </p>
                  </div>
                  <div className="relative w-full h-[243px] max-[1239px]:h-[200px] max-[1023px]:h-[156px] max-[767px]:h-auto max-[767px]:aspect-[16/9]">
                    <Image
                      src={slide.image}
                      alt={slide.caption}
                      fill
                      className="object-cover"
                      sizes="560px"
                      priority
                    />
                  </div>
                </div>
                {/* Dots */}
                <div className="flex justify-center mt-1 gap-1">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`w-[5px] h-[5px] rounded-full border-0 p-1 cursor-pointer ${
                        i === activeSlide ? 'bg-[#8e8e8e]' : 'bg-[#ccc]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Tags row */}
              <div className="flex flex-wrap max-[767px]:flex-nowrap max-[767px]:overflow-x-auto max-[767px]:mr-[-12px] max-[767px]:pr-3 max-[767px]:scrollbar-none">
                {TAGS.map((tag) => (
                  <Link
                    key={tag}
                    href={coursesHref}
                    className="flex items-center text-sm font-medium leading-[22px] px-4 cursor-pointer text-[#06f] no-underline rounded-[32px] bg-white whitespace-nowrap h-[38px] mr-2.5 mb-2 hover:bg-[#e6f0ff] transition-colors max-[767px]:text-xs max-[767px]:leading-[18px] max-[767px]:px-3 max-[767px]:h-8 max-[767px]:rounded-[26px] max-[767px]:mb-0"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cards section — beside header on desktop, below on tablet/mobile */}
            <div className="ml-10 w-full max-[1239px]:ml-5 max-[1023px]:ml-0 max-[1023px]:mt-5 max-[767px]:mt-4 max-[767px]:mr-[-12px] max-[767px]:w-auto">
              {/* Desktop cards grid */}
              <div className="hidden min-[768px]:flex gap-2">
                {QUICK_CARDS.map((card) => (
                  <Link
                    key={card.label}
                    href={coursesHref}
                    className="flex flex-col justify-between items-start relative flex-1 h-[166px] max-[1239px]:h-[136px] text-black p-5 px-4 rounded-3xl no-underline box-border bg-white overflow-hidden border border-[#f3f4f7] hover:border-[#8e8e8e] transition-colors z-0"
                  >
                    <span className="text-xl font-medium leading-6 max-[1239px]:text-base max-[1239px]:leading-5">
                      {card.label}
                    </span>
                    <span className="flex items-center h-[30px] px-4 rounded-full bg-[#f3f4f7]">
                      <ArrowRight size={14} />
                    </span>
                    {/* Background decorative image */}
                    <div className="absolute bottom-0 right-0 w-[108px] h-[113px] z-[-1]">
                      <Image src={card.image} alt={card.label} fill className="object-contain" sizes="108px" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile cards horizontal slider */}
              <div className="flex min-[768px]:hidden overflow-x-auto gap-2" style={{ scrollbarWidth: 'none' }}>
                {QUICK_CARDS.map((card) => (
                  <Link
                    key={card.label}
                    href={coursesHref}
                    className="flex-shrink-0 flex flex-col justify-between relative w-[150px] h-[120px] text-black p-4 rounded-3xl no-underline bg-white border border-[#f3f4f7] hover:border-[#8e8e8e] overflow-hidden z-0"
                  >
                    <span className="text-sm leading-[18px] font-medium max-w-[110px]">{card.label}</span>
                    <span className="flex items-center h-[30px] px-3 rounded-full bg-[#f3f4f7] self-start">
                      <ArrowRight size={12} />
                    </span>
                    <div className="absolute bottom-0 right-0 w-[80px] h-[83px] z-[-1]">
                      <Image src={card.image} alt={card.label} fill className="object-contain" sizes="80px" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Action cards row (desktop) */}
              <div className="hidden min-[768px]:flex gap-2 mt-2">
                {/* AI card */}
                <Link
                  href={coursesHref}
                  className="flex-1 relative overflow-hidden bg-[#1a56db] rounded-3xl p-5 flex flex-col justify-between min-h-[166px] max-[1239px]:min-h-[136px] group"
                >
                  <p className="relative z-10 text-white text-xl font-medium leading-6 max-w-[65%] m-0">
                    <span className="font-bold">Grow with AI –</span>
                    {' '}in your profession, career, and income
                  </p>
                  <span className="relative z-10 inline-flex self-start items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-sm font-bold group-hover:bg-gray-100 transition-colors">
                    Select a course
                    <ArrowRight size={14} />
                  </span>
                  <div className="absolute right-0 top-0 bottom-0 w-[149px] h-[163px] z-0">
                    <Image src="/images/home/ai-image.webp" alt="" fill className="object-cover" sizes="149px" />
                  </div>
                </Link>
              </div>

              {/* Bottom row: Programs with universities + Corporate training */}
              <div className="hidden min-[768px]:flex gap-2 mt-2">
                <Link
                  href={coursesHref}
                  className="flex-1 relative overflow-hidden bg-white rounded-3xl p-5 flex flex-col justify-between min-h-[166px] max-[1239px]:min-h-[136px] border border-[#f3f4f7] hover:border-[#8e8e8e] transition-colors"
                >
                  <span className="text-xl font-medium leading-6 text-black max-w-[70%]">Programs with universities</span>
                  <span className="flex items-center h-[30px] px-4 rounded-full bg-[#f3f4f7] self-start">
                    <ArrowRight size={14} />
                  </span>
                </Link>
                <Link
                  href={coursesHref}
                  className="flex-1 relative overflow-hidden bg-white rounded-3xl p-5 flex flex-col justify-between min-h-[166px] max-[1239px]:min-h-[136px] border border-[#f3f4f7] hover:border-[#8e8e8e] transition-colors"
                >
                  <span className="text-xl font-medium leading-6 text-black max-w-[45%]">Corporate training</span>
                  <span className="flex items-center h-[30px] px-4 rounded-full bg-[#f3f4f7] self-start">
                    <ArrowRight size={14} />
                  </span>
                  <div className="absolute right-0 top-0 bottom-0 w-[147px] h-[153px]">
                    <Image src="/images/home/corporate-training.webp" alt="" fill className="object-cover object-left" sizes="147px" />
                  </div>
                </Link>
              </div>

              {/* Mobile AI card */}
              <Link
                href={coursesHref}
                className="flex min-[768px]:hidden relative overflow-hidden bg-[#1a56db] rounded-3xl p-4 flex-col justify-between min-h-[120px] mt-2 group"
              >
                <p className="relative z-10 text-white text-base leading-snug max-w-[65%] m-0">
                  <span className="font-bold">Grow with AI –</span>
                  <br />in your profession, career, and income
                </p>
                <span className="relative z-10 inline-flex self-start items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-sm font-bold mt-3 group-hover:bg-gray-100 transition-colors">
                  Select a course <ArrowRight size={14} />
                </span>
                <div className="absolute right-0 top-0 bottom-0 w-32 opacity-95">
                  <Image src="/images/home/ai-image.webp" alt="" fill className="object-cover object-left" sizes="128px" />
                </div>
              </Link>
            </div>
          </div>

          {/* Directions / Categories grid */}
          <div className="mt-10 max-[1239px]:mt-5 max-[1023px]:mt-5 max-[767px]:mt-4">
            <DirectionsGrid orgslug={orgslug} />
          </div>
        </div>
    </section>
  )
}

/* Categories data */
const DIRECTIONS_LEFT_1 = [
  { label: 'Programming', count: '43 courses', href: '/courses' },
  { label: 'Analytics', count: '39 courses', href: '/courses' },
  { label: 'Design and UX', count: '28 courses', href: '/courses' },
]

const DIRECTIONS_LEFT_2 = [
  { label: 'Business and Management', count: '44 courses', href: '/courses' },
  { label: 'Marketing', count: '31 courses', href: '/courses' },
  { label: 'Finance and Investments', count: '16 courses', href: '/courses' },
]

const DIRECTIONS_RIGHT = [
  { label: 'Neural networks', count: '9 courses', href: '/courses' },
  { label: 'Marketplaces', count: '7 courses', href: '/courses' },
  { label: 'Health', count: '22 courses', href: '/courses' },
  { label: 'Psychology', count: '5 courses', href: '/courses' },
]

function DirectionsGrid({ orgslug }: { orgslug: string }) {
  const coursesHref = getUriWithOrg(orgslug, '/courses')

  return (
    <div className="flex justify-between gap-2 max-[767px]:flex-col">
      {/* Left side: 67% */}
      <div className="w-[67%] max-[767px]:w-full flex flex-col gap-2">
        {/* Two groups side by side */}
        <div className="flex justify-between gap-2">
          {/* Group 1 */}
          <div className="w-1/2 flex flex-col gap-2">
            {DIRECTIONS_LEFT_1.map((item) => (
              <DirectionCard key={item.label} item={item} href={getUriWithOrg(orgslug, item.href)} />
            ))}
          </div>
          {/* Group 2 */}
          <div className="w-1/2 flex flex-col gap-2">
            {DIRECTIONS_LEFT_2.map((item) => (
              <DirectionCard key={item.label} item={item} href={getUriWithOrg(orgslug, item.href)} badgeStyle="blue" />
            ))}
          </div>
        </div>
        {/* Full catalog — desktop only */}
        <Link
          href={coursesHref}
          className="flex items-center justify-between w-full h-24 max-[1239px]:h-20 max-[1023px]:h-[108px] max-[767px]:hidden px-5 rounded-3xl bg-white border border-white hover:border-[#8e8e8e] transition-colors no-underline text-black box-border flex-shrink-0"
        >
          <span className="text-xl font-medium leading-6 max-[1239px]:text-base max-[1239px]:leading-5">Full catalog</span>
          <span className="flex items-center justify-center flex-shrink-0 h-[30px] w-[50px] rounded-full bg-[#f3f4f7]">
            <ArrowRight size={15} className="text-black" />
          </span>
        </Link>
      </div>

      {/* Right side: 33% on desktop, 2x2 grid on mobile */}
      <div className="w-[33%] ml-2 flex flex-col gap-2 max-[767px]:w-full max-[767px]:ml-0 max-[767px]:mt-2 max-[767px]:grid max-[767px]:grid-cols-2">
        {DIRECTIONS_RIGHT.map((item) => (
          <DirectionCard key={item.label} item={item} href={getUriWithOrg(orgslug, item.href)} badgeStyle="gradient" />
        ))}
      </div>

      {/* Full catalog — mobile only */}
      <Link
        href={coursesHref}
        className="hidden max-[767px]:flex items-center justify-between w-full h-[50px] mt-2 px-3 rounded-3xl bg-white border border-white hover:border-[#8e8e8e] transition-colors no-underline text-black box-border"
      >
        <span className="text-sm font-medium leading-[18px]">Full catalog</span>
        <span className="flex items-center justify-center flex-shrink-0 h-[30px] w-[50px] rounded-full bg-[#f3f4f7]">
          <ArrowRight size={15} className="text-black" />
        </span>
      </Link>
    </div>
  )
}

function DirectionCard({
  item,
  href,
  badgeStyle = 'green',
}: {
  item: { label: string; count: string }
  href: string
  badgeStyle?: 'green' | 'blue' | 'gradient'
}) {
  const badgeBg =
    badgeStyle === 'blue'
      ? 'bg-[rgba(203,224,255,0.7)]'
      : badgeStyle === 'gradient'
        ? 'bg-gradient-to-r from-[rgba(162,255,221,0.5)] to-[rgba(179,210,255,0.38)]'
        : 'bg-[rgba(162,255,221,0.4)]'

  return (
    <Link
      href={href}
      className="flex items-center justify-between w-full text-black h-24 max-[1239px]:h-20 max-[1023px]:flex-col max-[1023px]:items-start max-[1023px]:h-[108px] max-[767px]:h-[98px] max-[767px]:p-3 px-5 rounded-3xl bg-white border border-white hover:border-[#8e8e8e] transition-colors no-underline box-border"
    >
      <span className="text-xl font-medium leading-6 max-w-[200px] max-[1239px]:text-base max-[1239px]:leading-5 max-[1239px]:max-w-[160px] max-[1023px]:text-sm max-[1023px]:leading-[18px] max-[1023px]:max-w-none hyphens-auto break-words">
        {item.label}
      </span>
      <span className={`flex items-center justify-between flex-shrink-0 h-[30px] w-[100px] px-2.5 rounded-full box-border ${badgeBg}`}>
        <span className="text-xs leading-[14px] mr-1">{item.count}</span>
        <ArrowRight size={15} className="text-black" />
      </span>
    </Link>
  )
}
