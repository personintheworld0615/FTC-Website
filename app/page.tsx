import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Heart, Zap, Rocket, Cpu } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InteractiveCounter } from "@/components/interactive-counter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="text-primary border-primary bg-primary/10 animate-pulse-glow">
                  <Zap className="w-3 h-3 mr-1" />
                  FTC Team 19772
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent text-balance">
                  Rust in Piece
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                  Princeton STEM Academy's <span className="text-primary font-semibold">premier FTC robotics team</span>
                  , passionate about STEM education, engineering innovation, and building the future through competitive
                  robotics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-orange hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  asChild
                >
                  <a href="/contact">
                    <Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Join Our Team
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent group"
                  asChild
                >
                  <a href="/mentors">
                    <Cpu className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    View Our Mentors
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all duration-300 group">
                  <Users className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <InteractiveCounter end={18} />
                  <span className="text-muted-foreground text-center">Team Members</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all duration-300 group">
                  <Trophy className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-accent">Multiple</span>
                  <span className="text-muted-foreground text-center">Awards</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-all duration-300 group">
                  <Heart className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-secondary">∞</span>
                  <span className="text-muted-foreground text-center">Impact</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-orange rounded-3xl blur-xl opacity-30"></div>
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl p-4 border border-primary/20 hover:border-primary/40 transition-all duration-500 group">
                  <img
                    src="/ftc-robotics-team-working-on-robot-in-workshop.jpg"
                    alt="Rust in Piece team working on their robot"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl font-bold text-primary mb-2">
                <InteractiveCounter end={18} />
              </div>
              <div className="text-sm font-medium text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-accent/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl font-bold text-accent mb-2">
                <InteractiveCounter end={2} />
              </div>
              <div className="text-sm font-medium text-muted-foreground">FLL Teams Mentored</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-secondary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl font-bold text-secondary mb-2">
                <InteractiveCounter end={1} />
              </div>
              <div className="text-sm font-medium text-muted-foreground">Annual STEM Camp</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/20 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:animate-pulse">
                ∞
              </div>
              <div className="text-sm font-medium text-muted-foreground">Innovation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Our <span className="text-primary">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-orange mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We are an FTC robotics team passionate about{" "}
              <span className="text-primary font-semibold">STEM education</span>, engineering, and innovation. We
              design, build, and program competitive robots while also mentoring younger students and giving back to our
              community through educational outreach and STEM advocacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Recent <span className="text-primary">Achievements</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-orange mx-auto rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our team's dedication to excellence shows in our competitive performance and community impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-primary/5 group">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Trophy className="w-6 h-6 text-primary group-hover:animate-bounce" />
                    </div>
                    <span>Competition Excellence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Consistent performance in regional FTC competitions with innovative robot designs and strategic
                    gameplay that sets us apart.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-accent/5 group">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Users className="w-6 h-6 text-accent group-hover:animate-pulse" />
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

              <Card className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-secondary/5 group">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <Heart className="w-6 h-6 text-secondary group-hover:animate-pulse" />
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-orange rounded-3xl p-8 lg:p-16 text-center space-y-8 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance mb-4">
                Ready to Join Our Journey?
              </h2>
              <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
                Whether you're interested in joining our team, becoming a sponsor, or learning more about our community
                programs, we'd love to hear from you and explore the possibilities together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
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
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/about">
                  <Zap className="w-4 h-4 mr-2" />
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
