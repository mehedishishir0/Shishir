import { useEffect, useState } from 'react'
import { Skill } from '@/types'
import { getSkills } from '@/lib/api'

export function useSkills() {
  const [data, setData] = useState<Skill[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSkills() {
      try {
        setIsLoading(true)
        const skills = await getSkills()
        setData(skills)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch skills')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSkills()
  }, [])

  return { data, isLoading, error }
}
