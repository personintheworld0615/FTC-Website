"use client"

import { useState, useEffect } from "react"

interface InteractiveProgressBarProps {
  percentage: number
  label: string
  color?: string
}

export function InteractiveProgressBar({ percentage, label, color = "bg-primary" }: InteractiveProgressBarProps) {
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`progress-${label}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [label, isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setWidth(percentage)
    }, 200)

    return () => clearTimeout(timer)
  }, [isVisible, percentage])

  return (
    <div id={`progress-${label}`} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all duration-1000 ease-out`} style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}
