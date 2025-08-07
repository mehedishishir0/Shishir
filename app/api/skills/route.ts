import { NextResponse } from 'next/server'
import { Skill } from '@/types'

const skills: Skill[] = [
  {
    id: '1',
    name: 'Frontend Development',
    category: 'Development',
    level: 95,
    description: 'React, Vue, Angular, TypeScript',
    icon: 'Code',
    color: '#8B5CF6',
    yearsOfExperience: 5,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Backend Development',
    category: 'Development',
    level: 90,
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    icon: 'Database',
    color: '#06B6D4',
    yearsOfExperience: 4,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'UI/UX Design',
    category: 'Design',
    level: 85,
    description: 'Figma, Adobe XD, Design Systems',
    icon: 'Palette',
    color: '#EC4899',
    yearsOfExperience: 3,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Mobile Development',
    category: 'Development',
    level: 80,
    description: 'React Native, Flutter, iOS, Android',
    icon: 'Smartphone',
    color: '#10B981',
    yearsOfExperience: 3,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'DevOps & Cloud',
    category: 'Infrastructure',
    level: 75,
    description: 'AWS, Docker, Kubernetes, CI/CD',
    icon: 'Globe',
    color: '#F59E0B',
    yearsOfExperience: 2,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'AI & Machine Learning',
    category: 'AI/ML',
    level: 70,
    description: 'TensorFlow, PyTorch, NLP, Computer Vision',
    icon: 'Zap',
    color: '#EF4444',
    yearsOfExperience: 2,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 300))
    return NextResponse.json(skills)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    )
  }
}
