"use client"

import { motion } from "framer-motion"

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 1. Underlying Blueprint Grid */}
      <div className="absolute inset-0 bg-[length:40px_40px] opacity-20 bg-grid-pattern" />

      {/* 2. Ambient Floating Orbs */}
      {/* Primary Orange Glowing Orb */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full blur-[100px] bg-primary/60 opacity-80"
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary Accent/Blue Orb */}
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60%] aspect-square rounded-full blur-[120px] bg-sky-400/50 opacity-80"
        animate={{
          x: ["0%", "-10%", "5%", "0%"],
          y: ["0%", "10%", "-5%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Deep Tertiary Base */}
      <motion.div
        className="absolute top-[30%] left-[30%] w-[40%] aspect-square rounded-full blur-[100px] bg-secondary/40 opacity-70"
        animate={{
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
