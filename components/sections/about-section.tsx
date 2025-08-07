'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, TrendingUp, Users, Coffee, Clock } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating immersive digital experiences. 
            With expertise in modern web technologies and creative problem-solving, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-white/10">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-8 h-8 text-pink-400" />
                  <h3 className="text-2xl font-bold text-white">My Passion</h3>
                </div>
                <p className="text-gray-300">
                  I believe in the power of technology to solve real-world problems and create meaningful experiences. 
                  Every line of code I write is driven by the desire to make a positive impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-lg border border-white/10">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Always Growing</h3>
                </div>
                <p className="text-gray-300">
                  The tech world evolves rapidly, and I love staying at the forefront. I'm constantly learning new 
                  technologies, experimenting with innovative solutions, and pushing the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Team Player</h3>
                </div>
                <p className="text-gray-300">
                  Great products are built by great teams. I thrive in collaborative environments and believe 
                  that the best solutions come from diverse perspectives and open communication.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl border border-white/10">
                <Coffee className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Coffee Lover</h4>
                <p className="text-gray-400 text-sm">Fueled by caffeine and creativity</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl border border-white/10">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Night Owl</h4>
                <p className="text-gray-400 text-sm">Best code happens after midnight</p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/10">
              <CardContent>
                <h3 className="text-2xl font-bold text-white mb-4">Fun Facts</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Started coding at age 12 with HTML and CSS
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Built my first mobile app in college
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    Love photography and digital art in my free time
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    Speak 3 languages: English, Mandarin, and JavaScript 😄
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
