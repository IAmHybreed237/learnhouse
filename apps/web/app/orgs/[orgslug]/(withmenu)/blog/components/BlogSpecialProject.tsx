'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { specialProject } from '../blog-data'
import { ArrowRight } from 'lucide-react'

export default function BlogSpecialProject() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl bg-[#f8f9fa]">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <Link
              href={specialProject.href}
              className="text-2xl md:text-3xl font-semibold text-[#27292d] leading-snug hover:text-[#0066ff] transition-colors mb-4"
            >
              {specialProject.title}
            </Link>
            <p className="text-[#6c7072] leading-relaxed mb-6">{specialProject.description}</p>
            <Link
              href={specialProject.href}
              className="inline-flex items-center gap-1 text-[#0066ff] font-medium hover:underline self-start"
            >
              Read more <ArrowRight size={16} />
            </Link>
          </div>

          {/* Main image */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#f3f4f7]">
            <Image
              src={specialProject.image}
              alt={specialProject.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Banner grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {specialProject.banners.map((banner, index) => (
            <div
              key={index}
              className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#f3f4f7]"
            >
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
