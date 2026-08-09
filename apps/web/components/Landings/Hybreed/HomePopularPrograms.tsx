'use client'

import React, { useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'

interface HomePopularProgramsProps {
  orgslug: string
}

const TABS = ['Professions and skills', 'Free programs']

const PROGRAMS = [
  {
    category: 'Programming',
    type: 'Profession',
    discount: '- 40%',
    title: '1C Programmer: Advanced Course',
    startDate: 'Start August 17',
    duration: '17 months',
    image: '/images/home/sf-prog-1.webp',
  },
  {
    category: 'Design and UX',
    type: 'Profession',
    discount: '- 45%',
    title: 'Graphic Designer: Advanced Course',
    startDate: 'Start August 17',
    duration: '17 months',
    image: '/images/home/sf-prog-2.webp',
  },
  {
    category: 'Analytics',
    type: 'Well',
    discount: '- 45%',
    title: 'Excel: From Basics to Data Analysis',
    startDate: 'Starts August 10',
    duration: '9 weeks',
    image: '/images/home/sf-prog-3.webp',
  },
  {
    category: 'Design and UX',
    type: 'Profession',
    discount: '- 45%',
    title: 'Interior designer',
    startDate: 'Start August 6',
    duration: '13 months',
    image: '/images/home/sf-prog-4.webp',
  },
  {
    category: 'Analytics',
    type: 'Profession',
    discount: '- 45%',
    title: 'Data Scientist: Advanced Course',
    startDate: 'Start August 20',
    duration: '18 months',
    image: '/images/home/sf-prog-5.webp',
  },
  {
    category: 'Marketing',
    type: 'Profession',
    discount: '- 50%',
    title: 'Internet Marketer: Advanced',
    startDate: 'Start August 7',
    duration: '14 months',
    image: '/images/home/sf-prog-6.webp',
  },
  {
    category: 'Marketplaces',
    type: 'Well',
    discount: '- 45%',
    title: 'Marketplace Manager: Advanced',
    startDate: 'Start August 10',
    duration: '6 months',
    image: '/images/home/sf-prog-7.webp',
  },
  {
    category: 'Marketing',
    type: 'Well',
    discount: '- 45%',
    title: 'Basics of Trading and Investing',
    startDate: 'Start August 25',
    duration: '6 months',
    image: '/images/home/sf-prog-1.webp',
  },
]

function DiscountStar({ discount }: { discount: string }) {
  return (
    <div className="relative flex items-center justify-center" style={{ marginRight: -8, marginTop: -8, marginBottom: 'auto' }}>
      <svg width="49" height="49" fill="none" viewBox="0 0 49 49">
        <path
          d="M23.844 0.57C24.22 0.243 24.78 0.243 25.156 0.57L27.44 2.554C27.728 2.805 28.134 2.869 28.486 2.72L31.271 1.538C31.73 1.344 32.262 1.517 32.519 1.944L34.078 4.536C34.274 4.864 34.641 5.05 35.021 5.017L38.035 4.755C38.532 4.711 38.984 5.04 39.096 5.526L39.778 8.473C39.864 8.845 40.155 9.136 40.527 9.222L43.475 9.904C43.96 10.016 44.289 10.468 44.245 10.965L43.983 13.979C43.95 14.359 44.136 14.726 44.464 14.923L47.056 16.481C47.483 16.738 47.656 17.27 47.462 17.729L46.28 20.514C46.131 20.866 46.196 21.272 46.446 21.56L48.43 23.844C48.757 24.22 48.757 24.78 48.43 25.156L46.446 27.44C46.196 27.728 46.131 28.134 46.28 28.486L47.462 31.271C47.656 31.73 47.483 32.262 47.056 32.519L44.464 34.078C44.136 34.274 43.95 34.641 43.983 35.021L44.245 38.035C44.289 38.532 43.96 38.984 43.475 39.096L40.527 39.778C40.155 39.864 39.864 40.155 39.778 40.527L39.096 43.475C38.984 43.96 38.532 44.289 38.035 44.245L35.021 43.983C34.641 43.95 34.274 44.136 34.078 44.464L32.519 47.056C32.262 47.483 31.73 47.656 31.271 47.462L28.486 46.28C28.134 46.131 27.728 46.196 27.44 46.446L25.156 48.43C24.78 48.757 24.22 48.757 23.844 48.43L21.56 46.446C21.272 46.196 20.866 46.131 20.514 46.28L17.729 47.462C17.27 47.656 16.738 47.483 16.481 47.056L14.923 44.464C14.726 44.136 14.359 43.95 13.979 43.983L10.965 44.245C10.468 44.289 10.016 43.96 9.904 43.475L9.222 40.527C9.136 40.155 8.845 39.864 8.473 39.778L5.526 39.096C5.04 38.984 4.711 38.532 4.755 38.035L5.017 35.021C5.05 34.641 4.864 34.274 4.536 34.078L1.944 32.519C1.517 32.262 1.344 31.73 1.538 31.271L2.72 28.486C2.869 28.134 2.805 27.728 2.554 27.44L0.57 25.156C0.243 24.78 0.243 24.22 0.57 23.844L2.554 21.56C2.805 21.272 2.869 20.866 2.72 20.514L1.538 17.729C1.344 17.27 1.517 16.738 1.944 16.481L4.536 14.923C4.864 14.726 5.05 14.359 5.017 13.979L4.755 10.965C4.711 10.468 5.04 10.016 5.526 9.904L8.473 9.222C8.845 9.136 9.136 8.845 9.222 8.473L9.904 5.526C10.016 5.04 10.468 4.711 10.965 4.755L13.979 5.017C14.359 5.05 14.726 4.864 14.923 4.536L16.481 1.944C16.738 1.517 17.27 1.344 17.729 1.538L20.514 2.72C20.866 2.869 21.272 2.805 21.56 2.554L23.844 0.57Z"
          fill="url(#discount-gradient)"
        />
        <defs>
          <linearGradient id="discount-gradient" x1="-2.39" y1="-4.29" x2="64.44" y2="2.77" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4DCFF" />
            <stop offset="1" stopColor="#DBFFF2" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className="absolute font-medium text-black"
        style={{ fontSize: 14, lineHeight: '18px', letterSpacing: '-0.7px' }}
      >
        {discount}
      </span>
    </div>
  )
}

export default function HomePopularPrograms({ orgslug }: HomePopularProgramsProps) {
  const [activeTab, setActiveTab] = useState(0)
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
    const cardWidth = el.querySelector('[data-prog-card]')?.getBoundingClientRect().width ?? 284
    const gap = 20
    el.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full bg-[#f3f4f7]">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold sm:font-black tracking-tight text-[#080808]">
            Our most popular programs
          </h2>
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href={coursesHref}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
            >
              View all programs
              <ArrowRight size={16} />
            </Link>
            <div className="flex items-center gap-2">
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
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 sm:mb-8">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors ${
                activeTab === i
                  ? 'bg-[#080808] text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Program cards carousel */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROGRAMS.map((program) => (
            <Link
              key={program.title}
              href={coursesHref}
              data-prog-card
              className="group flex-none snap-start w-[240px] sm:w-[284px] relative overflow-hidden rounded-3xl bg-[#f3f4f7] border border-white hover:shadow-lg transition-shadow min-h-[380px] sm:min-h-[426px] block"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #e6f8ed 0%, rgba(230,248,237,0.5) 40%, rgba(243,244,247,0) 70%)' }}
              />
              <div className="relative z-10 p-5 flex flex-col h-full">
                {/* Header: pill tags + discount star */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-2 pr-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-black bg-white rounded-full border border-gray-300 mr-auto">
                      {program.category}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-black bg-white rounded-full border border-gray-300 mr-auto">
                      {program.type}
                    </span>
                  </div>
                  <DiscountStar discount={program.discount} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-black leading-6 max-w-[200px] sm:max-w-[233px] mb-0">
                  {program.title}
                </h3>

                {/* Dates */}
                <p className="text-sm text-black opacity-60 leading-5 m-0 mt-auto">
                  {program.startDate} / {program.duration}
                </p>

                {/* Image */}
                <div className="relative w-[140px] h-[140px] mt-3 flex-shrink-0">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover rounded-lg cursor-pointer"
                    sizes="140px"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
