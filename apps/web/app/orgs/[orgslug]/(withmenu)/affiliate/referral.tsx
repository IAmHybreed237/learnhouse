'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { getUriWithOrg } from '@services/config/config'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'
import HomeFooter from '@components/Landings/Hybreed/HomeFooter'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface ReferralPageProps {
  orgslug: string
}

export default function ReferralPage({ orgslug }: ReferralPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />

      {/* ============================================================
          SECTION 1: HERO — Title + Reward payments
          Matches reference: headerContainer with title, reward label,
          and two payment items side by side with green sticker badges
          ============================================================ */}
      <section className="bg-white pt-20 max-[1023px]:pt-10 max-[767px]:pt-8">
        <div className="w-full max-w-[1160px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[720px] max-[767px]:max-w-full max-[767px]:px-4 mx-auto box-border">
          {/* Title */}
          <h1 className="text-[44px] max-[1023px]:text-[28px] max-[1023px]:leading-[32px] leading-[52px] font-medium text-black m-0 max-[767px]:mb-2">
            Referral program
          </h1>

          {/* Reward label */}
          <div className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] font-semibold leading-[30px] text-black pt-3 pb-3 max-[767px]:pt-4 max-[767px]:pb-2">
            Reward:
          </div>

          {/* Payments row — two items side by side with a divider */}
          <div className="flex max-[479px]:flex-col py-10 max-[1023px]:py-8 max-[479px]:py-0 max-[479px]:gap-6">
            {/* Payment item 1: Money to the card */}
            <div className="flex-1 basis-1/2 box-border px-20 max-[1023px]:px-8 max-[479px]:px-0 max-[479px]:flex-1 max-[479px]:basis-full">
              <div className="inline-flex items-center h-12 max-[479px]:h-10 px-3 bg-[#45be8d] rounded-[4px] text-white text-[28px] max-[1023px]:text-[24px] max-[1023px]:leading-[30px] max-[479px]:text-[20px] max-[479px]:leading-[24px] font-medium leading-[32px] whitespace-nowrap">
                Money to the card
              </div>
              <div className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] max-[479px]:text-[18px] font-medium leading-[30px] text-black mt-2 max-[479px]:mt-3">
                Cash rewards
              </div>
              <p className="text-[18px] max-[479px]:text-[15px] max-[479px]:leading-[22px] leading-[26px] text-black m-0 mt-1 max-[479px]:mt-2">
                Receive payouts directly to your card for every friend who enrolls.
              </p>
            </div>

            {/* Payment item 2: Courses as a gift */}
            <div className="flex-1 basis-1/2 box-border px-20 max-[1023px]:px-8 max-[479px]:px-0 max-[479px]:flex-1 max-[479px]:basis-full border-l border-[#c8ccd3] max-[479px]:border-l-0 max-[479px]:border-t max-[479px]:border-[#e0e3ea] max-[479px]:pt-6">
              <div className="inline-flex items-center h-12 max-[479px]:h-10 px-3 bg-[#45be8d] rounded-[4px] text-white text-[28px] max-[1023px]:text-[24px] max-[1023px]:leading-[30px] max-[479px]:text-[20px] max-[479px]:leading-[24px] font-medium leading-[32px] whitespace-nowrap">
                Courses as a gift
              </div>
              <div className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] max-[479px]:text-[18px] font-medium leading-[30px] text-black mt-2 max-[479px]:mt-3">
                Free courses
              </div>
              <p className="text-[18px] max-[479px]:text-[15px] max-[479px]:leading-[22px] leading-[26px] text-black m-0 mt-1 max-[479px]:mt-2">
                Earn free course access as an alternative reward for your referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: HOW MUCH CAN YOU EARN?
          Heading + card with two columns separated by a vertical
          line that doesn't touch the top/bottom of the card
          ============================================================ */}
      <section className="bg-white">
        <div className="w-full max-w-[1160px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[720px] max-[767px]:max-w-full max-[767px]:px-4 mx-auto box-border my-20 max-[1023px]:my-12 max-[767px]:my-8">
          {/* Heading */}
          <h2 className="text-[44px] max-[1023px]:text-[28px] max-[1023px]:leading-[32px] leading-[52px] font-medium text-black m-0 mb-8 max-[1023px]:mb-6 max-[767px]:mb-4">
            How much can you earn?
          </h2>

          {/* Card with two columns + vertical divider */}
          <div className="flex max-[479px]:flex-col rounded-[20px] bg-[#f1f4f8] py-10 max-[1023px]:py-8 max-[479px]:py-6 max-[479px]:gap-6">
            {/* Left column: 17% */}
            <div className="flex-1 basis-1/2 box-border px-20 max-[1023px]:px-8 max-[479px]:px-5 max-[479px]:flex-1 max-[479px]:basis-full">
              <div className="inline-flex items-center h-12 max-[479px]:h-10 px-3 bg-[#45be8d] rounded-[4px] text-white text-[28px] max-[1023px]:text-[24px] max-[1023px]:leading-[30px] max-[479px]:text-[22px] max-[479px]:leading-[26px] font-medium leading-[32px] whitespace-nowrap">
                17%
              </div>
              <p className="text-[18px] max-[479px]:text-[15px] max-[479px]:leading-[22px] leading-[26px] text-black m-0 mt-2">
                From the cost of a friend&apos;s course
              </p>
            </div>

            {/* Vertical divider — doesn't touch top/bottom */}
            <div className="w-px bg-[#c8ccd3] my-6 max-[479px]:hidden" />

            {/* Right column: 17,000 FCFA */}
            <div className="flex-1 basis-1/2 box-border px-20 max-[1023px]:px-8 max-[479px]:px-5 max-[479px]:flex-1 max-[479px]:basis-full max-[479px]:border-t max-[479px]:border-[#e0e3ea] max-[479px]:pt-6">
              <div className="inline-flex items-center h-12 max-[479px]:h-10 px-3 bg-[#45be8d] rounded-[4px] text-white text-[28px] max-[1023px]:text-[24px] max-[1023px]:leading-[30px] max-[479px]:text-[22px] max-[479px]:leading-[26px] font-medium leading-[32px] whitespace-nowrap">
                17,000 FCFA
              </div>
              <p className="text-[18px] max-[479px]:text-[15px] max-[479px]:leading-[22px] leading-[26px] text-black m-0 mt-2">
                Average payout
              </p>
              <p className="text-[18px] max-[479px]:text-[15px] max-[479px]:leading-[22px] leading-[26px] text-black m-0 mt-2">
                This is 17% of 100,000 FCFA, the average cost of the course.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: HOW DOES THIS WORK
          Title (32px) + first step dark card (full width, 190px)
          + 3 steps in a row with green numbered circles
          ============================================================ */}
      <section className="bg-white">
        <div className="w-full max-w-[1160px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[720px] max-[767px]:max-w-full max-[767px]:px-4 mx-auto box-border my-20 max-[1023px]:my-14 max-[767px]:my-8">
          {/* Section title */}
          <h2 className="text-[32px] font-medium leading-[36px] text-black m-0 mb-6">
            How does this work
          </h2>

          {/* First step — full width blue card with 3D graphic */}
          <div
            className="w-full min-h-[190px] max-[767px]:min-h-0 flex items-center justify-between rounded-[20px] px-8 py-8 max-[767px]:block box-border"
            style={{
              backgroundColor: '#498afe',
              backgroundImage: 'url(/images/home/firststep-bg.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '111% -40px',
              backgroundSize: '310px auto',
            }}
          >
            <div className="flex flex-col">
              {/* Number circle — white bg on blue card */}
              <div className="flex items-center justify-center w-11 h-11 text-[24px] rounded-full text-[#080809] bg-white mb-4 self-start flex-shrink-0">
                1
              </div>
              {/* Title */}
              <h3 className="text-[32px] max-[1023px]:text-[28px] max-[1023px]:leading-[32px] leading-[40px] font-semibold text-white m-0 mb-1">
                Register with AdvCake
              </h3>
              {/* Text */}
              <p className="text-[18px] leading-[26px] text-white m-0">
                Our partner for payments
              </p>
            </div>
            {/* Register button — right side */}
            <a
              href="#"
              className="inline-flex items-center justify-center w-[276px] max-[479px]:w-full h-12 bg-[#27292d] hover:bg-black text-white text-[16px] font-medium leading-6 rounded-[2px] no-underline transition-colors flex-shrink-0 max-[767px]:mt-4 relative z-10"
            >
              Register
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Steps row — 3 steps in a row */}
          <div className="flex max-[1023px]:flex-col gap-4 mt-4">
            {/* Step 2 */}
            <div className="flex-1 basis-1/3 rounded-[20px] bg-[#f1f4f8] p-6 max-[1023px]:p-4 max-[767px]:basis-full">
              <div className="flex items-center justify-center w-11 h-11 text-[24px] rounded-full text-white bg-[#45be8d] mb-4">
                2
              </div>
              <p className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] font-medium leading-[30px] text-black m-0">
                Send your friends a link from AdvCake
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 basis-1/3 rounded-[20px] bg-[#f1f4f8] p-6 max-[1023px]:p-4 max-[767px]:basis-full">
              <div className="flex items-center justify-center w-11 h-11 text-[24px] rounded-full text-white bg-[#45be8d] mb-4">
                3
              </div>
              <p className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] font-medium leading-[30px] text-black m-0">
                A friend will buy the course
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex-1 basis-1/3 rounded-[20px] bg-[#f1f4f8] p-6 max-[1023px]:p-4 max-[767px]:basis-full">
              <div className="flex items-center justify-center w-11 h-11 text-[24px] rounded-full text-white bg-[#45be8d] mb-4">
                4
              </div>
              <p className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] font-medium leading-[30px] text-black m-0">
                You will receive 17% of the purchase amount
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: FAQ — Answering questions
          Gray background (#f1f4f8), title, accordion items with
          border-top: 1px solid #000, question at 24px font-weight 500
          ============================================================ */}
      <section className="relative bg-white">
        {/* Gray background pseudo-element */}
        <div className="absolute inset-0 bg-[#f1f4f8] z-0" />
        <div className="relative z-[1] w-full max-w-[1160px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[720px] max-[767px]:max-w-full max-[767px]:px-4 mx-auto box-border pt-20 max-[1023px]:pt-14 pb-6">
          {/* Section title */}
          <h2 className="text-[32px] font-medium leading-[36px] text-black m-0 mb-6">
            Answering questions
          </h2>

          {/* FAQ items */}
          <FAQAccordion />
        </div>
      </section>

      {/* ============================================================
          SECTION 5: FEEDBACK SURVEY CTA
          Gray background (#e7e9ef), flex justify-between
          Title 24px, text 16px, button 256px with border
          ============================================================ */}
      <section className="relative bg-white pb-20 max-[1023px]:pb-14">
        <div className="absolute inset-0 bg-[#f1f4f8] z-0" />
        <div className="relative z-[1] w-full max-w-[1160px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[720px] max-[767px]:max-w-full max-[767px]:px-4 mx-auto box-border">
          <div className="flex justify-between items-center max-[767px]:block bg-[#e7e9ef] px-20 max-[1023px]:px-10 max-[767px]:px-6 max-[479px]:px-4 py-8 rounded-[20px] relative z-[2]">
            {/* Left: title + text */}
            <div>
              <h2 className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] font-medium leading-[30px] text-black m-0 mb-3">
                Share your impressions
              </h2>
              <p className="text-[16px] leading-[24px] text-black m-0">
                Help us make our referral program better and more useful.
              </p>
            </div>
            {/* Right: survey button */}
            <a
              href="#"
              className="inline-flex items-center justify-center w-[256px] max-[479px]:w-full h-12 bg-transparent hover:bg-[#edf5fb] text-[#080809] text-[14px] font-medium leading-5 rounded-[2px] no-underline transition-colors border border-[#080809] flex-shrink-0 max-[767px]:mt-5"
            >
              Take the survey
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <HomeFooter orgslug={orgslug} />
    </div>
  )
}

const FAQ_ITEMS = [
  {
    q: 'How many friends can I refer using my link?',
    a: 'There is no limit. You can refer as many friends as you like — the more friends who enroll, the more you earn.',
  },
  {
    q: 'What if my friend changes their mind and requests a refund?',
    a: 'If your friend requests a refund within the guarantee period, the referral commission for that purchase is cancelled. You simply won\'t receive a payout for that particular referral.',
  },
  {
    q: 'What if a friend didn\'t come through my link?',
    a: 'Unfortunately, we can only credit referrals that come through your unique AdvCake link. Make sure your friends click your link before signing up and purchasing.',
  },
  {
    q: 'How can I track my referred friends and my earnings?',
    a: 'You can track all your referrals, clicks, and earnings in real time through your AdvCake partner dashboard after registration.',
  },
  {
    q: 'How much money will I receive on my card?',
    a: 'You receive 17% of the course price paid by your referred friend. The average payout is around 17,000 FCFA per enrollment.',
  },
  {
    q: 'How to withdraw money to a card?',
    a: 'Once you reach the minimum payout threshold in your AdvCake account, you can request a withdrawal directly to your card through the AdvCake platform.',
  },
  {
    q: 'For which courses are payments made?',
    a: 'Referral commissions are paid for all paid courses and programs available on Hybreed Academy, unless a specific course is excluded from the referral program.',
  },
  {
    q: 'Who can I contact if I have problems with the referral program?',
    a: 'You can reach out to our support team at support@hybreed.academy or use the chat on our website. We\'ll help you resolve any issues with your referrals.',
  },
  {
    q: 'Where can I find out more details about the referral program?',
    a: 'Full terms and conditions, payout schedules, and detailed instructions are available in your AdvCake partner account after registration.',
  },
]

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="border-t border-black"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex justify-between items-center w-full py-3 pb-[34px] cursor-pointer text-left bg-transparent"
            >
              <span className="text-[24px] max-[1023px]:text-[20px] max-[1023px]:leading-[24px] font-medium leading-[30px] text-black">
                {item.q}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-black flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-[34px]' : 'max-h-0'}`}
            >
              <p className="text-[18px] leading-[26px] text-black m-0">
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
