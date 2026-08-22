'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useCourseMeta } from '@/hooks/queries/useCourses'
import { useOrg } from '@/hooks/queries/useOrg'
import { getUriWithOrg } from '@services/config/config'
import { getCourseThumbnailMediaDirectory } from '@services/media/media'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'

export interface CourseLandingData {
  hero: {
    title: string
    description: string
    badges: string[]
    stats: { title: string; value: string }[]
  }
  approach: {
    title: string
    cards: { title: string; description: string; bgImage: string; icon: React.ReactNode }[]
  }
  careerOutcomes: {
    title: string
    subtitle: string
    description: string
    image: string
    imageAlt: string
  }
  salary: {
    title: string
    subtitle: string
    cardTitle: string
    points: { label: string; sublabel: string; position: number; salary: string; description: string }[]
    source: string
  }
  skills: {
    title: string
    subtitle: string
    professionName: string
    keySkills: string[]
    softSkills: string[]
    tools: { name: string; desc: string; icon: string }[]
  }
  diploma: {
    title: string
    licenseText: React.ReactNode
    description: string
  }
  practice: {
    title: string
    cards: { title: string; texts: string[]; image: string }[]
  }
  program: {
    title: string
    subtitle: string
    researchNote: string
    bullets: string[]
    mainProgram: { title: string; bonus: boolean; description: string }[]
    specializations: { title: string; isNew: boolean; description: string }[]
  }
  pricing: {
    title: string
    tariffs: {
      title: string
      description: string
      oldPrice: string
      discountBadge: string
      monthlyPrice: string
      monthlyLabel: string
      duration: string
      durationLabel: string
      onePayment: string
      onePaymentLabel: string
      features: string[]
      recommended: boolean
      gradient: boolean
    }[]
  }
  faq: {
    title: string
    tabs: string[]
    questions: Record<string, { q: string; a: string }[]>
  }
  footer: {
    breadcrumb: string
  }
}

interface CourseLandingTemplateProps {
  courseuuid: string
  orgslug: string
  data: CourseLandingData
}

export default function CourseLandingTemplate({ courseuuid, orgslug, data }: CourseLandingTemplateProps) {
  const { data: courseMeta, isLoading } = useCourseMeta(courseuuid)
  const { data: org } = useOrg(orgslug)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1B2126] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const course = courseMeta

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />
      <HeroSection course={course} orgslug={orgslug} orgUuid={org?.org_uuid} data={data.hero} />
      <ApproachSection data={data.approach} />
      <CareerOutcomesSection data={data.careerOutcomes} />
      <SalarySection data={data.salary} />
      <SkillsToolsSection data={data.skills} />
      <DiplomaSection data={data.diploma} />
      <PracticeSection data={data.practice} />
      <ProgramSection data={data.program} />
      <PricingSection courseuuid={courseuuid} orgslug={orgslug} data={data.pricing} />
      <FaqSection data={data.faq} />
      <FooterSection breadcrumb={data.footer.breadcrumb} />
    </div>
  )
}

function HeroSection({ course, orgslug, orgUuid, data }: { course: any; orgslug: string; orgUuid?: string; data: CourseLandingData['hero'] }) {
  return (
    <section className="relative overflow-hidden min-h-[654px] max-[1239px]:min-h-0" style={{ backgroundColor: '#1B2126' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/course/hero_bg_marketing.svg" alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 min-w-full min-h-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="relative max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full pt-[110px] pb-[80px] max-[1023px]:pt-[140px] max-[1023px]:pb-[63px] max-[767px]:pt-0 max-[767px]:pb-[30px] max-[767px]:px-5 box-border z-[1]">
        <div className="flex justify-between w-full gap-5 max-[767px]:flex-col max-[767px]:gap-0">
          <div className="flex flex-col max-w-[553px] max-[767px]:max-w-none max-[767px]:w-full relative z-[1]">
            <div className="flex gap-2 justify-start flex-wrap w-[85%] max-[767px]:w-full max-[767px]:mb-4 max-[767px]:pt-[20px]">
              {data.badges.map((badge, i) => (
                <div key={i} className={`flex items-center px-[15px] py-[6px] min-h-[24px] rounded-full text-white text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] w-fit ${i === 0 ? 'bg-[#0b3a82] border-0' : 'border border-[#9b9fa3]'}`}>
                  {badge}
                </div>
              ))}
            </div>

            <div className="hidden max-[767px]:flex justify-center -mt-2 mb-[-60px] relative z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/course/hero_3d_marketing.webp" alt="" className="w-full max-w-[420px] h-auto object-contain" aria-hidden="true" />
            </div>

            <div className="max-[767px]:bg-[#282d33] max-[767px]:p-6 max-[767px]:rounded-[32px] max-[767px]:mt-[10px] max-[767px]:z-[1] relative">
              <h1 className="text-[57px] max-[1023px]:text-[57px] max-[767px]:text-[28px] leading-[1.12] max-[767px]:leading-[32px] font-bold text-white my-6 max-[767px]:mt-0 max-[767px]:mb-4 max-w-[680px] max-[1023px]:max-w-full">
                {data.title}
              </h1>
              <p className="text-[18px] max-[767px]:text-[16px] leading-[28px] max-[767px]:leading-[24px] text-white mb-0 max-w-[553px]">
                {data.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10 max-[767px]:mt-6">
              <a href="#pricing" className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors">To tariffs</a>
              <a href="#curriculum" className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 border border-white/40 hover:border-white text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors bg-white/10">View the program</a>
            </div>
          </div>

          <div className="flex flex-col relative max-[767px]:w-full max-[767px]:mt-8">
            <div className="absolute top-0 right-0 w-[667px] h-[640px] max-[1239px]:hidden pointer-events-none z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/course/hero_3d_marketing.webp" alt="" className="max-w-full max-h-full object-contain" aria-hidden="true" />
            </div>

            <div className="relative w-[344px] max-[1023px]:w-full max-[767px]:w-full shrink-0 z-[1]">
              <div className="rounded-[20px] overflow-hidden relative bg-white">
                <div className="absolute top-[-7px] right-[-9px] max-[767px]:top-[-9px] max-[767px]:right-[-14px] w-[143px] h-[123px] z-[1] rotate-45 pointer-events-none">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                    <span className="text-[10px] uppercase leading-tight">PROMOTION</span>
                    <span className="text-[16px] leading-tight">-50<span className="text-[12px]">%</span></span>
                  </div>
                </div>

                <div className="p-6 max-[767px]:p-5">
                  <p className="text-[18px] font-semibold text-[#000] mb-5 leading-[24px]">We&apos;ll help you choose the right training</p>
                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Name" className="w-full h-[48px] px-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0087CD]" />
                    <input type="tel" placeholder="+237 (600) 000-000" className="w-full h-[48px] px-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0087CD]" />
                    <input type="email" placeholder="Email address" className="w-full h-[48px] px-4 bg-[#f5f5f5] border border-[#e5e5e5] rounded-[12px] text-[15px] text-[#1B2126] placeholder:text-[#8e8e8e] focus:outline-none focus:border-[#0087CD]" />
                    <div className="flex flex-col gap-2 mt-1">
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-[#4BD0A0] shrink-0" />
                        <span className="text-[12px] leading-[16px] text-[#8e8e8e]">I accept the terms of the user agreement</span>
                      </label>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-[#4BD0A0] shrink-0" />
                        <span className="text-[12px] leading-[16px] text-[#8e8e8e]">I want to receive news and current offers</span>
                      </label>
                    </div>
                    <button type="submit" className="w-full h-[52px] mt-2 bg-[#4BD0A0] hover:bg-[#37bc8c] text-[#1B2126] text-[16px] font-semibold rounded-[12px] border-0 cursor-pointer transition-colors">Get a consultation</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 max-[1023px]:grid-cols-2 gap-7 max-[767px]:gap-2 mt-[60px] max-[767px]:mt-[40px]">
          {data.stats.map((stat, i) => (
            <div key={i} className="flex h-full bg-white rounded-[32px] box-border relative">
              <div className="flex flex-col p-4 pb-6">
                <span className="inline-flex items-center px-2 py-[2px] bg-[#dbedfb] text-[#000] text-[12px] leading-[18px] rounded-[16px] w-fit break-words">{stat.title}</span>
                <p className="mt-2 text-[16px] max-[767px]:text-[14px] leading-[20px] max-[767px]:leading-[18px] text-[#000] text-left break-words m-0">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApproachSection({ data }: { data: CourseLandingData['approach'] }) {
  return (
    <section className="bg-white py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[60px] max-[767px]:mb-[40px]">{data.title}</h2>
        <div className="flex gap-5 max-[1239px]:flex-wrap max-[767px]:flex-col max-[767px]:gap-[10px]">
          {data.cards.map((card, i) => (
            <div key={i} className="flex flex-col gap-4 max-[767px]:gap-3 p-8 max-[767px]:p-5 rounded-[32px] bg-white relative overflow-hidden w-full max-[1239px]:w-[460px] max-[1023px]:w-[340px] max-[767px]:w-full" style={{ paddingBottom: '180px' }}>
              <div className="relative z-[1]">{card.icon}</div>
              <p className="text-[24px] max-[767px]:text-[18px] leading-[32px] max-[767px]:leading-[24px] font-medium text-[#1B2126] m-0 relative z-[1]">{card.title}</p>
              <p className="text-[16px] leading-[22px] max-[767px]:leading-[24px] text-[#1B2126]/80 m-0 relative z-[1]">{card.description}</p>
              <div className="absolute bottom-0 right-0 w-[700px] h-[700px] z-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.bgImage} alt={card.title} className="w-full h-full object-contain object-bottom object-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
function CareerOutcomesSection({ data }: { data: CourseLandingData['careerOutcomes'] }) {
  return (
    <section className="bg-white py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[60px] max-[767px]:mb-[40px] max-w-[880px]">{data.title}</h2>
        <div className="bg-white rounded-[32px] overflow-hidden border border-[#eee]">
          <div className="flex items-stretch max-[767px]:flex-col-reverse">
            <div className="overflow-hidden w-[613px] h-[552px] max-[1239px]:w-full max-[1239px]:h-[500px] max-[1023px]:h-auto max-[1023px]:max-h-[600px] max-[767px]:w-full max-[767px]:h-[300px] flex justify-center items-center box-border shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.image} alt={data.imageAlt} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 flex flex-col justify-center p-[60px] max-[1239px]:p-[68px] max-[767px]:p-6 max-[767px]:pb-8">
              <h3 className="text-[34px] max-[767px]:text-[22px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">{data.subtitle}</h3>
              <p className="text-[18px] leading-[24px] text-black/70 mt-10 max-[1023px]:mt-12 max-[767px]:mt-[26px] m-0">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SalarySection({ data }: { data: CourseLandingData['salary'] }) {
  const [activeIndex, setActiveIndex] = useState(1)
  const active = data.points[activeIndex]

  return (
    <section className="bg-[#F3F4F7] py-[50px] max-[767px]:py-[40px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <div className="mb-[64px] max-[767px]:mb-[32px]">
          <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0">{data.title}</h2>
          <p className="text-[16px] max-[767px]:text-[14px] max-[767px]:font-medium leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 mt-4 m-0 max-w-[600px]">{data.subtitle}</p>
        </div>

        <div className="bg-white rounded-[32px] p-8 max-[767px]:p-5 relative">
          <p className="text-[20px] font-medium leading-[28px] text-[#27292d] m-0">{data.cardTitle}</p>

          <div className="flex items-end mt-8 max-[767px]:mt-4">
            <span key={active.salary} className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#27292d] transition-opacity duration-300" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
              {active.salary} FCFA&nbsp;
            </span>
            <span className="text-[16px] leading-[22px] text-[#8e8e8e] ml-3 mb-1">per month</span>
          </div>

          <p key={active.description} className="text-[16px] leading-[22px] text-[#8e8e8e] mt-4 max-w-[600px] m-0" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
            {active.description}
          </p>

          <div className="mt-12 max-[767px]:mt-8 relative">
            <div className="relative h-[6px] bg-[#d4f6ec] rounded-full">
              <div className="absolute h-[6px] bg-[#47c397] rounded-l-full left-0 top-0 z-[1] transition-all duration-300" style={{ width: `${active.position}%` }} />
              {data.points.map((point, i) => (
                <div key={i} className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-[2] transition-all duration-300 ${i <= activeIndex ? 'bg-[#47c397] shadow-[inset_0_0_0_4px_#d4f6ec]' : 'bg-[#d4f6ec] shadow-[inset_0_0_0_4px_#d4f6ec]'}`} style={{ left: `${point.position}%` }} />
              ))}
            </div>

            <input type="range" min="0" max={data.points.length - 1} step="1" value={activeIndex} onChange={(e) => setActiveIndex(Number(e.target.value))} className="absolute top-[-9px] left-0 right-0 w-full h-6 opacity-0 cursor-pointer z-[3] m-0" style={{ pointerEvents: 'auto' }} aria-label="Experience level slider" />

            <div className="relative mt-6 h-[60px]">
              {data.points.map((point, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} className="absolute flex flex-col items-center bg-transparent border-0 p-0 cursor-pointer" style={{ left: `${point.position}%`, top: 0, transform: i === 0 ? 'translateX(0%)' : i === data.points.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)' }}>
                  <span className={`text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] whitespace-nowrap transition-colors duration-300 ${i === activeIndex ? 'font-bold text-[#47c397]' : 'font-semibold max-[767px]:font-medium text-[#27292d]'}`}>{point.label}</span>
                  <span className="text-[12px] max-[767px]:text-[10px] leading-[18px] max-[767px]:leading-[12px] text-[#8e8e8e] mt-1 whitespace-nowrap">{point.sublabel}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="text-[14px] leading-[20px] text-[#8e8e8e] mt-8 max-[767px]:mt-6 m-0">{data.source}</p>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  )
}
function SkillsToolsSection({ data }: { data: CourseLandingData['skills'] }) {
  return (
    <section className="bg-white py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0">{data.title}</h2>
        <p className="text-[14px] leading-[20px] text-[#1B2126]/70 m-0 mt-2">{data.subtitle}</p>

        <div className="mt-10 max-[479px]:mt-5">
          <div className="flex items-center">
            <p className="text-[28px] max-[479px]:text-[16px] leading-[32px] max-[479px]:leading-[24px] font-medium text-[#1B2126] m-0">{data.professionName}&nbsp;</p>
          </div>

          <div className="flex mt-10 max-[1023px]:flex-col max-[479px]:mt-5">
            <div className="w-[510px] max-w-full relative border-t border-[#e5e5e5] pt-6 max-[479px]:pt-5">
              <p className="text-[18px] max-[479px]:text-[16px] leading-[24px] font-medium text-[#1B2126] m-0">Key skills</p>
              <ul className="m-0 p-0 list-none">
                {data.keySkills.map((skill, i) => (
                  <li key={i} className="flex mt-3 max-[479px]:mt-2 text-[16px] leading-[22px] text-[#1B2126]"><span className="pr-2">•</span><span>{skill}</span></li>
                ))}
              </ul>
              <div className="mt-6 max-[479px]:mt-5">
                <p className="text-[18px] max-[479px]:text-[16px] leading-[24px] font-medium text-[#1B2126] m-0">Soft skills</p>
                <ul className="m-0 p-0 list-none">
                  {data.softSkills.map((skill, i) => (
                    <li key={i} className="flex mt-3 max-[479px]:mt-2 text-[16px] leading-[22px] text-[#1B2126]"><span className="pr-2">•</span><span>{skill}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-[490px] max-w-full ml-[60px] max-[1023px]:ml-0 max-[1023px]:mt-5 relative border-t border-[#e5e5e5] pt-6 max-[479px]:pt-5">
              <p className="text-[18px] max-[479px]:text-[16px] leading-[24px] font-medium text-[#1B2126] m-0">Tools</p>
              <div className="flex flex-wrap py-4 max-[1023px]:flex-col">
                {data.tools.map((tool, i) => (
                  <div key={i} className="group relative w-[220px] max-[479px]:w-full mb-[25px] max-[479px]:mb-3 cursor-pointer" style={{ marginRight: i % 2 === 0 ? '20px' : '0' }}>
                    <div className="flex items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tool.icon} alt={tool.name} className="w-8 h-8 max-[479px]:w-6 max-[479px]:h-6 mr-2 object-contain" />
                      <p className="text-[16px] max-[479px]:text-[14px] leading-[22px] max-[479px]:leading-[20px] font-medium text-[#1B2126] m-0 line-clamp-2">{tool.name}</p>
                    </div>
                    <div className="hidden group-hover:block absolute z-10 top-[-8px] left-[-12px] w-[260px] bg-white rounded-[12px] p-2 pb-4 pl-3 shadow-lg border border-[#eee]">
                      <div className="flex items-center mb-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tool.icon} alt={tool.name} className="w-8 h-8 mr-2 object-contain" />
                        <p className="text-[16px] leading-[22px] font-medium text-[#1B2126] m-0">{tool.name}</p>
                      </div>
                      <p className="text-[12px] leading-[18px] text-[#1B2126] m-0 mt-2">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DiplomaSection({ data }: { data: CourseLandingData['diploma'] }) {
  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <div className="bg-white rounded-[32px] p-[60px] max-[767px]:p-5 relative overflow-hidden">
          <div className="flex flex-col gap-5 max-[767px]:gap-4 w-[690px] max-[1239px]:w-[577px] max-[1023px]:w-full max-[1023px]:mb-[224px] max-[767px]:mb-[154px] relative z-[1]">
            <h3 className="text-[34px] max-[767px]:text-[22px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">{data.title}</h3>
            <p className="text-[22px] max-[767px]:text-[18px] leading-[28px] max-[767px]:leading-[26px] text-black/60 m-0">{data.licenseText}</p>
            <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-black/60 m-0">{data.description}</p>
          </div>
          <div className="absolute right-[-125px] bottom-[-97px] w-[532px] h-[371px] max-[1239px]:right-[-273px] max-[1239px]:bottom-[-45px] max-[1239px]:w-[540px] max-[1239px]:h-[380px] max-[1023px]:right-[39px] max-[1023px]:bottom-[-192px] max-[1023px]:w-[578px] max-[1023px]:h-[406px] max-[767px]:right-[20px] max-[767px]:bottom-[-67px] max-[767px]:w-[286px] max-[767px]:h-[201px] z-0 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/course/diploma_sample.webp" alt="Sample document" className="w-full h-full object-cover rounded-[10px] max-[767px]:rounded-[8px]" style={{ transform: 'rotate(-3deg)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
function PracticeSection({ data }: { data: CourseLandingData['practice'] }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const prev = () => setActiveIdx((i) => (i === 0 ? data.cards.length - 1 : i - 1))
  const next = () => setActiveIdx((i) => (i === data.cards.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-black py-[100px] max-[767px]:py-[50px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <div className="flex items-center justify-between mb-[60px] max-[767px]:mb-[40px]">
          <h2 className="text-[56px] max-[767px]:text-[28px] leading-[58px] max-[767px]:leading-[32px] font-semibold text-white m-0">{data.title}</h2>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[16px] text-white/50 mr-2">{String(activeIdx + 1).padStart(2, '0')} / {String(data.cards.length).padStart(2, '0')}</span>
            <button onClick={prev} className="w-11 h-11 rounded-full bg-[#f3f4f7] flex items-center justify-center border-0 cursor-pointer hover:bg-white transition-colors" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10L12 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} className="w-11 h-11 rounded-full bg-[#f3f4f7] flex items-center justify-center border-0 cursor-pointer hover:bg-white transition-colors" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4L14 10L8 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIdx * 100}%)` }}>
            {data.cards.map((card, i) => (
              <div key={i} className="w-full shrink-0 pr-5">
                <div className="bg-[#202023] rounded-[32px] p-10 max-[767px]:p-5">
                  <div className="flex gap-8 max-[1023px]:flex-col max-[767px]:gap-5">
                    <div className="w-[560px] h-[315px] max-[1239px]:w-[392px] max-[1239px]:h-auto max-[1023px]:w-full shrink-0 overflow-hidden rounded-[16px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center gap-4 flex-1">
                      <h3 className="text-[24px] max-[767px]:text-[20px] leading-[32px] max-[767px]:leading-[26px] font-semibold text-white m-0">{card.title}</h3>
                      {card.texts.map((text, j) => (
                        <p key={j} className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-white/70 m-0">{text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-8 justify-center">
          {data.cards.map((_, i) => (
            <button key={i} onClick={() => setActiveIdx(i)} className={`h-2 rounded-full transition-all duration-300 border-0 cursor-pointer ${i === activeIdx ? 'w-8 bg-[#4BD0A0]' : 'w-2 bg-white/30'}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramSection({ data }: { data: CourseLandingData['program'] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const [openSpecIdx, setOpenSpecIdx] = useState<number | null>(null)

  return (
    <section id="curriculum" className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <div className="flex justify-between items-start gap-8 max-[1023px]:flex-col mb-[40px]">
          <div className="max-w-[880px]">
            <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0">{data.title}</h2>
            <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-[#1B2126]/70 mt-5 m-0">{data.subtitle}</p>
          </div>
          <div className="w-[380px] max-[1239px]:w-[300px] max-[1023px]:w-full max-[1023px]:max-w-[620px] shrink-0">
            <p className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 m-0">{data.researchNote}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-[40px]">
          {data.bullets.map((bullet, i) => (
            <p key={i} className="text-[18px] leading-[24px] text-[#1B2126] m-0">● {bullet}</p>
          ))}
        </div>

        <div className="bg-white rounded-[32px] p-8 max-[767px]:p-5">
          <div className="flex justify-between items-center mb-[40px]">
            <h3 className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0">Main program</h3>
          </div>
          <div className="flex flex-col">
            {data.mainProgram.map((mod, i) => {
              const isOpen = openIdx === i
              return (
                <div key={i} className="border-t border-black/20 first:border-t-0 transition-all">
                  <button onClick={() => setOpenIdx(isOpen ? null : i)} className="flex items-center justify-between w-full py-[23px] max-[767px]:py-3 text-left cursor-pointer bg-transparent border-0 p-0">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-[20px] max-[767px]:text-[18px] font-medium text-[#1B2126] leading-[28px] max-[767px]:leading-[24px]">{mod.title}</span>
                      {mod.bonus && <span className="px-[18px] py-[2px] bg-[#f3f4f7] text-[#1B2126] text-[16px] leading-[22px] rounded-full shrink-0 whitespace-nowrap max-[767px]:text-[14px]">Bonus</span>}
                    </div>
                    <svg className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#1B2126" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                    <p className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 m-0 pb-[23px] max-[767px]:pb-3 pr-12">{mod.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-[32px] p-8 max-[767px]:p-5">
          <h3 className="text-[36px] max-[767px]:text-[24px] leading-[42px] max-[767px]:leading-[28px] font-semibold text-[#1B2126] m-0 mb-2">Specializations</h3>
          <p className="text-[16px] leading-[22px] text-[#1B2126]/70 m-0 mb-[40px]">Study any 2 of your choice after the main program</p>
          <div className="flex flex-col">
            {data.specializations.map((spec, i) => {
              const isOpen = openSpecIdx === i
              return (
                <div key={i} className="border-t border-black/20 first:border-t-0 transition-all">
                  <button onClick={() => setOpenSpecIdx(isOpen ? null : i)} className="flex items-center justify-between w-full py-[23px] max-[767px]:py-3 text-left cursor-pointer bg-transparent border-0 p-0">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-[20px] max-[767px]:text-[18px] font-medium text-[#1B2126] leading-[28px] max-[767px]:leading-[24px]">{spec.title}</span>
                      {spec.isNew && <span className="px-[18px] py-[2px] bg-[#0b3a82] text-white text-[14px] leading-[22px] rounded-full shrink-0 whitespace-nowrap">New specialization</span>}
                    </div>
                    <svg className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#1B2126" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                    <p className="text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[20px] text-[#1B2126]/70 m-0 pb-[23px] max-[767px]:pb-3 pr-12">{spec.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-[18px] max-[767px]:text-[16px] leading-[24px] text-[#1B2126] m-0 mb-6 max-w-[600px]">Submit a request - we will tell you more about the program and answer all your questions</p>
          <a href="#" className="inline-flex items-center justify-center h-[56px] max-[767px]:h-[48px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors">Get a consultation</a>
        </div>
      </div>
    </section>
  )
}
function PricingSection({ courseuuid, orgslug, data }: { courseuuid: string; orgslug: string; data: CourseLandingData['pricing'] }) {
  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[60px] max-[767px]:mb-[45px]">{data.title}</h2>
        <div className="flex justify-between gap-5 max-[1023px]:gap-[10px] max-[767px]:flex-col max-[767px]:gap-4">
          {data.tariffs.map((tariff, i) => (
            <div key={i} className={`flex-1 flex flex-col rounded-[32px] p-7 max-[767px]:p-4 box-border relative ${tariff.gradient ? 'bg-[linear-gradient(132deg,#d4dcff,#dbfff2)]' : 'bg-white'}`}>
              {tariff.recommended && <div className="absolute -top-[26px] left-0 right-0 flex justify-center items-center text-white text-[14px] leading-[18px] py-[3px] px-2 rounded-t-[12px] bg-[#0574e1] z-[-1]">We recommend</div>}
              <div className="flex flex-col">
                <h3 className="text-[24px] max-[767px]:text-[22px] leading-[28px] max-[767px]:leading-[26px] font-semibold text-[#1B2126] m-0">{tariff.title}</h3>
                <p className="text-[16px] leading-[20px] text-[#1B2126]/70 m-0 mt-3">{tariff.description}</p>
              </div>
              <div className="max-w-[400px] mt-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[18px] font-medium leading-[24px] text-[#636363] line-through">{tariff.oldPrice}</span>
                  <span className="rounded-full px-2 py-[2px] bg-[#c4fae7] text-[#038255] text-[14px] leading-[18px] whitespace-nowrap">{tariff.discountBadge}</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-[2px]">
                      <span className="text-[28px] leading-[32px] font-semibold text-[#1B2126]">{tariff.monthlyPrice}</span>
                      <span className="text-[18px] leading-[24px] font-medium text-[#1B2126]">{' '}{tariff.monthlyLabel}</span>
                    </div>
                    <p className="text-[14px] max-[767px]:text-[12px] leading-[18px] max-[767px]:leading-[16px] text-[#636363] m-0 mt-2 max-[767px]:mt-[6px]">{tariff.duration} {tariff.durationLabel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[18px] leading-[24px] font-medium text-[#1B2126] m-0">{tariff.onePayment}</p>
                    <p className="text-[14px] max-[767px]:text-[12px] leading-[18px] max-[767px]:leading-[16px] text-[#636363] m-0 mt-1">{tariff.onePaymentLabel}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-6">
                <Link href={getUriWithOrg(orgslug, `/course/${courseuuid}/checkout?tariff=${i}`)} className={`w-full h-[48px] rounded-[8px] text-[16px] font-medium border-0 cursor-pointer transition-colors flex items-center justify-center no-underline ${tariff.recommended ? 'bg-[#0087CD] text-white hover:bg-[#006ba3]' : 'bg-[#1B2126] text-white hover:bg-[#000]'}`}>Choose</Link>
                <p className="text-[14px] max-[767px]:text-[12px] leading-[18px] max-[767px]:leading-[16px] text-[#636363] text-center m-0">Got a promo code? Apply it at checkout.</p>
              </div>
              <ul className="flex flex-col gap-3 mt-6 m-0 p-0 list-none">
                {tariff.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-[14px] leading-[20px] text-[#1B2126]">
                    <svg className="shrink-0 mt-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 5" stroke="#4BD0A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection({ data }: { data: CourseLandingData['faq'] }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0])
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const questions = data.questions[activeTab] || []

  const handleTabChange = (tab: string) => { setActiveTab(tab); setOpenIdx(0) }

  return (
    <section className="bg-[#F3F4F7] py-[80px] max-[767px]:py-[48px]">
      <div className="max-w-[1240px] max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] mx-auto w-full px-5">
        <h2 className="text-[40px] max-[1023px]:text-[32px] max-[767px]:text-[24px] font-bold text-[#1B2126] leading-[1.2] m-0 mb-[40px]">{data.title}</h2>
        <div className="flex flex-wrap gap-5 max-[1023px]:gap-[10px] mb-[40px]">
          {data.tabs.map((tab) => (
            <button key={tab} onClick={() => handleTabChange(tab)} className={`rounded-[50px] px-5 py-[14px] max-[767px]:px-5 max-[767px]:py-[10px] cursor-pointer text-[16px] max-[767px]:text-[14px] leading-[22px] max-[767px]:leading-[18px] border-0 transition-colors ${activeTab === tab ? 'bg-[#1B2126] text-white' : 'bg-[#e5e7eb] text-[#1B2126] hover:bg-[#d1d5db]'}`}>{tab}</button>
          ))}
        </div>
        <div className="mt-[-30px]">
          {questions.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <div key={i} className="border-b border-[#9a9a9a]/65 relative">
                <button onClick={() => setOpenIdx(isOpen ? null : i)} className="flex justify-between items-center w-full text-left py-12 max-[1023px]:py-[30px] first:pt-7 cursor-pointer bg-transparent border-0 p-0">
                  <span className="text-[20px] max-[767px]:text-[18px] leading-[28px] max-[767px]:leading-[24px] font-medium text-[#1B2126] flex-1 pr-4">{item.q}</span>
                  <svg className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#27292d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div className="overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: isOpen ? '300px' : '0px' }}>
                  <p className="text-[16px] leading-[24px] text-[#1B2126]/70 m-0 mt-[30px] max-w-[990px] pb-12 max-[1023px]:pb-[30px]">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-between mt-[50px] max-[767px]:flex-col max-[767px]:gap-4">
          <a href="#" className="text-[16px] leading-[22px] text-[#1B2126] underline cursor-pointer hover:no-underline">all questions</a>
          <a href="#" className="inline-flex items-center justify-center h-[48px] px-8 bg-[#0087CD] hover:bg-[#006ba3] text-white text-[16px] font-medium rounded-[14px] no-underline transition-colors">To tariffs</a>
        </div>
      </div>
    </section>
  )
}

function FooterSection({ breadcrumb }: { breadcrumb: string }) {
  const columns = [
    { title: 'Information', links: ['About Hybreed', 'Bring a friend', 'Affiliate program', 'For experts', 'Work at Hybreed', 'Hybreed Vacancies', 'Legal information', 'Information about the Academy', 'Contacts', 'Reviews'] },
    { title: 'Education', links: ['Study for free', 'Course Catalog', 'Popular courses', 'Tests', 'Marketing', 'Business and Management', 'Design and UX', 'Programming', 'Analytics', 'Team management', 'Programs with universities', 'Creative professions', 'Professions in education', 'Corporate training', 'New professions', 'Marketplaces', 'Finance and Investments', 'Computer games', 'Health', 'Neural networks', 'Psychology', 'Online college'] },
    { title: 'Projects', links: ['Hybreed Media', 'Career Development Center', 'For business: find a contractor', 'Universities and colleges: online courses', 'Gift certificate', 'Glossary', 'Training for NGOs', 'Hybreed Community', 'State license'] },
  ]

  return (
    <footer className="bg-black text-white px-[30px] max-[767px]:px-5">
      <div className="max-w-[1240px] max-[1239px]:max-w-[980px] mx-auto w-full pt-6 text-[12px] leading-[18px] text-[#a0a0a0]">
        <a href="#" className="hover:underline no-underline">Home</a>{' / '}<a href="#" className="hover:underline no-underline">Catalog</a>{' / '}<span className="text-white">{breadcrumb}</span>
      </div>
      <div className="max-w-[1240px] max-[1239px]:max-w-[980px] max-[1023px]:max-w-full mx-auto w-full flex py-20 max-[767px]:flex-col-reverse max-[767px]:pt-6 max-[767px]:pb-[200px] mb-10">
        <div className="flex flex-col w-[280px] max-[1239px]:w-[220px] max-[1023px]:w-[340px] max-[767px]:w-[240px] mr-5 shrink-0">
          <div className="text-[24px] font-bold text-white">Hybreed</div>
          <div className="flex gap-3 mt-[35px]">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center no-underline" aria-label="VK"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12.785 16.241s.288-.032.435-.193c.135-.148.131-.426.131-.426s-.019-1.302.582-1.495c.593-.19 1.354 1.27 2.159 1.832.609.425 1.072.332 1.072.332l2.155-.03s1.127-.071.593-.964c-.044-.073-.31-.661-1.598-1.87-1.348-1.263-1.167-1.058.456-3.24.989-1.332 1.385-2.146 1.262-2.494-.117-.333-.844-.245-.844-.245l-2.426.015s-.18-.025-.314.056c-.13.079-.214.265-.214.265s-.382 1.039-.892 1.922c-1.075 1.862-1.504 1.96-1.681 1.846-.41-.267-.307-1.075-.307-1.65 0-1.793.27-2.54-.527-2.733-.265-.064-.46-.107-1.135-.114-.868-.009-1.601.003-2.017.207-.276.137-.489.441-.36.459.16.021.522.099.714.364.248.341.239 1.107.239 1.107s.143 2.099-.333 2.36c-.327.179-.775-.186-1.733-1.848-.489-.849-.858-1.787-.858-1.787s-.071-.176-.2-.27c-.156-.115-.374-.151-.374-.151l-2.305.015s-.346.01-.473.161c-.113.135-.009.413-.009.413s1.805 4.23 3.851 6.366c1.874 1.954 4.002 1.825 4.002 1.825h.964z"/></svg></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center no-underline" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center no-underline" aria-label="Telegram"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.387 4.025-1.627 4.476-1.635z"/></svg></a>
          </div>
          <div className="mt-[30px]">
            <div className="w-[100px] h-[100px] bg-white rounded-[8px] flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="30" height="30" stroke="#000" strokeWidth="3" fill="none"/><rect x="60" y="10" width="30" height="30" stroke="#000" strokeWidth="3" fill="none"/><rect x="10" y="60" width="30" height="30" stroke="#000" strokeWidth="3" fill="none"/><rect x="20" y="20" width="10" height="10" fill="#000"/><rect x="70" y="20" width="10" height="10" fill="#000"/><rect x="20" y="70" width="10" height="10" fill="#000"/><rect x="50" y="50" width="10" height="10" fill="#000"/><rect x="65" y="55" width="8" height="8" fill="#000"/><rect x="55" y="70" width="8" height="8" fill="#000"/><rect x="70" y="65" width="8" height="8" fill="#000"/></svg>
            </div>
            <p className="w-[200px] max-w-[190px] mt-[14px] text-[14px] leading-[20px] text-white m-0 max-[767px]:hidden">Point your camera and download the free Hybreed{' '}<a href="#" className="text-white underline">app</a></p>
            <div className="flex gap-2 mt-4 max-[767px]:flex-col">
              <div className="px-3 py-2 bg-white/10 rounded-[6px] text-[11px] text-white/80">Google Play</div>
              <div className="px-3 py-2 bg-white/10 rounded-[6px] text-[11px] text-white/80">App Store</div>
              <div className="px-3 py-2 bg-white/10 rounded-[6px] text-[11px] text-white/80">RuStore</div>
            </div>
          </div>
          <div className="mt-5 mb-5"><a href="tel:+79651788020" className="text-white text-[18px] font-medium no-underline">+7 (965) 178-80-20</a><p className="text-[12px] text-[#a0a0a0] max-w-[190px] m-0 mt-1">For questions about purchasing courses</p></div>
          <div className="mb-5"><a href="tel:+79672118828" className="text-white text-[18px] font-medium no-underline">+7 (967) 211-88-28</a><p className="text-[12px] text-[#a0a0a0] max-w-[190px] m-0 mt-1">For corporate clients</p></div>
          <div className="mb-5"><p className="text-[14px] text-white m-0"><a href="#" className="text-white underline">Write in chat</a>{' or email: '}<a href="mailto:support@hybreed.com" className="text-white underline">support@hybreed.com</a></p><p className="text-[12px] text-[#a0a0a0] m-0 mt-1">For current students</p></div>
          <p className="text-[14px] text-[#a0a0a0] max-w-[170px] m-0">Moscow, Varshavskoe shosse, 1, building 6, 3rd floor, office 315A</p>
          <p className="text-[14px] text-[#828181] mt-[146px] max-[767px]:mt-12 m-0">© Hybreed Inc., 2024-2026</p>
        </div>
        <div className="flex max-[1023px]:flex-col flex-1">
          {columns.map((col, i) => (
            <div key={i} className={`flex flex-col w-[280px] max-[1239px]:w-[220px] max-[1023px]:w-[340px] max-[767px]:w-[240px] max-[1023px]:border-b max-[1023px]:border-white/20 max-[1023px]:pb-5 ${i < columns.length ? 'mr-5 max-[1023px]:mr-0 max-[1023px]:mb-5' : ''}`}>
              <div className="text-[17px] font-medium leading-[30px] text-white pb-5 max-[1023px]:cursor-pointer max-[1023px]:py-5 max-[1023px]:pb-[26px]">{col.title}</div>
              <div className="flex flex-col">
                {col.links.map((link, j) => (
                  <a key={j} href="#" className="text-[16px] max-[1023px]:text-[18px] leading-[20px] text-[#a0a0a0] hover:text-white no-underline mt-3 first:mt-0 transition-colors">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
