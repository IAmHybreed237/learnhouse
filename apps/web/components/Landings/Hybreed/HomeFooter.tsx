'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'

interface HomeFooterProps {
  orgslug: string
}

const INFO_LINKS = [
  { label: 'About the company', href: '/about' },
  { label: 'Bring a friend', href: '/affiliate' },
  { label: 'Affiliate program', href: '/affiliate' },
  { label: 'For experts', href: '/experts' },
  { label: 'Work at Hybreed', href: '/team' },
  { label: 'Hybreed Vacancies', href: '/job' },
  { label: 'Legal information', href: '/legal' },
  { label: 'Information about the educational organization', href: '/official-info' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Reviews', href: '/reviews' },
]

const EDU_LINKS = [
  { label: 'Study for free', href: '/free' },
  { label: 'Course Catalog', href: '/navigation' },
  { label: 'Popular courses', href: '/popular' },
  { label: 'Tests', href: '/tests' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'Business and Management', href: '/management' },
  { label: 'Design and UX', href: '/design' },
  { label: 'Programming', href: '/development' },
  { label: 'Analytics', href: '/data-science' },
  { label: 'Team management', href: '/soft-skills' },
  { label: 'Higher education', href: '/degree' },
  { label: 'Creative professions', href: '/creative' },
  { label: 'Professions in education', href: '/edmarket' },
  { label: 'Corporate training', href: '/programs/b2b' },
  { label: 'New professions', href: '/new-courses' },
  { label: 'Marketplaces', href: '/marketplaces' },
  { label: 'Finance and Investments', href: '/finance' },
  { label: 'Computer games', href: '/gamedesign-academy' },
  { label: 'Medicine and health', href: '/medicine' },
  { label: 'Neural networks', href: '/ai-courses' },
  { label: 'Psychology', href: '/programs/psychology' },
  { label: 'Programs with universities', href: '/degree' },
  { label: 'Online college', href: '/programs/kolledzh' },
]

const PROJECT_LINKS = [
  { label: 'Media Hybreed', href: '/blog/' },
  { label: 'Career Development Center', href: '/students' },
  { label: 'For business: find a contractor', href: '/partnership' },
  { label: 'Universities and colleges: online courses', href: '/programs/discipliny-i-moduli' },
  { label: 'Gift certificate', href: '/sertificate' },
  { label: 'Glossary', href: '/glossariy' },
  { label: 'Training for NGOs', href: '/learn-to-help' },
  { label: 'Community at Hybreed', href: '/community' },
]

function FooterLinkColumn({
  title,
  links,
  orgslug,
}: {
  title: string
  links: { label: string; href: string }[]
  orgslug: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="max-[767px]:border-b max-[767px]:border-white max-[767px]:w-full">
      {/* Desktop: static header */}
      <div
        className="font-medium text-[17px] leading-[30px] text-white pb-5 relative
                   max-[767px]:cursor-pointer max-[767px]:py-5 max-[767px]:pb-[26px]"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown
          className={`hidden max-[767px]:block absolute right-5 top-1/2 -mt-2 w-4 h-4 text-white/80 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>
      {/* Desktop: always visible links. Mobile: accordion */}
      <div className={`flex flex-col max-[767px]:pb-5 max-[767px]:pl-2.5 ${open ? 'max-[767px]:flex' : 'max-[767px]:hidden'} min-[768px]:flex`}>
        {links.map((link) => (
          <Link
            key={link.label + link.href}
            href={getUriWithOrg(orgslug, link.href)}
            className="text-base leading-5 text-[#a0a0a0] no-underline mt-3 hover:opacity-70 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function HomeFooter({ orgslug }: HomeFooterProps) {
  return (
    <footer className="relative flex flex-col items-center justify-center bg-black text-white px-[30px] max-[767px]:px-5">
      {/* Main columns container */}
      <div className="flex w-full max-w-[1240px] py-20 mb-10 max-[1239px]:max-w-[980px] max-[767px]:flex-col-reverse max-[767px]:pt-6 max-[767px]:pb-[200px]">
        {/* First column: Logo + social + QR + contacts + copyright */}
        <div className="flex flex-col w-[280px] mr-5 max-[1239px]:w-[220px] max-[767px]:w-full">
          {/* Logo */}
          <Link
            href={getUriWithOrg(orgslug, '/')}
            className="text-white text-2xl font-bold mt-10 hover:opacity-70 transition-opacity no-underline max-[767px]:mt-6"
          >
            Hybreed
          </Link>

          {/* Social icons */}
          <div className="flex mt-[35px] gap-3">
            {['VK', 'YT', 'TG', 'OK'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-6 h-6 inline-flex items-center justify-center text-[#a0a0a0] hover:opacity-70 transition-opacity text-xs rounded-full border border-white/30"
              >
                {s}
              </a>
            ))}
          </div>

          {/* QR code + app download */}
          <div className="mt-8 flex flex-col gap-3">
            <div className="w-[154px] h-[154px] bg-white/10 rounded-lg" />
            <p className="text-sm text-white max-w-[190px] leading-5 m-0">
              Point your camera and download the free{' '}
              <a href="#" className="text-[#a0a0a0] hover:opacity-70 no-underline">Hybreed</a>{' '}
              <a href="#" className="text-[#a0a0a0] hover:opacity-70 no-underline">app</a>
            </p>
            <div className="flex gap-3 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/50 rounded-[10px] flex items-center justify-center text-[#a0a0a0] text-xs hover:opacity-70 transition-opacity"
                >
                  App
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe + contact info */}
          <div className="mt-8 flex flex-col">
            <a href="#" className="text-base leading-5 text-[#a0a0a0] no-underline mt-3 hover:opacity-70">
              Subscribe to our newsletter
            </a>
            <div className="mt-4">
              <a href="tel:+79651788020" className="text-base text-[#a0a0a0] no-underline hover:opacity-70">
                +7 (965) 178-80-20
              </a>
              <div className="text-xs text-[#a0a0a0] mt-1 opacity-60">For questions about purchasing courses</div>
            </div>
            <div className="mt-3">
              <a href="tel:+79672118828" className="text-base text-[#a0a0a0] no-underline hover:opacity-70">
                +7 (967) 211-88-28
              </a>
              <div className="text-xs text-[#a0a0a0] mt-1 opacity-60">For corporate clients</div>
            </div>
            <div className="mt-3 text-base text-[#a0a0a0]">
              <a href="#" className="text-[#a0a0a0] no-underline hover:opacity-70">Write in chat</a>
              {' '}or email:{' '}
              <a href="mailto:support@hybreed.ru" className="text-[#a0a0a0] no-underline hover:opacity-70">
                support@hybreed.ru
              </a>
              <div className="text-xs mt-1 opacity-60">For current students</div>
            </div>
            <div className="mt-3 text-sm text-[#a0a0a0]">
              Moscow, Varshavskoe shosse, 1, building 6, 3rd floor, office 315A
            </div>
          </div>

          {/* Copyright */}
          <span className="text-sm text-[#828181] mt-[146px] max-[767px]:mt-12">
            &copy; Hybreed, 2011&ndash;2026
          </span>
        </div>

        {/* Link columns */}
        <div className="flex max-[767px]:flex-col max-[767px]:pb-2.5">
          {/* Information */}
          <div className="w-[220px] mr-5 max-[1239px]:w-[180px] max-[767px]:w-full max-[767px]:mr-0">
            <FooterLinkColumn title="Information" links={INFO_LINKS} orgslug={orgslug} />
          </div>

          {/* Education */}
          <div className="w-[340px] mr-5 max-[1239px]:w-[280px] max-[767px]:w-full max-[767px]:mr-0">
            <FooterLinkColumn title="Education" links={EDU_LINKS} orgslug={orgslug} />
          </div>

          {/* Projects */}
          <div className="w-[240px] max-[1239px]:w-[200px] max-[767px]:w-full">
            <FooterLinkColumn title="Projects" links={PROJECT_LINKS} orgslug={orgslug} />

            {/* Additional: license, ministry links, etc. */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-2 text-base text-[#a0a0a0] no-underline hover:opacity-70"
              >
                <span className="w-8 h-8 border border-white/30 rounded flex items-center justify-center text-xs">L</span>
                <span>State<br />license</span>
              </a>
              <a href="#" className="text-base leading-5 text-[#a0a0a0] no-underline mt-3 hover:opacity-70">
                Website of the Ministry of Education and Science of Russia
              </a>
              <a href="#" className="text-base leading-5 text-[#a0a0a0] no-underline mt-3 hover:opacity-70">
                Website of the Ministry of Education of Russia
              </a>
              <div className="flex items-center gap-2 mt-9 cursor-pointer text-base text-[#a0a0a0]">
                Version for the visually impaired
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
