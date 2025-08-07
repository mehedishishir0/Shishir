'use client'

import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Alex Chen
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-purple-400">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-pink-400">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Alex Chen. Crafted with <Heart className="w-4 h-4 inline text-red-400" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}
