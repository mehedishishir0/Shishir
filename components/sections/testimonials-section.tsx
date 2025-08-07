'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Alex delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise is outstanding."
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content: "Working with Alex was a game-changer for our startup. He built our entire platform from scratch and it's been running flawlessly."
  },
  {
    name: "Emily Davis",
    role: "Design Director",
    company: "Creative Agency",
    content: "Alex has an incredible ability to bring designs to life. The animations and interactions he created were beyond what we imagined."
  }
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full bg-gradient-to-br from-pink-500/10 to-teal-500/10 backdrop-blur-lg border border-white/20 hover:border-pink-500/50 transition-all duration-300">
        <CardContent className="p-8">
          <Quote className="w-8 h-8 text-pink-400 mb-4" />
          <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-white font-semibold">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
              <p className="text-gray-500 text-xs">{testimonial.company}</p>
            </div>
          </div>
          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-900/30 to-purple-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-300">
            Testimonials from amazing people I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
