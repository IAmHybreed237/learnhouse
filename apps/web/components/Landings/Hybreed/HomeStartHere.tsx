'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUriWithOrg } from '@services/config/config'

interface HomeStartHereProps {
  orgslug: string
}

export default function HomeStartHere({ orgslug }: HomeStartHereProps) {
  const coursesHref = getUriWithOrg(orgslug, '/courses')

  return (
    <section className="w-full mt-[100px] px-[42px] max-[1239px]:mt-[60px] max-[1023px]:px-[34px] max-[767px]:mt-12 max-[767px]:px-0">
      <h2 className="text-[40px] font-semibold leading-[46px] m-0 mb-10 max-[1239px]:text-[32px] max-[1239px]:leading-[38px] max-[1239px]:mb-7 max-[767px]:text-2xl max-[767px]:leading-[30px] max-[767px]:mb-6 max-[767px]:px-3">
        If you don&apos;t know where to start
      </h2>

      <div className="grid grid-cols-2 gap-5 max-[767px]:grid-cols-1">
        {/* Card 1: Express consultation (testCard) */}
        <div className="relative overflow-hidden rounded-3xl bg-[#f3f4f7] p-[24px_35px_36px] flex flex-col z-0 max-[1023px]:p-[24px_20px_36px] max-[767px]:p-[24px_12px_36px]">
          {/* Decorative ellipses */}
          <div
            className="absolute z-[-2] pointer-events-none"
            style={{
              filter: 'blur(50px)',
              left: -100,
              top: -15,
              width: 320,
              height: 200,
              borderRadius: 320,
              background: 'linear-gradient(0deg, rgba(64,239,176,0.36), rgba(64,239,176,0.36)), rgba(255,255,255,0.8)',
              transform: 'rotate(135deg)',
            }}
          />
          <div
            className="absolute z-[-2] pointer-events-none"
            style={{
              filter: 'blur(50px)',
              width: 550,
              height: 233,
              borderRadius: 550,
              background: 'linear-gradient(0deg, rgba(0,102,255,0.17), rgba(0,102,255,0.17)), rgba(255,255,255,0.8)',
              left: -28,
              top: -148,
              transform: 'rotate(-156deg)',
            }}
          />
          <div
            className="absolute z-[-2] pointer-events-none"
            style={{
              filter: 'blur(50px)',
              width: 281,
              height: 212,
              transform: 'rotate(120deg)',
              left: 400,
              top: -28,
              borderRadius: 281,
              background: 'linear-gradient(0deg, rgba(64,239,176,0.36), rgba(64,239,176,0.36)), rgba(255,255,255,0.8)',
            }}
          />

          {/* Content */}
          <h3 className="text-[32px] font-semibold leading-[38px] m-0 mb-3 max-[1239px]:text-2xl max-[1239px]:leading-[30px] max-[767px]:text-lg max-[767px]:leading-[22px]">
            Decide on a career with an express consultation
          </h3>
          <p className="text-base font-medium leading-5 text-[#070707] m-0 max-[767px]:mb-3">
            Fill out the form and receive free recommendations from the Hybreed neural network.
          </p>
          <Link
            href={coursesHref}
            className="inline-flex items-center w-fit h-12 px-6 mt-auto text-base font-medium leading-6 text-white bg-[#06f] rounded-full no-underline whitespace-nowrap hover:bg-[#0052cc] transition-colors max-[767px]:mt-4"
          >
            Choose a profession
          </Link>

          {/* Card image — absolute bottom-right */}
          <Image
            src="/images/home/start-consultation.webp"
            alt="Express consultation"
            width={320}
            height={235}
            className="absolute right-0 bottom-0 z-[-1] h-[235px] w-auto max-[1239px]:h-[205px] max-[1023px]:h-[175px] max-[1023px]:right-[-25px] max-[767px]:h-[170px] max-[767px]:right-[-15px]"
            style={{ width: 'auto' }}
            sizes="320px"
          />
        </div>

        {/* Card 2: Free materials (materialsCard) */}
        <div className="relative overflow-hidden rounded-3xl bg-[#f3f4f7] p-[24px_35px_36px] flex flex-col z-0 max-[1023px]:p-[24px_20px_36px] max-[767px]:p-[24px_12px_36px]">
          {/* Decorative ellipses */}
          <div
            className="absolute z-[-2] pointer-events-none"
            style={{
              filter: 'blur(50px)',
              left: -186,
              top: -160,
              borderRadius: 723,
              width: 723,
              height: 371,
              transform: 'rotate(-27deg)',
              background: 'linear-gradient(0deg, rgba(137,245,219,0.6), rgba(137,245,219,0.6)), rgba(255,255,255,0.8)',
            }}
          />
          <div
            className="absolute z-[-2] pointer-events-none"
            style={{
              filter: 'blur(50px)',
              left: 279,
              top: -236,
              width: 675,
              height: 261,
              transform: 'rotate(-48deg)',
              borderRadius: 675,
              background: 'linear-gradient(0deg, rgba(137,245,219,0.6), rgba(137,245,219,0.6)), rgba(255,255,255,0.8)',
            }}
          />

          {/* Content */}
          <h3 className="text-[32px] font-semibold leading-[38px] m-0 mb-3 max-[1239px]:text-2xl max-[1239px]:leading-[30px] max-[767px]:text-lg max-[767px]:leading-[22px]">
            Start with free materials
          </h3>
          <ul className="text-base font-medium leading-5 text-[#070707] list-disc pl-5 m-0 mb-7 max-[767px]:mb-3 max-[767px]:font-normal">
            <li>Courses</li>
            <li>Open classes</li>
            <li>Guides and checklists</li>
          </ul>
          <Link
            href={coursesHref}
            className="inline-flex items-center w-fit h-12 px-6 mt-auto text-base font-medium leading-6 text-white bg-[#06f] rounded-full no-underline whitespace-nowrap hover:bg-[#0052cc] transition-colors max-[767px]:mt-4"
          >
            Start for free
          </Link>

          {/* Card image — absolute bottom-right */}
          <Image
            src="/images/home/start-free.webp"
            alt="Free materials"
            width={320}
            height={320}
            className="absolute right-0 bottom-0 z-[-1] w-[320px] h-[320px]"
            style={{ width: '320px', height: '320px' }}
            sizes="320px"
          />
        </div>
      </div>
    </section>
  )
}
