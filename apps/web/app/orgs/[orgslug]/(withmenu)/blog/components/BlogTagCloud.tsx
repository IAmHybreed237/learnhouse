'use client'

import React from 'react'
import Link from 'next/link'
import { blogTags } from '../blog-data'

interface BlogTagCloudProps {
  activeSlug?: string
}

export default function BlogTagCloud({ activeSlug }: BlogTagCloudProps) {
  return (
    <div className="w-full bg-white border-b border-[#e8e8e8]">
      <div className="max-w-[1240px] mx-auto px-5 py-4">
        <div
          className="flex items-center gap-2 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogTags.map((tag) => {
            const isActive = tag.slug === activeSlug
            return (
              <Link
                key={tag.slug}
                href={tag.href}
                className={`
                  shrink-0 px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors
                  ${isActive
                    ? 'bg-[#0066ff] text-white'
                    : 'text-[#0066ff] bg-[#f3f8ff] hover:bg-[#e0efff]'
                  }
                `}
              >
                {tag.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
