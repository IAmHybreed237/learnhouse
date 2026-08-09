'use client'

import React, { useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'

interface HomeCourseSelectionsProps {
  orgslug: string
}

const SELECTION_CARDS = [
  {
    count: 30,
    title: 'Neural networks for work',
    description: 'Along with your new profession, gain AI skills.',
    image: '/images/home/sf-img-59.webp',
  },
  {
    count: 17,
    title: 'Neural networks for life',
    description: 'Master artificial intelligence and easily solve any problem.',
    image: '/images/home/sf-img-60.webp',
  },
  {
    count: 75,
    title: 'Remote work',
    description: 'Master professions that generate income from anywhere in the world.',
    image: '/images/home/sf-img-61.webp',
  },
  {
    count: 9,
    title: 'Website creation',
    description: 'Learn how to create websites from scratch for any purpose.',
    image: '/images/home/sf-img-62.webp',
  },
  {
    count: 17,
    title: 'Self-development',
    description: 'Develop skills for life balance and productive work.',
    image: '/images/home/sf-img-63.webp',
  },
  {
    count: 48,
    title: 'Freelance work',
    description: "You'll learn how to build a career with a flexible schedule.",
    image: '/images/home/sf-img-64.webp',
  },
  {
    count: 54,
    title: 'Working in digital',
    description: 'You can earn additional or primary income by working online.',
    image: '/images/home/sf-img-65.webp',
  },
  {
    count: 7,
    title: 'Marketplaces in practice',
    description: 'Learn how to sell and promote products on popular platforms.',
    image: '/images/home/sf-img-66.webp',
  },
  {
    count: 15,
    title: 'Professional growth',
    description: 'Learn additional skills to accelerate your career development.',
    image: '/images/home/sf-img-67.webp',
  },
  {
    count: 25,
    title: 'Working for yourself',
    description: 'You will understand how to build a business, manage your time and income.',
    image: '/images/home/sf-img-68.webp',
  },
  {
    count: 18,
    title: 'Career in creativity',
    description: 'You can turn your hobby into a source of income.',
    image: '/images/home/sf-img-69.webp',
  },
  {
    count: 6,
    title: 'Start in game development',
    description: 'Master the fundamentals of the gaming industry and take your first steps in development.',
    image: '/images/home/sf-img-70.webp',
  },
]

export default function HomeCourseSelections({ orgslug }: HomeCourseSelectionsProps) {
  const coursesHref = getUriWithOrg(orgslug, '/courses')
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 5)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5)
  }, [])

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector('[data-card]')?.getBoundingClientRect().width ?? 300
    const gap = 16
    el.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold sm:font-black tracking-tight text-[#080808]">
            Course selections for any purpose
          </h2>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollByCard('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                canScrollLeft
                  ? 'border-gray-200 text-[#080808] hover:bg-gray-50'
                  : 'border-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollByCard('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                canScrollRight
                  ? 'border-gray-200 text-[#080808] hover:bg-gray-50'
                  : 'border-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SELECTION_CARDS.map((card) => (
            <Link
              key={card.title}
              href={coursesHref}
              data-card
              className="group flex-none snap-start w-[200px] sm:w-[calc(33.333%-10.67px)] sm:min-w-[260px] relative overflow-hidden rounded-2xl bg-[#f3f4f7] border border-white hover:shadow-lg transition-shadow h-[320px] sm:h-[416px]"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#f2f4f7] rounded-2xl p-4 sm:p-6 min-h-[120px] sm:min-h-[152px] max-h-[120px] sm:max-h-[152px] flex flex-col justify-between" style={{ width: 'calc(100% - 0px)' }}>
                <div>
                  <span className="inline-flex items-center justify-center bg-[#080808] text-white text-xs font-semibold rounded-full h-6 w-[69px] mb-2 sm:mb-3">
                    {card.count} courses
                  </span>
                  <h3 className="text-base sm:text-xl font-semibold text-black leading-6 m-0">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#1f1f22] leading-5 opacity-60 m-0">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
