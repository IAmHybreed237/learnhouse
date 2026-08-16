'use client'

import React from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function HomeHomeworkVideo() {
  return (
    <section className="w-full mt-[100px] px-[42px] flex gap-5 items-center max-[1239px]:mt-[60px] max-[767px]:flex-col max-[767px]:mt-12 max-[767px]:px-3">
      {/* Left: text */}
      <div className="flex-1">
        <h2 className="text-[40px] font-semibold leading-[46px] text-black mb-10 mt-0 max-[1239px]:text-[32px] max-[1239px]:leading-[38px] max-[1239px]:mb-7 max-[767px]:text-2xl max-[767px]:leading-[30px] max-[767px]:mb-6">
          From lessons to real projects
        </h2>
        <p className="text-xl leading-7 text-[#27292d] m-0 max-[767px]:text-base max-[767px]:leading-6">
          In just 2 minutes, discover how Hybreeds turn new skills into real projects and career breakthroughs.
        </p>
      </div>

      {/* Right: video */}
      <div className="relative min-w-[570px] h-[380px] rounded-[20px] overflow-hidden cursor-pointer group flex items-center justify-center flex-shrink-0 max-[1239px]:min-w-[460px] max-[1239px]:h-[306px] max-[1023px]:min-w-[340px] max-[1023px]:h-[226px] max-[767px]:min-w-0 max-[767px]:max-w-[351px] max-[767px]:h-[234px] max-[767px]:w-full">
        <Image
          src="/images/home/sf-homework-poster-1.png"
          alt="From lessons to real projects"
          fill
          className="object-cover"
          sizes="(max-width: 767px) 351px, (max-width: 1023px) 340px, (max-width: 1239px) 460px, 570px"
          priority
        />

        {/* Play button */}
        <div className="absolute flex items-center h-12 pl-[18px] pr-5 bg-black rounded-xl border-0 z-10">
          <Play size={20} className="text-white fill-white" />
          <span className="ml-1.5 text-white font-semibold text-base leading-5 hidden group-hover:block">
            Watch
          </span>
        </div>

        {/* Time badge */}
        <div className="absolute right-5 bottom-5 z-10 flex items-center h-6 px-2 rounded-md bg-black text-white text-xs leading-[14px]">
          2:10
        </div>
      </div>
    </section>
  )
}
