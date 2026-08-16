'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogFooterProps {
  orgslug: string
}

const footerLinks = [
  { name: 'About Hybreed Media', href: '/blog/about' },
  { name: 'Course Catalog', href: '/courses' },
  { name: 'Free Materials', href: '/free' },
]

const socialLinks = [
  { name: 'Habr', href: 'https://habr.com', icon: 'H' },
  { name: 'VC', href: 'https://vc.ru', icon: 'V' },
  { name: 'Dzen', href: 'https://dzen.ru', icon: 'D' },
  { name: 'Telegram', href: 'https://t.me', icon: 'T' },
  { name: 'VK', href: 'https://vk.com', icon: 'VK' },
  { name: 'Odnoklassniki', href: 'https://ok.ru', icon: 'OK' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'YT' },
]

export default function BlogFooter({ orgslug }: BlogFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-[#e8e8e8] py-10">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <Link href={`/orgs/${orgslug}/blog`} className="flex items-center gap-2 no-underline">
            <Image
              src="/lrn-text.svg"
              alt="Hybreed"
              width={120}
              height={24}
              className="h-6 w-auto"
            />
          </Link>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#6c7072] hover:text-[#27292d] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f3f4f7] text-[#27292d] text-[10px] font-semibold hover:bg-[#e8e8e8] transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#e8e8e8] text-center md:text-left">
          <p className="text-sm text-[#8b8f92]">© Hybreed, 2011–{currentYear}</p>
        </div>
      </div>
    </footer>
  )
}
