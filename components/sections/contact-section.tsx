'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MapPin, Clock, Github, Linkedin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { submitContactForm } from '@/lib/api'
import SafeCanvas from '@/components/ui/safe-canvas'
import dynamic from 'next/dynamic'

// Dynamically import the 3D component to avoid SSR issues
const Earth3DSafe = dynamic(() => import('@/components/ui/earth-3d-safe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500"></div>
    </div>
  )
})

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      await submitContactForm(data)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-teal-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300">
            Ready to bring your ideas to life? Let's start a conversation and build something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/20">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4">
                <Github className="w-6 h-6" />
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 p-4">
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 p-4">
                <Mail className="w-6 h-6" />
              </Button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>alex@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Clock className="w-5 h-5 text-pink-400" />
                <span>Available for freelance work</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96"
          >
            {isMounted && (
              <SafeCanvas className="w-full h-96">
                <Earth3DSafe />
              </SafeCanvas>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
