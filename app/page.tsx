"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Heart, Zap, Cpu } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, SlideUp, TiltCard, ScaleIn, ParallaxBlock, StaggerContainer, StaggerItem, Bounce } from "@/components/animations"
import { InteractiveCounter } from "@/components/interactive-counter"
import { useState, useEffect } from "react"

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
            <div className="text-6xl mb-4">🫔</div>
            <h2 className="text-3xl font-bold text-white mb-2">Akshit discovery!</h2>
            <p className="text-xl text-white/90">Akshit is a dosa eater! 🤫</p>
          </div>
        </div>
      )}

      <main>
        <article>
          <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <SlideUp delay={0.1}>
                      <Badge
                        variant="outline"
                        className="badge-high-contrast animate-pulse-glow cursor-pointer select-none"
                        onClick={handleLogoClick}
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        FTC Team 19772
                      </Badge>
                    </SlideUp>
                    <SlideUp delay={0.2}>
                      <h1
                        className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent text-balance cursor-pointer select-none"
                        onClick={handleLogoClick}
                      >
                        Rust in Piece
                      </h1>
                    </SlideUp>
                    <SlideUp delay={0.3}>
                      <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                        Princeton STEM Academy's{" "}
                        <span className="text-primary font-semibold">premier FTC robotics team</span>, passionate about
                        STEM education, engineering innovation, and building the future through competitive robotics.
                      </p>
                    </SlideUp>
                  </div>

                  <SlideUp delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent group"
                        asChild
                      >
                        <a href="/mentors" aria-label="View our experienced robotics mentors">
                          <Cpu className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          View Our Mentors
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        asChild
                      >
                        <a href="/sponsors">
                          <Heart className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                          Learn More
                        </a>
                      </Button>
                    </div>
                  </SlideUp>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-primary/20 border border-primary/30 hover:bg-primary/30 transition-all duration-300 group">
                      <Users
                        className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      />
                      <span className="font-bold text-foreground">17</span>
                      <span className="text-muted-foreground text-center">Team Members</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-accent/20 border border-accent/30 hover:bg-accent/30 transition-all duration-300 group">
                      <Trophy
                        className="w-6 h-6 text-accent group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      />
                      <span className="font-semibold text-foreground">Multiple</span>
                      <span className="text-muted-foreground text-center">Awards</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-secondary/20 border border-secondary/30 hover:bg-secondary/30 transition-all duration-300 group">
                      <Heart
                        className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      />
                      <span className="font-semibold text-foreground group-hover:animate-pulse">∞</span>
                      <span className="text-muted-foreground text-center">Impact</span>
                    </div>
                  </div>
                </div>

                <SlideUp delay={0.2} className="relative">
                  <ParallaxBlock speed={0.5} className="relative animate-float">
                    <div
                      className="absolute inset-0 bg-gradient-orange rounded-3xl blur-xl opacity-30"
                      aria-hidden="true"
                    ></div>
                    <TiltCard>
                      <div className="relative aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl p-4 border border-primary/20 hover:border-primary/40 transition-all duration-500 group">
                        <img
                          src="/images/design-mode/team-hero.png"
                          alt="Rust in Piece FTC Team 19772 members wearing orange team shirts standing together at Princeton STEM Academy, showcasing our diverse and passionate robotics team"
                          className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                          width="800"
                          height="800"
                        />
                      </div>
                    </TiltCard>
                  </ParallaxBlock>
                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-500"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-bounce delay-1000"
                    aria-hidden="true"
                  ></div>
                </SlideUp>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-warm" aria-label="Team statistics">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <StaggerItem>
                  <TiltCard>
                    <div className="text-center p-6 h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm">
                      <div className="text-4xl font-bold text-primary mb-2">17</div>
                      <div className="text-sm font-medium text-muted-foreground">Team Members</div>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard>
                    <div className="text-center p-6 h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-accent/20 shadow-sm">
                      <div className="text-4xl font-bold text-accent mb-2">
                        2
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">FLL Teams Mentored</div>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard>
                    <div className="text-center p-6 h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-secondary/20 shadow-sm">
                      <div className="text-4xl font-bold text-secondary mb-2">
                        1
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">Annual STEM Camp</div>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard>
                    <div className="text-center p-6 h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm">
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        ∞
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">Innovation</div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          <section className="py-20 relative" aria-labelledby="mission-heading">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <SlideUp className="max-w-4xl mx-auto text-center space-y-8">
                <h2 id="mission-heading" className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-orange mx-auto rounded-full"></div>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  We are an FTC robotics team passionate about{" "}
                  <span className="text-primary font-semibold">STEM education</span>, engineering, and innovation. We
                  design, build, and program competitive robots while also mentoring younger students and giving back to
                  our community through educational outreach and STEM advocacy.
                </p>
              </SlideUp>
            </div>
          </section>

          <section className="py-20 bg-muted/30" aria-labelledby="achievements-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-12">
                <SlideUp className="text-center space-y-6">
                  <h2 id="achievements-heading" className="text-4xl lg:text-5xl font-bold text-foreground">
                    Recent <span className="text-primary">Achievements</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-orange mx-auto rounded-full"></div>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Our team's dedication to excellence shows in our competitive performance and community impact.
                  </p>
                </SlideUp>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <StaggerItem>
                    <TiltCard className="h-full">
                      <Card className="h-full border-primary/20 bg-gradient-to-br from-white to-primary/5 group shadow-md hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <Trophy className="w-6 h-6 text-primary" />
                            </div>
                            <span>Competition Excellence</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed space-y-2">
                            <span className="block font-semibold text-foreground">2025-2026 Season</span>
                            <ul className="list-disc pl-4 space-y-1">
                              <li>Think Award - NJ Upper Central Leagues</li>
                              <li>Winning Alliance Captain</li>
                              <li>Qualified for NJ State Championship</li>
                            </ul>
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </StaggerItem>

                  <StaggerItem>
                    <TiltCard className="h-full">
                      <Card className="h-full border-accent/20 bg-gradient-to-br from-white to-accent/5 group shadow-md hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                              <Users className="w-6 h-6 text-accent" />
                            </div>
                            <span>Mentorship Program</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed">
                            Successfully mentoring 2 FLL teams, sharing our knowledge and passion for robotics with the next
                            generation of innovators.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </StaggerItem>

                  <StaggerItem>
                    <TiltCard className="h-full">
                      <Card className="h-full border-secondary/20 bg-gradient-to-br from-white to-secondary/5 group shadow-md hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                              <Heart className="w-6 h-6 text-secondary" />
                            </div>
                            <span>STEM Camp</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed">
                            Hosting an annual STEM camp for 3rd–8th graders, inspiring young minds to explore science and
                            technology through hands-on learning.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </section>

          <section className="py-20" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-gradient-orange rounded-3xl p-8 lg:p-16 text-center space-y-8 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

                <ScaleIn>
                  <div className="relative">
                    <h2
                      id="cta-heading"
                      className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance mb-4"
                    >
                      Ready to Join Our Journey?
                    </h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
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
