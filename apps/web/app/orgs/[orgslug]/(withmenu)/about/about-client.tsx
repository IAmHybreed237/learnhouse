'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getUriWithOrg } from '@services/config/config'
import HybreedHeader from '@components/Landings/Hybreed/HybreedHeader'
import HybreedPromoBanner from '@components/Landings/Hybreed/HybreedPromoBanner'
import HomeFooter from '@components/Landings/Hybreed/HomeFooter'

interface AboutPageProps {
  orgslug: string
}

/* Hybreed Academy — About page. Developed by Hybreed X. */

const LEVELS = [
  { name: 'Start', description: 'Master a new | specialty', color: '#4bd0a0' },
  { name: 'Grow', description: 'Develop | in the profession', color: '#0066ff' },
  { name: 'Lead', description: 'Managing a business', color: '#eb236b' },
  { name: 'Teams', description: 'Train employees', color: '#5d00f5' },
]

const DIRECTIONS = [
  { title: 'Web & Software Development', stats: '5 courses' },
  { title: 'Digital & Workplace Skills', stats: '3 courses' },
  { title: 'Design & Creative Technology', stats: '2 courses' },
  { title: 'Business & Digital Marketing', stats: '2 courses' },
  { title: 'Electronics & Practical Tech', stats: '1 course' },
  { title: 'Graduate Career Upgrade', stats: '10 courses' },
  { title: 'Digital Marketing', stats: '1 course' },
  { title: 'Search Engine Optimization', stats: '1 course' },
]

/* Company logos — same as reference */
const COMPANY_LOGOS = [
  '/images/home/company-1.png',
  '/images/home/company-2.png',
  '/images/home/company-3.png',
  '/images/home/company-4.png',
  '/images/home/company-5.png',
  '/images/home/company-6.png',
  '/images/home/company-7.png',
  '/images/home/company-8.png',
  '/images/home/company-9.png',
]

/* Role cards — join Hybreed Academy */
const ROLES = [
  {
    image: '/images/home/role-1.jpg',
    title: 'As an expert',
    text: 'You can create a course, conduct webinars, prepare materials for lectures and practical assignments.',
    button: 'Start teaching',
  },
  {
    image: '/images/home/role-2.jpg',
    title: 'As a colleague',
    text: 'If you want to develop online education with us, apply for a suitable vacancy.',
    button: 'View vacancies',
  },
  {
    image: '/images/home/role-3.jpg',
    title: 'As a partner',
    text: 'Promote Hybreed Academy on your own resources: social media, newsletters, blog, and website. And earn money doing it.',
    button: 'Become a partner',
  },
  {
    image: '/images/home/role-4.jpg',
    title: 'As an author',
    text: 'Write to our blog if you understand marketing, development, business, design, or analytics.',
    button: 'Submit an article',
  },
]

/* Feature cards — how Hybreed Academy teaches */
const FEATURES = [
  {
    image: '/images/home/feature-1.svg',
    title: 'We collect the best methodologies',
    text: 'A team of authors, instructors, and practitioners works on every course. We monitor industry trends to launch programs that are relevant, practical, and up to date. We build the kind of learning experience we would want ourselves.',
  },
  {
    image: '/images/home/feature-2.svg',
    title: 'Building an educational path',
    text: 'We help Hybreeds choose the right learning path and set clear expectations. You get structured lessons, practical exercises, and feedback from mentors — all designed to keep you engaged from day one.',
  },
  {
    image: '/images/home/feature-3.svg',
    title: 'We lead to results',
    text: 'We support Hybreeds throughout their journey. Mentors and instructors keep you on track, and every course includes projects you can add to your portfolio. The goal is not just to watch videos — it is to build real skills.',
  },
  {
    image: '/images/home/feature-4.svg',
    title: 'Practical, career-focused learning',
    text: 'Every course is designed around real-world tasks. Hybreeds work on projects, assignments, and scenarios that mirror what employers and clients actually need. The certificate is useful, but the skill is the real product.',
  },
]

export default function AboutPage({ orgslug }: AboutPageProps) {
  const coursesHref = getUriWithOrg(orgslug, '/courses')

  return (
    <div className="w-full">
      <HybreedPromoBanner orgslug={orgslug} />
      <HybreedHeader orgslug={orgslug} />

      {/* ============================================================
          SECTION 1: HERO + PRESENTATION LEVELS
          Left: title + description + level cards (stacked).
          Right: hero image. White background.
          ============================================================ */}
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-[1160px] mx-auto box-border pt-[40px] pb-[20px] px-5 flex justify-between max-[1239px]:max-w-[940px] max-[1239px]:pt-[30px] max-[1239px]:pb-[10px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[40px] max-[1023px]:pb-[10px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[30px] max-[767px]:pb-[20px] max-[767px]:flex-col-reverse">
          {/* Left: Title + Description + Level cards */}
          <div className="flex flex-col max-w-[560px] max-[1239px]:max-w-[460px]">
            <h1 className="text-[60px] leading-[1] font-medium text-black m-0 mb-[40px] max-[1239px]:text-[52px] max-[1239px]:leading-[56px] max-[1239px]:mb-[32px] max-[1023px]:text-[40px] max-[1023px]:leading-[40px] max-[1023px]:text-center max-[1023px]:mx-auto max-[767px]:text-[28px] max-[767px]:leading-[34px]">
              A source of knowledge for professional growth
            </h1>
            <p className="text-[20px] leading-[30px] font-normal text-black m-0 mb-[60px] max-w-[560px] max-[1239px]:text-[16px] max-[1239px]:leading-[24px] max-[1239px]:max-w-[460px] max-[1239px]:mb-[40px] max-[1023px]:text-center max-[1023px]:mx-auto max-[767px]:mb-[30px]">
              Everyone has the strength and talent to achieve great goals. We help Hybreeds find their path to development and realize their potential through practical skills — the way they want to.
            </p>

            {/* Level cards — below description, 2x2 grid */}
            <div className="flex flex-wrap max-w-[560px] justify-between max-[1239px]:max-w-[460px] max-[767px]:max-w-full">
              {LEVELS.map((level) => (
                <Link
                  key={level.name}
                  href={coursesHref}
                  className="no-underline flex-[0_0_260px] border-t border-[rgba(0,0,0,0.2)] pt-[6px] pb-[10px] mb-[10px] text-black hover:opacity-80 transition-opacity max-[1239px]:flex-[0_0_220px] max-[767px]:flex-basis-[calc(50%-10px)] max-[767px]:pb-[5px]"
                >
                  <div className="text-[22px] leading-[28px] font-medium mb-[6px] flex justify-between items-center" style={{ color: level.color }}>
                    {level.name}
                    <ArrowRight size={22} style={{ color: level.color }} />
                  </div>
                  <div className="text-[16px] leading-[22px] font-normal text-[rgba(0,0,0,0.5)]">
                    {level.description.split('|').map((part, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <br />}
                        {part.trim()}
                      </React.Fragment>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="flex-shrink-0 w-[460px] h-[400px] max-[1239px]:w-[380px] max-[1239px]:h-[340px] max-[1023px]:hidden max-[767px]:hidden relative">
            <Image
              src="/images/home/about-hero.webp"
              alt="Hybreed Academy — practical digital skills"
              fill
              className="object-cover rounded-[16px]"
              sizes="460px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: DIRECTIONS
          "We are constantly opening new directions"
          2-column grid of category links with course counts.
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pt-[30px] pb-[80px] max-[1239px]:max-w-[940px] max-[1239px]:pt-[20px] max-[1239px]:pb-[60px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[30px] max-[1023px]:pb-[60px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[20px] max-[767px]:pb-[40px]">
          {/* Heading */}
          <h2 className="text-[40px] leading-[1.1] font-medium text-black m-0 mb-[40px] max-[1239px]:text-[36px] max-[1023px]:text-[32px] max-[1023px]:mb-[30px] max-[767px]:text-[24px] max-[767px]:leading-[30px] max-[767px]:mb-[20px]">
            We are constantly opening <span>new directions</span>
          </h2>

          {/* Directions grid — 2 columns with gap, bordered rows */}
          <div className="grid grid-cols-2 gap-x-10 max-[1023px]:grid-cols-1">
            {DIRECTIONS.map((dir) => (
              <Link
                key={dir.title}
                href={coursesHref}
                className="flex items-center justify-between py-5 border-b border-[rgba(0,0,0,0.2)] no-underline text-black hover:opacity-70 transition-opacity max-[1023px]:py-4"
              >
                <span className="text-[20px] max-[1239px]:text-[18px] max-[767px]:text-[16px] leading-[26px] font-semibold text-black pr-6">
                  {dir.title}
                </span>
                <span className="text-[14px] leading-[20px] font-normal text-[rgba(0,0,0,0.5)] whitespace-nowrap flex-shrink-0">
                  {dir.stats}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: FEATURES — "We make specialists"
          4 feature cards with icon, title, and description.
          White background. Matches reference layout.
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pt-[80px] pb-[60px] max-[1239px]:max-w-[940px] max-[1239px]:pt-[60px] max-[1239px]:pb-[40px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[50px] max-[1023px]:pb-[30px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[40px] max-[767px]:pb-[20px]">
          {/* Heading */}
          <h2 className="text-[40px] leading-[1.1] font-medium text-black m-0 mb-[50px] max-[1239px]:text-[36px] max-[1239px]:mb-[40px] max-[1023px]:text-[32px] max-[1023px]:mb-[30px] max-[767px]:text-[24px] max-[767px]:leading-[30px] max-[767px]:mb-[23px]">
            We make specialists <span className="text-[#0066ff]">not just students</span>
          </h2>

          {/* Feature cards — flex-wrap, 2 columns on desktop */}
          <div className="flex flex-wrap justify-between gap-y-10 max-[767px]:flex-col max-[767px]:gap-y-6">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="w-[calc(50%-20px)] max-[1023px]:w-full max-[767px]:w-full">
                {/* Illustration — same SVGs as reference */}
                <div className="w-[200px] h-[200px] mb-[30px] max-[1239px]:w-[160px] max-[1239px]:h-[160px] max-[767px]:w-[120px] max-[767px]:h-[120px] max-[767px]:mb-5">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Title */}
                <h3 className="text-[24px] leading-[32px] font-semibold text-black m-0 mb-4 max-[1239px]:text-[22px] max-[767px]:text-[20px] max-[767px]:leading-[28px] max-[767px]:mb-3">
                  {feature.title}
                </h3>
                {/* Text */}
                <p className="text-[16px] leading-[24px] font-normal text-[rgba(0,0,0,0.8)] m-0 max-[767px]:text-[15px] max-[767px]:leading-[22px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: STUDENT STORIES — "We believe in everyone's success"
          Student card with photo + description text.
          White background. Matches reference layout.
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pt-[80px] pb-[60px] max-[1239px]:max-w-[940px] max-[1239px]:pt-[60px] max-[1239px]:pb-[40px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[50px] max-[1023px]:pb-[30px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[40px] max-[767px]:pb-[20px]">
          {/* Heading */}
          <h2 className="text-[40px] leading-[1.1] font-medium text-black m-0 mb-[50px] max-[1239px]:text-[36px] max-[1239px]:mb-[40px] max-[1023px]:text-[32px] max-[1023px]:mb-[30px] max-[767px]:text-[24px] max-[767px]:leading-[30px] max-[767px]:mb-[23px]">
            We believe in everyone&apos;s <span className="text-[#0066ff]">success</span>
          </h2>

          {/* Row: student card + description */}
          <div className="flex justify-between max-[1023px]:flex-col-reverse max-[1023px]:gap-8">
            {/* Student card */}
            <div className="w-[500px] pt-[40px] pb-[33px] border-t border-b border-[rgba(0,0,0,0.2)] max-[1239px]:w-[460px] max-[1023px]:w-full max-[767px]:w-full max-[767px]:py-[25px]">
              <div className="flex items-center max-[767px]:block">
                {/* Circular photo */}
                <div className="w-[220px] h-[220px] rounded-full bg-cover bg-center flex-shrink-0 mr-5 max-[767px]:w-[150px] max-[767px]:h-[150px] max-[767px]:mr-0 max-[767px]:mb-5 relative overflow-hidden">
                  <Image
                    src="/images/home/student-1.jpg"
                    alt="Hybreed success story"
                    fill
                    className="object-cover rounded-full"
                    sizes="220px"
                  />
                </div>
                {/* Name + story */}
                <div>
                  <div className="text-[16px] leading-[26px] font-normal text-[rgba(0,0,0,0.6)] mb-[6px] max-[767px]:text-[14px]">
                    A Hybreed story
                  </div>
                  <div className="text-[20px] leading-[26px] font-medium text-black mb-[27px] max-[767px]:text-[18px] max-[767px]:leading-[24px] max-[767px]:mb-5">
                    From teacher to web developer — how learning to code opened new doors.
                  </div>
                  <a href={coursesHref} className="text-[16px] leading-[26px] font-normal text-[rgba(0,0,0,0.4)] no-underline hover:text-[rgba(0,0,0,0.7)] transition-colors">
                    Read the story →
                  </a>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-[20px] leading-[1.5] font-normal text-black max-w-[460px] max-[1239px]:max-w-[380px] max-[1023px]:max-w-[580px] max-[767px]:max-w-full max-[767px]:text-[16px] max-[767px]:leading-[24px]">
              <p className="m-0 mb-4">
                We welcome both entry-level professionals and experienced practitioners. They all share one thing in common: a desire to achieve more than they currently have.
              </p>
              <p className="m-0">
                We provide the knowledge and skills that help Hybreeds realize their potential, earn more, optimize their workflow, and tackle more challenging tasks with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: COMPANIES — "Helping Hybreeds find their dream jobs"
          Title + description + company logos grid.
          White background. Matches reference layout.
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pt-[80px] pb-[60px] max-[1239px]:max-w-[940px] max-[1239px]:pt-[60px] max-[1239px]:pb-[40px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[50px] max-[1023px]:pb-[30px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[40px] max-[767px]:pb-[20px]">
          {/* Row: title+description on left, logos on right */}
          <div className="flex justify-between max-[1023px]:flex-col max-[1023px]:gap-10">
            {/* Left: Title + Description */}
            <div className="max-w-[460px] max-[1239px]:max-w-[300px] max-[1023px]:max-w-[580px] max-[767px]:max-w-full">
              <h2 className="text-[40px] leading-[1.1] font-medium text-black m-0 mb-5 max-[1239px]:text-[36px] max-[1023px]:text-[32px] max-[767px]:text-[24px] max-[767px]:leading-[30px]">
                Helping Hybreeds find their dream jobs
              </h2>
              <p className="text-[20px] leading-[1.5] font-normal text-black m-0 max-[1239px]:text-[18px] max-[767px]:text-[16px] max-[767px]:leading-[24px]">
                Our Hybreeds work for renowned companies, developing projects and teams, sharing their experience with others, and continually growing themselves.
              </p>
            </div>

            {/* Right: Company logos — 3 per row */}
            <div className="w-[560px] max-[1239px]:w-[460px] max-[1023px]:w-full max-[767px]:w-full">
              {[0, 1, 2].map((row) => (
                <div key={row} className="flex w-full py-5 max-[767px]:py-3 items-center" style={row === 1 ? { borderTop: '1px solid rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(0,0,0,0.2)' } : {}}>
                  {COMPANY_LOGOS.slice(row * 3, row * 3 + 3).map((logo, i) => (
                    <div
                      key={i}
                      className="w-[160px] flex items-center max-[767px]:w-[130px] max-[767px]:mx-[10px]"
                      style={i === 1 ? { justifyContent: 'center', margin: '0 40px' } : i === 2 ? { justifyContent: 'flex-end' } : {}}
                    >
                      <Image
                        src={logo}
                        alt="Company logo"
                        width={160}
                        height={64}
                        className="max-[767px]:w-[130px] max-[767px]:h-[52px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: ROLES — "We're building the best education system"
          4 role cards: expert, colleague, partner, author.
          White background. Matches reference layout.
          ============================================================ */}
      <section className="w-full bg-white">
        <div className="max-w-[1160px] mx-auto box-border px-5 pt-[80px] pb-[60px] max-[1239px]:max-w-[940px] max-[1239px]:pt-[60px] max-[1239px]:pb-[40px] max-[1023px]:max-w-[700px] max-[1023px]:pt-[50px] max-[1023px]:pb-[30px] max-[767px]:max-w-full max-[767px]:px-5 max-[767px]:pt-[40px] max-[767px]:pb-[20px]">
          {/* Heading */}
          <h2 className="text-[40px] leading-[1.1] font-medium text-black m-0 mb-[50px] max-[1239px]:text-[36px] max-[1239px]:mb-[40px] max-[1023px]:text-[32px] max-[1023px]:mb-[30px] max-[767px]:text-[24px] max-[767px]:leading-[30px] max-[767px]:mb-[23px]">
            We&apos;re building the best education system in the country. <span className="text-[#0066ff]">Join us.</span>
          </h2>

          {/* Role cards — flex row with border separators */}
          <div className="flex flex-wrap max-[1023px]:flex-col max-[767px]:flex-col">
            {ROLES.map((role, i) => (
              <div
                key={role.title}
                className="w-[260px] pr-[10px] flex flex-col justify-between max-[1239px]:w-[220px] max-[1023px]:w-full max-[1023px]:pr-0 max-[1023px]:border-r-0 max-[1023px]:border-b max-[1023px]:pb-[30px] max-[1023px]:mb-[10px] max-[767px]:w-full max-[767px]:pb-[20px]"
                style={i < ROLES.length - 1 ? { borderRight: '1px solid rgba(0,0,0,0.2)', marginRight: '20px' } : {}}
              >
                <div>
                  {/* Image — rounded top */}
                  <div className="w-[260px] h-[180px] mb-5 rounded-[16px] overflow-hidden relative max-[1239px]:w-[220px] max-[1239px]:h-[160px] max-[1023px]:w-[340px] max-[767px]:w-full max-[767px]:h-[180px]">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      className="object-cover"
                      sizes="260px"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-[24px] leading-[32px] font-semibold text-[#0066ff] m-0 mb-[15px] max-[767px]:text-[20px] max-[767px]:leading-[28px]">
                    {role.title}
                  </h3>
                  {/* Text */}
                  <p className="text-[16px] leading-[24px] font-normal text-[rgba(0,0,0,0.5)] m-0 mb-[30px] max-[767px]:text-[15px] max-[767px]:leading-[22px]">
                    {role.text}
                  </p>
                </div>
                {/* Button */}
                <Link
                  href={coursesHref}
                  className="inline-flex items-center justify-center h-[46px] px-4 bg-transparent border border-[rgba(0,0,0,0.2)] text-black text-[16px] font-medium rounded-[8px] no-underline hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-all max-w-[260px] max-[767px]:max-w-full"
                >
                  {role.button}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter orgslug={orgslug} />
    </div>
  )
}
