"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

const MUSIC_URL = "https://raw.githubusercontent.com/jungcookgf/valentines-day/main/cute-lofi.mp3"

export function SoundEngine() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(MUSIC_URL)
    audio.loop = true
    audio.volume = 0.4 // Comfortably low background volume
    audioRef.current = audio

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      // Fade out smoothly before pausing
      let vol = audio.volume
      const fadeInterval = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.05
          audio.volume = vol
        } else {
          clearInterval(fadeInterval)
          audio.pause()
          setIsPlaying(false)
        }
      }, 30)
    } else {
      audio.volume = 0.0 // Start at 0 for fade in
      audio.play().then(() => {
        setIsPlaying(true)
        // Fade in smoothly
        let vol = 0.0
        const fadeInterval = setInterval(() => {
          if (vol < 0.4) {
            vol += 0.05
            audio.volume = Math.min(vol, 0.4)
          } else {
            clearInterval(fadeInterval)
          }
        }, 30)
      }).catch((err) => {
        console.error("Audio playback blocked by browser/gesture rule:", err)
      })
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans flex items-center gap-3 select-none">
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={togglePlayback}
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="h-11 rounded-full bg-[#FCFAF7] border border-[#EAE3DB] px-4 flex items-center gap-3 shadow-md hover:shadow-lg cursor-pointer text-[#2B2421] transition-all duration-200"
        aria-label="Toggle Background Music"
      >
        <div className="w-5 h-5 flex items-center justify-center text-[#C85A32]">
          {isPlaying ? <Volume2 className="w-4 h-4 text-[#C85A32]" /> : <VolumeX className="w-4 h-4 text-[#766A65]" />}
        </div>
        
        <div className="flex flex-col items-start pr-1">
          <span className="text-[10px] font-mono text-[#766A65] uppercase tracking-widest leading-none">
            {isPlaying ? "Lofi Playback" : "Lofi Paused"}
          </span>
          <span className="text-[9px] font-sans font-bold text-[#2B2421] leading-none mt-0.5">
            Cozy Beat
          </span>
        </div>

        {/* Mini Audio Equalizer Visualizer Bars */}
        <div className="flex items-end gap-0.5 h-3 w-4 overflow-hidden">
          {[1, 2, 3, 4].map((bar) => (
            <motion.div
              key={bar}
              animate={isPlaying ? {
                height: ["15%", "90%", "30%", "80%", "15%"],
              } : { height: "20%" }}
              transition={{
                repeat: Infinity,
                duration: 1 + bar * 0.15,
                ease: "easeInOut",
              }}
              className="w-0.5 bg-[#C85A32] rounded-full"
            />
          ))}
        </div>
      </motion.button>
    </div>
  )
}
