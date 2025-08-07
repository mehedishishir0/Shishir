'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Globe, Smartphone, Palette, Briefcase } from 'lucide-react'

interface Service {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    icon: <Globe className="w-8 h-8 text-white" />,
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"]
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    features: ["iOS & Android", "React Native", "App Store Deployment", "Push Notifications"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interface design",
    icon: <Palette className="w-8 h-8 text-white" />,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    title: "Consulting",
    description: "Technical consulting and architecture planning",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    features: ["Code Review", "Architecture Design", "Performance Audit", "Team Training"]
  }
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/20 hover:border-purple-500/50 transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
          <p className="text-gray-300 mb-6">{service.description}</p>
          <ul className="space-y-2 text-sm text-gray-400">
            {service.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-teal-900/30 to-cyan-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-xl text-gray-300">
            Services I offer to help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
