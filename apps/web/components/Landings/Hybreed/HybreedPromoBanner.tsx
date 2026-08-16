'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'

interface HybreedPromoBannerProps {
  orgslug: string
}

export default function HybreedPromoBanner({ orgslug }: HybreedPromoBannerProps) {
  return (
    <div className="w-full h-[88px] bg-[#B6F2B6] flex justify-center max-[767px]:h-11">
      <div className="w-[1160px] flex items-center px-10 max-[1239px]:w-[944px] max-[1023px]:w-[720px] max-[1023px]:px-6 max-[767px]:px-5 max-[375px]:w-full">
        {/* Title wrap */}
        <div className="w-full max-[767px]:flex max-[767px]:items-center max-[767px]:justify-between">
          {/* Desktop title */}
          <div className="text-[#13181B] font-semibold text-xl leading-6 mr-auto text-left max-[1023px]:text-base max-[1023px]:leading-[22px] max-[767px]:hidden">
            Early enrollment is open — be among the first to join Hybreed Academy and shape your future.
          </div>

          {/* Mobile title (clickable link with chevron) */}
          <Link
            href={getUriWithOrg(orgslug, '/courses')}
            className="hidden max-[767px]:flex items-center gap-1 text-[#13181B] font-semibold text-sm leading-5 no-underline"
          >
            <span>Early enrollment is now open</span>
            <ChevronRight size={16} className="mt-[3px] shrink-0" />
          </Link>
        </div>

        {/* Desktop link: Terms of the promotion — hidden on tablet/mobile */}
        <a
          href="#"
          className="text-[#13181B] text-[10px] leading-3 whitespace-nowrap ml-6 hover:text-black no-underline max-[1023px]:hidden"
        >
          Learn more about enrollment
        </a>

        {/* Desktop button: Select a course — hidden on mobile */}
        <Link
          href={getUriWithOrg(orgslug, '/courses')}
          className="h-10 bg-[#080808] rounded-[10px] flex items-center text-white font-semibold justify-center no-underline whitespace-nowrap ml-6 min-w-[156px] px-4 hover:bg-[#27292D] transition-colors max-[767px]:hidden"
        >
          Browse courses
        </Link>

        {/* Desktop image area — hidden on mobile */}
        <div className="h-[88px] w-[248px] ml-6 shrink-0 max-[767px]:hidden" />
      </div>
    </div>
  )
}
