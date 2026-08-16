'use client'

import React from 'react'
import BlogPromoBanner from './components/BlogPromoBanner'
import BlogHeader from './components/BlogHeader'
import BlogCategoryNav from './components/BlogCategoryNav'
import BlogTagCloud from './components/BlogTagCloud'
import BlogSearch from './components/BlogSearch'
import BlogNewsSection from './components/BlogNewsSection'
import BlogFeaturedCollection from './components/BlogFeaturedCollection'
import BlogArticleList from './components/BlogArticleList'
import BlogSpecialProject from './components/BlogSpecialProject'
import BlogNewsletter from './components/BlogNewsletter'
import BlogFooter from './components/BlogFooter'

interface BlogClientProps {
  orgslug: string
}

export default function BlogClient({ orgslug }: BlogClientProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <BlogPromoBanner />
      <BlogHeader orgslug={orgslug} />
      <BlogCategoryNav />
      <BlogTagCloud />
      <main className="flex-1">
        <BlogSearch />
        <BlogNewsSection />
        <BlogFeaturedCollection />
        <BlogArticleList />
        <BlogSpecialProject />
        <BlogNewsletter />
      </main>
      <BlogFooter orgslug={orgslug} />
    </div>
  )
}
