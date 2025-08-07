import { NextResponse } from 'next/server'
import { Stats } from '@/types'

const stats: Stats[] = [
  {
    id: '1',
    label: 'Projects Completed',
    value: 50,
    suffix: '+',
    gradient: 'from-purple-400 to-pink-400',
    icon: 'Briefcase',
    description: 'Successfully delivered projects',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    label: 'Happy Clients',
    value: 30,
    suffix: '+',
    gradient: 'from-cyan-400 to-teal-400',
    icon: 'Users',
    description: 'Satisfied clients worldwide',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    label: 'Years Experience',
    value: 5,
    suffix: '+',
    gradient: 'from-pink-400 to-purple-400',
    icon: 'Calendar',
    description: 'Years of professional experience',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    label: 'Cups of Coffee',
    value: 1000,
    suffix: '+',
    gradient: 'from-teal-400 to-cyan-400',
    icon: 'Coffee',
    description: 'Fuel for creativity',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 200))
    return NextResponse.json(stats)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
