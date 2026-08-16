'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const GOALS = [
  {
    title: 'Bridging theory with real-world practice',
    description:
      "Beyond regular lessons, you'll work on real projects from local businesses—case studies, workshops, and hands-on challenges. You'll build a portfolio that makes you stand out to employers.",
    image: '/images/home/goals-1.webp',
  },
  {
    title: 'Growing library of free resources',
    description:
      'Learning materials designed to help every Hybreed discover their path in the digital economy. Find the format that works best for your goals and schedule.',
    image: null,
  },
  {
    title: 'Built for African Hybreeds',
    description:
      'Everything you need to study effectively: structured lessons, progress tracking, and practical exercises. Access your courses anytime, from any device, anywhere.',
    image: '/images/home/goals-2.webp',
  },
  {
    title: 'Mentorship at every step',
    description:
      "Direct access to instructors, mentors, and a supportive community of fellow Hybreeds. You'll never feel stuck—help is always just a message away.",
    image: '/images/home/goals-3.webp',
  },
]

export default function HomeGoals() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full mt-[100px] px-10 max-[1239px]:mt-[60px] max-[767px]:mt-12 max-[767px]:px-3">
      <h2 className="text-[40px] font-semibold leading-[46px] max-w-[670px] m-0 mb-10 max-[1239px]:text-[32px] max-[1239px]:leading-[38px] max-[1239px]:mb-7 max-[1239px]:max-w-[550px] max-[767px]:text-2xl max-[767px]:leading-[30px] max-[767px]:mb-6">
        How Hybreed Academy helps you reach your goals
      </h2>

      {/* Desktop grid */}
      <div className="hidden min-[768px]:grid grid-cols-[370px_1fr_1fr] gap-5 max-[1239px]:grid-cols-[325px_1fr_1fr]">
        {/* Card 1: spans 2 rows in column 1 */}
        <div className="row-span-2 rounded-3xl bg-[#f3f4f7] p-5 flex flex-col">
          <div className="relative w-[330px] h-[180px] mb-5 max-[1239px]:w-full max-[1239px]:h-auto">
            <Image
              src={GOALS[0].image!}
              alt={GOALS[0].title}
              width={330}
              height={180}
              className="rounded-2xl object-cover w-[330px] h-[180px] max-[1239px]:w-full max-[1239px]:h-auto"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <h3 className="text-2xl font-semibold leading-[30px] m-0 mb-3">
            {GOALS[0].title}
          </h3>
          <p className="text-xl leading-7 text-[#27292d] m-0">
            {GOALS[0].description}
          </p>
        </div>

        {/* Card 2: spans 2 columns in row 1 */}
        <div className="col-span-2 rounded-3xl bg-[#f3f4f7] p-5 flex items-center">
          <div>
            <h3 className="text-2xl font-semibold leading-[30px] m-0 mb-3">
              {GOALS[1].title}
            </h3>
            <p className="text-xl leading-7 text-[#27292d] m-0 max-w-[650px]">
              {GOALS[1].description}
            </p>
          </div>
        </div>

        {/* Card 3: spans 2 columns in row 2, image right */}
        <div className="col-span-2 rounded-3xl bg-[#f3f4f7] p-5 flex flex-row-reverse items-center">
          <div className="min-w-[360px] ml-5 max-[1239px]:min-w-[250px]">
            <Image
              src={GOALS[2].image!}
              alt={GOALS[2].title}
              width={360}
              height={200}
              className="rounded-2xl object-cover w-full"
              style={{ height: 'auto' }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold leading-[30px] m-0 mb-3">
              {GOALS[2].title}
            </h3>
            <p className="text-xl leading-7 text-[#27292d] m-0">
              {GOALS[2].description}
            </p>
          </div>
        </div>

        {/* Card 4: spans all 3 columns */}
        <div className="col-span-3 rounded-3xl bg-[#f3f4f7] p-5 flex items-center">
          <div className="max-w-[370px] mr-5 flex-shrink-0 max-[1239px]:max-w-[322px]">
            <Image
              src={GOALS[3].image!}
              alt={GOALS[3].title}
              width={370}
              height={200}
              className="rounded-2xl object-cover w-full"
              style={{ height: 'auto' }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold leading-[30px] m-0 mb-3">
              {GOALS[3].title}
            </h3>
            <p className="text-xl leading-7 text-[#27292d] m-0 max-w-[680px]">
              {GOALS[3].description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="flex flex-col gap-5 min-[768px]:hidden">
        {GOALS.map((goal, index) => (
          <div
            key={goal.title}
            className="rounded-3xl bg-[#f3f4f7] p-5"
          >
            <button
              onClick={() => toggleCard(index)}
              className="w-full flex justify-between items-start text-left bg-transparent border-none cursor-pointer p-0"
            >
              <h3 className="text-xl font-semibold leading-6 m-0 max-w-[233px]">
                {goal.title}
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-[#8e8e8e] transition-transform duration-200 flex-shrink-0 ml-3 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-3">
                {goal.image && (
                  <Image
                    src={goal.image}
                    alt={goal.title}
                    width={330}
                    height={180}
                    className="rounded-2xl object-cover w-full mb-3"
                    style={{ height: 'auto' }}
                  />
                )}
                <p className="text-base leading-6 text-[#27292d] m-0">
                  {goal.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
