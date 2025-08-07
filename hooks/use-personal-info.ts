import { useEffect, useState } from 'react'
import { PersonalInfo } from '@/types'
import { getPersonalInfo } from '@/lib/api'

export function usePersonalInfo() {
  const [data, setData] = useState<PersonalInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        setIsLoading(true)
        const info = await getPersonalInfo()
        setData(info)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch personal info')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPersonalInfo()
  }, [])

  return { data, isLoading, error }
}
