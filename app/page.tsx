'use client'

import { Suspense } from 'react'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import StatsSection from '@/components/sections/stats-section'
import SkillsSection from '@/components/sections/skills-section'
import ProjectsSection from '@/components/sections/projects-section'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/layout/footer'
import LoadingSpinner from '@/components/ui/loading-spinner'
import ErrorBoundary from '@/components/ui/error-boundary' // Correct import path

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white overflow-x-hidden">
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}
