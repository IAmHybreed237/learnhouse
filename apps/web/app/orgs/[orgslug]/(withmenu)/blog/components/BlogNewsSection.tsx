'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { newsItems } from '../blog-data'

export default function BlogNewsSection() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1240px] mx-auto px-5">
        <h2 className="text-2xl font-semibold text-[#27292d] mb-6">News</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col p-5 rounded-lg border border-[#e8e8e8] hover:border-[#d1d5d9] transition-colors"
            >
              <time className="text-sm text-[#8b8f92] mb-3">{item.date}</time>
              <Link
                href={item.href}
                className="text-lg font-semibold text-[#27292d] hover:text-[#0066ff] leading-snug mb-2"
              >
                {item.title}
              </Link>
              <p className="text-sm text-[#6c7072] line-clamp-3">{item.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="text-left">
          <Link
            href="/blog/news"
            className="inline-flex items-center gap-1 text-[#0066ff] font-medium hover:underline"
          >
            More news <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
