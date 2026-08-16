'use client'

import React, { useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'

interface HomePopularProgramsProps {
  orgslug: string
}

const TABS = ['Careers and skills', 'Free courses']

const PROGRAMS = [
  {
    category: 'Web Development',
    type: 'Career track',
    discount: 'New',
    title: 'Modern Website Development',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-1.webp',
  },
  {
    category: 'Design',
    type: 'Career track',
    discount: 'New',
    title: 'Graphic Design & Visual Content',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-2.webp',
  },
  {
    category: 'Workplace Skills',
    type: 'Course',
    discount: 'New',
    title: 'Microsoft Office Mastery',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-3.webp',
  },
  {
    category: 'Design',
    type: 'Career track',
    discount: 'New',
    title: 'UI/UX Design with Figma',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-4.webp',
  },
  {
    category: 'Web Development',
    type: 'Career track',
    discount: 'New',
    title: 'React.js Development',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-5.webp',
  },
  {
    category: 'Marketing',
    type: 'Career track',
    discount: 'New',
    title: 'Digital Marketing',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-6.webp',
  },
  {
    category: 'Career Upgrade',
    type: 'Course',
    discount: 'New',
    title: 'Digital Accounting Skills',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-7.webp',
  },
  {
    category: 'Marketing',
    type: 'Course',
    discount: 'New',
    title: 'Search Engine Optimization',
    startDate: 'Enrolling now',
    duration: 'Self-paced',
    image: '/images/home/sf-prog-7.webp',
  },
]

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
    const gap = 16
    el.scrollBy({
      left: direction === 'left' ? -(cardWidth + gap) : cardWidth + gap,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full mt-[100px] px-10 max-[1239px]:mt-[60px] max-[767px]:mt-12 max-[767px]:px-3">
      {/* Title */}
      <h2 className="text-[40px] font-semibold leading-[46px] m-0 mb-7 max-[1239px]:text-[32px] max-[1239px]:leading-[38px] max-[1239px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[30px] max-[767px]:mb-3">
        Explore our featured programs
      </h2>

      {/* Tabs */}
      <div className="flex items-center w-fit border-b-2 border-[rgba(0,102,255,0.3)] mb-[30px] max-[767px]:mb-4">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`relative cursor-pointer text-[22px] leading-7 px-6 py-3 font-medium border-0 bg-transparent transition-colors max-[767px]:text-sm max-[767px]:leading-5 max-[767px]:px-1 max-[767px]:py-2 max-[767px]:text-center ${
              activeTab === i
                ? 'text-black after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-1 after:bg-[#06f] after:rounded-t-[5px]'
                : 'text-[#8e8e8e] hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Programs carousel container */}
      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={() => scrollByCard('left')}
          disabled={!canScrollLeft}
          aria-label="Previous"
          className={`absolute left-[-26px] top-0 bottom-0 my-auto z-10 w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 cursor-pointer transition-colors max-[767px]:hidden ${
            canScrollLeft ? 'bg-[#27292d] text-white hover:bg-black' : 'bg-[#27292d] text-white opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scrollByCard('right')}
          disabled={!canScrollRight}
          aria-label="Next"
          className={`absolute right-[-26px] top-0 bottom-0 my-auto z-10 w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 cursor-pointer transition-colors max-[767px]:hidden ${
            canScrollRight ? 'bg-[#27292d] text-white hover:bg-black' : 'bg-[#27292d] text-white opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight size={22} />
        </button>

        {/* Scrollable cards row */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-x-auto min-[768px]:overflow-hidden scroll-smooth max-[1239px]:mr-[-40px] max-[767px]:mr-[-12px]"
          style={{ scrollbarWidth: 'none' }}
        >
          {PROGRAMS.map((program) => (
            <Link
              key={program.title}
              href={coursesHref}
              data-prog-card
              className="group flex-none w-[284px] min-h-[426px] max-[767px]:min-h-[400px] rounded-3xl bg-[#f3f4f7] border border-white hover:border-[#8e8e8e] transition-colors no-underline block relative overflow-hidden"
            >
              {/* Blur gradient backgrounds */}
              <div className="absolute bottom-[-130px] left-[-35px] w-[230px] h-[220px] bg-[#b3d2ff] blur-[64px] rounded-full z-0 pointer-events-none" />
              <div className="absolute bottom-[-26px] right-[-82px] w-[173px] h-[166px] bg-[#c7f0e1] blur-[48px] rounded-full z-0 pointer-events-none" />

              {/* Card content */}
              <div className="relative z-10 p-5 flex flex-col h-full">
                {/* Header: labels + discount */}
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col gap-2 pr-3">
                    <span className="inline-block px-3 py-1 text-xs leading-[14px] text-black bg-white rounded-full border border-[#ccc] mr-auto">
                      {program.category}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs leading-[14px] text-black bg-white rounded-full border border-[#ccc] mr-auto">
                      {program.type}
                    </span>
                  </div>
                  {/* Discount star */}
                  <DiscountStar discount={program.discount} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-6 text-black m-0 mb-3 max-[767px]:text-lg max-[767px]:leading-[22px]">
                  {program.title}
                </h3>

                {/* Date info */}
                <p className="text-sm leading-5 text-[rgba(0,0,0,0.6)] m-0 mt-auto">
                  {program.startDate} / {program.duration}
                </p>
              </div>

              {/* Card image — bottom left */}
              {program.image && (
                <div className="absolute bottom-0 left-0 w-full max-w-full pointer-events-none">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={284}
                    height={160}
                    className="w-full h-auto object-contain object-bottom"
                    style={{ height: 'auto' }}
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* View all link */}
      <Link
        href={coursesHref}
        className="inline-flex items-center gap-1.5 mt-6 text-base font-medium text-[#06f] hover:text-blue-800 transition-colors no-underline max-[767px]:mt-4"
      >
        View all courses
        <ArrowRight size={16} />
      </Link>
    </section>
  )
}

function DiscountStar({ discount }: { discount: string }) {
  return (
    <div className="relative flex items-center justify-center flex-shrink-0" style={{ marginRight: -8, marginTop: -8 }}>
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
      <span className="absolute text-sm font-medium text-black leading-[18px] tracking-[-0.7px]">
        {discount}
      </span>
    </div>
  )
}
