'use client'

import React from 'react'
import Link from 'next/link'
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

export default function HomeFooter({ orgslug }: HomeFooterProps) {
  return (
    <footer className="relative flex flex-col items-center justify-center bg-black text-white px-0 py-0">
      <div className="w-full box-border px-4 sm:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo + social + app QR */}
          <div className="flex flex-col">
            <Link href={getUriWithOrg(orgslug, '/')} className="text-white text-2xl font-bold mb-4">
              Hybreed
            </Link>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-6">
              {['VK', 'YouTube', 'TG', 'OK'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-5 h-4 inline-flex items-center justify-center text-gray-400 hover:opacity-80 transition-opacity text-xs"
                >
                  {s}
                </a>
              ))}
            </div>

            {/* QR + app text */}
            <div className="flex flex-col gap-3">
              <div className="w-[154px] h-[154px] bg-white/10 rounded-lg" />
              <p className="text-sm text-white max-w-[190px] leading-5">
                Point your camera and download the free{' '}
                <a href="#" className="text-gray-400 hover:opacity-80">Hybreed</a>{' '}
                <a href="#" className="text-gray-400 hover:opacity-80">app</a>
              </p>
              <div className="flex gap-3 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-white/56 rounded-[10px] flex items-center justify-center text-gray-400 text-xs hover:opacity-80 transition-opacity"
                  >
                    App
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Info */}
          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-white pb-5 relative mb-0">
              Information
            </h4>
            <div className="flex flex-col gap-3">
              {INFO_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={getUriWithOrg(orgslug, link.href)}
                  className="text-sm text-[#a0a0a0] hover:opacity-80 transition-opacity no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Education */}
          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-white pb-5 relative mb-0">
              Education
            </h4>
            <div className="flex flex-col gap-3">
              {EDU_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={getUriWithOrg(orgslug, link.href)}
                  className="text-sm text-[#a0a0a0] hover:opacity-80 transition-opacity no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Projects + contacts + license */}
          <div className="flex flex-col">
            <h4 className="text-lg font-medium text-white pb-5 relative mb-0">
              Projects
            </h4>
            <div className="flex flex-col gap-3">
              {PROJECT_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={getUriWithOrg(orgslug, link.href)}
                  className="text-sm text-[#a0a0a0] hover:opacity-80 transition-opacity no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-col gap-2">
              <a href="tel:+79651788020" className="text-sm text-[#a0a0a0] no-underline">
                +7 (965) 178-80-20
              </a>
              <span className="text-xs text-[#a0a0a0]">For questions about purchasing courses</span>
              <a href="tel:+79672118828" className="text-sm text-[#a0a0a0] no-underline mt-2">
                +7 (967) 211-88-28
              </a>
              <span className="text-xs text-[#a0a0a0]">For corporate clients</span>
              <p className="text-sm text-[#a0a0a0] mt-2">
                Write in chat or email:{' '}
                <a href="mailto:support@hybreed.ru" className="text-sm text-[#a0a0a0] no-underline">
                  support@hybreed.ru
                </a>
              </p>
              <p className="text-xs text-[#a0a0a0] mt-2">
                Moscow, Varshavskoe shosse, 1, building 6, 3rd floor, office 315A
              </p>
            </div>

            {/* License + government links */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-[#a0a0a0] no-underline hover:opacity-80 transition-opacity"
              >
                <span className="w-8 h-8 border border-white/30 rounded flex items-center justify-center text-xs">L</span>
                State license
              </Link>
              <Link
                href="#"
                className="text-sm text-[#a0a0a0] no-underline hover:opacity-80 transition-opacity"
              >
                Website of the Ministry of Education and Science of Russia
              </Link>
              <Link
                href="#"
                className="text-sm text-[#a0a0a0] no-underline hover:opacity-80 transition-opacity"
              >
                Website of the Ministry of Education of Russia
              </Link>
              <div className="flex items-center gap-2 mt-4 cursor-pointer">
                <span className="text-sm text-[#a0a0a0]">Version for the visually impaired</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-[#828181]">
            &copy; Hybreed, 2011&dash;2026
          </p>
        </div>
      </div>
    </footer>
  )
}
