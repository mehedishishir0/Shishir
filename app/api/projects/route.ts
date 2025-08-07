import { NextResponse } from 'next/server'
import { Project } from '@/types'

// Mock data - replace with your database
const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Dashboard',
    description: 'Modern analytics dashboard with AI insights and real-time data visualization',
    longDescription: 'Built with Next.js, TypeScript, and TensorFlow.js for real-time data analysis and predictions. Features include custom charts, AI recommendations, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'TensorFlow.js', 'Tailwind CSS', 'Chart.js'],
    emoji: '🤖',
    completion: 95,
    featured: true,
    category: 'Web Development',
    startDate: '2024-01-01',
    endDate: '2024-03-15',
    status: 'completed',
    liveUrl: 'https://ai-dashboard.example.com',
    githubUrl: 'https://github.com/alexchen/ai-dashboard',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z'
  },
  {
    id: '2',
    title: '3D Portfolio Website',
    description: 'Interactive 3D portfolio with immersive user experience',
    longDescription: 'Immersive 3D experience showcasing projects with WebGL animations and particle systems. Built with React Three Fiber and custom shaders.',
    technologies: ['React', 'Three.js', 'GSAP', 'WebGL', 'Framer Motion'],
    emoji: '🌐',
    completion: 100,
    featured: true,
    category: '3D Development',
    startDate: '2023-10-01',
    endDate: '2023-12-20',
    status: 'completed',
    liveUrl: 'https://3d-portfolio.example.com',
    githubUrl: 'https://github.com/alexchen/3d-portfolio',
    createdAt: '2023-10-01T00:00:00Z',
    updatedAt: '2023-12-20T00:00:00Z'
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with modern features',
    longDescription: 'Complete online store with payment integration, inventory management, admin dashboard, and mobile app. Handles 10k+ daily transactions.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    emoji: '🛒',
    completion: 90,
    featured: true,
    category: 'Full Stack',
    startDate: '2023-06-01',
    endDate: '2023-09-30',
    status: 'completed',
    liveUrl: 'https://ecommerce.example.com',
    githubUrl: 'https://github.com/alexchen/ecommerce',
    createdAt: '2023-06-01T00:00:00Z',
    updatedAt: '2023-09-30T00:00:00Z'
  },
  {
    id: '4',
    title: 'Social Media App',
    description: 'Real-time social platform with advanced features',
    longDescription: 'Instagram-like social media app with real-time messaging, story features, and AI-powered content recommendations.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
    emoji: '📱',
    completion: 85,
    featured: false,
    category: 'Mobile Development',
    startDate: '2023-03-01',
    endDate: '2023-05-30',
    status: 'completed',
    liveUrl: 'https://social-app.example.com',
    githubUrl: 'https://github.com/alexchen/social-app',
    createdAt: '2023-03-01T00:00:00Z',
    updatedAt: '2023-05-30T00:00:00Z'
  },
  {
    id: '5',
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet application',
    longDescription: 'Multi-currency wallet with DeFi integration, staking features, and advanced security measures. Supports 50+ cryptocurrencies.',
    technologies: ['React', 'Web3.js', 'Solidity', 'MetaMask'],
    emoji: '₿',
    completion: 80,
    featured: false,
    category: 'Blockchain',
    startDate: '2022-12-01',
    endDate: '2023-02-28',
    status: 'completed',
    liveUrl: 'https://crypto-wallet.example.com',
    githubUrl: 'https://github.com/alexchen/crypto-wallet',
    createdAt: '2022-12-01T00:00:00Z',
    updatedAt: '2023-02-28T00:00:00Z'
  },
  {
    id: '6',
    title: 'AI Chatbot Platform',
    description: 'Intelligent chatbot with natural language processing',
    longDescription: 'Enterprise chatbot solution with NLP, sentiment analysis, and multi-language support. Integrated with popular CRM systems.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    emoji: '🤖',
    completion: 88,
    featured: false,
    category: 'AI/ML',
    startDate: '2022-09-01',
    endDate: '2022-11-30',
    status: 'completed',
    liveUrl: 'https://ai-chatbot.example.com',
    githubUrl: 'https://github.com/alexchen/ai-chatbot',
    createdAt: '2022-09-01T00:00:00Z',
    updatedAt: '2022-11-30T00:00:00Z'
  }
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const newProject: Project = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    projects.push(newProject)
    
    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}
