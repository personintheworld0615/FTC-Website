"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Node {
  id: string
  label: string
  mentors: string[]
  details: string
  x: number
  y: number
  left: string
  top: string
}

export function MentorConnectionWeb() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const nodes: Node[] = [
    {
      id: "jnj",
      label: "J & J",
      mentors: ["Dr. Slemmons"],
      details: "Mechanical assembly, fabrication & validation",
      x: 100,
      y: 80,
      left: "20%",
      top: "21.05%",
    },
    {
      id: "njit",
      label: "NJIT",
      mentors: ["Dr. Ed Chan"],
      details: "Mathematical formulas & mechanical physics",
      x: 380,
      y: 60,
      left: "76%",
      top: "15.79%",
    },
    {
      id: "onshape",
      label: "Onshape",
      mentors: ["Prashant Gupta"],
      details: "CAD workflow & precise component modeling",
      x: 80,
      y: 280,
      left: "16%",
      top: "73.68%",
    },
    {
      id: "coinbase",
      label: "Coinbase",
      mentors: ["Aarush Sharma"],
      details: "Software drivetrain pathfinding & prototyping",
      x: 420,
      y: 260,
      left: "84%",
      top: "68.42%",
    },
    {
      id: "rimowa",
      label: "RIMOWA",
      mentors: ["Siddharth Reddy"],
      details: "Outreach strategy & business team structure",
      x: 230,
      y: 50,
      left: "46%",
      top: "13.16%",
    },
    {
      id: "bny",
      label: "BNY Mellon",
      mentors: ["James P.", "Amitra M.", "Abhay N.", "Lavanya S."],
      details: "Autonomous tuning, presentation coaching & sponsorships",
      x: 260,
      y: 300,
      left: "52%",
      top: "78.95%",
    },
  ]

  const centralNode = { x: 250, y: 170, left: "50%", top: "44.74%", label: "FTC 19772" }

  return (
    <div className="w-full h-full min-h-[400px] bg-card rounded-[2.5rem] border border-border/40 p-6 flex flex-col justify-between relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Coordinate space container for matching SVG & HTML layers */}
      <div className="relative w-full h-full flex-grow pointer-events-auto">
        
        {/* SVG Canvas for connection lines - matching coordinate space of parent */}
        <svg 
          viewBox="0 0 500 380" 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.58 0.20 55 / 0.1)" />
              <stop offset="50%" stopColor="oklch(0.58 0.20 55)" />
              <stop offset="100%" stopColor="oklch(0.58 0.20 55 / 0.1)" />
            </linearGradient>
          </defs>

          {/* Dynamic linking lines */}
          {nodes.map((node) => {
            const isHovered = hoveredNode === node.id
            const opacity = hoveredNode === null ? 0.25 : isHovered ? 0.95 : 0.08

            return (
              <g key={`link-${node.id}`}>
                {/* Backing structural line */}
                <line
                  x1={centralNode.x}
                  y1={centralNode.y}
                  x2={node.x}
                  y2={node.y}
                  className="stroke-primary transition-all duration-500 ease-out"
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  style={{ opacity }}
                />
                
                {/* Glowing animated line on hover */}
                {isHovered && (
                  <line
                    x1={centralNode.x}
                    y1={centralNode.y}
                    x2={node.x}
                    y2={node.y}
                    stroke="url(#lineGrad)"
                    strokeWidth={3}
                    strokeDasharray="10 15"
                    style={{
                      animation: "flowLine 1.5s linear infinite",
                    }}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* Dynamic inline styles for the flowing hover lines */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes flowLine {
            0% { stroke-dashoffset: 25; }
            100% { stroke-dashoffset: 0; }
          }
        `}} />

        {/* Central Node */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 bg-foreground text-background flex flex-col items-center justify-center rounded-full w-20 h-20 shadow-md border-4 border-background z-20"
          style={{ left: centralNode.left, top: centralNode.top }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-mono text-[10px] tracking-widest text-background/60 uppercase select-none">// RIP</span>
          <span className="font-bold font-sans text-xs tracking-tighter uppercase text-background">19772</span>
        </motion.div>

        {/* Surround Nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id
          const isDimmed = hoveredNode !== null && !isHovered

          return (
            <motion.div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
              style={{ left: node.left, top: node.top }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              animate={{
                scale: isHovered ? 1.08 : 1,
                opacity: isDimmed ? 0.35 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className={`px-4 py-2 bg-[#FAF6F0] rounded-[1.25rem] border shadow-sm transition-all duration-300 flex flex-col items-center justify-center ${
                  isHovered ? "border-primary bg-primary/5 scale-105" : "border-border/40"
                }`}
              >
                <span className="text-xs font-bold text-foreground font-sans tracking-tight">{node.label}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Detail Overlay */}
      <div className="mt-4 min-h-[70px] bg-[#FAF6F0]/80 backdrop-blur-sm rounded-[1.5rem] border border-border/20 p-4 flex flex-col justify-center transition-all duration-300">
        <AnimatePresence mode="wait">
          {hoveredNode ? (
            nodes
              .filter((node) => node.id === hoveredNode)
              .map((node) => (
                <motion.div
                  key={`detail-${node.id}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary font-sans">{node.label} Advisors</span>
                    <span className="text-[10px] font-mono text-muted-foreground">// {node.mentors.join(", ")}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{node.details}</p>
                </motion.div>
              ))
          ) : (
            <motion.div
              key="default-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col justify-center h-full items-center text-center py-1"
            >
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                Hover nodes to explore guiding connections
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
