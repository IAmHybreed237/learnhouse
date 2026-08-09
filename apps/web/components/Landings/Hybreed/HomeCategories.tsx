'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'

interface HomeCategoriesProps {
  orgslug: string
}

const CATEGORIES = [
  { label: 'Programming', count: 45 },
  { label: 'Analytics', count: 38 },
  { label: 'Design and UX', count: 31 },
  { label: 'Business and Management', count: 48 },
  { label: 'Marketing', count: 29 },
  { label: 'Finance and Investments', count: 16 },
  { label: 'Neural networks', count: 9 },
  { label: 'Marketplaces', count: 6 },
  { label: 'Health', count: 18 },
  { label: 'Psychology', count: 12 },
]

export default function HomeCategories({ orgslug }: HomeCategoriesProps) {
  const coursesHref = getUriWithOrg(orgslug, '/courses')

  return (
    <section className="w-full bg-[#f3f4f7]">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={coursesHref}
              className="group flex items-center justify-between p-3 sm:p-7 bg-white rounded-2xl hover:shadow-sm transition-shadow h-[110px] sm:h-[132px] overflow-hidden"
            >
              <span className="text-sm sm:text-xl font-bold text-[#080808] leading-tight pr-1 sm:pr-4 line-clamp-2">
                {cat.label}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base font-semibold bg-[#e6f8ed] text-[#0a7d3e] shrink-0">
                {cat.count}
                <ArrowRight size={12} className="sm:hidden" />
                <ArrowRight size={16} className="hidden sm:block" />
              </span>
            </Link>
          ))}

          <Link
            href={coursesHref}
            className="col-span-2 sm:col-span-1 lg:col-span-1 group flex items-center justify-between p-3 sm:p-7 bg-white rounded-2xl hover:shadow-sm transition-shadow h-[110px] sm:h-[132px] overflow-hidden"
          >
            <span className="text-sm sm:text-xl font-bold text-[#080808] leading-tight pr-1 sm:pr-4">
              Full catalog
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base font-semibold bg-[#e6f8ed] text-[#0a7d3e] shrink-0">
              View all
              <ArrowRight size={12} className="sm:hidden" />
              <ArrowRight size={16} className="hidden sm:block" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
