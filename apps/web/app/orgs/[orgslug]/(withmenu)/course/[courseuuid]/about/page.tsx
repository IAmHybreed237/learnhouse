import React from 'react'
import CourseAboutClient from './CourseAboutClient'
import { getCourseMetadata } from '@services/courses/courses'
import { getOrganizationContextInfo } from '@services/organizations/orgs'
import { Metadata } from 'next'
import { getCourseThumbnailMediaDirectory, getOrgOgImageMediaDirectory } from '@services/media/media'
import { getServerSession } from '@/lib/auth/server'
import { getOrgSeoConfig, buildPageTitle } from '@/lib/seo/utils'
import { getServerCanonicalUrl } from '@/lib/seo/utils.server'

type MetadataProps = {
  params: Promise<{ orgslug: string; courseuuid: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const params = await props.params
  const session = await getServerSession()
  const access_token = session?.tokens?.access_token

  const [org, courseResult] = await Promise.all([
    getOrganizationContextInfo(params.orgslug, {
      revalidate: 120,
      tags: ['organizations'],
    }),
    getCourseMetadata(
      params.courseuuid,
      { revalidate: 120, tags: ['courses'] },
      access_token ?? undefined,
      { slim: true }
    ).catch(() => null),
  ])

  if (!courseResult) {
    return {
      title: `Course — ${org?.name || 'LearnHouse'}`,
      description: 'View this course on LearnHouse',
    }
  }

  const seoConfig = getOrgSeoConfig(org)
  const seo = courseResult.seo || {}
  const defaultTitle = buildPageTitle(courseResult.name, org.name, seoConfig)
  const defaultDescription = courseResult.description || seoConfig.default_meta_description || ''

  return {
    title: seo.title || defaultTitle,
    description: seo.description || defaultDescription,
  }
}

const CourseAboutPage = async (params: any) => {
  const { courseuuid, orgslug } = await params.params
  return <CourseAboutClient courseuuid={courseuuid} orgslug={orgslug} />
}

export default CourseAboutPage
