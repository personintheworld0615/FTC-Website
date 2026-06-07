/* Hallmark · macrostructure: Stat-Led · design-system: DESIGN.md */
"use client"

import React, { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Target, 
  Award, 
  Sparkles, 
  Ghost, 
  MapPin, 
  Globe, 
  Briefcase, 
  Wrench, 
  ArrowRight
} from "lucide-react"
import { SlideUp, TiltCard, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations"

interface Program {
  title: string
  category: "youth" | "community" | "technical"
  metric: string
  metricLabel: string
  description: string
  icon: React.ElementType
  details: string[]
  svgIllustration: React.ReactNode
}

// Option 2: Floating Gear Parallax Component
function FloatingGear({ size, top, left, speed, rotateSpeed }: { size: number; top: string; left: string; speed: number; rotateSpeed: number }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      className="absolute opacity-[0.08] pointer-events-none hidden md:block text-primary"
      style={{
        width: size,
        height: size,
        top,
        left,
        transform: `translateY(${scrollY * speed}px) rotate(${scrollY * rotateSpeed}deg)`,
        transition: "transform 0.1s ease-out"
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
        <circle cx="50" cy="50" r="22" />
        <circle cx="50" cy="50" r="8" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8
          return (
            <path 
              key={i} 
              d="M 50 22 L 50 10 M 46 10 L 54 10" 
              transform={`rotate(${angle} 50 50)`} 
              strokeLinecap="round" 
            />
          )
        })}
      </svg>
    </div>
  )
}

// Option 2: Kinetic Spring Typography Letters
function KineticLetter({ char }: { char: string }) {
  if (char === " ") return <span className="w-4 select-none">&nbsp;</span>
  return (
    <motion.span
      className="inline-block cursor-default select-none hover:text-primary transition-colors duration-150 transform-gpu"
      whileHover={{ 
        y: -15,
        scale: 1.15,
        transition: { type: "spring", stiffness: 450, damping: 12 }
      }}
    >
      {char}
    </motion.span>
  )
}

// Option 1: String Theory Connection Net Canvas
function ConnectiveNetCanvas() {
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

    const nodeLabels = [
      "Dragoneers #60791",
      "Quakerbridge Mall",
      "Girl Scouts #71924",
      "Trunk or Treat",
      "Summer Camp",
      "BNY Mellon",
      "GMC Precision",
      "RIP Roundtable",
      "TechNoLogic #66295"
    ]

    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      label: string
    }

    const nodes: Node[] = nodeLabels.map((label) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 4,
      label
    }))

    const mouse = { x: -1000, y: -1000 }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const parent = canvas.parentElement
    parent?.addEventListener("mousemove", handleMouseMove)
    parent?.addEventListener("mouseleave", handleMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(200, 90, 50, ${0.08 * (1 - dist / 180)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 50 || node.x > width - 50) node.vx *= -1
        if (node.y < 50 || node.y > height - 50) node.vy *= -1

        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 200) {
          const force = (200 - dist) / 200
          node.x -= dx * force * 0.02
          node.y -= dy * force * 0.02

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(200, 90, 50, ${0.12 * force})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = dist < 200 ? "oklch(0.58 0.20 55)" : "oklch(0.58 0.20 55 / 0.35)"
        ctx.fill()

        ctx.font = "9px monospace"
        ctx.fillStyle = dist < 200 ? "oklch(0.15 0.02 25)" : "oklch(0.45 0.05 35 / 0.4)"
        ctx.fillText(node.label, node.x + 8, node.y + 3)
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      parent?.removeEventListener("mousemove", handleMouseMove)
      parent?.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"all" | "youth" | "community" | "technical">("all")

  const impactStats = [
    {
      number: "600+",
      label: "Hours Volunteered",
      description: "Dedicated to local community STEM education",
      icon: Heart,
    },
    {
      number: "2000+",
      label: "People Reached",
      description: "Engaging and inspiring future innovators",
      icon: Users,
    },
    {
      number: "10+",
      label: "STEM Outreaches",
      description: "Active community events and partnerships",
      icon: Target,
    },
    {
      number: "7",
      label: "New Mentors",
      description: "Industry experts joining our guidance team",
      icon: Award,
    },
  ]

  const programs: Program[] = [
    {
      title: "FIRST Team Mentorship",
      category: "youth",
      metric: "66",
      metricLabel: "Students",
      icon: Users,
      description: "Mentoring FLL teams weekly throughout the season, guiding their technical journey and leading both teams to the State Championships.",
      details: [
        "Weekly technical mentoring for Dragoneers (60791) and TechNoLogic (66295)",
        "Co-founded and trained a new FLL Explore team for children in grades 1-3",
        "Assisted in hands-on mechanics design, logic programming, and presentation prep",
        "Focused on FIRST values of Gracious Professionalism and Coopertition"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="60" cy="90" r="25" className="stroke-primary" />
          <circle cx="140" cy="90" r="25" className="stroke-secondary" />
          <circle cx="100" cy="50" r="20" className="stroke-accent" />
          <path d="M60 90 L100 50 M140 90 L100 50 M60 90 L140 90" strokeDasharray="4 4" />
          <path d="M85 130 C 100 120, 115 120, 130 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "CS & AI Summer Camp",
      category: "youth",
      metric: "K-7th",
      metricLabel: "Grades",
      icon: GraduationCap,
      description: "Our annual week-long computer science and artificial intelligence camp designed to introduce elementary and middle school students to coding and machine learning.",
      details: [
        "July 20 - July 24 at Princeton STEM Academy",
        "Learn core logic flows, Scratch, and Python foundations",
        "Understand computer vision models and sensor-guided automation in robotics",
        "Build and test intelligent software agents through hands-on group projects"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="35" y="35" width="130" height="80" rx="10" className="stroke-primary" strokeWidth="2" />
          <circle cx="65" cy="75" r="15" className="stroke-secondary" />
          <circle cx="135" cy="75" r="15" className="stroke-secondary" />
          <path d="M 65 75 L 135 75" className="stroke-accent" strokeDasharray="3 3" />
          <text x="100" y="55" textAnchor="middle" className="fill-foreground font-mono text-[9px]">AI MODEL</text>
        </svg>
      )
    },
    {
      title: "Summer Battlebots Camp",
      category: "youth",
      metric: "8",
      metricLabel: "Young Creators",
      icon: GraduationCap,
      description: "Hosted a week-long immersive summer camp for elementary school students (Grades 1-3) focused on building and programming battlebots.",
      details: [
        "Taught structural mechanics using Lego EV3 robotics kits",
        "Guided students through autonomous logic flow and sensor programming",
        "Conducted friendly battle tournaments to demonstrate core engineering principles",
        "Evoked absolute delight and early inspiration for STEM career paths"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="50" y="40" width="100" height="70" rx="10" className="stroke-primary" />
          <circle cx="75" cy="110" r="15" className="stroke-secondary" />
          <circle cx="125" cy="110" r="15" className="stroke-secondary" />
          <line x1="100" y1="40" x2="100" y2="20" className="stroke-accent" strokeWidth="3" />
          <circle cx="100" cy="15" r="5" className="fill-accent stroke-accent" />
          <path d="M70 70 L90 70 M110 70 L130 70" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Girl Scouts of America",
      category: "youth",
      metric: "15",
      metricLabel: "Scouts",
      icon: Award,
      description: "Partnered with Girl Scouts Troop #71924 to run hands-on engineering tutorials and help them earn their official Programming Badges.",
      details: [
        "Introduced structural design concepts using LEGO and EV3 ecosystems",
        "Created custom gamified coding puzzles to demystify logic trees",
        "Encouraged female participation in competitive STEM environments",
        "Demonstrated real-world mechanical applications of daily coding loops"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M100 20 L150 55 L130 115 L70 115 L50 55 Z" className="stroke-primary" />
          <polygon points="100,45 110,65 132,68 116,84 120,105 100,95 80,105 84,84 68,68 90,65" className="stroke-accent fill-accent/10" />
          <circle cx="100" cy="80" r="40" strokeDasharray="3 3" className="stroke-secondary" />
        </svg>
      )
    },
    {
      title: "Quakerbridge Mall Demo",
      category: "community",
      metric: "200+",
      metricLabel: "Active Visitors",
      icon: MapPin,
      description: "Set up a full demonstration field at Quakerbridge Mall, giving the public a hands-on opportunity to interact with our robot.",
      details: [
        "Allowed children and adults to drive the robot using professional controllers",
        "Showcased our technical posters and physical engineering portfolios",
        "Discussed STEM accessibility and answered parents' program enrollment queries",
        "Spread FIRST principles to a diverse, public retail audience"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30 120 L170 120" strokeWidth="3" className="stroke-muted-foreground" />
          <rect x="70" y="50" width="60" height="70" rx="5" className="stroke-primary" />
          <circle cx="85" cy="120" r="10" className="stroke-secondary" />
          <circle cx="115" cy="120" r="10" className="stroke-secondary" />
          <path d="M50 80 Q70 60 90 80" className="stroke-accent" strokeDasharray="2 2" />
          <circle cx="50" cy="80" r="4" className="fill-accent stroke-accent" />
        </svg>
      )
    },
    {
      title: "Trunk or Treat STEM Fest",
      category: "community",
      metric: "200+",
      metricLabel: "Participants",
      icon: Ghost,
      description: "Brought interactive engineering challenges to the West Windsor Historical Society's annual autumn celebration.",
      details: [
        "Distributed custom-designed brochures explaining student-led robotics teams",
        "Showcased our robot components and answered mechanics questions",
        "Met local policymakers to advocate for school district STEM funding",
        "Passed out treats alongside flyers to make technology approachable and fun"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M100 30 C70 30 50 50 50 80 C50 110 70 120 100 120 C130 120 150 110 150 80 C150 50 130 30 100 30 Z" className="stroke-primary" />
          <circle cx="85" cy="65" r="6" className="fill-accent stroke-accent" />
          <circle cx="115" cy="65" r="6" className="fill-accent stroke-accent" />
          <path d="M80 95 Q100 105 120 95" strokeLinecap="round" className="stroke-secondary" />
          <path d="M50 120 L60 135 L80 120 L100 135 L120 120 L140 135 L150 120" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "RIP Roundtable Series",
      category: "technical",
      metric: "6",
      metricLabel: "Global Teams",
      icon: Globe,
      description: "Hosted an international roundtable webinar connecting FTC teams from multiple countries to discuss design and programming.",
      details: [
        "Brought together attendees from #24090, #17844, #32097, and others",
        "Connected competitive teams from Netherlands, Romania, Mexico, and Germany",
        "Shared custom libraries, autonomous strategies, and game piece detection code",
        "Fostered global collaboration and cross-border engineering friendships"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="100" cy="75" r="45" className="stroke-primary" />
          <ellipse cx="100" cy="75" rx="45" ry="15" className="stroke-secondary" />
          <ellipse cx="100" cy="75" rx="15" ry="45" className="stroke-secondary" />
          <line x1="100" y1="30" x2="100" y2="120" />
          <line x1="55" y1="75" x2="145" y2="75" />
          <circle cx="70" cy="50" r="3" className="fill-accent stroke-accent" />
          <circle cx="130" cy="100" r="3" className="fill-accent stroke-accent" />
        </svg>
      )
    },
    {
      title: "R.I.P at BNY Mellon",
      category: "technical",
      metric: "12",
      metricLabel: "Experts Engaged",
      icon: Briefcase,
      description: "Presented our engineering work to professional developers and product designers at BNY Mellon for corporate review.",
      details: [
        "Gathered advice on widening our intake subassembly mechanisms",
        "Discussed performance tuning for odometry calculations and loop times",
        "Obtained critiques on portfolio visual layout and typography contrast",
        "Recruited 2 veteran engineering mentors to guide our future seasons"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="40" y="50" width="120" height="70" rx="10" className="stroke-primary" />
          <path d="M80 50 L80 35 C80 30, 120 30, 120 35 L120 50" className="stroke-secondary" />
          <line x1="40" y1="80" x2="160" y2="80" />
          <circle cx="100" cy="80" r="8" className="stroke-accent fill-background" />
        </svg>
      )
    },
    {
      title: "GMC Precision Learning",
      category: "technical",
      metric: "20+",
      metricLabel: "Engineers Met",
      icon: Wrench,
      description: "Collaborated with GMC Precision's industrial design shop to study precision fabrication and structural safety protocols.",
      details: [
        "Explored heavy machinery operations, CNC routing, and parts tolerance",
        "Consulted with automotive fabricators on robust belt-tensioning setups",
        "Applied professional machinery tension math to our custom slide systems",
        "Bridged high-school robotics with industrial manufacturing principles"
      ],
      svgIllustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full text-primary/20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="100" cy="75" r="30" className="stroke-primary" />
          <circle cx="100" cy="75" r="15" className="stroke-secondary" />
          <path d="M100 35 L100 45 M100 105 L100 115 M60 75 L70 75 M130 75 L140 75" strokeWidth="3" strokeLinecap="round" />
          <path d="M72 47 L79 54 M121 96 L128 103 M72 103 L79 96 M121 54 L128 47" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    }
  ]

  const filteredPrograms = activeTab === "all" 
    ? programs 
    : programs.filter(p => p.category === activeTab)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[100dvh] relative overflow-hidden flex flex-col justify-center border-b border-border/40 bg-background select-none">
        {/* Option 1 Connective Net Canvas Background */}
        <ConnectiveNetCanvas />

        {/* Option 2 Parallax Gears */}
        <FloatingGear size={120} top="15%" left="8%" speed={0.2} rotateSpeed={0.3} />
        <FloatingGear size={80} top="65%" left="82%" speed={0.4} rotateSpeed={-0.5} />
        <FloatingGear size={60} top="25%" left="72%" speed={0.15} rotateSpeed={0.2} />

        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 pointer-events-none z-0" />
        <div className="absolute bottom-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
            <StaggerItem>
              <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border-primary/20 text-primary bg-primary/10">
                <Sparkles className="w-3 h-3 mr-2 inline animate-pulse" />
                GRACIOUS PROFESSIONALISM IN ACTION
              </Badge>
            </StaggerItem>
            
            {/* Option 2 Kinetic Typography Splitted Header */}
            <StaggerItem>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9] flex flex-wrap justify-center">
                <span className="flex">
                  {"Lifting Up Our".split("").map((c, i) => (
                    <KineticLetter key={`t1-${i}`} char={c} />
                  ))}
                </span>
                <span className="w-full lg:w-auto flex justify-center lg:ml-4 font-serif italic font-light text-primary text-[1.05em] capitalize tracking-normal">
                  {"Community.".split("").map((c, i) => (
                    <KineticLetter key={`t2-${i}`} char={c} />
                  ))}
                </span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                To us, FIRST is more than building competitive robots. It is about sharing knowledge, guiding the next generation of engineers, and connecting local talent globally.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-card border-b border-border/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <SlideUp className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-mono uppercase tracking-widest text-muted-foreground font-bold">
                OUR MEASURED IMPACT
              </h2>
              <p className="text-lg text-foreground font-semibold">
                Quantifying our commitment to community empowerment and STEM literacy.
              </p>
            </SlideUp>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <StaggerItem key={index}>
                    <TiltCard className="h-full">
                      <div className="p-8 h-full rounded-[2.5rem] bg-white/70 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/25 transition-all duration-300 flex flex-col justify-between group">
                        <div className="space-y-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="text-5xl lg:text-6xl font-sans font-extrabold text-primary tracking-tighter">
                            {stat.number}
                          </div>
                        </div>
                        <div className="space-y-2 mt-6">
                          <h3 className="text-md font-mono uppercase tracking-wider text-foreground font-bold">
                            {stat.label}
                          </h3>
                          <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Programs & Initiatives Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <SlideUp className="text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[1.05]">
                Our Outreach Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
                Click a category below to explore how we connect with youth, public crowds, and corporate engineers.
              </p>
            </SlideUp>

            {/* Filter Tabs */}
            <SlideUp className="flex flex-wrap justify-center gap-3">
              {[
                { id: "all", label: "All Outreaches" },
                { id: "youth", label: "Youth & FLL Mentorship" },
                { id: "community", label: "Community Demos" },
                { id: "technical", label: "Professional Connects" },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`rounded-full px-6 py-5 text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90" 
                      : "border-primary/10 hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </SlideUp>

            {/* Asymmetrical Programs Showcase */}
            <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 min-h-[600px] items-start">
              {filteredPrograms.map((program, index) => {
                const isLarge = index % 3 === 0
                return (
                  <StaggerItem 
                    key={program.title} 
                    className={`${isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"}`}
                  >
                    <TiltCard className="h-full">
                      <Card className={`h-full border border-primary/10 rounded-[2.5rem] bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-500 flex flex-col justify-between group`}>
                        <div className={`p-8 lg:p-12 flex flex-col justify-between h-full ${
                          isLarge ? "lg:flex-row gap-12 items-center" : "gap-8"
                        }`}>
                          
                          {/* Content Column */}
                          <div className={`space-y-6 flex-1 ${isLarge ? "lg:max-w-xl" : ""}`}>
                            <div className="flex items-center gap-4">
                              <Badge className="bg-primary/10 text-primary border-none rounded-full px-3 py-1 font-mono text-xs uppercase font-semibold">
                                {program.metric} {program.metricLabel}
                              </Badge>
                              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{program.category}</span>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-sans font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {program.title}
                            </h3>

                            <p className="text-base leading-relaxed text-muted-foreground font-medium">
                              {program.description}
                            </p>

                            <div className="w-12 h-[1px] bg-primary/20 group-hover:w-20 transition-all duration-300" />

                            <ul className="space-y-3">
                              {program.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed font-medium">
                                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                            {program.title === "CS & AI Summer Camp" && (
                              <div className="pt-2">
                                <Button size="sm" className="rounded-xl px-4 py-2 text-xs font-bold bg-[#C85A32] text-white hover:bg-[#C85A32]/90 transition-transform active:scale-95" asChild>
                                  <a href="/camp">
                                    Learn More & Register
                                    <ArrowRight className="w-3 h-3 ml-1.5 inline-block shrink-0" />
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>

                          {/* Graphical Placeholder Column */}
                          <div className={`shrink-0 w-full rounded-[2rem] bg-white border border-primary/5 shadow-inner flex items-center justify-center p-6 transition-all duration-500 group-hover:bg-primary/5 ${
                            isLarge ? "lg:w-[320px] aspect-[4/3]" : "aspect-[16/10]"
                          }`}>
                            {program.svgIllustration}
                          </div>

                        </div>
                      </Card>
                    </TiltCard>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Friendly Call to Action */}
      <section className="py-24 relative overflow-hidden bg-card" aria-label="Partner with us">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <ScaleIn className="space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
                <Heart className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-sans font-extrabold text-foreground tracking-tighter uppercase">
                Want to Invite Us to <br />
                <span className="font-serif italic font-light text-primary tracking-normal capitalize">Your Event?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                We love running live robot demonstrations, mentoring local Scout groups, and visiting schools to inspire young builders. Let's arrange a visit or partnership.
              </p>
            </ScaleIn>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-xl px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all duration-200 active:scale-95 font-semibold text-sm uppercase tracking-wider" asChild>
                <a href="/contact">Arrange a Demo</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-8 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all duration-200 active:scale-95 font-semibold text-sm uppercase tracking-wider" asChild>
                <a href="mailto:rustinpieceftc@gmail.com?subject=Outreach%20Partnership%20Inquiry">Email Our Outreach Captain</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
