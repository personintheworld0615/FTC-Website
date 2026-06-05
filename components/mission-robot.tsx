"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

export function MissionRobot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  
  // Spring values for eye movement offsets (X and Y) to make it smooth
  const eyeX = useSpring(0, { stiffness: 150, damping: 15 })
  const eyeY = useSpring(0, { stiffness: 150, damping: 15 })
  
  // Head bobbing rotation/scale on hover
  const [isHovered, setIsHovered] = useState(false)

  // Unconditional hook declarations to comply with Rule 11
  const leftPupilX = useTransform(eyeX, x => 30 + x)
  const leftPupilY = useTransform(eyeY, y => 20 + y)
  const rightPupilX = useTransform(eyeX, x => 50 + x)
  const rightPupilY = useTransform(eyeY, y => 20 + y)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      
      const eyeCenterX = rect.left + rect.width / 2
      const eyeCenterY = rect.top + rect.height / 2
      
      const dx = e.clientX - eyeCenterX
      const dy = e.clientY - eyeCenterY
      const angle = Math.atan2(dy, dx)
      
      // Limit eye offset to 4px max
      const distance = Math.min(4, Math.sqrt(dx * dx + dy * dy) * 0.05)
      
      eyeX.set(Math.cos(angle) * distance)
      eyeY.set(Math.sin(angle) * distance)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) {
    return <div className="w-20 h-10 mx-auto" />
  }

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-20 h-10 mx-auto relative cursor-pointer select-none"
    >
      <motion.svg 
        width="80" 
        height="40" 
        viewBox="0 0 80 40" 
        className="overflow-visible"
        animate={{ 
          y: isHovered ? -4 : 0,
          rotate: isHovered ? [0, -2, 2, 0] : 0
        }}
        transition={{ 
          y: { type: "spring", stiffness: 200, damping: 15 },
          rotate: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        {/* Antennas */}
        <line x1="40" y1="12" x2="40" y2="4" stroke="oklch(0.15 0.02 25)" strokeWidth="2" />
        <circle cx="40" cy="4" r="3" fill="oklch(0.58 0.20 55)" stroke="oklch(0.15 0.02 25)" strokeWidth="1.5" />

        {/* Head Outer */}
        <rect 
          x="20" 
          y="10" 
          width="40" 
          height="26" 
          rx="6" 
          fill="oklch(0.99 0.01 85)" 
          stroke="oklch(0.15 0.02 25)" 
          strokeWidth="2.5" 
        />

        {/* Mouth slot */}
        <line x1="32" y1="28" x2="48" y2="28" stroke="oklch(0.15 0.02 25)" strokeWidth="2" strokeLinecap="round" />

        {/* Left Eye Socket */}
        <circle cx="30" cy="20" r="5" fill="oklch(0.98 0.02 80)" stroke="oklch(0.15 0.02 25)" strokeWidth="1.5" />
        {/* Left Pupil */}
        <motion.circle 
          cx={leftPupilX} 
          cy={leftPupilY} 
          r="2.2" 
          fill="oklch(0.58 0.20 55)" 
        />

        {/* Right Eye Socket */}
        <circle cx="50" cy="20" r="5" fill="oklch(0.98 0.02 80)" stroke="oklch(0.15 0.02 25)" strokeWidth="1.5" />
        {/* Right Pupil */}
        <motion.circle 
          cx={rightPupilX} 
          cy={rightPupilY} 
          r="2.2" 
          fill="oklch(0.58 0.20 55)" 
        />
      </motion.svg>
    </div>
  )
}
