'use client'

import React, { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const STORIES = [
  {
    title: 'From Teacher to Web Developer',
    subtitle: 'How I found creativity in coding and overcame my fear of tech',
    duration: '2:46',
    image: '/images/home/story-1.webp',
  },
  {
    title: 'From Retail to UX/UI Design',
    subtitle: 'How I landed my first design role right after completing the course',
    duration: '2:14',
    image: '/images/home/story-2.webp',
  },
  {
    title: 'From Hospitality to Data Analytics',
    subtitle: 'How to pick a career path that is in demand and truly fulfilling',
    duration: '3:36',
    image: '/images/home/story-3.webp',
  },
  {
    title: 'From Accounting to Digital Marketing',
    subtitle: 'Why taking a bold step can transform your career trajectory',
    duration: '3:39',
    image: '/images/home/story-4.webp',
  },
  {
    title: 'Switching careers after 30',
    subtitle: 'How to leverage your past experience and turn age into an asset',
    duration: '3:16',
    image: '/images/home/story-5.webp',
  },
  {
    title: 'From a small town to remote work',
    subtitle: 'How I built a global career while staying close to home',
    duration: '3:10',
    image: '/images/home/story-6.webp',
  },
]

export default function HomeGraduateStories() {
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
    const cardWidth = el.querySelector('[data-story-card]')?.getBoundingClientRect().width ?? 360
    const gap = 20
    el.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full mt-[100px] px-10 max-[1239px]:mt-[60px] max-[1239px]:px-[34px] max-[1023px]:px-[42px] max-[767px]:mt-12 max-[767px]:pl-3 max-[767px]:pr-0">
      {/* Title + nav buttons wrapper (relative for absolute button positioning) */}
      <div className="flex items-start justify-between mb-10 max-[1239px]:mb-7 max-[767px]:mb-6">
        <h2 className="text-[40px] font-semibold leading-[46px] m-0 max-[1239px]:text-[32px] max-[1239px]:leading-[38px] max-[767px]:text-2xl max-[767px]:leading-[30px]">
          Get inspired by our Hybreeds&apos; success stories
        </h2>

        {/* Navigation buttons */}
        <div className="flex items-center gap-5 flex-shrink-0 ml-5 max-[767px]:hidden">
          <button
            onClick={() => scrollByCard('left')}
            disabled={!canScrollLeft}
            aria-label="Previous stories"
            className={`w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 cursor-pointer transition-colors ${
              canScrollLeft ? 'bg-[#27292d] text-white hover:bg-black' : 'bg-[#27292d] text-white opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={22} className="rotate-0" />
          </button>
          <button
            onClick={() => scrollByCard('right')}
            disabled={!canScrollRight}
            aria-label="Next stories"
            className={`w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 cursor-pointer transition-colors ${
              canScrollRight ? 'bg-[#27292d] text-white hover:bg-black' : 'bg-[#27292d] text-white opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Horizontal card carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-5 overflow-x-auto min-[768px]:overflow-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        {STORIES.map((story) => (
          <article
            key={story.title}
            data-story-card
            className="group flex-shrink-0 w-[280px] min-[768px]:w-[360px] min-h-[400px] h-auto min-[768px]:h-[352px] p-5 rounded-3xl bg-[#f3f4f7] border border-white box-border cursor-pointer hover:shadow-sm transition-shadow"
          >
            {/* Poster image with play button + duration */}
            <div className="relative w-full min-[768px]:w-[320px] h-[200px] min-[768px]:h-[224px] rounded-xl overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 280px, 320px"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-black/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play size={20} className="text-white fill-white ml-0.5" />
                </span>
              </div>
              {/* Duration badge */}
              <span className="absolute bottom-2 right-2 bg-black text-white text-xs font-medium px-2 py-0.5 rounded">
                {story.duration}
              </span>
            </div>

            {/* Title + subtitle */}
            <h3 className="text-lg min-[768px]:text-xl leading-6 font-medium text-[#080808] mt-4 m-0">
              {story.title}
            </h3>
            <p className="text-sm min-[768px]:text-base leading-6 text-[#27292d] mt-4 m-0">
              {story.subtitle}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
