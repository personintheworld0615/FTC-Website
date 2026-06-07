"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, ShieldAlert, Sparkles, Activity } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const PRESET_PROMPTS = [
  "How can we sponsor the team?",
  "Tell me about the robot's design.",
  "When is the CS & AI Summer Camp?",
  "Who are the team captains?",
]

// Custom Robot Icon SVG that blinks on hover
function AnimatedRobotIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className="w-8 h-8 text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5">
      {/* Robot Antenna */}
      <path d="M50 25 L50 12" strokeLinecap="round" />
      <circle cx="50" cy="10" r="4" className="fill-[#C85A32] stroke-white" />
      
      {/* Robot Head Frame */}
      <rect x="20" y="25" width="60" height="50" rx="16" fill="#C85A32" className="stroke-white" />
      <rect x="25" y="30" width="50" height="40" rx="10" fill="#2B2421" className="stroke-white" strokeWidth="1.5" />
      
      {/* Robot Eyes */}
      <motion.ellipse 
        cx="40" 
        cy="50" 
        rx="6" 
        ry={isHovered ? "1" : "6"} 
        className="fill-white"
        animate={{ ry: isHovered ? [6, 1, 6] : 6 }}
        transition={{ repeat: isHovered ? Infinity : 0, duration: 1.5, repeatDelay: 1 }}
      />
      <motion.ellipse 
        cx="60" 
        cy="50" 
        rx="6" 
        ry={isHovered ? "1" : "6"} 
        className="fill-white"
        animate={{ ry: isHovered ? [6, 1, 6] : 6 }}
        transition={{ repeat: isHovered ? Infinity : 0, duration: 1.5, repeatDelay: 1 }}
      />

      {/* Mouth */}
      <motion.rect 
        x="42" 
        y="62" 
        width="16" 
        height="3" 
        rx="1.5" 
        className="fill-[#C85A32]"
        animate={isHovered ? { opacity: [1, 0.4, 1] } : { opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
      
      {/* Neck & Shoulders base */}
      <path d="M42 75 L42 84 M58 75 L58 84" strokeLinecap="round" />
      <rect x="35" y="84" width="30" height="6" rx="3" fill="#C85A32" className="stroke-white" />
    </svg>
  )
}

// Live interactive Canvas Particle Telemetry background (Option 1)
function TelemetryCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    let animationFrameId: number
    let width = canvas.width = canvas.offsetWidth
    let height = canvas.height = canvas.offsetHeight
    
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    
    window.addEventListener("resize", handleResize)
    
    // Create random telemetry coordinates
    const particles = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
    }))
    
    let mouse = { x: -100, y: -100 }
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    
    canvas.addEventListener("mousemove", handleMouseMove)
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Draw grid lines
      ctx.strokeStyle = "rgba(200, 90, 50, 0.03)"
      ctx.lineWidth = 1
      const step = 30
      for (let x = 0; x < width; x += step) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      
      // Draw particles & links
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(200, 90, 50, 0.12)"
        ctx.fill()
        
        // Draw interactive line to mouse
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 80) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(200, 90, 50, ${0.1 * (1 - dist / 80)})`
          ctx.stroke()
        }
      })
      
      animationFrameId = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showLaserScan, setShowLaserScan] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I am the Rust in Piece AI Assistant. Ask me anything about our team, robot systems, outreach camps, or sponsorship opportunities!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Auto scroll to bottom when messages list changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  // Handle laser boot-up trigger on open
  useEffect(() => {
    if (isOpen) {
      setShowLaserScan(true)
      const timer = setTimeout(() => setShowLaserScan(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return

    setErrorMsg(null)
    const userMessage: Message = { role: "user", content: textToSend }
    const updatedMessages = [...messages, userMessage]
    
    setMessages(updatedMessages)
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response")
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.content }])
    } catch (err: any) {
      console.error(err)
      setErrorMsg(err.message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(input)
  }

  // Gooey filter definitions for Option 2: Fluid Morph
  const fluidFilter = (
    <svg className="hidden">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  )

  return (
    <>
      {/* Liquid gooey SVG morph filter */}
      {fluidFilter}

      <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.2, y: 150, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.2, y: 150, filter: "blur(8px)" }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              style={{ filter: "url(#goo)" }}
              className="w-[380px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[calc(100vh-8rem)] rounded-[2.5rem] bg-[#FCFAF7] border border-[#EAE3DB] shadow-2xl flex flex-col overflow-hidden mb-4 relative"
            >
              {/* Telemetry Canvas Background (Option 1) */}
              <TelemetryCanvas />

              {/* Laser scanning boot animation overlay (Option 1) */}
              {showLaserScan && (
                <motion.div
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C85A32] to-transparent shadow-[0_0_12px_#C85A32] z-40 pointer-events-none"
                />
              )}

              {/* Header */}
              <div className="p-6 bg-[#FAF6F0]/90 backdrop-blur-sm border-b border-[#EAE3DB] flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C85A32] flex items-center justify-center">
                    <AnimatedRobotIcon isHovered={true} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold tracking-tight text-[#2B2421] text-base uppercase flex items-center gap-1.5">
                      RIP Assistant
                      <Activity className="w-3.5 h-3.5 text-[#C85A32] animate-pulse" />
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-[#766A65] tracking-widest uppercase">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 text-[#766A65] hover:text-[#2B2421] transition-colors"
                  aria-label="Close Assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 relative z-10 bg-transparent">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-[1.5rem] px-4 py-3 text-sm leading-relaxed border ${
                        msg.role === "user"
                          ? "bg-[#C85A32] border-[#C85A32] text-white rounded-br-none"
                          : "bg-[#FAF6F0]/90 backdrop-blur-sm text-[#2B2421] border-[#EAE3DB] rounded-bl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Loader */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#FAF6F0]/90 backdrop-blur-sm border border-[#EAE3DB] rounded-[1.5rem] rounded-bl-none px-4 py-3 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-bounce" />
                    </div>
                  </div>
                )}

                {/* Error state */}
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200/50 rounded-2xl flex items-start gap-2.5 text-xs text-red-700">
                    <ShieldAlert className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">Error communicating with AI</p>
                      <p className="opacity-90">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Quick Prompts */}
              {messages.length === 1 && !isLoading && (
                <div className="px-6 pb-2 space-y-2 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#766A65] font-bold block">Suggested Questions</span>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(prompt)}
                        className="text-left text-xs bg-[#FAF6F0]/90 backdrop-blur-sm hover:bg-[#C85A32]/5 border border-[#EAE3DB] hover:border-[#C85A32]/30 text-[#766A65] hover:text-[#C85A32] rounded-full px-3 py-1.5 transition-colors duration-200 active:scale-95"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Bar */}
              <form onSubmit={handleFormSubmit} className="p-6 bg-[#FAF6F0]/90 backdrop-blur-sm border-t border-[#EAE3DB] flex gap-3 relative z-10">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about team..."
                  disabled={isLoading}
                  className="flex-1 bg-white border border-[#EAE3DB] focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] rounded-2xl px-4 py-3 text-sm text-[#2B2421] placeholder-[#766A65] outline-none transition-all duration-200 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-11 h-11 bg-[#C85A32] hover:bg-[#C85A32]/90 disabled:bg-[#766A65]/20 disabled:text-[#766A65]/40 text-white rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Trigger Button */}
        <motion.button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="w-14 h-14 bg-[#C85A32] rounded-full flex items-center justify-center shadow-xl cursor-pointer select-none text-white focus:outline-none border-2 border-white relative z-10"
          aria-label="Toggle Assistant"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat-icon"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <AnimatedRobotIcon isHovered={isHovered} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
