"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

export function InteractiveRoboticArm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastTargetShoulderRef = useRef(0)
  
  // Client-side hydration safety
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 140, y: -120 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Game state variables
  const [gameState, setGameState] = useState<"idle" | "instructions" | "countdown" | "active" | "gameover">("idle")
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [clicks, setClicks] = useState(0)
  const [hits, setHits] = useState(0)
  const [targetPos, setTargetPos] = useState({ x: 120, y: -100 })
  const [countdown, setCountdown] = useState(3)
  const [isNearTarget, setIsNearTarget] = useState(false)

  const targetPosRef = useRef(targetPos)
  useEffect(() => {
    targetPosRef.current = targetPos
  }, [targetPos])

  const generateRandomTarget = () => {
    // Generate polar coordinates within reachable ring
    const theta = -0.2 - Math.random() * 2.7
    const D = 80 + Math.random() * 140
    const x = Math.round(D * Math.cos(theta))
    const y = Math.round(D * Math.sin(theta))
    setTargetPos({ x, y })
  }

  // Spring animation values for joints to add physical inertia
  const shoulderAngle = useSpring(0, { stiffness: 90, damping: 18 })
  const elbowAngle = useSpring(0, { stiffness: 90, damping: 18 })
  const clawAngle = useSpring(0.25, { stiffness: 150, damping: 15 })

  // Dimensions of arm link segments
  const L1 = 130 // Shoulder to elbow
  const L2 = 110 // Elbow to wrist

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      
      // Arm base relative coordinates (around center-bottom of SVG)
      const baseX = rect.left + rect.width * 0.5
      const baseY = rect.top + rect.height * 0.85
      
      const targetX = e.clientX - baseX
      const targetY = e.clientY - baseY
      
      setMousePos({ x: targetX, y: targetY })
      setIsHovering(true)

      // Calculate distance to target for proximity indicator
      const dx = targetX - targetPosRef.current.x
      const dy = targetY - targetPosRef.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      setIsNearTarget(dist < 32)
    }
    
    const handleMouseLeave = () => {
      setIsHovering(false)
      setIsNearTarget(false)
    }

    const handleMouseDown = () => {
      setIsClicked(true)
    }
    
    const handleMouseUp = () => {
      setIsClicked(false)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  // Idle animation when mouse is off-screen or inactive
  useEffect(() => {
    if (isHovering || !mounted || gameState === "active" || gameState === "countdown") return
    
    let frame = 0
    const interval = setInterval(() => {
      frame += 0.015
      // Gentle sine-wave idle path
      const targetX = 130 + Math.sin(frame) * 45
      const targetY = -120 + Math.cos(frame * 1.5) * 35
      setMousePos({ x: targetX, y: targetY })
    }, 16)
    
    return () => clearInterval(interval)
  }, [isHovering, mounted, gameState])

  // Countdown Timer loop
  useEffect(() => {
    if (gameState !== "countdown") return
    
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setGameState("active")
          setTimeLeft(30)
          setScore(0)
          setClicks(0)
          setHits(0)
          generateRandomTarget()
          return 3
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [gameState])

  // Active Game Timer loop
  useEffect(() => {
    if (gameState !== "active") return
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("gameover")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [gameState])

  // Click handler for game targets
  useEffect(() => {
    if (gameState !== "active") return

    const handleMouseDown = () => {
      setClicks((prev) => prev + 1)
      
      const wx = wristX.get() - 200
      const wy = wristY.get() - 340
      const dx = wx - targetPos.x
      const dy = wy - targetPos.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      
      if (dist < 32) {
        setScore((prev) => prev + 1)
        setHits((prev) => prev + 1)
        generateRandomTarget()
      }
    }

    window.addEventListener("mousedown", handleMouseDown)
    return () => window.removeEventListener("mousedown", handleMouseDown)
  }, [gameState, targetPos])

  // Reset target proximity when target coordinates change
  useEffect(() => {
    setIsNearTarget(false)
  }, [targetPos])

  // Track joint angles based on target mouse coordinates
  useEffect(() => {
    if (!mounted) return
    
    const X = mousePos.x
    const Y = mousePos.y
    const D = Math.sqrt(X * X + Y * Y)
    
    let theta1 = 0
    let theta2 = 0
    
    if (D >= L1 + L2) {
      // Out of reach: point straight at target
      theta1 = Math.atan2(Y, X)
      theta2 = 0
    } else {
      // Inverse Kinematics calculations (2D joint angles)
      const cosTheta2 = (X * X + Y * Y - L1 * L1 - L2 * L2) / (2 * L1 * L2)
      const clampedCos = Math.max(-1, Math.min(1, cosTheta2))
      theta2 = Math.acos(clampedCos)
      
      theta1 = Math.atan2(Y, X) - Math.atan2(L2 * Math.sin(theta2), L1 + L2 * Math.cos(theta2))
    }
    
    const currentTarget = lastTargetShoulderRef.current
    let diff = theta1 - currentTarget
    // Normalize diff to [-PI, PI] to solve angle wrapping / shortest path
    diff = Math.atan2(Math.sin(diff), Math.cos(diff))
    const continuousTheta1 = currentTarget + diff
    
    lastTargetShoulderRef.current = continuousTheta1
    shoulderAngle.set(continuousTheta1)
    elbowAngle.set(theta2)
    
    // Animate claw opening/closing (narrower on click)
    clawAngle.set(isClicked ? 0.08 : 0.25)
  }, [mousePos, isClicked, mounted])

  // Calculate dynamic joint coordinates using motion transforms
  const elbowX = useTransform(shoulderAngle, (s) => 200 + L1 * Math.cos(s))
  const elbowY = useTransform(shoulderAngle, (s) => 340 + L1 * Math.sin(s))

  const wristX = useTransform([shoulderAngle, elbowAngle], ([s, e]) => {
    const ex = 200 + L1 * Math.cos(s)
    return ex + L2 * Math.cos(s + e)
  })
  const wristY = useTransform([shoulderAngle, elbowAngle], ([s, e]) => {
    const ey = 340 + L1 * Math.sin(s)
    return ey + L2 * Math.sin(s + e)
  })

  // Claw Jaws Coordinates
  const leftClawX = useTransform([wristX, shoulderAngle, elbowAngle, clawAngle], ([wx, s, e, c]) => {
    return wx + 22 * Math.cos(s + e - c)
  })
  const leftClawY = useTransform([wristY, shoulderAngle, elbowAngle, clawAngle], ([wy, s, e, c]) => {
    return wy + 22 * Math.sin(s + e - c)
  })

  const rightClawX = useTransform([wristX, shoulderAngle, elbowAngle, clawAngle], ([wx, s, e, c]) => {
    return wx + 22 * Math.cos(s + e + c)
  })
  const rightClawY = useTransform([wristY, shoulderAngle, elbowAngle, clawAngle], ([wy, s, e, c]) => {
    return wy + 22 * Math.sin(s + e + c)
  })

  // Actuator rod dynamics (relative mid-point of upper arm segment)
  const actuatorEndX = useTransform([elbowX, wristX], ([ex, wx]) => ex + (wx - ex) * 0.6)
  const actuatorEndY = useTransform([elbowY, wristY], ([ey, wy]) => ey + (wy - ey) * 0.6)

  if (!mounted) {
    return <div ref={containerRef} className="w-full h-full" />
  }

  return (
    <div ref={containerRef} className="w-full h-full select-none pointer-events-none relative">
      <svg width="100%" height="100%" viewBox="0 0 400 400" className="overflow-visible">
        {/* Subtle grid backing for engineering layout vibes */}
        <defs>
          <pattern id="arm-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(0.9 0.05 70 / 0.15)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arm-grid)" className="rounded-3xl" />

        {/* Dynamic Vector Targets */}
        {gameState === "active" && (
          <g>
            <text 
              x={200 + targetPos.x} 
              y={340 + targetPos.y - 20} 
              textAnchor="middle" 
              className="fill-primary font-mono text-[9px] font-bold tracking-wider animate-pulse"
            >
              TGT: [{targetPos.x}, {targetPos.y}]
            </text>
            <circle 
              cx={200 + targetPos.x} 
              cy={340 + targetPos.y} 
              r={isNearTarget ? 24 : 16} 
              fill="none" 
              stroke="oklch(0.58 0.20 55)" 
              strokeWidth={isNearTarget ? 2 : 1.5} 
              strokeDasharray={isNearTarget ? "none" : "3 3"} 
              className="transition-all duration-200" 
            />
            <circle 
              cx={200 + targetPos.x} 
              cy={340 + targetPos.y} 
              r="6" 
              fill={isNearTarget ? "oklch(0.58 0.20 55)" : "oklch(0.58 0.20 55 / 0.4)"} 
              className="transition-colors duration-200" 
            />
          </g>
        )}

        {/* Joint Arc Guide */}
        <circle cx="200" cy="340" r={L1 + L2} fill="none" stroke="oklch(0.68 0.22 55 / 0.04)" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Arm Base Stand */}
        <polygon points="170,375 230,375 220,340 180,340" fill="oklch(0.98 0.02 80)" stroke="oklch(0.15 0.02 25)" strokeWidth="3" />
        <circle cx="200" cy="340" r="18" fill="oklch(0.98 0.02 80)" stroke="oklch(0.15 0.02 25)" strokeWidth="3.5" />
        <circle cx="200" cy="340" r="6" fill="oklch(0.58 0.20 55)" />

        {/* Segment 1: Lower Arm (Truss/Hollow style) */}
        <motion.line x1={200} y1={340} x2={elbowX} y2={elbowY} stroke="oklch(0.15 0.02 25)" strokeWidth="9" strokeLinecap="round" />
        <motion.line x1={200} y1={340} x2={elbowX} y2={elbowY} stroke="oklch(0.99 0.01 85)" strokeWidth="5" strokeLinecap="round" strokeDasharray="6 3" />
        <motion.line x1={200} y1={340} x2={elbowX} y2={elbowY} stroke="oklch(0.58 0.20 55)" strokeWidth="2" strokeLinecap="round" />

        {/* Elbow Joint */}
        <motion.circle cx={elbowX} cy={elbowY} r="14" fill="oklch(0.98 0.02 80)" stroke="oklch(0.15 0.02 25)" strokeWidth="3" />
        <motion.circle cx={elbowX} cy={elbowY} r="4" fill="oklch(0.58 0.20 55)" />

        {/* Segment 2: Upper Arm (Piston style) */}
        <motion.line x1={elbowX} y1={elbowY} x2={wristX} y2={wristY} stroke="oklch(0.15 0.02 25)" strokeWidth="6" strokeLinecap="round" />
        <motion.line x1={elbowX} y1={elbowY} x2={wristX} y2={wristY} stroke="oklch(0.99 0.01 85)" strokeWidth="2" strokeLinecap="round" />

        {/* Hydraulic Actuator Rod overlay */}
        <motion.line 
          x1={elbowX} 
          y1={elbowY} 
          x2={actuatorEndX} 
          y2={actuatorEndY} 
          stroke="oklch(0.58 0.20 55)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />

        {/* Wrist Joint */}
        <motion.circle cx={wristX} cy={wristY} r="8" fill="oklch(0.98 0.02 80)" stroke="oklch(0.15 0.02 25)" strokeWidth="2.5" />

        {/* Left Claw Jaw */}
        <motion.line x1={wristX} y1={wristY} x2={leftClawX} y2={leftClawY} stroke="oklch(0.15 0.02 25)" strokeWidth="4.5" strokeLinecap="round" />
        <motion.line x1={wristX} y1={wristY} x2={leftClawX} y2={leftClawY} stroke="oklch(0.58 0.20 55)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Right Claw Jaw */}
        <motion.line x1={wristX} y1={wristY} x2={rightClawX} y2={rightClawY} stroke="oklch(0.15 0.02 25)" strokeWidth="4.5" strokeLinecap="round" />
        <motion.line x1={wristX} y1={wristY} x2={rightClawX} y2={rightClawY} stroke="oklch(0.58 0.20 55)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Visual Target Cursor overlay */}
        {isHovering && (
          <motion.circle 
            cx={wristX} 
            cy={wristY} 
            r="32" 
            fill="none" 
            stroke="oklch(0.58 0.20 55 / 0.15)" 
            strokeWidth="1" 
            className="animate-pulse"
          />
        )}
      </svg>

      {/* HTML Interactive Layer */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none select-none">
        {/* Top HUD Row */}
        {gameState === "active" && (
          <div className="flex justify-between w-full font-mono text-[10px] font-bold tracking-wider text-muted-foreground">
            <div className={`px-2.5 py-1 rounded-lg bg-white/85 border border-primary/10 backdrop-blur-sm ${timeLeft <= 5 ? "text-primary animate-pulse border-primary/30" : ""}`}>
              T-MINUS: {timeLeft}s
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-white/85 border border-primary/10 backdrop-blur-sm">
              GRABBED: {score.toString().padStart(2, "0")}
            </div>
          </div>
        )}

        {/* Center UI Overlays */}
        {gameState === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-4">
            <div className="bg-white/95 border border-primary/10 rounded-2xl p-5 shadow-lg flex flex-col items-center justify-center space-y-3 pointer-events-auto backdrop-blur-sm max-w-[260px] text-center transform-gpu hover:border-primary/20 transition-all duration-300">
              <span className="font-mono text-[9px] text-muted-foreground/60 tracking-widest uppercase">
                SYSTEM STANDBY // READY
              </span>
              <button 
                onClick={() => setGameState("instructions")}
                className="w-full bg-primary hover:bg-primary/95 text-white font-mono text-[10px] font-bold tracking-widest uppercase py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 shadow-sm pointer-events-auto"
              >
                INITIALIZE RUN
              </button>
            </div>
          </div>
        )}

        {gameState === "countdown" && (
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 bg-white/5 backdrop-blur-[1px]">
            <div className="text-center space-y-2">
              <span className="font-mono text-[9px] text-primary tracking-widest uppercase block animate-pulse">
                ESTABLISHING AUTONOMOUS LINK
              </span>
              <div className="text-6xl font-sans font-extrabold text-foreground tracking-tighter leading-none">
                {countdown}
              </div>
            </div>
          </div>
        )}

        {gameState === "instructions" && (
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-2">
            <div className="bg-white/95 border border-primary/15 rounded-2xl p-5 shadow-xl flex flex-col items-center justify-center space-y-4 pointer-events-auto backdrop-blur-sm max-w-[280px] text-center">
              <div>
                <span className="font-mono text-[9px] text-primary tracking-widest uppercase block mb-1">
                  MISSION PROTOCOLS
                </span>
                <h4 className="text-xs font-sans font-bold text-foreground uppercase tracking-tight">
                  Alignment Challenge
                </h4>
              </div>
              <div className="w-full text-left font-mono text-[9px] text-muted-foreground space-y-2 text-pretty border-y border-primary/10 py-3">
                <div className="flex gap-2">
                  <span className="text-primary font-bold">[01]</span>
                  <span>GUIDE CLAW TO DOTTED VECTOR TARGETS</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-primary font-bold">[02]</span>
                  <span>CLICK MOUSE TO PINCH CLAW & GRAB TARGET</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-primary font-bold">[03]</span>
                  <span>COLLECT AS MANY AS POSSIBLE IN 30s</span>
                </div>
              </div>
              <button 
                onClick={() => setGameState("countdown")}
                className="w-full bg-primary hover:bg-primary/95 text-white font-mono text-[10px] font-bold tracking-widest uppercase py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 shadow-sm pointer-events-auto"
              >
                START CHALLENGE
              </button>
            </div>
          </div>
        )}

        {gameState === "gameover" && (
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-2">
            <div className="bg-white/95 border border-primary/15 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center space-y-4 pointer-events-auto backdrop-blur-sm max-w-[280px] text-center">
              <div>
                <span className="font-mono text-[9px] text-primary tracking-widest uppercase block mb-1">
                  RUN COMPLETE
                </span>
                <h4 className="text-sm font-sans font-bold text-foreground uppercase tracking-tight">
                  Autonomous Report
                </h4>
              </div>
              <div className="w-full border-y border-primary/10 py-3 space-y-2 text-left font-mono text-[10px]">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">TARGETS GRABBED:</span>
                  <span className="font-bold text-foreground">{score}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SYSTEM PRECISION:</span>
                  <span className="font-bold text-foreground">
                    {clicks > 0 ? Math.round((hits / clicks) * 100) : 0}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <button 
                  onClick={() => setGameState("countdown")}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-mono text-[10px] font-bold tracking-widest uppercase py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer active:scale-95 shadow-sm pointer-events-auto"
                >
                  RE-INITIALIZE RUN
                </button>
                <button 
                  onClick={() => setGameState("instructions")}
                  className="w-full bg-transparent hover:bg-primary/5 text-primary font-mono text-[8px] font-bold tracking-widest uppercase py-1.5 transition-all duration-300 cursor-pointer pointer-events-auto"
                >
                  VIEW MISSION RULES
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status Row */}
        <div className="flex justify-between w-full font-mono text-[8px] text-muted-foreground/40 mt-auto pt-4">
          <div>FTC.19772.ARM.OS</div>
          <div>MODE: {gameState.toUpperCase()}</div>
        </div>
      </div>
    </div>
  )
}
