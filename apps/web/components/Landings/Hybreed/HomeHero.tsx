'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUriWithOrg } from '@services/config/config'
import { useOrg } from '@components/Contexts/OrgContext'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

interface HomeHeroProps {
  orgslug: string
}

// Hero carousel slides — real photos extracted from the reference design,
// each paired with the stat/caption shown above it.
const HERO_SLIDES = [
  {
    image: '/images/home/sf-img-45.webp',
    caption: '4.88 out of 5 stars for our support team, based on a survey of 200,000 students',
  },
  {
    image: '/images/home/sf-img-46.webp',
    caption: '1.5 million people have chosen Hybreed courses to achieve their goals.',
  },
  {
    image: '/images/home/sf-img-47.webp',
    caption: '4,000 partners have already offered internships and made offers to the best students.',
  },
  {
    image: '/images/home/sf-img-48.webp',
    caption: 'A live chat with experts to discuss issues and complex topics',
  },
]

// Top-right quick-path cards — label + decorative faded blob + arrow.
const QUICK_CARDS = [
  { label: 'Master a profession' },
  { label: 'Master the skills' },
  { label: 'Decide on a profession' },
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
    <section className="w-full bg-[#f3f4f7]">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT: headline + carousel card */}
          <div className="flex flex-col">
            <h1 className="text-[28px] sm:text-5xl font-bold sm:font-black tracking-tight text-[#080808] leading-[1.1] text-center sm:text-left">
              We teach and help at every stage
            </h1>

            <div
              className="mt-6 bg-white rounded-2xl overflow-hidden shadow-sm"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <p key={`caption-${activeSlide}`} className="px-5 pt-5 pb-3 text-xs sm:text-2xl font-semibold text-[#080808] leading-snug min-h-[3.5rem] transition-opacity duration-500">
                {slide.caption}
              </p>
              <div key={`image-${activeSlide}`} className="relative w-full aspect-[16/8]">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-1.5 py-3">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeSlide ? 'w-5 bg-[#080808]' : 'w-1.5 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <Link
              href={coursesHref}
              className="mt-4 inline-flex self-start items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              Popular programs
            </Link>
          </div>

          {/* RIGHT — MOBILE: horizontal carousel + full-width AI card */}
          <div className="flex flex-col gap-3 sm:hidden">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 px-1" style={{ scrollbarWidth: 'none' }}>
              {[...QUICK_CARDS, { label: 'Programs with universities' }, { label: 'Corporate training' }].map((card, i) => (
                <Link
                  key={card.label}
                  href={coursesHref}
                  className="snap-start flex-shrink-0 w-[160px] h-[120px] relative overflow-hidden bg-white rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition-shadow group"
                >
                  <span className="relative z-10 text-sm font-bold text-[#080808] leading-tight max-w-[85%]">
                    {card.label}
                  </span>
                  <ArrowUpRight size={16} className="relative z-10 text-gray-500 group-hover:text-[#080808] transition-colors" />
                  <div className={`absolute -right-4 -bottom-4 w-16 h-16 rounded-full blur-md opacity-60 pointer-events-none ${i === 0 ? 'bg-emerald-200' : i === 1 ? 'bg-teal-200' : i === 2 ? 'bg-cyan-200' : 'bg-blue-200'}`} />
                </Link>
              ))}
            </div>
            <Link href={coursesHref} className="relative overflow-hidden bg-[#1a56db] rounded-2xl p-4 flex flex-col justify-between min-h-[90px] group">
              <p className="relative z-10 text-white text-base leading-snug max-w-[65%]">
                <span className="font-bold">Grow with AI –</span>
                <br />
                in your profession, career, and income
              </p>
              <span className="relative z-10 inline-flex self-start items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#080808] text-sm font-bold group-hover:bg-gray-100 transition-colors">
                Select a course
                <ArrowRight size={14} />
              </span>
              <div className="absolute right-0 top-0 bottom-0 w-32 opacity-95 pointer-events-none">
                <Image src="/images/home/sf-img-59.webp" alt="" fill className="object-cover object-left" />
              </div>
            </Link>
          </div>

          {/* RIGHT — DESKTOP: bento grid */}
          <div className="hidden sm:grid grid-cols-6 gap-3 h-full" style={{ gridTemplateRows: 'repeat(4, minmax(180px, 1fr))' }}>
            {QUICK_CARDS.map((card, i) => (
              <Link
                key={card.label}
                href={coursesHref}
                className="col-span-2 relative overflow-hidden bg-white rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition-shadow group"
              >
                <span className="relative z-10 text-lg font-bold text-[#080808] leading-tight max-w-[85%]">
                  {card.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="relative z-10 text-gray-500 group-hover:text-[#080808] transition-colors"
                />
                <div
                  className={`absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-md opacity-60 pointer-events-none ${
                    i === 0 ? 'bg-emerald-200' : i === 1 ? 'bg-teal-200' : 'bg-cyan-200'
                  }`}
                />
              </Link>
            ))}

            <Link
              href={coursesHref}
              className="col-span-6 relative overflow-hidden bg-[#1a56db] rounded-2xl p-6 flex flex-col justify-between group"
            >
              <p className="relative z-10 text-white text-xl sm:text-2xl leading-snug max-w-[65%]">
                <span className="font-bold">Grow with AI –</span>
                <br />
                in your profession, career, and income
              </p>
              <span className="relative z-10 inline-flex self-start items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#080808] text-sm font-bold group-hover:bg-gray-100 transition-colors">
                Select a course
                <ArrowRight size={14} />
              </span>
              <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-52 opacity-95 pointer-events-none">
                <Image
                  src="/images/home/sf-img-59.webp"
                  alt=""
                  fill
                  className="object-cover object-left"
                />
              </div>
            </Link>

            <Link
              href={coursesHref}
              className="col-span-6 sm:col-span-3 relative overflow-hidden bg-white rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition-shadow group"
            >
              <span className="relative z-10 text-lg font-bold text-[#080808] leading-tight max-w-[70%]">
                Programs with universities
              </span>
              <ArrowUpRight
                size={16}
                className="relative z-10 text-gray-500 group-hover:text-[#080808] transition-colors"
              />
              <div className="absolute -right-3 -bottom-3 w-24 h-24 rounded-full blur-md opacity-60 bg-blue-200 pointer-events-none" />
            </Link>

            <Link
              href={coursesHref}
              className="col-span-6 sm:col-span-3 relative overflow-hidden bg-white rounded-2xl flex flex-col justify-between p-4 group"
            >
              <span className="relative z-10 text-lg font-bold text-[#080808] leading-tight max-w-[45%]">
                Corporate training
              </span>
              <ArrowUpRight
                size={16}
                className="relative z-10 text-gray-500 group-hover:text-[#080808] transition-colors"
              />
              <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-32">
                <Image
                  src="/images/home/sf-img-87.webp"
                  alt="Corporate training"
                  fill
                  className="object-cover"
                  style={{ maskImage: 'linear-gradient(to right, transparent, black 25%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 25%)' }}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
