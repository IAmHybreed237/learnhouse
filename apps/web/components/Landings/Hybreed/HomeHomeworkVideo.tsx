'use client'

import React from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function HomeHomeworkVideo() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          {/* Left: text */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-5xl sm:text-6xl font-bold sm:font-black tracking-tight text-[#080808] mb-4 sm:mb-8">
              From homework to new projects
            </h2>
            <p className="text-base sm:text-xl text-gray-600 leading-7">
              In just 2 minutes, we&apos;ll tell you about our students&apos; journey: through challenges to solutions and real results.
            </p>
          </div>

          {/* Right: video */}
          <div
            className="relative rounded-3xl overflow-hidden cursor-pointer group w-full sm:w-[670px] sm:flex-shrink-0"
            style={{ height: 'auto', aspectRatio: '670 / 440' }}
          >
            <Image
              src="/images/home/sf-homework-poster-1.png"
              alt="From homework to new projects"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-16 rounded-full bg-black/80 flex items-center justify-center group-hover:bg-black transition-colors">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
            </div>

            {/* Time badge */}
            <div className="absolute right-5 bottom-5 z-10 flex items-center h-6 px-2 rounded-md bg-black text-white text-xs font-medium">
              2:10
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
