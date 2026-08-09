'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'

interface HomeStartHereProps {
  orgslug: string
}

const FREE_LINKS = [
  { label: 'Courses', href: '/courses' },
  { label: 'Open classes', href: '/courses' },
  { label: 'Guides and checklists', href: '/courses' },
]

export default function HomeStartHere({ orgslug }: HomeStartHereProps) {
  const coursesHref = getUriWithOrg(orgslug, '/courses')

  return (
    <section className="w-full bg-white">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-4xl font-bold sm:font-black tracking-tight text-[#080808] mb-6 sm:mb-8">
          If you don&apos;t know where to start
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Card 1: Express consultation */}
          <div className="relative overflow-hidden rounded-3xl bg-[#f3f4f7] p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 min-h-[200px] sm:min-h-[260px]">
            {/* Decorative blurred ellipses */}
            <div className="absolute w-32 h-32 rounded-full bg-emerald-200 opacity-30 blur-[50px] -top-10 -right-10 pointer-events-none" />

            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-xl sm:text-3xl font-semibold text-black leading-tight mb-2 sm:mb-3">
                Decide on a career with an express consultation
              </h3>
              <p className="text-sm sm:text-lg text-[#070707] leading-6 m-0 mb-4 sm:mb-5">
                Fill out the form and receive free recommendations from the Hybreed neural network.
              </p>
              <Link
                href={coursesHref}
                className="inline-flex items-center gap-2 px-4 sm:px-6 h-11 sm:h-14 bg-black text-white rounded-xl text-sm sm:text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Choose a profession
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={18} className="hidden sm:block" />
              </Link>
            </div>

            <div className="relative w-full h-[160px] sm:w-[200px] sm:h-[200px] flex-shrink-0">
              <Image
                src="/images/home/sf-start-1.webp"
                alt="Express consultation"
                fill
                className="object-cover rounded-lg"
                sizes="160px"
              />
            </div>
          </div>

          {/* Card 2: Start with free materials */}
          <div className="relative overflow-hidden rounded-3xl bg-[#f3f4f7] p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 min-h-[200px] sm:min-h-[260px]">
            {/* Decorative blurred ellipses */}
            <div className="absolute w-32 h-32 rounded-full bg-blue-200 opacity-30 blur-[50px] -bottom-10 -left-10 pointer-events-none" />

            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-xl sm:text-3xl font-semibold text-black leading-tight mb-2 sm:mb-3">
                Start with free materials
              </h3>
              <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-4 sm:mb-5">
                {FREE_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={getUriWithOrg(orgslug, item.href)}
                      className="inline-flex items-center gap-1.5 text-sm sm:text-lg font-medium text-[#070707] hover:text-blue-700 transition-colors"
                    >
                      {item.label}
                      <ArrowRight size={10} className="sm:hidden" />
                      <ArrowRight size={12} className="hidden sm:block" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={coursesHref}
                className="inline-flex items-center gap-2 px-4 sm:px-6 h-11 sm:h-14 bg-black text-white rounded-xl text-sm sm:text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Start for free
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={18} className="hidden sm:block" />
              </Link>
            </div>

            <div className="relative w-full h-[160px] sm:w-[200px] sm:h-[200px] flex-shrink-0">
              <Image
                src="/images/home/sf-start-2.webp"
                alt="Free materials"
                fill
                className="object-cover rounded-lg"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
