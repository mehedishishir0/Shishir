import { useEffect, useState } from 'react'
import { Project } from '@/types'
import { getProjects } from '@/lib/api'

export function useProjects() {
  const [data, setData] = useState<Project[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true)
        const projects = await getProjects()
        setData(projects)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { data, isLoading, error }
}
