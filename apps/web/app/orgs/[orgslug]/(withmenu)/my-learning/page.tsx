import React from 'react'
import { Metadata } from 'next'
import { getOrganizationContextInfo } from '@services/organizations/orgs'
import MyLearningClient from './my-learning-client'

export const dynamic = 'force-dynamic'

type MetadataProps = {
  params: Promise<{ orgslug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const params = await props.params
  const org = await getOrganizationContextInfo(params.orgslug, {
    revalidate: 120,
    tags: ['organizations'],
  })
  return {
    title: 'My Learning — ' + org.name,
    description:
      'Track your courses, progress, certificates and assignments all in one place.',
  }
}

const MyLearningPage = async (params: any) => {
  const orgslug = (await params.params).orgslug
  return <MyLearningClient orgslug={orgslug} />
}

export default MyLearningPage
