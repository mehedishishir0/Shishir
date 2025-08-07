'use client'

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  )
}
