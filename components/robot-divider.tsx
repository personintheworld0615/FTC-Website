"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function RobotDivider() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the page
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to translation on x-axis (from 0% to 92% width of container)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "92%"])
  
  // Transform scroll progress to wheel rotation angle
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080])

  return (
    <div ref={containerRef} className="w-full relative py-10 overflow-hidden select-none pointer-events-none">
      {/* Horizontal Divider Line */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-16">
        {/* Animated Robot Container */}
        <motion.div 
          style={{ x }} 
          className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-16 h-16"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            className="drop-shadow-sm"
          >
            {/* Antenna */}
            <line x1="50" y1="20" x2="50" y2="10" stroke="oklch(0.68 0.22 55)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="8" r="4" fill="oklch(0.65 0.25 45)" className="animate-pulse" />

            {/* Head */}
            <rect x="30" y="20" width="40" height="24" rx="8" fill="oklch(0.99 0.01 85)" stroke="oklch(0.68 0.22 55)" strokeWidth="4" />
            
            {/* Eyes */}
            <circle cx="42" cy="30" r="3" fill="oklch(0.65 0.25 45)" />
            <circle cx="58" cy="30" r="3" fill="oklch(0.65 0.25 45)" />
            
            {/* Mouth */}
            <line x1="44" y1="38" x2="56" y2="38" stroke="oklch(0.68 0.22 55)" strokeWidth="2" strokeLinecap="round" />

            {/* Neck */}
            <rect x="46" y="44" width="8" height="6" fill="oklch(0.68 0.22 55)" />

            {/* Body */}
            <rect x="24" y="50" width="52" height="34" rx="10" fill="oklch(0.99 0.01 85)" stroke="oklch(0.68 0.22 55)" strokeWidth="4" />
            
            {/* Gear in Center (Spins on scroll) */}
            <motion.g style={{ rotate, transformOrigin: "50px 67px" }}>
              <path
                d="M50 59 L52 63 L56 61 L55 65 L59 67 L55 69 L56 73 L52 71 L50 75 L48 71 L44 73 L45 69 L41 67 L45 65 L44 61 L48 63 Z"
                fill="oklch(0.65 0.25 45)"
              />
              <circle cx="50" cy="67" r="3" fill="oklch(0.99 0.01 85)" />
            </motion.g>

            {/* Arms */}
            <path d="M24 58 Q14 62 18 70" fill="none" stroke="oklch(0.68 0.22 55)" strokeWidth="3" strokeLinecap="round" />
            <path d="M76 58 Q86 62 82 70" fill="none" stroke="oklch(0.68 0.22 55)" strokeWidth="3" strokeLinecap="round" />

            {/* Wheels / Tread */}
            <rect x="28" y="84" width="44" height="8" rx="4" fill="oklch(0.68 0.22 55)" />
            
            {/* Tread Details */}
            <circle cx="34" cy="88" r="2" fill="oklch(0.99 0.01 85)" />
            <circle cx="50" cy="88" r="2" fill="oklch(0.99 0.01 85)" />
            <circle cx="66" cy="88" r="2" fill="oklch(0.99 0.01 85)" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
