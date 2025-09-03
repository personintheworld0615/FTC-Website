"use client"

import { useState, useEffect } from "react"

interface InteractiveCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function InteractiveCounter({ end, duration = 2000, suffix = "", prefix = "" }: InteractiveCounterProps) {
  const [count, setCount] = useState(0)
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

    const element = document.getElementById(`counter-${end}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [end, isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(easeOutQuart * end))

      if (progress >= 1) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <span id={`counter-${end}`} className="font-bold text-primary">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
