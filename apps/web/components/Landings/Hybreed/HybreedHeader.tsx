'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getUriWithOrg } from '@services/config/config'
import { getOrgLogoMediaDirectory } from '@services/media/media'
import { useLHSession } from '@components/Contexts/LHSessionContext'
import { useOrg } from '@components/Contexts/OrgContext'
import { HeaderProfileBox } from '@components/Security/HeaderProfileBox'

interface HybreedHeaderProps {
  orgslug: string
}

export default function HybreedHeader({ orgslug }: HybreedHeaderProps) {
  const session = useLHSession() as any
  const org = useOrg() as any

  const isAuthenticated = session?.status === 'authenticated'

  return (
    <header
      className="relative w-full bg-white box-border h-[72px] max-[1023px]:h-[107px] max-[767px]:h-[92px]"
    >
      {/* Top bar */}
      <div className="flex justify-center w-full h-full max-[1023px]:h-[67px] max-[767px]:h-[52px] pl-[70px] pr-[35px] box-border max-[1919px]:px-10 max-[1239px]:px-[17px] border-b border-black/20 max-[1023px]:border-b-0">
        {/* Logo */}
        <div className="flex items-center justify-start w-[294px] shrink-1 grow-0 mr-6 max-[1239px]:mr-4 max-[767px]:w-auto max-[767px]:mr-0">
          <Link href={getUriWithOrg(orgslug, '/')} className="flex items-center no-underline">
            {org?.logo_image ? (
              <img
                src={getOrgLogoMediaDirectory(org.org_uuid, org.logo_image)}
                alt={org.name || 'Logo'}
                className="h-[22px] w-[150px] max-[767px]:w-[121px] object-contain object-left"
              />
            ) : (
              <Image
                src="/lrn-text.svg"
                alt="LearnHouse"
                width={150}
                height={22}
                style={{ height: 'auto' }}
                className="max-[767px]:w-[121px]"
              />
            )}
          </Link>
        </div>

        {/* Center content: nav links — hidden on tablet/mobile (≤1023px), but spacer remains */}
        <div className="m-0 mx-auto p-0 box-border flex flex-row justify-between items-center max-w-[940px] shrink max-[1023px]:hidden">
          <div className="h-full flex items-center w-full justify-between gap-6">
            {/* Course Catalog button */}
            <Link
              href={getUriWithOrg(orgslug, '/courses')}
              className="box-border relative w-[195px] h-10 rounded-sm flex text-base leading-6 font-medium items-center justify-center px-[18px] pl-[21px] cursor-pointer whitespace-nowrap border border-[#27292d] text-[#27292d] no-underline transition-all duration-200 select-none hover:border-2 hover:border-black"
            >
              <span className="mt-[3px] mr-2.5 pointer-events-none">
                <svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3H0V1H5V3ZM5 6H0V8H5V6ZM18.59 13L14.76 9.17C13.96 9.69 13.02 10 12 10C9.24 10 7 7.76 7 5C7 2.24 9.24 0 12 0C14.76 0 17 2.24 17 5C17 6.02 16.69 6.96 16.17 7.75L20 11.59L18.59 13ZM15 5C15 3.35 13.65 2 12 2C10.35 2 9 3.35 9 5C9 6.65 10.35 8 12 8C13.65 8 15 6.65 15 5ZM0 13H10V11H0V13Z" fill="currentColor" />
                </svg>
              </span>
              Course Catalog
            </Link>

            {/* Right side links */}
            <div className="flex items-center">
              <Link
                href={getUriWithOrg(orgslug, '/free')}
                className="no-underline text-base leading-6 font-medium text-black cursor-pointer transition-all duration-200 whitespace-nowrap hover:opacity-80"
              >
                Study for free
              </Link>
            </div>
          </div>
        </div>

        {/* Right side: Login / Profile */}
        <div className="h-full flex items-center justify-end ml-auto">
          {isAuthenticated ? (
            <HeaderProfileBox />
          ) : (
            <Link
              href={getUriWithOrg(orgslug, '/login')}
              className="no-underline w-[100px] h-10 box-border flex items-center justify-center rounded-[2px] text-base leading-6 font-medium border border-solid border-black text-black transition-all duration-200 hover:text-white hover:bg-[#4a4a4a] max-[767px]:w-[60px] max-[767px]:h-6 max-[767px]:text-[13px] max-[767px]:leading-5"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Bottom bar — visible only on tablet/mobile (≤1023px) */}
      <div className="hidden max-[1023px]:flex w-full h-10 box-border border-t border-black/20 border-b border-black/20 justify-start max-[767px]:px-5">
        {/* Course Catalog button */}
        <Link
          href={getUriWithOrg(orgslug, '/courses')}
          className="box-border flex justify-center items-center basis-1/2 text-[#27292d] -mb-[2px] font-medium text-base leading-6 no-underline cursor-pointer max-[767px]:justify-start max-[767px]:pl-0 max-[374px]:text-sm"
        >
          <span className="mt-[3px] mr-2.5 pointer-events-none">
            <svg width="20" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3H0V1H5V3ZM5 6H0V8H5V6ZM18.59 13L14.76 9.17C13.96 9.69 13.02 10 12 10C9.24 10 7 7.76 7 5C7 2.24 9.24 0 12 0C14.76 0 17 2.24 17 5C17 6.02 16.69 6.96 16.17 7.75L20 11.59L18.59 13ZM15 5C15 3.35 13.65 2 12 2C10.35 2 9 3.35 9 5C9 6.65 10.35 8 12 8C13.65 8 15 6.65 15 5ZM0 13H10V11H0V13Z" fill="currentColor" />
            </svg>
          </span>
          Course Catalog
        </Link>

        {/* Study for free link — separated by left border */}
        <Link
          href={getUriWithOrg(orgslug, '/free')}
          className="box-border flex justify-center items-center basis-1/2 text-[#27292d] -mb-[2px] font-medium text-base leading-6 no-underline cursor-pointer border-l border-black/20 hover:text-white hover:bg-[#06f] transition-all duration-200 max-[374px]:text-sm"
        >
          Study for free
        </Link>
      </div>
    </header>
  )
}
