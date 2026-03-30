"use client"

import { motion } from "framer-motion"

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 1. Underlying Blueprint Grid */}
      <div className="absolute inset-0 bg-[length:30px_30px] opacity-10 dark:opacity-[0.03] bg-grid-pattern" />

      {/* 2. Ambient Floating Orbs */}
      {/* Primary Orange Glowing Orb */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full blur-[120px] bg-primary/30 dark:bg-primary/20 opacity-60"
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
        className="absolute bottom-[-20%] right-[-10%] w-[60%] aspect-square rounded-full blur-[150px] bg-accent/30 dark:bg-accent/20 opacity-50"
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
        className="absolute top-[40%] left-[30%] w-[30%] aspect-square rounded-full blur-[100px] bg-secondary/20 dark:bg-secondary/10 opacity-40"
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
