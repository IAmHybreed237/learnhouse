'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BlogPromoBanner() {
  return (
    <div className="w-full bg-[#f3f4f7] py-3">
      <div className="max-w-[1240px] mx-auto px-5 flex items-center justify-center gap-3 flex-wrap">
        <span className="text-sm md:text-base text-[#27292d] text-center">
          Discounts up to 50% and generous gifts — we are holding prices on courses until August 31st.
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/programs/presents-partners"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0066ff] hover:underline"
          >
            Select a course <ArrowRight size={14} />
          </Link>
          <Link
            href="/legal/855"
            className="text-sm text-[#6c7072] hover:text-[#27292d] hover:underline"
          >
            Terms of the promotion
          </Link>
        </div>
      </div>
    </div>
  )
}
