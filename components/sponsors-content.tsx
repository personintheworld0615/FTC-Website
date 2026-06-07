"use client"

import React, { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Star, Heart, Building, Cpu, Users, GraduationCap, Compass } from "lucide-react"
import { SlideUp, TiltCard, StaggerContainer, StaggerItem } from "@/components/animations"
import Link from "next/link"

export function SponsorsContent() {
  const [clickCount, setClickCount] = useState(0)
  const [goldTheme, setGoldTheme] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Branded console developer log
    console.log(
      "%c⚡ RUST IN PIECE FTC 19772 ⚡\nLooking under the hood? Build something remarkable with us! \nContact: rustinpieceftc@gmail.com",
      "color: #C85A32; font-family: monospace; font-size: 13px; font-weight: bold; line-height: 1.5;"
    )
  }, [])

  const handleCrownClick = () => {
    setClickCount((prev) => {
      const next = prev + 1
      if (next === 5) {
        setGoldTheme(true)
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 4000)
        return 0
      }
      return next
    })
  }

  const benefitsList = [
    {
      name: "Logo on team merch + frequent updates of team achievement",
      checkmarks: { rusted: 1, sterling: 2, platinum: 3, titleSponsor: 4 },
    },
    {
      name: "Company website linked to socials/website + team updates",
      checkmarks: { rusted: 0, sterling: 1, platinum: 2, titleSponsor: 4 },
    },
    {
      name: "Company name on posters, robot, banner",
      checkmarks: { rusted: 0, sterling: 0, platinum: 2, titleSponsor: 4 },
    },
    {
      name: "Company's contribution highlighted during outreach presentations",
      checkmarks: { rusted: 0, sterling: 0, platinum: 3, titleSponsor: 4 },
    },
    {
      name: "Company name on back of shirts (largest) & exclusive company banner at comps",
      checkmarks: { rusted: 0, sterling: 0, platinum: 0, titleSponsor: 4 },
    },
  ]

  // Dynamic theme colors based on the Easter Egg state
  const primaryColorClass = goldTheme ? "text-[#D4AF37]" : "text-primary"
  const primaryBgClass = goldTheme ? "bg-[#D4AF37]/10" : "bg-primary/5"
  const primaryBorderClass = goldTheme ? "border-[#D4AF37]" : "border-primary"
  const fillAccentColor = goldTheme ? "oklch(0.78 0.12 85)" : "oklch(0.58 0.20 55)"

  return (
    <div className={`min-h-screen bg-background transition-colors duration-500 ease-out ${goldTheme ? "selection:bg-[#D4AF37]/20" : ""}`}>
      <Navigation />

      {/* Secret Gold Theme Notification */}
      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#FAF6F0] border-2 border-[#D4AF37] p-6 rounded-[2rem] shadow-2xl animate-slide-up max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-foreground uppercase text-sm tracking-tight">Secret Unlocked</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Gold Tier Alliance activated. Enjoy the premium gold accents.</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-24 lg:py-32 border-b border-border/40 relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
            <StaggerItem>
              <Badge variant="outline" className={`text-xs font-mono tracking-wider uppercase px-4 py-1.5 rounded-full border-primary/40 text-primary bg-primary/5 ${goldTheme ? "border-[#D4AF37]/50 text-[#D4AF37] bg-[#D4AF37]/5" : ""}`}>
                Support STEM Innovation
              </Badge>
            </StaggerItem>
            <StaggerItem className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                Fuel the Future of
              </h1>
              <div className="relative w-full max-w-xl mx-auto h-20 sm:h-28 overflow-visible">
                <svg viewBox="0 0 600 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={fillAccentColor} stopOpacity="0" />
                      <stop offset="50%" stopColor={fillAccentColor} stopOpacity="1" />
                      <stop offset="100%" stopColor={fillAccentColor} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Coordinates Grid behind the text */}
                  <g className="opacity-15 stroke-primary stroke-[0.5] pointer-events-none">
                    <line x1="0" y1="50" x2="600" y2="50" strokeDasharray="3 3" style={{ stroke: fillAccentColor }} />
                    <line x1="150" y1="0" x2="150" y2="100" strokeDasharray="3 3" style={{ stroke: fillAccentColor }} />
                    <line x1="300" y1="0" x2="300" y2="100" strokeDasharray="3 3" style={{ stroke: fillAccentColor }} />
                    <line x1="450" y1="0" x2="450" y2="100" strokeDasharray="3 3" style={{ stroke: fillAccentColor }} />
                  </g>
                  
                  {/* Traced Text Outline */}
                  <text
                    x="50%"
                    y="75%"
                    textAnchor="middle"
                    className="font-serif italic text-7xl sm:text-8xl font-light fill-none stroke-primary stroke-2 select-none cursor-default"
                    style={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000,
                      stroke: fillAccentColor,
                      animation: "drawOutline 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards, fillText 1s cubic-bezier(0.25, 1, 0.5, 1) 1.5s forwards",
                    }}
                  >
                    Engineering.
                  </text>
                  
                  {/* Laser Sweeper Bar */}
                  <rect
                    x="0"
                    y="10%"
                    width="90"
                    height="80%"
                    fill="url(#laserGrad)"
                    className="pointer-events-none"
                    style={{
                      animation: "laserSweep 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
                    }}
                  />
                </svg>
                
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes drawOutline {
                    0% { stroke-dashoffset: 1000; }
                    100% { stroke-dashoffset: 0; }
                  }
                  @keyframes fillText {
                    0% { fill: transparent; }
                    100% { fill: ${fillAccentColor}; }
                  }
                  @keyframes laserSweep {
                    0% { transform: translateX(-100px); }
                    70% { transform: translateX(600px); opacity: 1; }
                    100% { transform: translateX(650px); opacity: 0; }
                  }
                `}} />
              </div>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                By partnering with FTC Team 19772, you're investing in hands-on CAD design, Java engineering, and community-wide outreach programs. Let's build something remarkable together.
              </p>
            </StaggerItem>
            <StaggerItem className="pt-4">
              <Button size="lg" className={`rounded-xl px-8 uppercase tracking-wider text-xs font-bold transition-[transform,background-color] duration-200 ease-out active:scale-[0.97] bg-primary text-primary-foreground hover:bg-primary/90 ${goldTheme ? "bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90" : ""}`} asChild>
                <Link href="/sponsor-registration">Become a Partner</Link>
              </Button>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* The Impact (Why Sponsor Us) */}
      <section className="py-24 lg:py-32 border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tight uppercase">
              Your Investment <span className="font-serif italic font-light text-muted-foreground">In Action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team operates like a mini engineering startup. Your sponsorship directly enables real-world technical skills and community education.
            </p>
          </div>

          {/* Asymmetric Bento Box Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <StaggerItem className="md:col-span-2">
              <Card className="h-full rounded-[2.5rem] bg-card border border-border/40 p-8 flex flex-col justify-between hover:border-primary/20 active:scale-[0.99] transition-[border-color,transform,box-shadow] duration-200 ease-out cursor-pointer">
                <div className="space-y-6">
                  <div className={`w-12 h-12 ${primaryBgClass} rounded-full flex items-center justify-center transition-colors duration-1000`}>
                    <Users className={`w-6 h-6 ${primaryColorClass} transition-colors duration-1000`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">100+ Students Mentored Annually</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We design and execute annual youth STEM camps, coordinate FIRST Lego League (FLL) mentoring workshops, and work actively to ensure technical literacy is accessible to everyone in our community.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-baseline gap-2">
                  <span className={`font-mono text-5xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>04</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Mentored Subteams</span>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full rounded-[2.5rem] bg-card border border-border/40 p-8 flex flex-col justify-between hover:border-primary/20 active:scale-[0.99] transition-[border-color,transform,box-shadow] duration-200 ease-out cursor-pointer">
                <div className="space-y-6">
                  <div className={`w-12 h-12 ${primaryBgClass} rounded-full flex items-center justify-center transition-colors duration-1000`}>
                    <Cpu className={`w-6 h-6 ${primaryColorClass} transition-colors duration-1000`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">100% Student Designed</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From precision CNC milling to complex autonomous pathfinding using sensor feedback loops, our student engineers construct every system in-house.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-baseline gap-2">
                  <span className={`font-mono text-5xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>18</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Active Members</span>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full rounded-[2.5rem] bg-card border border-border/40 p-8 flex flex-col justify-between hover:border-primary/20 active:scale-[0.99] transition-[border-color,transform,box-shadow] duration-200 ease-out cursor-pointer">
                <div className="space-y-6">
                  <div className={`w-12 h-12 ${primaryBgClass} rounded-full flex items-center justify-center transition-colors duration-1000`}>
                    <GraduationCap className={`w-6 h-6 ${primaryColorClass} transition-colors duration-1000`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">Developing Leaders</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We prepare students for high-caliber careers, combining engineering disciplines with fiscal planning, business presentation, and brand design.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-baseline gap-2">
                  <span className={`font-mono text-5xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>100%</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">STEM Pursuit</span>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem className="md:col-span-2">
              <Card className="h-full rounded-[2.5rem] bg-card border border-border/40 p-8 flex flex-col justify-between hover:border-primary/20 active:scale-[0.99] transition-[border-color,transform,box-shadow] duration-200 ease-out cursor-pointer">
                <div className="space-y-6">
                  <div className={`w-12 h-12 ${primaryBgClass} rounded-full flex items-center justify-center transition-colors duration-1000`}>
                    <Compass className={`w-6 h-6 ${primaryColorClass} transition-colors duration-1000`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">Competitions & Beyond</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sponsorship funds cover building materials, registration fees, and logistics to transport our team and robot to regional championship events, expanding our community impact.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-baseline gap-2">
                  <span className={`font-mono text-5xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>19772</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">FTC Team Number</span>
                </div>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Sponsorship Tiers (Asymmetric Layout) */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tight uppercase">
              Sponsorship <span className="font-serif italic font-light text-primary">Tiers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a sponsorship level that matches your organization's goals. Every partnership goes directly toward supporting student education.
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {/* Title Sponsor - Mega Asymmetric Horizontal Card */}
            <TiltCard>
              <Card className={`rounded-[2.5rem] bg-card border-2 ${primaryBorderClass} p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group transition-[border-color,background-color] duration-500 ease-out`}>
                <div className={`absolute top-0 right-0 w-32 h-32 ${primaryBgClass} rounded-full blur-2xl transition-colors duration-1000`}></div>
                <div className="space-y-4 md:w-2/3">
                  <div className="flex items-center gap-3">
                    <div 
                      onClick={handleCrownClick}
                      className={`w-10 h-10 ${primaryBgClass} rounded-full flex items-center justify-center cursor-pointer select-none active:scale-90 transition-[transform,background-color] duration-200 ease-out relative group/crown`}
                      title="Click me 5 times for a surprise!"
                    >
                      <Crown className={`w-5 h-5 ${primaryColorClass} transition-colors duration-1000 ${clickCount > 0 ? "animate-bounce" : ""}`} />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background font-mono text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/crown:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        click 5x
                      </span>
                    </div>
                    <Badge variant="outline" className={`border-primary/50 text-primary font-mono uppercase text-xs ${goldTheme ? "border-[#D4AF37]/50 text-[#D4AF37]" : ""}`}>
                      Highest Tier
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight text-foreground">Title Sponsor</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our premier partnership level. Gain maximum visibility with exclusive main placement on both sides of the robot, dedicated pit area banners, and prime placement on all team apparel.
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-3 shrink-0 md:w-1/3">
                  <span className={`font-mono text-4xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>$2,500+</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Annual Investment</span>
                  <Button size="lg" className={`w-full md:w-auto rounded-xl px-6 uppercase tracking-wider text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-2 transition-[transform,background-color] duration-200 ease-out active:scale-[0.97] ${goldTheme ? "bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90" : ""}`} asChild>
                    <Link href="/sponsor-registration?tier=title">Invest at Title</Link>
                  </Button>
                </div>
              </Card>
            </TiltCard>

            {/* Asymmetrical 3-Column Grid for lower tiers */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Platinum */}
              <TiltCard>
                <Card className="rounded-[2.5rem] bg-card border border-border/40 p-8 flex flex-col justify-between h-full hover:border-primary/50 active:scale-[0.99] transition-[border-color,transform,box-shadow] duration-200 ease-out cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 ${primaryBgClass} rounded-full flex items-center justify-center transition-colors duration-1000`}>
                        <Star className={`w-5 h-5 ${primaryColorClass} transition-colors duration-1000`} />
                      </div>
                      <span className={`font-mono text-xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>$1,200 - $2,500</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Platinum Partner</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sizable support showcasing your brand prominently on the robot, active website link integration, and medium merch placement.
                    </p>
                  </div>
                  <Button className={`w-full rounded-xl uppercase tracking-wider text-xs font-bold border border-border bg-transparent text-foreground hover:bg-muted/10 hover:border-primary/50 mt-6 ${goldTheme ? "hover:border-[#D4AF37]/50" : ""}`} asChild>
                    <Link href="/sponsor-registration?tier=platinum">Select Platinum</Link>
                  </Button>
                </Card>
              </TiltCard>

              {/* Sterling */}
              <TiltCard>
                <Card className="rounded-[2.5rem] bg-card border border-border/40 p-8 flex flex-col justify-between h-full hover:border-primary/50 active:scale-[0.99] transition-[border-color,transform,box-shadow] duration-200 ease-out cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 ${primaryBgClass} rounded-full flex items-center justify-center transition-colors duration-1000`}>
                        <Heart className={`w-5 h-5 ${primaryColorClass} transition-colors duration-1000`} />
                      </div>
                      <span className={`font-mono text-xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>$500 - $1,200</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Sterling Partner</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Strong sponsorship showing your brand on the back of official team shirts and highlighted feature posts across digital socials.
                    </p>
                  </div>
                  <Button className={`w-full rounded-xl uppercase tracking-wider text-xs font-bold border border-border bg-transparent text-foreground hover:bg-muted/10 hover:border-primary/50 mt-6 ${goldTheme ? "hover:border-[#D4AF37]/50" : ""}`} asChild>
                    <Link href="/sponsor-registration?tier=sterling">Select Sterling</Link>
                  </Button>
                </Card>
              </TiltCard>

              {/* Rusted */}
              <TiltCard>
                <Card className="rounded-[2.5rem] bg-card border border-border/40 p-8 flex flex-col justify-between h-full hover:border-primary/50 active:scale-[0.99] transition-[border-color,transform,box-shadow] duration-200 ease-out cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 ${primaryBgClass} rounded-full flex items-center justify-center transition-colors duration-1000`}>
                        <Building className={`w-5 h-5 ${primaryColorClass} transition-colors duration-1000`} />
                      </div>
                      <span className={`font-mono text-xl font-extrabold ${primaryColorClass} transition-colors duration-1000`}>$250 - $500</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Rusted Partner</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Essential support including listing your company name on our official website sponsor links page.
                    </p>
                  </div>
                  <Button className={`w-full rounded-xl uppercase tracking-wider text-xs font-bold border border-border bg-transparent text-foreground hover:bg-muted/10 hover:border-primary/50 mt-6 ${goldTheme ? "hover:border-[#D4AF37]/50" : ""}`} asChild>
                    <Link href="/sponsor-registration?tier=rusted">Select Rusted</Link>
                  </Button>
                </Card>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Benefits Table (Clean & Editorial) */}
      <section className="py-24 lg:py-32 border-t border-border/20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-foreground tracking-tight uppercase">
              Compare <span className="font-serif italic font-light text-primary">Benefits</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A detailed breakdown of promotional placement per sponsorship level.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-border/40 bg-card">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border/40 bg-muted/20">
                    <th className="py-10 px-6 font-mono text-xs md:text-sm uppercase tracking-widest text-muted-foreground">Benefit Description</th>
                    <th className={`py-10 px-6 font-mono text-xs md:text-sm uppercase tracking-widest ${primaryColorClass} text-center transition-colors duration-1000`}>Rusted</th>
                    <th className={`py-10 px-6 font-mono text-xs md:text-sm uppercase tracking-widest ${primaryColorClass} text-center transition-colors duration-1000`}>Sterling</th>
                    <th className={`py-10 px-6 font-mono text-xs md:text-sm uppercase tracking-widest ${primaryColorClass} text-center transition-colors duration-1000`}>Platinum</th>
                    <th className={`py-10 px-6 font-mono text-xs md:text-sm uppercase tracking-widest ${primaryColorClass} text-center transition-colors duration-1000`}>Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20">
                  {benefitsList.map((benefit, index) => (
                    <tr key={index} className="hover:bg-muted/5 transition-colors">
                      <td className="py-10 px-6 text-base md:text-lg text-foreground font-semibold leading-relaxed">{benefit.name}</td>
                      {["rusted", "sterling", "platinum", "titleSponsor"].map((tier) => {
                        const count = benefit.checkmarks[tier as keyof typeof benefit.checkmarks]
                        return (
                          <td key={tier} className="py-10 px-6 text-center">
                            {count > 0 ? (
                              <div className="flex justify-center gap-1">
                                {Array.from({ length: count }).map((_, i) => (
                                  <span key={i} className={`font-mono text-lg md:text-xl font-bold ${primaryColorClass} transition-colors duration-1000`}>✓</span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-muted-foreground/30 font-mono text-lg">—</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Legend */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className={`font-mono ${primaryColorClass} transition-colors duration-1000`}>✓</span> = included benefit • More checkmarks = greater frequency/prominence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Pitch */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-4xl mx-auto space-y-8 p-12 md:p-16 rounded-[2.5rem] border border-border/40 bg-card relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 space-y-4 md:w-2/3">
              <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tight">
                Ready to Join the <span className="font-serif italic font-light text-primary">Journey?</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Connect with our business department today. We're happy to discuss custom partnership goals, showcase opportunities, or send you our full offline information packet.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-1/3 w-full shrink-0">
              <Button size="lg" className={`w-full rounded-xl px-8 uppercase tracking-wider text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 ease-out active:scale-[0.97] ${goldTheme ? "bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90" : ""}`} asChild>
                <a href="mailto:rustinpieceftc@gmail.com?subject=FTC%2019772%20Partnership%20Inquiry"><span className="relative z-10">Email Our Team</span></a>
              </Button>
              <Button variant="outline" size="lg" className={`w-full rounded-xl px-8 uppercase tracking-wider text-xs font-bold border-border hover:bg-muted/10 hover:text-foreground transition-all duration-200 ease-out active:scale-[0.97] ${goldTheme ? "hover:border-[#D4AF37]/50" : ""}`} asChild>
                <a href="mailto:rustinpieceftc@gmail.com?subject=Request%20FTC%2019772%20Sponsorship%20Packet"><span className="relative z-10">Get Pitch Deck PDF</span></a>
              </Button>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
