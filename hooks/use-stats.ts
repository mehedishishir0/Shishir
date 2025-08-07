import { useEffect, useState } from 'react'
import { Stats } from '@/types'
import { getStats } from '@/lib/api'

export function useStats() {
  const [data, setData] = useState<Stats[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        setIsLoading(true)
        const stats = await getStats()
        setData(stats)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stats')
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { data, isLoading, error }
}
