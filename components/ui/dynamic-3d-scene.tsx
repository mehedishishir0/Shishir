'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Canvas with no SSR
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
)

// Dynamically import 3D components
const Earth3D = dynamic(() => import('./earth-3d'), { ssr: false })

export default function Dynamic3DScene() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading 3D Scene...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0)
        }}
        fallback={
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading...</p>
            </div>
          </div>
        }
      >
        <Earth3D />
      </Canvas>
    </div>
  )
}
