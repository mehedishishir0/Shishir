import { NextResponse } from 'next/server'
import { PersonalInfo } from '@/types'

const personalInfo: PersonalInfo = {
  id: '1',
  name: 'Alex Chen',
  title: 'Full Stack Developer & Creative Technologist',
  description: 'I craft digital experiences that blend cutting-edge technology with beautiful design. Specializing in web development, mobile apps, and everything in between.',
  greeting: "Hello, I'm",
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/alexchen',
      username: 'alexchen'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/alexchen',
      username: 'alexchen'
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/alexchen',
      username: 'alexchen'
    },
    {
      platform: 'email',
      url: 'mailto:alex@example.com'
    }
  ],
  resumeUrl: '/resume.pdf',
  profileImage: '/profile.jpg'
}

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 200))
    return NextResponse.json(personalInfo)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch personal info' },
      { status: 500 }
    )
  }
}
