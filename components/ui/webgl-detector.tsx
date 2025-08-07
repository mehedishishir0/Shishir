'use client'

import { useEffect, useState } from 'react'

export function useWebGLSupport() {
  const [isSupported, setIsSupported] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setIsSupported(!!gl)
    } catch (e) {
      setIsSupported(false)
    }
  }, [])

  return isSupported
}

export default function WebGLDetector({ children, fallback }: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  const webglSupported = useWebGLSupport()

  if (webglSupported === null) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500"></div>
      </div>
    )
  }

  if (!webglSupported) {
    return fallback || (
      <div className="w-full h-96 bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg border border-red-500/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-400 text-2xl">⚠</span>
          </div>
          <p className="text-gray-400">WebGL not supported</p>
          <p className="text-gray-500 text-sm">3D features are unavailable</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
