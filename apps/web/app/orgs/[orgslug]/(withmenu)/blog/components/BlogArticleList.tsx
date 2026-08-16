'use client'

import React from 'react'
import { articleFeed } from '../blog-data'
import BlogArticleCard from './BlogArticleCard'

export default function BlogArticleList() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col gap-8">
          {articleFeed.map((post) => (
            <BlogArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
