"use client"

import React, { useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Network, Cpu, Briefcase } from 'lucide-react'
import { SlideUp, StaggerContainer, StaggerItem, TiltCard } from "@/components/animations"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Mentor {
  name: string
  title: string
  company: string
  bio: string
  highlights?: string[]
  image?: string | null
}

function MagneticElement({ children, range = 35 }: { children: React.ReactNode; range?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    
    if (distance < range) {
      x.set(distanceX * 0.45)
      y.set(distanceY * 0.45)
    } else {
      x.set(0)
      y.set(0)
    }
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

function CompanyLogo({ name }: { name: string }) {
  switch (name.toUpperCase()) {
    case "COINBASE":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0052FF] shrink-0" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.16 0 3.99-1.37 4.67-3.29h-2.19c-.52.92-1.5 1.54-2.48 1.54-1.66 0-3-1.34-3-3s1.34-3 3-3c.98 0 1.96.62 2.48 1.54h2.19C15.99 8.37 14.16 7 12 7z" fill="white" />
        </svg>
      )
    case "BNY":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-4 text-[#C85A32] fill-current shrink-0">
          <path d="M4 2L12 8L4 14L8 8Z" />
          <path d="M11 2L19 8L11 14L15 8Z" />
        </svg>
      )
    case "RIMOWA":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-foreground stroke-current fill-none shrink-0" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7" y1="4" x2="7" y2="20" />
          <line x1="10" y1="4" x2="10" y2="20" />
          <line x1="13" y1="4" x2="13" y2="20" />
          <line x1="17" y1="4" x2="17" y2="20" />
        </svg>
      )
    case "NJIT":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#D71920] fill-current shrink-0">
          <path d="M12 2L4 5v6c0 5.25 3.42 10.16 8 11 4.58-.84 8-5.75 8-11V5l-8-3zm-2 12H8V8h2v6zm4 0h-2V8h2v6z" />
        </svg>
      )
    case "KNOWLIFY":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4F46E5] fill-none stroke-current shrink-0" strokeWidth="2.5">
          <path d="M5 3v18M5 12h5l7-9M10 12l8 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case "ONSHAPE":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#10B981] fill-current shrink-0">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fillRule="evenodd" />
        </svg>
      )
    case "J & J":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-5 text-[#D11919] fill-none stroke-current shrink-0" strokeWidth="2">
          <path d="M6 4c0 0-2 4-2 7s3 4 3 6-2 3-2 3M18 4c0 0-2 4-2 7s3 4 3 6-2 3-2 3M9 12h6" strokeLinecap="round" />
        </svg>
      )
    case "UPIT":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1D4ED8] fill-current shrink-0">
          <path d="M12 2L3 6v6c0 5.5 4.5 10 9 10s9-4.5 9-10V6l-9-4zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
        </svg>
      )
    default:
      return null
  }
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center relative overflow-hidden shadow-inner border border-primary/10">
      <span className="font-mono text-3xl font-bold text-primary/80 tracking-tight relative z-0 transition-transform duration-200 ease-out group-hover/avatar:scale-110">
        {initials}
      </span>
    </div>
  )
}

function AvatarContainer({ mentor }: { mentor: Mentor }) {
  return (
    <div 
      className="relative z-10 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-background border-[6px] border-background shadow-sm group/avatar"
    >
      {mentor.image ? (
        <img
          src={mentor.image}
          alt={`${mentor.name} - ${mentor.title}`}
          className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover/avatar:scale-105"
        />
      ) : (
        <AvatarPlaceholder name={mentor.name} />
      )}
    </div>
  )
}

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
  <TiltCard className="h-full">
    <Card className="h-full border border-border/40 rounded-[2rem] bg-card shadow-sm hover:shadow-md transition-shadow duration-200 ease-out flex flex-col justify-between overflow-hidden group/card">
      <div>
        <CardHeader className="text-center pb-6 border-b border-border/10 bg-muted/5 relative">
          <div className="mx-auto mb-6 relative w-36 h-36 flex items-center justify-center">
            <AvatarContainer mentor={mentor} />
          </div>
          <CardTitle className="text-2xl font-sans tracking-tight text-foreground flex items-center justify-center gap-2">
            {mentor.name}
          </CardTitle>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-0 rounded-full px-3 py-0.5 text-xs font-semibold">
              {mentor.title}
            </Badge>
            <MagneticElement range={25}>
              <CompanyLogo name={mentor.company} />
            </MagneticElement>
          </div>
        </CardHeader>
        <CardContent className="pt-6 px-8 pb-8 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>
          
          {mentor.highlights && mentor.highlights.length > 0 && (
            <div className="pt-4 border-t border-border/20 space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80 font-bold">
                Focus Areas & Advice
              </div>
              <ul className="space-y-2">
                {mentor.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2.5 leading-relaxed group/bullet">
                    <span className="text-primary font-mono text-[9px] mt-1 select-none transition-transform duration-200 ease-out group-hover/bullet:translate-x-1">//</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  </TiltCard>
)

export default function MentorsPage() {
  const coreMentors: Mentor[] = [
    {
      name: "Dr. Rogers",
      title: "Founder of Princeton Stem Academy",
      company: "Princeton Stem Academy",
      bio: "Foundational leader of the program who facilitates our community outreach, coordinates major fundraising campaigns, and guides overall team organizational development.",
      image: "/images/dr-rogers.png",
    },
    {
      name: "Dr. Slemmons",
      title: "Biomedical Engineer",
      company: "J & J",
      bio: "Industry professional providing critical engineering mentorship in robot assembly, mechanical fabrication, and structured design validation processes.",
      image: "/images/drslemmons.png",
    },
    {
      name: "Mr. Levy",
      title: "Industry Professional",
      company: "Levy",
      bio: "Technical advisor assisting the team with complex physics calculations, robotics automation programming, and hands-on fabrication techniques.",
      image: "/images/mr-levy.png",
    },
  ]

  const techAdvisors: Mentor[] = [
    {
      name: "Ed Chan",
      title: "Physics Professor @ NJIT",
      company: "NJIT",
      bio: "Academic partner who kick-started our mechanical development and provided mathematical guidance.",
      highlights: [
        "Explained projectile motion equations in the context of FTC scoring",
        "Kick-started advanced physics calculations at the start of the season",
      ],
      image: "/images/edchan.png",
    },
    {
      name: "Prashant Gupta",
      title: "Software Developer @ Onshape",
      company: "Onshape",
      bio: "Industry developer helping the team build a robust virtual workspace and model parts precisely.",
      highlights: [
        "Helped us elevate our computer-aided design (CAD) workflow",
        "Aided with the initial steps of the component design process",
      ],
      image: "/images/prashant.png",
    },
    {
      name: "Tejas Mitra",
      title: "FIRST Alumni @ UPIT (CS Major)",
      company: "UPIT",
      bio: "Former competitor offering critical engineering review of our physical mechanisms and strategies.",
      highlights: [
        "Offered design review and advice on major subsystems (Shooter + Intake)",
        "Encouraged our drivers to configure the robot for strong defensive play",
      ],
      image: "/images/Tejas.png",
    },
    {
      name: "Aarush Sharma",
      title: "FIRST Alumni @ Coinbase",
      company: "Coinbase",
      bio: "Alumnus helping bridge school robotics with software and prototype engineering.",
      highlights: [
        "Helped the software department finalize a working robot prototype",
        "Guided us on interpolating lookup tables for automated shooting",
      ],
      image: "/images/aarush.png",
    },
  ]

  const strategyAdvisors: Mentor[] = [
    {
      name: "Siddharth Reddy",
      title: "Chief Marketing Director @ RIMOWA",
      company: "RIMOWA",
      bio: "Brand leader who advised the team on structuring organizational outreach and marketing presence.",
      highlights: [
        "Gave detailed advice on how to structure our business team",
        "Guided us on integrating and onboarding our 8 rookie members",
        "Helped coordinate corporate sponsorship initiatives with RIMOWA",
      ],
      image: "/images/sid-reddy.png",
    },
    {
      name: "Ritam Rana",
      title: "FIRST Alumni @ CEO, Knowlify",
      company: "Knowlify",
      bio: "Entrepreneurial mentor guiding our outreach footprint and team presentation format.",
      highlights: [
        "Provided structural advice on Engineering Portfolio (EP) layout",
        "Suggested community outreach opportunities and local events",
        "Inspired the team to establish the RIP roundtable discussion series",
      ],
      image: "/images/ritamk.png",
    },
  ]

  const bnyCohort: Mentor[] = [
    {
      name: "James Percardo",
      title: "Former Coach of FTC 20171",
      company: "BNY",
      bio: "Veteran mentor assisting our programming department with odometry control and autonomous math.",
      highlights: [
        "Encouraged the integration of ODO (odometry) tracking in teleop mode",
        "Assisted in configuring heading lock controls and waypoint navigation",
        "Aided in software drivetrain tuning and feedback loops",
      ],
      image: "/images/jamespec.png",
    },
    {
      name: "Amitra Mahapatro",
      title: "Director – Treasury Services",
      company: "BNY",
      bio: "Financial services lead supporting the optimization of team software architectures.",
      highlights: [
        "Advised on structured formatting for subassembly programming classes",
        "Suggested performance-focused code optimizations for autonomous period",
      ],
      image: "/images/amrita.png",
    },
    {
      name: "Abhay Navale",
      title: "Global Head – Digital Assets Tech",
      company: "BNY",
      bio: "Technology executive mentoring the business department in presentation and fiscal planning.",
      highlights: [
        "Assisted with structuring fiscal sponsorships and our team business plan",
        "Connected our team with BNY Mellon corporate for Giving Week support",
      ],
      image: "/images/Abhay.png",
    },
    {
      name: "Lavana Stalin",
      title: "Major Incident Management Lead",
      company: "BNY",
      bio: "Operations leader coaching our presenters on clear communication and portfolio structuring.",
      highlights: [
        "Gave critical insights into professional Engineering Portfolio formatting",
        "Coached presenters on public speaking, tone, and slide delivery",
      ],
      image: "/images/Lavanya.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 border-b border-border/20 relative overflow-hidden flex flex-col justify-center min-h-[40vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer className="max-w-xl space-y-8">
              <StaggerItem>
                <Badge variant="outline" className="text-xs font-mono tracking-wider uppercase px-4 py-1.5 rounded-full border-border/40 text-muted-foreground bg-muted/5">
                  Our Mentors & Connections
                </Badge>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                  Guiding Our <br/><span className="font-serif italic text-[1.1em] font-light text-muted-foreground">Journey.</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  Meet the experienced professionals and corporate advisors who provide mathematical, mechanical, and strategic guidance to Rust in Piece.
                </p>
              </StaggerItem>
            </StaggerContainer>
            <SlideUp className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border-2 border-border/40 shadow-sm hidden lg:block grayscale-[0.2]">
              <img src="/images/mentorship-philosophy.png" alt="Mentorship Philosophy" className="w-full h-full object-cover mix-blend-normal" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply border border-primary/10 rounded-[2rem] pointer-events-none"></div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Expanded Mentors Showcase (Direct Visual Presentation) */}
      <section className="py-24 lg:py-32 bg-slate-50/30 border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          {/* Section 1: Core Mentors */}
          <SlideUp className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-foreground tracking-tight uppercase">Program Leaders & Core Mentors</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Our main STEM academy leaders and hands-on engineering mentors who guide our daily progress.
              </p>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreMentors.map((mentor, index) => (
                <StaggerItem key={index}>
                  <MentorCard mentor={mentor} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideUp>

          {/* Section 2: Technical Advisory */}
          <SlideUp className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Cpu className="w-8 h-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-foreground tracking-tight uppercase">Technical & Engineering Advisory</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Academic and software industry experts who advise the team on CAD, software engineering, and mechanical physics calculations.
              </p>
            </div>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {techAdvisors.map((mentor, index) => (
                <StaggerItem key={index}>
                  <MentorCard mentor={mentor} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideUp>

          {/* Section 3: Strategic Advisory */}
          <SlideUp className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Network className="w-8 h-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-foreground tracking-tight uppercase">Outreach & Strategic Advisory</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Industry professionals and FIRST alumni coaching us on brand representation, business structure, and community engagement.
              </p>
            </div>
            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {strategyAdvisors.map((mentor, index) => (
                <StaggerItem key={index}>
                  <MentorCard mentor={mentor} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideUp>

          {/* Section 4: BNY Cohort */}
          <SlideUp className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-foreground tracking-tight uppercase">Corporate Partners: BNY Mellon Cohort</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Corporate tech leaders who mentored us in code optimization, presentation coaching, and fiscal sponsorships.
              </p>
            </div>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {bnyCohort.map((mentor, index) => (
                <StaggerItem key={index}>
                  <MentorCard mentor={mentor} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideUp>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-4xl mx-auto space-y-8 p-12 md:p-16 rounded-[2rem] border-[6px] border-border/20 bg-muted/5 shadow-none relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 space-y-4 md:w-2/3">
              <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tight">
                Interested in <span className="font-serif italic font-light text-muted-foreground">Mentoring?</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                We're always looking for experienced professionals who want to share their knowledge and help inspire the next generation of engineers.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-1/3 w-full shrink-0">
              <Button size="lg" className="w-full rounded-xl px-8 uppercase tracking-wider text-xs font-bold transition-all duration-200 ease-out active:scale-[0.97]" asChild>
                <a href="/contact"><span className="relative z-10">Get Involved</span></a>
              </Button>
              <Button variant="outline" size="lg" className="w-full rounded-xl px-8 uppercase tracking-wider text-xs font-bold border-border hover:bg-muted/10 hover:text-foreground transition-all duration-200 ease-out active:scale-[0.97]" asChild>
                <a href="/team"><span className="relative z-10">Learn About Our Team</span></a>
              </Button>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
