'use client'

import { useQuery } from '@tanstack/react-query'
import { useLHSession } from '@components/Contexts/LHSessionContext'
import { getAPIUrl } from '@services/config/config'
import { apiFetch } from '@services/utils/ts/requests'

async function fetchStudentSchedule(orgId: number, accessToken?: string) {
  const url = `${getAPIUrl()}schedules/org/${orgId}/student`
  return apiFetch(url, accessToken)
}

export function useStudentSchedule(orgId: number | undefined) {
  const session = useLHSession() as any
  const accessToken = session?.data?.tokens?.access_token as string | undefined

  return useQuery({
    queryKey: ['schedules', 'student', orgId],
    queryFn: () => fetchStudentSchedule(orgId!, accessToken),
    enabled: !!orgId && !!accessToken,
    staleTime: 60_000,
  })
}
