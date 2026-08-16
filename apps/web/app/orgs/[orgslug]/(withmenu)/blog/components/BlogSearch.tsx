'use client'

import React from 'react'
import { Search } from 'lucide-react'

interface BlogSearchProps {
  value?: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
}

export default function BlogSearch({ value = '', onChange, onSubmit }: BlogSearchProps) {
  const [query, setQuery] = React.useState(value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(query)
  }

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-[1240px] mx-auto px-5">
        <form onSubmit={handleSubmit} className="relative max-w-[500px]">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              onChange?.(e.target.value)
            }}
            placeholder="Find"
            className="w-full h-12 pl-4 pr-12 rounded border border-[#d1d5d9] text-[#27292d] placeholder:text-[#8b8f92] focus:outline-none focus:border-[#0066ff]"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b8f92] hover:text-[#27292d]"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-lg text-[#27292d] mb-2">Nothing found for your query 🙁</p>
          <p className="text-sm text-[#6c7072] mb-6">
            Try a different word. Or check out these articles:
          </p>
        </div>
      </div>
    </div>
  )
}
