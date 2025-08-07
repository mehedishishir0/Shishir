'use client'

import { motion } from 'framer-motion'
import { Briefcase, Code, GraduationCap, Award } from 'lucide-react'

interface Experience {
  year: string
  title: string
  company: string
  description: string
  icon: React.ReactNode
}

const experiences: Experience[] = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    description: 'Built responsive web applications and improved user experience by 40%.',
    icon: <Code className="w-5 h-5" />
  },
  {
    year: '2021',
    title: 'Computer Science Graduate',
    company: 'University of Technology',
    description: 'Graduated with honors, specialized in software engineering and AI.',
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    year: '2020',
    title: 'Junior Developer',
    company: 'WebSolutions',
    description: 'Started my professional journey, learned modern web development practices.',
    icon: <Award className="w-5 h-5" />
  }
]

function Timeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-6 relative"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
              {exp.icon}
            </div>
            {index < experiences.length - 1 && (
              <div className="w-0.5 h-16 bg-gradient-to-b from-purple-500 to-cyan-500 mt-4"></div>
            )}
          </div>
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                {exp.year}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
            <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-300">
            A timeline of my professional growth and key milestones
          </p>
        </motion.div>

        <Timeline />
      </div>
    </section>
  )
}
