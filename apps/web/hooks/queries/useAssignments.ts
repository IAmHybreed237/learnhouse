'use client'

import { useQuery } from '@tanstack/react-query'
import { useLHSession } from '@components/Contexts/LHSessionContext'
import { queryKeys } from '@lib/query/keys'
import { getAPIUrl } from '@services/config/config'
import { apiFetch } from '@services/utils/ts/requests'

async function fetchAssignments(orgId: number, accessToken?: string) {
  const url = `${getAPIUrl()}trail/org/${orgId}/assignments`
  return apiFetch(url, accessToken)
}

export function useAssignments(orgId: number | undefined) {
  const session = useLHSession() as any
  const accessToken = session?.data?.tokens?.access_token as string | undefined

  return useQuery({
    queryKey: ['trail', 'assignments', orgId],
    queryFn: () => fetchAssignments(orgId!, accessToken),
    enabled: !!orgId && !!accessToken,
    staleTime: 30_000,
  })
}
