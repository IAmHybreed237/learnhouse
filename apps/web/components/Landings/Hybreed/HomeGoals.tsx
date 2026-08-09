'use client'

import React from 'react'
import Image from 'next/image'

const GOALS = [
  {
    title: 'Consolidating the theory with real-life cases',
    description: "In addition to the usual tasks, you'll receive hands-on training from partners—business games, meetups, hackathons, and pet projects. You'll gain valuable experience and stand out in the market.",
    image: '/images/home/sf-goals-1.webp',
  },
  {
    title: 'Over 100 free materials',
    description: 'Educational products that help 5,000 students find their development path each year. Find the format that suits you best.',
    image: null,
  },
  {
    title: 'Convenient platform',
    description: 'Everything you need for effective studying: a planner, calendar, games, and exercise tools. And with the mobile app, your materials are always at hand.',
    image: '/images/home/sf-goals-2.webp',
  },
  {
    title: 'Support for the entire team',
    description: "Prompt communication with faculty, coordinators, graduate students, and technical specialists. You won't be left alone with any difficulties.",
    image: '/images/home/sf-goals-3.webp',
  },
]

export default function HomeGoals() {
  return (
    <section className="w-full bg-[#f3f4f7]">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-4xl font-bold sm:font-black tracking-tight text-[#080808] mb-6 sm:mb-8">
          How Hybreed helps you achieve your goals
        </h2>

        <div
          className="grid gap-5 grid-cols-1 lg:grid-cols-[minmax(0,370px)_1fr_1fr]"
        >
          {GOALS.map((goal, index) => (
            <div
              key={goal.title}
              className={`rounded-3xl bg-[#f3f4f7] border border-white p-4 sm:p-5 flex items-center ${index === 3 ? 'lg:col-span-3' : ''}`}
            >
              <div className={`w-full ${index === 3 ? 'flex flex-col sm:flex-row gap-5 items-center' : ''}`}>
                {goal.image && (
                  <div className={`relative mb-4 sm:mb-5 ${index === 3 ? 'sm:mb-0 sm:flex-shrink-0' : 'w-full'}`} style={{ height: index === 3 ? '120px' : '180px', width: index === 3 ? '100%' : '100%' }}>
                    <Image
                      src={goal.image}
                      alt={goal.title}
                      fill
                      className="object-cover rounded-2xl cursor-pointer"
                      sizes="(max-width: 768px) 100vw, 370px"
                    />
                  </div>
                )}
                <div className={index === 3 ? 'w-full sm:flex-1' : ''}>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-semibold text-black leading-tight m-0 mb-2 sm:mb-3 ${index === 3 ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                      {goal.title}
                    </h3>
                  </div>
                  <p className={`text-[#27292d] leading-6 sm:leading-7 m-0 ${index === 3 ? 'text-base sm:text-xl' : 'text-sm'}`} style={{ maxWidth: '650px' }}>
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
