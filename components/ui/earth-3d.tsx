'use client'

import { useRef, useEffect, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

function EarthSphere() {
  const earthRef = useRef<any>()

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Sphere ref={earthRef} args={[1, 32, 32]} scale={1.5}>
      <meshStandardMaterial
        color="#06B6D4"
        roughness={0.1}
        metalness={0.1}
        emissive="#001122"
        emissiveIntensity={0.1}
      />
    </Sphere>
  )
}

export default function Earth3D() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <EarthSphere />
    </Suspense>
  )
}
