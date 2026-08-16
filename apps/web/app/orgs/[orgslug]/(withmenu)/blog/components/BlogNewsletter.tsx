'use client'

import React from 'react'
import Link from 'next/link'

export default function BlogNewsletter() {
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="w-full bg-white py-12 border-t border-[#e8e8e8]">
      <div className="max-w-[640px] mx-auto px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#27292d] mb-4">
          Subscribe to the Hybreed newsletter
        </h2>
        <p className="text-[#6c7072] mb-6 leading-relaxed">
          Every two weeks we will send you a digest with the best articles, free materials, course discounts, and vacancies from Hybreed partners.
        </p>

        {submitted ? (
          <div className="py-6">
            <p className="text-lg font-medium text-[#27292d] mb-2">Thank you for being with us!</p>
            <p className="text-[#6c7072]">We will send the first email soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded border border-[#d1d5d9] text-[#27292d] placeholder:text-[#8b8f92] focus:outline-none focus:border-[#0066ff]"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded bg-[#0066ff] text-white font-medium hover:bg-[#0052cc] transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-[#8b8f92]">
          By clicking the button, you agree to the{' '}
          <Link href="/legal/privacy" className="underline hover:text-[#27292d]">
            processing of your personal data
          </Link>
        </p>
      </div>
    </section>
  )
}
