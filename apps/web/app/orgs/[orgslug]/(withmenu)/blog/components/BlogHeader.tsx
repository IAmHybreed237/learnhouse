'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUriWithOrg } from '@services/config/config'
import { getOrgLogoMediaDirectory } from '@services/media/media'
import { useOrg } from '@components/Contexts/OrgContext'
import { Menu, X } from 'lucide-react'

interface BlogHeaderProps {
  orgslug: string
}

const socialLinks = [
  { name: 'Habr', href: 'https://habr.com', icon: 'H' },
  { name: 'VC', href: 'https://vc.ru', icon: 'V' },
  { name: 'Dzen', href: 'https://dzen.ru', icon: 'D' },
]

export default function BlogHeader({ orgslug }: BlogHeaderProps) {
  const org = useOrg() as any
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="w-full bg-white border-b border-[#e8e8e8]">
      <div className="max-w-[1240px] mx-auto px-5 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href={getUriWithOrg(orgslug, '/blog')} className="flex items-center gap-3 no-underline">
          {org?.logo_image ? (
            <img
              src={getOrgLogoMediaDirectory(org.org_uuid, org.logo_image)}
              alt={org.name || 'Logo'}
              className="h-7 w-auto object-contain"
            />
          ) : (
            <Image
              src="/lrn-text.svg"
              alt="LearnHouse"
              width={120}
              height={24}
              className="h-6 w-auto"
            />
          )}
          <span className="text-sm text-[#6c7072] hidden lg:inline">Knowledge for your growth</span>
        </Link>

        {/* Desktop CTA + socials */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href={getUriWithOrg(orgslug, '/courses')}
            className="inline-flex items-center justify-center h-10 px-5 rounded border border-[#27292d] text-[#27292d] text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-colors"
          >
            Go to courses
          </Link>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3f4f7] text-[#27292d] text-xs font-semibold hover:bg-[#e8e8e8] transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e8e8e8] px-5 py-4 space-y-3">
          <Link
            href={getUriWithOrg(orgslug, '/courses')}
            className="block w-full text-center h-10 px-5 rounded border border-[#27292d] text-[#27292d] text-sm font-medium leading-10"
          >
            Go to courses
          </Link>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3f4f7] text-[#27292d] text-xs font-semibold"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
