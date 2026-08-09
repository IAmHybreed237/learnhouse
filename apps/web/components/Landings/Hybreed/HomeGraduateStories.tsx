'use client'

import React, { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

// Graduate story video cards — extracted from the reference design.
// Each card has a poster image, play button, duration badge, title and subtitle.
const STORIES = [
  {
    title: 'From Violinist to Python Developer',
    subtitle: 'How to See the Creativity in Python and Overcome Fears',
    duration: '2:46',
    image: '/images/home/sf-img-84.webp',
  },
  {
    title: 'From Factory to UX/UI Design',
    subtitle: 'How to get into the dream team immediately after training',
    duration: '2:14',
    image: '/images/home/sf-img-85.webp',
  },
  {
    title: 'From Aviation to BI Analytics',
    subtitle: 'How to choose a profession that is in demand and that you will enjoy',
    duration: '3:36',
    image: '/images/home/sf-img-86.webp',
  },
  {
    title: 'From Law to Marketing',
    subtitle: 'Why Taking a Risk Can Make You a Leader',
    duration: '3:39',
    image: '/images/home/sf-img-87.webp',
  },
  {
    title: 'Going digital after 35',
    subtitle: 'How to apply experience in a new field and make age an advantage',
    duration: '3:16',
    image: '/images/home/sf-img-88.webp',
  },
  {
    title: 'From a small town to a Moscow company',
    subtitle: 'How to work in two cities and enjoy studying',
    duration: '3:10',
    image: '/images/home/sf-img-89.webp',
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
    <section className="w-full bg-[#f3f4f7]">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-24 pb-12">
        {/* Title row with slider controls */}
        <div className="flex items-center justify-between mt-10 mb-10">
          <h2 className="text-2xl sm:text-[40px] sm:leading-[46px] font-semibold tracking-tight text-[#080808] max-w-[611px] m-0">
            Get inspired by the stories of our graduates
          </h2>
          <div className="hidden sm:flex items-center gap-3 ml-3 flex-shrink-0">
            <button
              onClick={() => scrollByCard('left')}
              disabled={!canScrollLeft}
              aria-label="Previous stories"
              className={`w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 transition-opacity ${
                canScrollLeft ? 'bg-[#27292d] text-white hover:opacity-90' : 'bg-[#27292d] text-white opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollByCard('right')}
              disabled={!canScrollRight}
              aria-label="Next stories"
              className={`w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 transition-opacity ${
                canScrollRight ? 'bg-[#27292d] text-white hover:opacity-90' : 'bg-[#27292d] text-white opacity-40 cursor-not-allowed'
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
          className="flex gap-5 overflow-x-auto sm:overflow-hidden scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {STORIES.map((story) => (
            <article
              key={story.title}
              data-story-card
              className="group flex-shrink-0 w-[280px] sm:w-[360px] min-h-[400px] h-auto sm:h-[352px] p-5 rounded-3xl bg-[#f3f4f7] border border-white box-border cursor-pointer hover:shadow-sm transition-shadow"
            >
              {/* Poster image with play button + duration */}
              <div className="relative w-full sm:w-[320px] h-[200px] sm:h-[224px] rounded-xl overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 320px"
                />
                {/* Play button — centered, circular, dark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-black/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Play size={20} className="text-white fill-white ml-0.5" />
                  </span>
                </div>
                {/* Duration badge — bottom-right */}
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs font-medium px-2 py-0.5 rounded">
                  {story.duration}
                </span>
              </div>

              {/* Title + subtitle */}
              <h3 className="text-lg sm:text-xl leading-6 font-medium text-[#080808] mt-4 m-0">
                {story.title}
              </h3>
              <p className="text-sm sm:text-base leading-6 text-[#27292d] mt-4 m-0">
                {story.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
