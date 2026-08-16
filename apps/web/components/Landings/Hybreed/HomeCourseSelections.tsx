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
    count: 5,
    title: 'Web & Software Development',
    description: 'Build websites and web apps with HTML, CSS, JavaScript and React.',
    image: '/images/home/collection-1.webp',
  },
  {
    count: 3,
    title: 'Digital & Workplace Skills',
    description: 'Master computer basics, Office tools and modern workplace skills.',
    image: '/images/home/collection-2.webp',
  },
  {
    count: 2,
    title: 'Design & Creative Tech',
    description: 'Create professional graphics and design modern interfaces with Figma.',
    image: '/images/home/collection-3.webp',
  },
  {
    count: 2,
    title: 'Business & Marketing',
    description: 'Learn digital marketing and SEO to grow businesses online effectively.',
    image: '/images/home/collection-4.webp',
  },
  {
    count: 1,
    title: 'Electronics & IoT',
    description: 'Build practical electronics projects with Arduino and sensors.',
    image: '/images/home/collection-5.webp',
  },
  {
    count: 10,
    title: 'Graduate Career Upgrade',
    description: 'Bridge the gap between your degree and the digital workplace.',
    image: '/images/home/collection-6.webp',
  },
  {
    count: 5,
    title: 'Start freelancing',
    description: 'Build skills that let you earn income online on your own schedule.',
    image: '/images/home/collection-7.webp',
  },
  {
    count: 3,
    title: 'Build websites from scratch',
    description: 'Learn to create professional websites for any purpose or client.',
    image: '/images/home/collection-8.webp',
  },
  {
    count: 5,
    title: 'Accelerate your career',
    description: 'Add valuable digital skills that help you move forward faster.',
    image: '/images/home/collection-9.webp',
  },
  {
    count: 4,
    title: 'Become your own boss',
    description: 'Learn how to start a business, manage your time, and grow income.',
    image: '/images/home/collection-10.webp',
  },
  {
    count: 3,
    title: 'Turn creativity into income',
    description: 'Transform your passion and hobby into a sustainable source of revenue.',
    image: '/images/home/collection-11.webp',
  },
  {
    count: 2,
    title: 'Master modern Office tools',
    description: 'Learn Word, Excel and PowerPoint for professional workplace tasks.',
    image: '/images/home/collection-12.webp',
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
    const cardWidth = el.querySelector('[data-card]')?.getBoundingClientRect().width ?? 373
    const gap = 20
    el.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full mt-[100px] px-10 max-[1239px]:mt-[60px] max-[767px]:mt-12 max-[767px]:px-3">
      <div className="relative">
        <h2 className="text-[40px] font-semibold leading-[46px] max-w-[670px] m-0 mb-10 max-[1239px]:text-[32px] max-[1239px]:leading-[38px] max-[1239px]:mb-7 max-[1239px]:max-w-[550px] max-[767px]:text-2xl max-[767px]:leading-[30px] max-[767px]:mb-6">
          Course collections for every Hybreed
        </h2>

        {/* Navigation buttons — top right */}
        <div className="absolute right-0 top-0 flex items-center gap-5 max-[767px]:hidden">
          <button
            onClick={() => scrollByCard('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 cursor-pointer transition-colors ${
              canScrollLeft ? 'bg-[#27292d] text-white hover:bg-black' : 'bg-[#27292d] text-white opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scrollByCard('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 cursor-pointer transition-colors ${
              canScrollRight ? 'bg-[#27292d] text-white hover:bg-black' : 'bg-[#27292d] text-white opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Cards carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-5 overflow-x-auto min-[768px]:overflow-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        {SELECTION_CARDS.map((card) => (
          <Link
            key={card.title}
            href={coursesHref}
            data-card
            className="group flex-none snap-start w-[300px] max-[767px]:w-[200px] min-[768px]:w-[373px] max-[1239px]:min-[768px]:w-[300px] relative overflow-hidden rounded-[20px] bg-[#f3f4f7] border border-white hover:border-[#8e8e8e] transition-colors h-[494px] max-[1239px]:h-[448px] max-[767px]:h-[416px] no-underline block"
          >
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 200px, 373px"
              />
            </div>

            {/* Bottom text overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#f2f4f7] rounded-[20px] p-6 max-[767px]:p-4 min-h-[152px] max-h-[152px] flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center justify-center bg-[#080808] text-white text-xs font-medium rounded-[25px] h-6 w-[69px] mb-3">
                  {card.count} courses
                </span>
                <h3 className="text-xl font-semibold leading-6 text-black m-0 mb-3 max-[767px]:text-lg max-[767px]:leading-[22px]">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm leading-5 text-[#1f1f22] opacity-60 m-0 min-[768px]:text-base">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
