'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MapPin, Building2 } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'
import HomeFooter from '@components/Landings/Hybreed/HomeFooter'

interface ContactPageProps {
  orgslug: string
}

/* Support team contacts */
const SUPPORT_CONTACTS = [
  {
    photo: '/images/home/contact-person-1.png',
    name: 'Hybreed Partnerships',
    role: 'Affiliate and referral programs',
  },
  {
    photo: '/images/home/contact-person-2.png',
    name: 'Anastasia Sibireva',
    role: 'Cooperation with employers',
  },
  {
    photo: '/images/home/contact-person-3.png',
    name: 'Pavel Gulyaev',
    role: 'Cooperation with state-owned companies and GR',
  },
  {
    photo: '/images/home/contact-person-4.png',
    name: 'PR department',
    role: 'PR and event support',
  },
]

export default function ContactPage({ orgslug }: ContactPageProps) {
  const coursesHref = getUriWithOrg(orgslug, '/courses')

  return (
    <div className="w-full">
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />

      {/* ============================================================
          SECTION 1: HERO — "Contacts" heading
          ============================================================ */}
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-[1160px] mx-auto box-border pt-[40px] pb-[20px] px-5 max-[1239px]:max-w-[940px] max-[1239px]:pt-[30px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[40px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[30px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-[14px] text-[#8e8e8e] mb-8">
            <Link href={getUriWithOrg(orgslug, '/')} className="hover:text-[#1B2126] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1B2126] font-medium">Contact</span>
          </nav>

          {/* Heading */}
          <h1 className="text-[60px] max-[1239px]:text-[52px] max-[1023px]:text-[40px] max-[767px]:text-[28px] max-[767px]:leading-[34px] font-medium leading-[1] text-black m-0">
            Contacts
          </h1>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: OFFICE INFO + CONTACT DETAILS
          Centered layout with office address, phone numbers, email
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pt-[20px] pb-[40px] flex flex-col items-center text-center max-[1239px]:max-w-[940px] max-[1023px]:max-w-[700px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[10px] max-[767px]:pb-[20px]">
          {/* Office title */}
          <h2 className="text-[34px] max-[1239px]:text-[28px] font-bold leading-[1.2] text-black m-0 mb-8 max-[767px]:mb-6">
            Hybreed Academy Office
          </h2>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 text-[20px] max-[767px]:text-[16px] leading-[24px] text-black mb-6 max-[767px]:mb-4">
            <MapPin size={24} className="text-[#0066ff] flex-shrink-0" />
            <span>Lagos, Nigeria — Hybrid & Remote</span>
          </div>

          {/* Working hours */}
          <div className="flex items-center justify-center gap-2 text-[20px] max-[767px]:text-[16px] leading-[24px] text-black mb-10 max-[767px]:mb-8 max-[767px]:max-w-[250px]">
            <Clock size={24} className="text-[#0066ff] flex-shrink-0" />
            <span>Call on weekdays from 10:00 to 19:00 WAT</span>
          </div>

          {/* Contact lines */}
          <div className="w-full max-w-[700px] flex flex-col gap-6 max-[767px]:gap-5">
            {/* Course inquiries */}
            <div className="flex items-center justify-between max-[767px]:flex-col max-[767px]:gap-2 border-b border-[rgba(0,0,0,0.1)] pb-5">
              <div className="text-[18px] max-[767px]:text-[16px] text-[rgba(0,0,0,0.6)] text-right max-[767px]:text-center max-[767px]:w-full">
                For questions about purchasing courses
              </div>
              <div className="flex flex-col items-end max-[767px]:items-center max-[767px]:w-full">
                <a href="tel:+2348001234567" className="text-[20px] max-[767px]:text-[18px] text-[#0066ff] no-underline hover:underline font-medium">
                  +234 800 123 4567
                </a>
                <a href="tel:+2348098765432" className="text-[20px] max-[767px]:text-[18px] text-[#0066ff] no-underline hover:underline font-medium">
                  +234 809 876 5432
                </a>
              </div>
            </div>

            {/* Corporate clients */}
            <div className="flex items-center justify-between max-[767px]:flex-col max-[767px]:gap-2 border-b border-[rgba(0,0,0,0.1)] pb-5">
              <div className="text-[18px] max-[767px]:text-[16px] text-[rgba(0,0,0,0.6)] text-right max-[767px]:text-center max-[767px]:w-full">
                For corporate clients
              </div>
              <div className="flex flex-col items-end max-[767px]:items-center max-[767px]:w-full">
                <a href="tel:+2348112233445" className="text-[20px] max-[767px]:text-[18px] text-[#0066ff] no-underline hover:underline font-medium">
                  +234 811 223 3445
                </a>
              </div>
            </div>

            {/* Current students */}
            <div className="flex items-center justify-between max-[767px]:flex-col max-[767px]:gap-2 border-b border-[rgba(0,0,0,0.1)] pb-5">
              <div className="text-[18px] max-[767px]:text-[16px] text-[rgba(0,0,0,0.6)] text-right max-[767px]:text-center max-[767px]:w-full">
                For current students
              </div>
              <div className="flex flex-col items-end max-[767px]:items-center max-[767px]:w-full">
                <span className="text-[20px] max-[767px]:text-[18px] text-black font-medium">
                  Write to support chat
                </span>
                <span className="text-[18px] max-[767px]:text-[16px] text-[rgba(0,0,0,0.6)]">
                  or by email
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <Mail size={24} className="text-[#0066ff] flex-shrink-0" />
              <a href="mailto:support@hybreed.academy" className="text-[20px] max-[767px]:text-[18px] text-[#0066ff] no-underline hover:underline font-medium">
                support@hybreed.academy
              </a>
            </div>
          </div>

          {/* Company details (collapsible-style block) */}
          <div className="mt-10 max-[767px]:mt-6 w-full max-w-[700px] text-left bg-[#f6f8f9] rounded-[12px] p-6 max-[767px]:p-4">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={22} className="text-[#0066ff]" />
              <span className="text-[18px] font-semibold text-black">Company details</span>
            </div>
            <div className="text-[16px] max-[767px]:text-[14px] leading-[24px] text-[rgba(0,0,0,0.7)]">
              <p className="m-0 mb-2"><strong>Organization:</strong> Hybreed Academy LLC</p>
              <p className="m-0 mb-2"><strong>RC Number:</strong> 1234567</p>
              <p className="m-0 mb-2"><strong>Legal address:</strong> Lagos, Nigeria</p>
              <p className="m-0 mb-2"><strong>Postal address:</strong> Lagos, Nigeria, P.O. Box 1234</p>
              <p className="m-0"><strong>General Director:</strong> Hybreed X</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: SUPPORT TEAM
          "We are ready to help you with any questions"
          4 contact cards with photos, names, and roles
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pt-[40px] pb-[60px] max-[1239px]:max-w-[940px] max-[1239px]:pt-[30px] max-[1239px]:pb-[40px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[30px] max-[1023px]:pb-[30px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[20px] max-[767px]:pb-[20px]">
          {/* Heading */}
          <h2 className="text-[34px] max-[1239px]:text-[28px] max-[767px]:text-[24px] font-bold leading-[1.2] text-black m-0 mb-10 text-center max-[1239px]:mb-8 max-[767px]:mb-6">
            We are ready to help you with any questions
          </h2>

          {/* Support cards — 4 in a row */}
          <div className="flex flex-wrap justify-center gap-6 max-[1023px]:gap-4 max-[767px]:flex-col max-[767px]:gap-5">
            {SUPPORT_CONTACTS.map((contact) => (
              <div
                key={contact.name}
                className="w-[240px] max-[1023px]:w-[200px] max-[767px]:w-full flex flex-col items-center text-center"
              >
                {/* Photo — circular with border */}
                <div className="w-[105px] h-[105px] min-w-[105px] rounded-full border-[15px] border-[rgba(186,186,186,0.1)] overflow-hidden relative mb-4 max-[1023px]:w-[85px] max-[1023px]:h-[85px] max-[1023px]:min-w-[85px] max-[1023px]:border-[10px]">
                  <Image
                    src={contact.photo}
                    alt={contact.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="105px"
                  />
                </div>
                {/* Email icon */}
                <div className="mb-3">
                  <Mail size={20} className="text-[#0066ff]" />
                </div>
                {/* Name */}
                <div className="text-[20px] max-[1023px]:text-[18px] leading-[1.1] font-semibold text-black mb-1">
                  {contact.name}
                </div>
                {/* Role */}
                <div className="text-[16px] max-[1023px]:text-[14px] leading-[22px] text-[rgba(0,0,0,0.5)] max-w-[240px]">
                  {contact.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: MAP placeholder
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pb-[60px] max-[1239px]:max-w-[940px] max-[1239px]:pb-[40px] max-[1023px]:max-w-[700px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pb-[20px]">
          <div className="w-full h-[400px] max-[767px]:h-[250px] rounded-[16px] overflow-hidden bg-[#f6f8f9] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-[#0066ff] mx-auto mb-3" />
              <p className="text-[20px] font-medium text-black m-0 mb-1">Hybreed Academy</p>
              <p className="text-[16px] text-[rgba(0,0,0,0.5)] m-0">Lagos, Nigeria — Hybrid & Remote</p>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter orgslug={orgslug} />
    </div>
  )
}
