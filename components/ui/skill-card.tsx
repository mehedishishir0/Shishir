'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react'
import { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
  index: number
}

const iconMap = {
  'Code': <Code className="w-8 h-8 text-white" />,
  'Database': <Database className="w-8 h-8 text-white" />,
  'Palette': <Palette className="w-8 h-8 text-white" />,
  'Smartphone': <Smartphone className="w-8 h-8 text-white" />,
  'Globe': <Globe className="w-8 h-8 text-white" />,
  'Zap': <Zap className="w-8 h-8 text-white" />,
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const getIcon = (iconName?: string) => {
    if (!iconName) return <Code className="w-8 h-8 text-white" />
    return iconMap[iconName as keyof typeof iconMap] || <Code className="w-8 h-8 text-white" />
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, rotate: -180 }}
      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
      className="group"
    >
      <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
        <CardContent className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
            {getIcon(skill.icon)}
          </div>
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Proficiency</span>
              <span className="text-white">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm">{skill.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
