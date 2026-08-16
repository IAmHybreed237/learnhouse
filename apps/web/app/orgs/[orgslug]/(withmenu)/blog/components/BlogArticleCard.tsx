'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '../blog-data'

interface BlogArticleCardProps {
  post: BlogPost
  variant?: 'horizontal' | 'vertical'
}

export default function BlogArticleCard({ post, variant = 'horizontal' }: BlogArticleCardProps) {
  if (variant === 'vertical') {
    return (
      <article className="group bg-white rounded-lg overflow-hidden border border-[#e8e8e8] hover:shadow-md transition-shadow">
        <Link href={post.href} className="block no-underline">
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#f3f4f7]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            {post.tag && (
              <span className="inline-block text-xs font-medium text-[#0066ff] mb-2">
                {post.tag}
              </span>
            )}
            <h3 className="text-base font-semibold text-[#27292d] leading-snug group-hover:text-[#0066ff] transition-colors">
              {post.title}
            </h3>
            <time className="block text-xs text-[#8b8f92] mt-2">{post.date}</time>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group">
      <Link href={post.href} className="flex flex-col md:flex-row gap-5 no-underline">
        <div className="relative w-full md:w-[280px] lg:w-[320px] shrink-0 aspect-[16/10] md:aspect-[16/10] overflow-hidden rounded-lg bg-[#f3f4f7]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-center py-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-sm font-medium text-[#27292d]">{post.category}</span>
            {post.tag && (
              <>
                <span className="text-[#d1d5d9]">·</span>
                <span className="text-sm font-medium text-[#0066ff]">{post.tag}</span>
              </>
            )}
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-[#27292d] leading-snug group-hover:text-[#0066ff] transition-colors mb-2">
            {post.title}
          </h3>
          <time className="text-sm text-[#8b8f92]">{post.date}</time>
        </div>
      </Link>
    </article>
  )
}
