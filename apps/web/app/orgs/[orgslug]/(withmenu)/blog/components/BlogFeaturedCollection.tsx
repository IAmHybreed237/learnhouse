'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { featuredCollection } from '../blog-data'

export default function BlogFeaturedCollection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-12">
      <div className="max-w-[1240px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#27292d] mb-1">
          If it is hard to decide on learning
        </h2>
        <p className="text-[#6c7072] mb-8">Article collection</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCollection.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-lg overflow-hidden border border-[#e8e8e8] hover:shadow-md transition-shadow"
            >
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
                  <span className="inline-block text-xs font-medium text-[#8b8f92] mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-base font-semibold text-[#27292d] leading-snug group-hover:text-[#0066ff] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
