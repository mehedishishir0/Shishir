'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, type ReactNode } from 'react' // Removed ErrorBoundary import from 'react'
import ErrorBoundary from '@/components/ui/error-boundary' // Correct import path for custom ErrorBoundary

interface SafeCanvasProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
}

function CanvasErrorFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-cyan-400 text-2xl">🌐</span>
        </div>
        <p className="text-gray-400">3D Scene Unavailable</p>
        <p className="text-gray-500 text-sm">WebGL might not be supported</p>
      </div>
    </div>
  )
}

function CanvasLoadingFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading 3D Scene...</p>
      </div>
    </div>
  )
}

export default function SafeCanvas({ children, fallback, className = "w-full h-96" }: SafeCanvasProps) {
  return (
    <div className={className}>
      <ErrorBoundary fallback={fallback || <CanvasErrorFallback />}>
        <Suspense fallback={<CanvasLoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 3], fov: 75 }}
            gl={{ 
              antialias: true,
              alpha: true,
              powerPreference: "high-performance"
            }}
            onCreated={({ gl }) => {
              gl.setClearColor('#000000', 0)
            }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={null}>
              {children}
            </Suspense>
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
