"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Heart, Zap, Cpu } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, SlideUp, TiltCard, ScaleIn, ParallaxBlock, StaggerContainer, StaggerItem, Bounce } from "@/components/animations"
import { InteractiveCounter } from "@/components/interactive-counter"
import { RobotDivider } from "@/components/robot-divider"
import { useState, useEffect } from "react"
import { InteractiveRoboticArm } from "@/components/interactive-robotic-arm"
import { MissionRobot } from "@/components/mission-robot"

export default function HomePage() {
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleLogoClick = () => {
    setClickCount((prev) => prev + 1)
    if (clickCount === 6) {
      // Triggers on 7th click
      setShowEasterEgg(true)
      setTimeout(() => setShowEasterEgg(false), 3000) // Hide after 3 seconds
      setClickCount(0) // Reset counter
    }
  }

  // Reset click count after 5 seconds of inactivity
  useEffect(() => {
    if (clickCount > 0) {
      const timer = setTimeout(() => setClickCount(0), 5000)
      return () => clearTimeout(timer)
    }
  }, [clickCount])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {showEasterEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-gradient-orange p-8 rounded-3xl shadow-2xl animate-in zoom-in duration-500 text-center">
            {/* Custom SVG Burrito/Wrap shape replacing emoji */}
            <svg width="60" height="60" viewBox="0 0 100 100" className="mx-auto mb-4">
              <path d="M20,50 Q50,20 80,50 Q50,80 20,50 Z" fill="oklch(0.72 0.15 75)" stroke="oklch(0.99 0.01 85)" strokeWidth="4" />
              <path d="M25,48 C35,38 65,38 75,48" stroke="oklch(0.68 0.22 55)" strokeWidth="3" fill="none" />
              <path d="M30,52 C40,62 60,62 70,52" stroke="oklch(0.68 0.22 55)" strokeWidth="3" fill="none" />
            </svg>
            <h2 className="text-3xl font-bold text-white mb-2">Akshit discovery!</h2>
            <p className="text-xl text-white/90">Akshit is a dosa eater!</p>
          </div>
        </div>
      )}

      <main>
        <article>
          <section id="home" className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden flex flex-col justify-end border-b border-border/40 bg-background">
            {/* Full-bleed background image - upscaled to high resolution */}
            <div
              className="absolute inset-0 bg-cover bg-[center_top_20%] bg-no-repeat opacity-90"
              style={{ backgroundImage: "url('/images/design-mode/team-hero.png')" }}
            ></div>
            {/* Heavy gradient overlay fading to the warm light-mode background color */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent"></div>
            {/* Ambient orange gradient blobs for atmosphere */}
            <div className="absolute bottom-32 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Interactive Robotic Arm Overlay */}
            <div className="hidden lg:block absolute right-[8%] top-[15%] w-[480px] h-[480px] z-20 pointer-events-none">
              <InteractiveRoboticArm />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 md:pb-24">
              <div className="max-w-4xl space-y-2">
                <SlideUp delay={0.1}>
                  <Badge
                    variant="outline"
                    className="font-mono text-xs tracking-widest uppercase border-primary/20 text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 cursor-pointer select-none"
                    onClick={handleLogoClick}
                  >
                    <Zap className="w-3 h-3 mr-2 inline" />
                    FTC TEAM 19772
                  </Badge>
                </SlideUp>

                <SlideUp delay={0.2} className="relative z-20 space-y-[-0.2em] md:space-y-[-0.4em]">
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-extrabold text-foreground tracking-tighter leading-none uppercase">
                    We Build
                  </h1>
                  <h2
                    className="text-7xl sm:text-[8rem] md:text-[11rem] font-drama text-primary leading-none tracking-tighter pr-4 pb-2 cursor-pointer select-none drop-shadow-[0_2px_12px_#FCFAF7]"
                    onClick={handleLogoClick}
                  >
                    Robots.
                  </h2>
                </SlideUp>

                <SlideUp delay={0.3}>
                  <p className="text-lg md:text-2xl font-sans text-muted-foreground text-balance leading-relaxed max-w-xl mt-8 mb-10 font-medium">
                    We are FTC Team 19772 from Princeton STEM Academy. We design, build, and program competitive robots.
                  </p>
                </SlideUp>

                <SlideUp delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="group transform-gpu"
                      asChild
                    >
                      <a href="/team">
                        Meet the Core Team
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300 transform-gpu group"
                      asChild
                    >
                      <a href="/mentors">
                        <Cpu className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        View Our Mentors
                      </a>
                    </Button>
                  </div>
                </SlideUp>
              </div>
            </div>
          </section>

          {/* Custom Animated Robot Divider between Hero and Stats */}
          <RobotDivider />

          <section className="py-24 relative overflow-hidden bg-background" aria-label="Team statistics">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Asymmetric Editorial Intro */}
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="text-4xl sm:text-5xl font-sans font-extrabold text-foreground tracking-tighter leading-[1.05] uppercase">
                    Innovation & Community
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-xl">
                    From the classroom to the competition arena, our numbers tell the story of a team dedicated to pushing mechanical boundaries while lifting up the communities around us.
                  </p>
                </div>
                
                {/* Right Column: Grid of stats */}
                <div className="lg:col-span-7">
                  <StaggerContainer className="grid grid-cols-2 gap-6">
                     <StaggerItem>
                       <TiltCard className="text-left p-8 h-full rounded-[2.5rem] bg-white/80 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">17</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">Team Members</div>
                       </TiltCard>
                     </StaggerItem>
                     <StaggerItem>
                       <TiltCard className="text-left p-8 h-full rounded-[2.5rem] bg-white/80 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">2</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">FLL Teams Mentored</div>
                       </TiltCard>
                     </StaggerItem>
                     <StaggerItem>
                       <TiltCard className="text-left p-8 h-full rounded-[2.5rem] bg-white/80 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">1</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">Annual STEM Camp</div>
                       </TiltCard>
                     </StaggerItem>
                     <StaggerItem>
                       <TiltCard className="text-left p-8 h-full rounded-[2.5rem] bg-white/80 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">∞</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">Innovation</div>
                       </TiltCard>
                     </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 relative" aria-labelledby="mission-heading">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <SlideUp className="max-w-4xl mx-auto text-center space-y-8">
                <h2 id="mission-heading" className="text-4xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[1.05]">
                  Our Mission
                </h2>
                <MissionRobot />
                 <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl mx-auto">
                   We are an FTC robotics team passionate about{" "}
                   <span className="text-primary font-semibold">STEM education</span>, engineering, and innovation. We
                   design, build, and program competitive robots while also mentoring younger students and giving back to
                   our community through educational outreach and STEM advocacy.
                 </p>
              </SlideUp>
            </div>
          </section>

          {/* Custom Animated Robot Divider between Mission and Achievements */}
          <RobotDivider />

          <section className="py-24 bg-background" aria-labelledby="achievements-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-16">
                <SlideUp className="text-center space-y-6">
                  <h2 id="achievements-heading" className="text-4xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[1.05]">
                    Recent Achievements
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-xl mx-auto font-medium">
                    Our team's dedication to excellence shows in our competitive performance and community impact.
                  </p>
                </SlideUp>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <StaggerItem>
                     <TiltCard className="h-full border border-primary/10 bg-white/80 hover:border-primary/35 transition-all duration-500 rounded-[2.5rem] shadow-sm hover:shadow-md p-8 flex flex-col justify-between">
                       <div className="space-y-6 text-left">
                         <h3 className="flex items-center space-x-3 text-xl font-bold text-foreground">
                           <div className="p-3 bg-primary/10 rounded-[1.25rem] transition-colors">
                             <Trophy className="w-6 h-6 text-primary" />
                           </div>
                           <span>Competition Excellence</span>
                         </h3>
                         <div className="text-base leading-relaxed space-y-4">
                           <span className="block font-bold text-foreground">2025-2026 Season</span>
                           <ul className="space-y-2 text-muted-foreground font-medium">
                             <li className="flex items-center"><Zap className="w-4 h-4 text-primary mr-2" /> Think Award - NJ Upper Central Leagues</li>
                             <li className="flex items-center"><Zap className="w-4 h-4 text-primary mr-2" /> Winning Alliance Captain</li>
                             <li className="flex items-center"><Zap className="w-4 h-4 text-primary mr-2" /> Qualified for NJ State Championship</li>
                           </ul>
                         </div>
                       </div>
                     </TiltCard>
                   </StaggerItem>
 
                   <StaggerItem>
                     <TiltCard className="h-full border border-primary/10 bg-white/80 hover:border-primary/35 transition-all duration-500 rounded-[2.5rem] shadow-sm hover:shadow-md p-8 flex flex-col justify-between">
                       <div className="space-y-6 text-left">
                         <h3 className="flex items-center space-x-3 text-xl font-bold text-foreground">
                           <div className="p-3 bg-primary/10 rounded-[1.25rem] transition-colors">
                             <Users className="w-6 h-6 text-primary" />
                           </div>
                           <span>Mentorship Program</span>
                         </h3>
                         <p className="text-base leading-relaxed text-muted-foreground font-medium max-w-md">
                           Successfully mentoring 2 FLL teams, sharing our knowledge and passion for robotics with the next generation of innovators and developers.
                         </p>
                       </div>
                     </TiltCard>
                   </StaggerItem>
 
                   <StaggerItem>
                     <TiltCard className="h-full border border-primary/10 bg-white/80 hover:border-primary/35 transition-all duration-500 rounded-[2.5rem] shadow-sm hover:shadow-md p-8 flex flex-col justify-between">
                       <div className="space-y-6 text-left">
                         <h3 className="flex items-center space-x-3 text-xl font-bold text-foreground">
                           <div className="p-3 bg-primary/10 rounded-[1.25rem] transition-colors">
                             <Heart className="w-6 h-6 text-primary" />
                           </div>
                           <span>STEM Camp</span>
                         </h3>
                         <p className="text-base leading-relaxed text-muted-foreground font-medium max-w-md">
                           Hosting an annual STEM camp for 3rd–8th graders, inspiring young minds to explore science and technology through hands-on learning and interactive projects.
                         </p>
                       </div>
                     </TiltCard>
                   </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </section>

          <section className="py-20" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-gradient-orange rounded-3xl p-8 lg:p-16 text-center space-y-8 overflow-hidden">
                {/* Layered atmosphere */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
                {/* Oversized background type */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <span className="font-drama text-white/5 text-[20rem] leading-none tracking-tighter">R</span>
                </div>

                <ScaleIn>
                  <div className="relative">
                    <h2
                      id="cta-heading"
                      className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance mb-4"
                    >
                      Ready to Join Our Journey?
                    </h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-primary-foreground/90 max-w-xl mx-auto text-pretty leading-relaxed">
                      Whether you're interested in becoming a sponsor or learning more about our community programs, we'd
                      love to hear from you and explore the possibilities together.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative mt-8">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="hover:scale-105 transition-all duration-300 shadow-lg"
                      asChild
                    >
                      <a href="/contact">
                        <Heart className="w-4 h-4 mr-2" />
                        Contact Us
                      </a>
                    </Button>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
