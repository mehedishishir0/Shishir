import { Project, Skill, PersonalInfo, ContactForm, Stats } from '@/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

// Generic API function
async function apiRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

// Personal Info API
export async function getPersonalInfo(): Promise<PersonalInfo> {
  return apiRequest<PersonalInfo>('/personal-info')
}

// Projects API
export async function getProjects(): Promise<Project[]> {
  return apiRequest<Project[]>('/projects')
}

export async function getProject(id: string): Promise<Project> {
  return apiRequest<Project>(`/projects/${id}`)
}

// Skills API
export async function getSkills(): Promise<Skill[]> {
  return apiRequest<Skill[]>('/skills')
}

// Stats API
export async function getStats(): Promise<Stats[]> {
  return apiRequest<Stats[]>('/stats')
}

// Contact Form API
export async function submitContactForm(data: ContactForm): Promise<{ success: boolean }> {
  return apiRequest<{ success: boolean }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// Newsletter API
export async function subscribeNewsletter(email: string): Promise<{ success: boolean }> {
  return apiRequest<{ success: boolean }>('/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}
