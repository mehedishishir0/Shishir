'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, ExternalLink, Github, Linkedin } from 'lucide-react'
import CodingAnimation from '@/components/ui/coding-animation'
import ParticleBackground from '@/components/ui/particle-background'
import { usePersonalInfo } from '@/hooks/use-personal-info'
import ErrorBoundary from '@/components/ui/error-boundary' // Correct import path

export default function HeroSection() {
  const { data: personalInfo, isLoading } = usePersonalInfo()

  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <ErrorBoundary>
        <ParticleBackground />
      </ErrorBoundary>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 text-lg font-medium"
            >
              {personalInfo?.greeting || "Hello, I'm"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              {personalInfo?.name || "Alex Chen"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl lg:text-3xl text-gray-300 font-light"
            >
              {personalInfo?.title || "Full Stack Developer & Creative Technologist"}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-400 max-w-lg"
            >
              {personalInfo?.description || "I craft digital experiences that blend cutting-edge technology with beautiful design."}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6"
          >
            {personalInfo?.socialLinks?.map((link) => (
              <Button
                key={link.platform}
                size="icon"
                variant="ghost"
                className="text-white hover:text-purple-400 hover:bg-white/10"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform === 'github' && <Github className="w-6 h-6" />}
                  {link.platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
                  {link.platform === 'email' && <Mail className="w-6 h-6" />}
                </a>
              </Button>
            )) || (
              // Fallback social links if API data is not available
              <>
                <Button size="icon" variant="ghost" className="text-white hover:text-purple-400 hover:bg-white/10">
                  <Github className="w-6 h-6" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-cyan-400 hover:bg-white/10">
                  <Linkedin className="w-6 h-6" />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-pink-400 hover:bg-white/10">
                  <Mail className="w-6 h-6" />
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <ErrorBoundary>
            <CodingAnimation />
          </ErrorBoundary>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
