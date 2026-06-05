"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Crown, Cpu, Wrench, Briefcase, X, SlidersHorizontal, Info, Award, Calendar, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { StaggerContainer, StaggerItem, SlideUp, TiltCard } from "@/components/animations"
import { RobotDivider } from "@/components/robot-divider"

interface TeamMember {
  name: string
  role: string
  grade: string
  specialties: string[]
  bio: string
  image: string
  level: "leadership" | "associate" | "trainee"
  department: "programming" | "mechanical" | "outreach"
}

export default function TeamPageClient() {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const allMembers: TeamMember[] = [
    // Leadership
    {
      name: "Rohin K",
      role: "Captain",
      grade: "11th Grade",
      specialties: ["Leadership", "Strategy", "Team Management"],
      bio: "Leads the team with vision, coordinates department goals, and oversees all tournament logistics and strategy operations.",
      image: "/kudeti.jpg",
      level: "leadership",
      department: "outreach",
    },
    {
      name: "Chinmay C",
      role: "Co-Captain",
      grade: "9th Grade",
      specialties: ["Leadership", "CAD", "Design"],
      bio: "Supports team leadership, coordinates mechanical build sessions, and drives team design reviews and innovations.",
      image: "/chin2.jpg",
      level: "leadership",
      department: "mechanical",
    },
    {
      name: "Krish S",
      role: "Programming Lead",
      grade: "10th Grade",
      specialties: ["Java", "Autonomous", "Control Systems"],
      bio: "Manages all codebases, designs autonomous routing algorithms, and implements high-performance sensor feedback control.",
      image: "/krish.jpg",
      level: "leadership",
      department: "programming",
    },
    {
      name: "Aarav G",
      role: "Business Lead",
      grade: "9th Grade",
      specialties: ["Outreach", "Sponsorships", "Marketing"],
      bio: "Manages the team treasury, coordinates corporate sponsorship campaigns, and handles team public relations.",
      image: "/GOAT.jpg",
      level: "leadership",
      department: "outreach",
    },
    {
      name: "Srihaan B",
      role: "Mechanical Lead",
      grade: "10th Grade",
      specialties: ["CAD", "Assembly", "Engineering"],
      bio: "Manages the mechanical design of the drive-train and intake systems, overseeing CAD design integration and parts assembly.",
      image: "/sri.JPG",
      level: "leadership",
      department: "mechanical",
    },
    {
      name: "Ishana M",
      role: "Outreach Captain",
      grade: "11th Grade",
      specialties: ["Community Engagement", "Social Media", "Events"],
      bio: "Coordinates all outreach initiatives, spreads the mission of FIRST in the community, and hosts youth workshops.",
      image: "/ishana.jpg",
      level: "leadership",
      department: "outreach",
    },
    // Associates
    {
      name: "Akshit T",
      role: "Programming Associate",
      grade: "12th Grade",
      specialties: ["Sensors", "Vision"],
      bio: "Focuses on vision detection and camera integration for precise autonomous object alignment.",
      image: "/dosa2.jpg",
      level: "associate",
      department: "programming",
    },
    {
      name: "Vihaan M",
      role: "Programming Associate",
      grade: "9th Grade",
      specialties: ["Java", "Testing"],
      bio: "Maintains robot control algorithms and runs stress testing protocols on sensor inputs.",
      image: "/3slices.jpg",
      level: "associate",
      department: "programming",
    },
    {
      name: "Atharv S",
      role: "Mechanical Associate",
      grade: "9th Grade",
      specialties: ["Assembly", "CNC"],
      bio: "Fabricates custom brackets and mechanisms using CNC milling and oversees drive-train construction.",
      image: "/atharv.jpeg",
      level: "associate",
      department: "mechanical",
    },
    {
      name: "Varsha K",
      role: "Outreach Associate",
      grade: "10th Grade",
      specialties: ["Social Media", "Events"],
      bio: "Produces documentation content for the engineering portfolio and coordinates school outreach presentations.",
      image: "/varsha.jpg",
      level: "associate",
      department: "outreach",
    },
    // Trainees
    {
      name: "Veer S",
      role: "Mechanical Trainee",
      grade: "11th Grade",
      specialties: ["Assembly", "CAD"],
      bio: "Assists with frame fabrication, material selection, and 3D modeling of custom attachments.",
      image: "/veer.jpg",
      level: "trainee",
      department: "mechanical",
    },
    {
      name: "Sid M",
      role: "Programming Trainee",
      grade: "10th Grade",
      specialties: ["Learning Java", "Problem Solving"],
      bio: "Learning advanced Java programming patterns and debugging autonomous routines.",
      image: "/sid2.jpg",
      level: "trainee",
      department: "programming",
    },
    {
      name: "Ankita S",
      role: "Programming Trainee",
      grade: "9th Grade",
      specialties: ["Learning Java", "Learning TeleOp"],
      bio: "Practices telemetry logging, controller mapping, and custom drive mode coding.",
      image: "/ankita.jpg",
      level: "trainee",
      department: "programming",
    },
    {
      name: "Aditya N",
      role: "Mechanical Trainee",
      grade: "8th Grade",
      specialties: ["CAD", "Assembly"],
      bio: "Acquiring CAD software proficiency and supporting chassis assembly processes.",
      image: "/tuffnavale.jpg",
      level: "trainee",
      department: "mechanical",
    },
    {
      name: "Aditya D",
      role: "Mechanical Trainee",
      grade: "10th Grade",
      specialties: ["Physics", "Learning Business"],
      bio: "Learns mechanics stress analysis, outreach planning, and portfolio drafting.",
      image: "/IMG_2381.jpg",
      level: "trainee",
      department: "mechanical",
    },
    {
      name: "Samarth P",
      role: "Mech Trainee",
      grade: "9th Grade",
      specialties: ["Assembly", "Mech"],
      bio: "Assists in assembly documentation and helps build game element prototypes.",
      image: "/sam2.jpg",
      level: "trainee",
      department: "mechanical",
    },
    {
      name: "Ayush B",
      role: "Outreach Trainee",
      grade: "8th Grade",
      specialties: ["Fundraising", "Spreadability"],
      bio: "Learning outreach program structure, event support, and fundraising strategy.",
      image: "/Ahush",
      level: "trainee",
      department: "outreach",
    },
  ]

  // Keyboard close listener (Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Prevent scrolling on body when drawer is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedMember])

  // Get department metrics for dossier display
  const getMetricsForMember = (member: TeamMember) => {
    if (member.department === "programming") {
      return [
        { name: "Autonomous Routing & Pathing", value: member.level === "leadership" ? 94 : member.level === "associate" ? 82 : 65 },
        { name: "Java System Optimization", value: member.level === "leadership" ? 90 : member.level === "associate" ? 80 : 70 },
        { name: "Control Systems & Telemetry", value: member.level === "leadership" ? 88 : member.level === "associate" ? 78 : 60 }
      ]
    } else if (member.department === "mechanical") {
      return [
        { name: "CAD Tolerances & Design", value: member.level === "leadership" ? 95 : member.level === "associate" ? 84 : 70 },
        { name: "CNC Fabrication & Milling", value: member.level === "leadership" ? 90 : member.level === "associate" ? 78 : 60 },
        { name: "Precision Robot Assembly", value: member.level === "leadership" ? 92 : member.level === "associate" ? 85 : 75 }
      ]
    } else {
      return [
        { name: "Sponsorship & Business Relations", value: member.level === "leadership" ? 96 : member.level === "associate" ? 82 : 65 },
        { name: "Community Outreach Delivery", value: member.level === "leadership" ? 94 : member.level === "associate" ? 85 : 70 },
        { name: "Marketing & Strategy Execution", value: member.level === "leadership" ? 90 : member.level === "associate" ? 80 : 68 }
      ]
    }
  }

  // Get matching icon for department
  const getDepartmentIcon = (dept: string) => {
    switch (dept) {
      case "programming":
        return <Cpu className="w-4 h-4 text-primary" />
      case "mechanical":
        return <Wrench className="w-4 h-4 text-primary" />
      default:
        return <Briefcase className="w-4 h-4 text-primary" />
    }
  }

  const filters = [
    { id: "all", label: "All Members" },
    { id: "leadership", label: "Leadership" },
    { id: "programming", label: "Programming" },
    { id: "mechanical", label: "Mechanical" },
    { id: "outreach", label: "Outreach & Business" },
  ]

  const filteredMembers = allMembers.filter((m) => {
    if (activeFilter === "all") return true
    if (activeFilter === "leadership") return m.level === "leadership"
    return m.department === activeFilter
  })

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 border-b border-border/40 relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
        {/* Vector Background Accent */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
            <StaggerItem>
              <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border-primary/40 text-primary bg-primary/5">
                CREW SPECS // DIRECTORY
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                The Minds Behind <span className="font-drama text-[1.1em] font-light text-primary normal-case">Rust in Piece.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans font-medium text-pretty">
                A highly-specialized team of 17 student engineers, programmers, and business coordinators from Princeton STEM Academy collaborating to build state-of-the-art robot systems.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Telemetry Stats Section */}
      <section className="py-12 bg-muted/40 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-primary/10">
            <StaggerItem className="pt-4 lg:pt-0">
              <div className="text-center space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Active_Crew_Count</div>
                <div className="text-4xl font-extrabold text-primary tracking-tight font-sans">17</div>
                <div className="text-xs font-mono text-muted-foreground/80">[TOTAL MEMBERS]</div>
              </div>
            </StaggerItem>
            <StaggerItem className="pt-4 lg:pt-0">
              <div className="text-center space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Leadership_Nodes</div>
                <div className="text-4xl font-extrabold text-primary tracking-tight font-sans">06</div>
                <div className="text-xs font-mono text-muted-foreground/80">[CAPTAINS & LEADS]</div>
              </div>
            </StaggerItem>
            <StaggerItem className="pt-4 lg:pt-0">
              <div className="text-center space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Departments_Online</div>
                <div className="text-4xl font-extrabold text-primary tracking-tight font-sans">03</div>
                <div className="text-xs font-mono text-muted-foreground/80">[MECH / PROG / OUTREACH]</div>
              </div>
            </StaggerItem>
            <StaggerItem className="pt-4 lg:pt-0">
              <div className="text-center space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Operating_Commitment</div>
                <div className="text-4xl font-extrabold text-primary tracking-tight font-sans">100%</div>
                <div className="text-xs font-mono text-muted-foreground/80">[SYSTEM EFFICIENCY]</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Filter and Grid Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Animated Category Selector */}
          <div className="relative flex flex-wrap justify-center gap-2 p-1.5 bg-muted/60 backdrop-blur-md rounded-3xl md:rounded-full border border-primary/10 max-w-3xl mx-auto mb-16 shadow-inner">
            {filters.map((cat) => {
              const isActive = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative z-10 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground font-medium"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Staggered Masonry Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-6 gap-8 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, index) => {
                const isCaptain = member.role.toLowerCase().includes("captain")
                const isLead = member.role.toLowerCase().includes("lead")
                
                // Captains take up 3 cols on desktop, Leads take up 2, Trainees take 2.
                // This creates a highly custom, staggered editorial grid.
                let gridSpan = "col-span-1 md:col-span-2"
                if (isCaptain) {
                  gridSpan = "col-span-1 md:col-span-3"
                } else if (isLead) {
                  gridSpan = "col-span-1 md:col-span-2"
                }

                return (
                  <motion.div
                    key={member.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className={`${gridSpan} group cursor-pointer`}
                    onClick={() => setSelectedMember(member)}
                  >
                    <TiltCard className="h-full">
                      <div className="h-full border border-primary/10 hover:border-primary/30 rounded-3xl bg-card/65 backdrop-blur-sm p-6 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between">
                        
                        <div>
                          {/* Image Container with terracotta sepia/warm tone */}
                          <div className="relative aspect-[4/3] overflow-hidden bg-primary/5 rounded-2xl mb-6">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover grayscale brightness-95 sepia-[25%] hue-rotate-[10deg] group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                              onError={(e) => {
                                // Fallback image if local photo fails
                                (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/identicon/svg?seed=${member.name}`
                              }}
                            />
                            {/* Blueprint grid lines on card hover */}
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                              style={{
                                backgroundImage: `
                                  linear-gradient(to right, oklch(0.58 0.20 55) 1px, transparent 1px),
                                  linear-gradient(to bottom, oklch(0.58 0.20 55) 1px, transparent 1px)
                                `,
                                backgroundSize: '16px 16px',
                                backgroundPosition: 'center'
                              }}
                            />
                            {/* CAD crosshairs */}
                            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 group-hover:translate-x-0" />
                            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-1 group-hover:translate-x-0" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="border-primary/20 text-primary font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-primary/5">
                                {member.level}
                              </Badge>
                              <div className="flex items-center space-x-1 font-mono text-[10px] text-muted-foreground uppercase">
                                {getDepartmentIcon(member.department)}
                                <span>{member.department}</span>
                              </div>
                            </div>

                            <h3 className="text-2xl font-sans font-extrabold uppercase text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                              {member.name}
                            </h3>
                            
                            <p className="text-sm font-sans font-medium text-primary/80 italic">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-primary/10 flex justify-between items-center text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                          <span>{member.grade}</span>
                          <span className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300 font-sans font-semibold">
                            VIEW DOSSIER <span className="ml-1">→</span>
                          </span>
                        </div>

                      </div>
                    </TiltCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Decorative Robot Divider */}
      <RobotDivider />

      {/* Bottom CTA / Join Section */}
      <section className="py-24 border-t border-border/40 relative overflow-hidden bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-8 relative z-10">
          <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border-primary/40 text-primary bg-primary/5">
            OUTREACH // RECRUITMENT
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
            Want to build <span className="font-drama text-[1.1em] font-light text-primary normal-case">with us?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans max-w-xl mx-auto">
            We are always looking for passionate Princeton STEM Academy students to join our programming, mechanical, or business departments. No prior experience required.
          </p>
          <div className="pt-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/95 text-primary-foreground px-8 py-3.5 rounded-full font-sans font-bold uppercase tracking-wider text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300"
            >
              Get In Touch <Calendar className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Dossier Side Drawer Panel */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-card border-l border-primary/10 shadow-2xl z-50 overflow-y-auto p-6 md:p-12 flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-primary/15 hover:border-primary/40 bg-background/50 hover:bg-background text-foreground/80 hover:text-foreground transition-all duration-300 group"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Header Profile Title */}
                <div className="space-y-3 pt-6">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-primary/40 text-primary px-3 py-1 font-mono uppercase tracking-widest text-[10px] bg-primary/5">
                      {selectedMember.level}
                    </Badge>
                    <Badge variant="outline" className="border-primary/40 text-primary px-3 py-1 font-mono uppercase tracking-widest text-[10px] bg-primary/5 flex items-center space-x-1.5">
                      {getDepartmentIcon(selectedMember.department)}
                      <span>{selectedMember.department}</span>
                    </Badge>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                    {selectedMember.name}
                  </h2>
                  <p className="text-2xl font-drama text-primary/95 italic font-light mt-1">
                    {selectedMember.role}
                  </p>
                </div>

                {/* Photo & Technical specs grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                  <div className="aspect-square bg-muted rounded-2xl overflow-hidden border border-primary/15 relative">
                    <img
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/identicon/svg?seed=${selectedMember.name}`
                      }}
                    />
                    {/* CAD Gridlines on photo */}
                    <div 
                      className="absolute inset-0 opacity-[0.08] pointer-events-none"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, oklch(0.58 0.20 55) 1px, transparent 1px),
                          linear-gradient(to bottom, oklch(0.58 0.20 55) 1px, transparent 1px)
                        `,
                        backgroundSize: '16px 16px',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>

                  <div className="flex flex-col justify-between p-5 bg-muted/40 border border-primary/10 rounded-2xl font-mono text-xs space-y-4">
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground uppercase">[SYS_GRADE]</span>
                      <span className="font-bold text-foreground">{selectedMember.grade}</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground uppercase">[SYS_DEPT]</span>
                      <span className="font-bold text-foreground uppercase">{selectedMember.department}</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground uppercase">[SYS_CLASS]</span>
                      <span className="font-bold text-foreground uppercase">{selectedMember.level}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-muted-foreground uppercase">[SYS_SPECIALTIES]</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedMember.specialties.map((spec) => (
                          <span key={spec} className="text-[10px] bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-sans font-semibold">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="space-y-3">
                  <h4 className="font-sans font-extrabold text-lg text-foreground uppercase tracking-tight flex items-center">
                    <Info className="w-5 h-5 mr-2 text-primary" /> Biography
                  </h4>
                  <p className="text-muted-foreground leading-relaxed font-sans text-base text-pretty">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Technical Dossier Metrics */}
                <div className="space-y-4 pt-6 border-t border-primary/10">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground flex items-center">
                    <Award className="w-4 h-4 mr-1.5 text-primary" /> Technical Dossier Metrics
                  </h4>
                  
                  <div className="space-y-4">
                    {getMetricsForMember(selectedMember).map((metric, i) => (
                      <div key={metric.name} className="space-y-2">
                        <div className="flex justify-between text-sm font-sans font-semibold">
                          <span className="text-foreground">{metric.name}</span>
                          <span className="text-primary font-mono font-bold">{metric.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.value}%` }}
                            transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Technical footer note */}
              <div className="mt-12 pt-4 border-t border-primary/10 flex justify-between items-center text-[10px] font-mono text-muted-foreground">
                <span>SYSTEM ID: 19772_RIP_{selectedMember.name.replace(" ", "_").toUpperCase()}</span>
                <span>STATUS: OPERATIONAL // ONLINE</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
