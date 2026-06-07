"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, Plus, Trash2, Camera, Move, Compass, Sparkles, Terminal, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlock {
  id: string
  type: "drive" | "turn" | "scan" | "lift" | "battle"
  label: string
  color: string
  icon: React.ElementType
  actionLog: string
}

const AVAILABLE_BLOCKS: CodeBlock[] = [
  {
    id: "block-drive",
    type: "drive",
    label: "Drive Forward",
    color: "bg-[#C85A32]", // Terracotta Primary
    icon: Move,
    actionLog: "Driving robot forward 50mm",
  },
  {
    id: "block-turn",
    type: "turn",
    label: "Turn 90° Left",
    color: "bg-[#766A65]", // Muted Warmth
    icon: Compass,
    actionLog: "Rotating chassis -90 degrees",
  },
  {
    id: "block-scan",
    type: "scan",
    label: "Scan with AI Camera",
    color: "bg-[#E08A68]", // Light accent
    icon: Camera,
    actionLog: "Running YOLO computer vision object classification model...",
  },
  {
    id: "block-lift",
    type: "lift",
    label: "Actuate Linear Lift",
    color: "bg-[#A3523B]", // Dark terracotta
    icon: Award,
    actionLog: "Raising linear slide elevator to max limit",
  },
  {
    id: "block-battle",
    type: "battle",
    label: "Play Battlebots Spin",
    color: "bg-[#4E3F3B]", // Charcoal highlight
    icon: Sparkles,
    actionLog: "Spinning mechanical weapon mechanism at 1000 RPM",
  },
]

export function InteractiveBlockWorkspace() {
  const [script, setScript] = useState<CodeBlock[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState<number | null>(null)
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "CSAI Workspace initialized. Add blocks on the left to start.",
  ])

  // Robot state for simulation
  const [robotX, setRobotX] = useState(150)
  const [robotY, setRobotY] = useState(130)
  const [robotRotation, setRobotRotation] = useState(0)
  const [liftHeight, setLiftHeight] = useState(25)
  const [isWeaponSpinning, setIsWeaponSpinning] = useState(false)
  const [isScanning, setIsScanning] = useState(false)

  const consoleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight
    }
  }, [consoleLogs])

  const addBlockToScript = (block: CodeBlock) => {
    if (script.length >= 8) {
      setConsoleLogs((prev) => [...prev, "Warning: Maximum script limit (8 blocks) reached!"])
      return
    }
    const newBlock = { ...block, id: `${block.type}-${Date.now()}` }
    setScript((prev) => [...prev, newBlock])
    setConsoleLogs((prev) => [...prev, `Added [${block.label}] to your script.`])
  }

  const removeBlock = (index: number) => {
    const blockToRemove = script[index]
    setScript((prev) => prev.filter((_, idx) => idx !== index))
    setConsoleLogs((prev) => [...prev, `Removed [${blockToRemove.label}].`])
  }

  const clearWorkspace = () => {
    setScript([])
    resetRobot()
    setConsoleLogs(["Workspace cleared. Add blocks to program the robot."])
  }

  const resetRobot = () => {
    setRobotX(150)
    setRobotY(130)
    setRobotRotation(0)
    setLiftHeight(25)
    setIsWeaponSpinning(false)
    setIsScanning(false)
    setCurrentStep(null)
    setIsRunning(false)
  }

  const runScript = async () => {
    if (script.length === 0) {
      setConsoleLogs((prev) => [...prev, "Cannot run: Program script is empty."])
      return
    }

    setIsRunning(true)
    setConsoleLogs((prev) => [...prev, "⚡ Executing Autonomous Program..."])

    // Run each step sequentially
    for (let i = 0; i < script.length; i++) {
      setCurrentStep(i)
      const block = script[i]
      setConsoleLogs((prev) => [...prev, `[Step ${i + 1}] Executing: ${block.label}`])

      // Execute block animation state
      await animateBlockAction(block)

      // Add delay between steps
      await new Promise((resolve) => setTimeout(resolve, 800))
    }

    setCurrentStep(null)
    setIsRunning(false)
    setConsoleLogs((prev) => [...prev, "✓ Execution finished successfully."])
  }

  const animateBlockAction = async (block: CodeBlock) => {
    return new Promise<void>((resolve) => {
      setConsoleLogs((prev) => [...prev, `↳ ${block.actionLog}`])

      if (block.type === "drive") {
        // Calculate new X/Y based on current rotation
        const rad = (robotRotation * Math.PI) / 180
        const distance = 40
        const dx = Math.sin(rad) * distance
        const dy = -Math.cos(rad) * distance

        setRobotX((prev) => Math.max(50, Math.min(250, prev + dx)))
        setRobotY((prev) => Math.max(40, Math.min(220, prev + dy)))
        setTimeout(resolve, 600)
      } else if (block.type === "turn") {
        setRobotRotation((prev) => (prev - 90) % 360)
        setTimeout(resolve, 500)
      } else if (block.type === "scan") {
        setIsScanning(true)
        setTimeout(() => {
          setIsScanning(false)
          setConsoleLogs((prev) => [
            ...prev,
            "↳ AI CAMERA: Object identified as [FTC Ring Game Element]. Confidence: 99.4%",
          ])
          resolve()
        }, 1200)
      } else if (block.type === "lift") {
        setLiftHeight(65)
        setTimeout(() => {
          setLiftHeight(25) // Go back down after lift
          resolve()
        }, 1000)
      } else if (block.type === "battle") {
        setIsWeaponSpinning(true)
        setTimeout(() => {
          setIsWeaponSpinning(false)
          resolve()
        }, 1500)
      }
    })
  }

  return (
    <div className="w-full bg-[#FAF6F0] rounded-[2.5rem] border border-[#EAE3DB] p-6 lg:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Blocks Pallet */}
        <div className="w-full lg:w-1/4 space-y-4">
          <div className="space-y-1">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#766A65] font-bold">1. Block Catalog</h4>
            <p className="text-xs text-[#766A65]">Click to add commands to your camp script.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {AVAILABLE_BLOCKS.map((block) => {
              const IconComponent = block.icon
              return (
                <button
                  type="button"
                  key={block.id}
                  onClick={() => addBlockToScript(block)}
                  disabled={isRunning}
                  className="w-full flex items-center justify-between text-left px-4 py-3 rounded-2xl bg-white border border-[#EAE3DB] hover:border-[#C85A32]/50 hover:shadow-sm active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 ${block.color} rounded-lg flex items-center justify-center text-white`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#2B2421]">{block.label}</span>
                  </div>
                  <Plus className="w-4 h-4 text-[#766A65] group-hover:text-[#C85A32] transition-colors" />
                </button>
              )
            })}
          </div>
        </div>

        {/* Middle: Code Script Composer */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between bg-white rounded-3xl border border-[#EAE3DB] p-4 min-h-[320px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#EAE3DB]/40 pb-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#766A65] font-bold">2. Program Script</h4>
              {script.length > 0 && (
                <button
                  type="button"
                  onClick={clearWorkspace}
                  disabled={isRunning}
                  className="text-xs font-mono text-muted-foreground hover:text-[#C85A32] flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </button>
              )}
            </div>

            <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
              <AnimatePresence>
                {script.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-10 h-10 rounded-full border border-dashed border-[#EAE3DB] flex items-center justify-center text-muted-foreground/45 mb-2">
                      +
                    </div>
                    <p className="text-xs text-muted-foreground">No blocks added yet.</p>
                  </motion.div>
                ) : (
                  script.map((block, index) => {
                    const IconComponent = block.icon
                    const isActive = currentStep === index
                    return (
                      <motion.div
                        key={block.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        layout
                        className={`relative flex items-center justify-between pl-4 pr-3 py-2.5 rounded-xl text-white font-mono text-xs transition-all ${block.color} ${
                          isActive ? "ring-4 ring-[#C85A32]/30 scale-[1.02]" : "opacity-90"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="opacity-50 text-[10px] w-4">{index + 1}</span>
                          <IconComponent className="w-4 h-4 shrink-0" />
                          <span>{block.label}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeBlock(index)}
                          disabled={isRunning}
                          aria-label="Remove block"
                          className="hover:bg-white/20 p-1.5 rounded transition-colors disabled:opacity-40 before:content-[''] before:absolute before:inset-[-8px] relative"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </motion.div>
                    )
                  })
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-[#EAE3DB]/40">
            <Button
              type="button"
              className="flex-1 bg-[#C85A32] hover:bg-[#C85A32]/90 text-white rounded-xl py-4"
              disabled={isRunning || script.length === 0}
              onClick={runScript}
            >
              <Play className="w-4 h-4 mr-2" />
              Run Code
            </Button>
            <Button
              type="button"
              variant="outline"
              aria-label="Reset robot simulation"
              className="border-[#EAE3DB] rounded-xl py-4"
              onClick={resetRobot}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Side: Visualizer and Console */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] bg-white rounded-3xl border border-[#EAE3DB] overflow-hidden flex items-center justify-center">
            
            {/* Grid Coordinates (Aesthetics) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#F4EFEA_1px,transparent_1px),linear-gradient(to_bottom,#F4EFEA_1px,transparent_1px)] bg-[size:20px_20px] opacity-60 pointer-events-none" />

            {/* Simulated Camp Robot */}
            <motion.div
              className="absolute w-20 h-20 origin-center z-10"
              style={{
                x: robotX - 150, // center offset
                y: robotY - 130, // center offset
                rotate: robotRotation,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              {/* Robot Frame Outline */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                {/* Wheels */}
                <rect x="5" y="15" width="12" height="25" rx="3" fill="#2B2421" />
                <rect x="83" y="15" width="12" height="25" rx="3" fill="#2B2421" />
                <rect x="5" y="60" width="12" height="25" rx="3" fill="#2B2421" />
                <rect x="83" y="60" width="12" height="25" rx="3" fill="#2B2421" />

                {/* Main Metal Chassis */}
                <rect x="15" y="20" width="70" height="60" rx="12" fill="#FAF6F0" stroke="#C85A32" strokeWidth="3.5" />
                <rect x="25" y="30" width="50" height="40" rx="8" fill="#EAE3DB" />
                
                {/* Robot Intake / Front indicator */}
                <path d="M 35 20 L 50 10 L 65 20 Z" fill="#766A65" />

                {/* Linear Slide / Mechanical Lift (Height adjusts) */}
                <motion.rect 
                  x="45" 
                  y={40 - liftHeight / 2} 
                  width="10" 
                  height={liftHeight} 
                  fill="#C85A32" 
                  rx="2"
                  animate={{ height: liftHeight }}
                />

                {/* Weapon Mechanism Spin */}
                <motion.g
                  animate={isWeaponSpinning ? { rotate: 360 } : {}}
                  transition={isWeaponSpinning ? { repeat: Infinity, duration: 0.25, ease: "linear" } : {}}
                  className="origin-[50px_45px]"
                >
                  <circle cx="50" cy="45" r="14" fill="none" stroke="#2B2421" strokeWidth="2.5" strokeDasharray="6 3" />
                  <circle cx="50" cy="45" r="4" fill="#C85A32" />
                </motion.g>

                {/* AI Laser Camera Scanner arcs */}
                {isScanning && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.8, 0], scale: [0.8, 1.3, 0.8] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    <path d="M 35 8 A 20 20 0 0 1 65 8" fill="none" stroke="#C85A32" strokeWidth="2.5" strokeDasharray="3 3" />
                    <path d="M 25 -2 A 35 35 0 0 1 75 -2" fill="none" stroke="#C85A32" strokeWidth="1.5" />
                  </motion.g>
                )}
              </svg>
            </motion.div>

            {/* Target element to scan */}
            <div className="absolute top-8 right-12 w-6 h-6 bg-[#C85A32]/10 border-2 border-dashed border-[#C85A32] rounded-full flex items-center justify-center text-[9px] font-mono text-[#C85A32]">
              Ring
            </div>
            
            {/* Visual labels */}
            <div className="absolute bottom-3 left-3 bg-[#FAF6F0]/80 backdrop-blur-sm border border-[#EAE3DB] rounded-lg px-2.5 py-1 text-[10px] font-mono text-[#766A65]">
              Robot Arena (Simulated)
            </div>
          </div>

          {/* Console Output */}
          <div className="w-full bg-[#2B2421] rounded-3xl p-4 font-mono text-xs text-white border border-black/35 shadow-inner">
            <div className="flex items-center gap-1.5 text-muted-foreground border-b border-white/10 pb-2 mb-2">
              <Terminal className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="text-[10px] tracking-wider uppercase">Live Console Output</span>
            </div>
            <div ref={consoleContainerRef} className="h-24 overflow-y-auto space-y-1.5 text-[#FAF6F0] pr-1">
              {consoleLogs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  {log.startsWith("⚡") || log.startsWith("✓") ? (
                    <span className="text-[#C85A32]">{log}</span>
                  ) : log.startsWith("↳") ? (
                    <span className="text-[#E08A68] ml-2">{log}</span>
                  ) : (
                    <span>{log}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
