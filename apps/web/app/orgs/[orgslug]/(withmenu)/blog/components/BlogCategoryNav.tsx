'use client'

import React from 'react'
import Link from 'next/link'
import { blogCategories } from '../blog-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogCategoryNavProps {
  activeSlug?: string
}

export default function BlogCategoryNav({ activeSlug }: BlogCategoryNavProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="w-full border-b border-[#e8e8e8] bg-white sticky top-0 z-30">
      <div className="max-w-[1240px] mx-auto px-5 relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 hidden lg:flex items-center justify-center bg-white border border-[#e8e8e8] rounded-full shadow-sm hover:bg-[#f3f4f7]"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3 lg:mx-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogCategories.map((cat) => {
            const isActive = cat.slug === activeSlug
            return (
              <Link
                key={cat.slug}
                href={cat.href}
                className={`
                  shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${isActive
                    ? 'bg-black text-white'
                    : 'text-[#27292d] hover:bg-[#f3f4f7]'
                  }
                `}
              >
                {cat.name}
              </Link>
            )
          })}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 hidden lg:flex items-center justify-center bg-white border border-[#e8e8e8] rounded-full shadow-sm hover:bg-[#f3f4f7]"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </nav>
  )
}
