export interface PersonalInfo {
  id: string
  name: string
  title: string
  description: string
  greeting: string
  location: string
  email: string
  phone?: string
  socialLinks: SocialLink[]
  resumeUrl?: string
  profileImage?: string
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website'
  url: string
  username?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image?: string
  images?: string[]
  emoji?: string
  liveUrl?: string
  githubUrl?: string
  completion: number
  featured: boolean
  category: string
  startDate: string
  endDate?: string
  status: 'completed' | 'in-progress' | 'planned'
  createdAt: string
  updatedAt: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
  description: string
  icon?: string
  color?: string
  yearsOfExperience: number
  createdAt: string
  updatedAt: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  type: 'work' | 'education' | 'certification'
  createdAt: string
  updatedAt: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  price?: string
  duration?: string
  createdAt: string
  updatedAt: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  projectId?: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface Stats {
  id: string
  label: string
  value: number
  suffix?: string
  gradient: string
  icon?: string
  description?: string
  createdAt: string
  updatedAt: string
}

export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  phone?: string
  company?: string
  budget?: string
  timeline?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  tags: string[]
  category: string
  published: boolean
  featured: boolean
  readTime: number
  views: number
  likes: number
  createdAt: string
  updatedAt: string
  publishedAt?: string
}
