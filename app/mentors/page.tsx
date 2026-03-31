"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Lightbulb, Award, Network } from 'lucide-react'
import { SlideUp, StaggerContainer, StaggerItem, TiltCard } from "@/components/animations"

export default function MentorsPage() {
  const mentors = [
    {
      name: "Dr. Rogers",
      title: "Head of our Academy",
      background: "Princeton STEM Academy CEO",
      expertise: ["Leadership", "Robotics", "Organization"],
      experience: "Experience in FTC",
      bio: "Dr. Rogers brings extensive experience in robotics engineering and has been instrumental in guiding our team's technical development and strategic thinking.",
      image: "/images/dr-rogers.png",
    },
    {
      name: "Mr. Levy",
      title: "Programming Mentor",
      background: "Industry Professional",
      expertise: ["Programming", "Electronics", "Competition Strategy"],
      experience: "10+ years in software development and robotics",
      bio: "Mr. Levy provides hands-on technical guidance and helps our team navigate the complexities of competitive robotics programming and electronics.",
      image: "/images/mr-levy.png",
    },
  ]

  const connections = [
    {
      name: "Sid Reddy",
      title: "Industry Connection",
      description: "Working at a luxury tech company",
      image: "/images/sid-reddy.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 border-b border-border/40 relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
            <StaggerItem>
              <Badge variant="secondary" className="text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
                Our Mentors
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                Guiding Our <span className="font-serif italic text-[1.1em] font-light">Journey.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                Meet the experienced professionals who provide guidance, expertise, and inspiration to help our team reach new heights in robotics excellence.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mentorship Philosophy */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideUp className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-sans font-bold text-foreground tracking-tight">Our Philosophy</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mentors guide us to discover solutions ourselves. Through their expertise and encouragement, we learn to think critically, solve complex problems, and develop both technical skills and leadership qualities.
                </p>
              </div>

              <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                <StaggerItem className="p-6 rounded-[2rem] border border-border/50 bg-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Innovation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Encouraging creative thinking and novel approaches to engineering challenges.
                  </p>
                </StaggerItem>
                <StaggerItem className="p-6 rounded-[2rem] border border-border/50 bg-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">Collaboration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fostering teamwork and effective communication within our diverse team.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </SlideUp>

            <SlideUp delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-border/30 shadow-2xl relative">
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10" />
                <img
                  src="/images/mentorship-philosophy.png"
                  alt="Mentor teaching team members in workshop setting"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Meet Our Mentors */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-sans font-bold text-foreground tracking-tight">Meet Our Mentors</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                Experienced professionals dedicated to nurturing the next generation of engineers
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {mentors.map((mentor, index) => (
                <StaggerItem key={index}>
                  <TiltCard>
                    <Card className="h-full border border-border/40 rounded-[2.5rem] bg-card/80 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <CardHeader className="text-center pb-6 border-b border-border/20 bg-muted/20">
                        <div className="mx-auto mb-6 relative group">
                          <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <img
                            src={mentor.image || "/placeholder.svg"}
                            alt={`${mentor.name} - ${mentor.title}`}
                            className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg relative z-10"
                          />
                        </div>
                        <CardTitle className="text-2xl font-sans tracking-tight">{mentor.name}</CardTitle>
                        <Badge className="w-fit mx-auto mt-2 bg-primary/10 text-primary border-0 hover:bg-primary/20 px-3 py-1">
                          {mentor.title}
                        </Badge>
                        <CardDescription className="font-mono text-xs mt-3 text-muted-foreground/80 uppercase tracking-widest">{mentor.background}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 pt-6 px-8 pb-8">
                        <p className="text-sm text-balance text-muted-foreground leading-relaxed">{mentor.bio}</p>

                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs font-mono font-normal rounded-full px-3 bg-muted/30">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2 border-t border-border/20 pt-4">
                          <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Experience</h4>
                          <p className="text-sm font-medium text-muted-foreground">{mentor.experience}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideUp>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Network className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-sans font-bold text-foreground tracking-tight">Connect</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
                Building bridges with industry leaders to provide real-world insights
              </p>
            </div>

            <div className="flex justify-center">
              {connections.map((connection, index) => (
                <TiltCard key={index} className="max-w-sm w-full">
                  <Card className="border border-border/40 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-6">
                        <img
                          src={connection.image || "/placeholder.svg"}
                          alt={connection.name}
                          className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg"
                        />
                      </div>
                      <CardTitle className="text-2xl font-sans tracking-tight">{connection.name}</CardTitle>
                      <Badge variant="outline" className="w-fit mx-auto mt-2 rounded-full px-4 text-xs">
                        {connection.title}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center pt-0 px-8 pb-8">
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">{connection.description}</p>
                    </CardContent>
                  </Card>
                </TiltCard>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            <SlideUp className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-sans font-bold text-foreground tracking-tight">
                The Impact of <span className="font-serif italic font-light text-[1.1em]">Mentorship</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium">How our mentors help shape the future of STEM education</p>
            </SlideUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              <StaggerItem>
                <Card className="h-full border border-border/40 rounded-[2rem] bg-background hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-sans tracking-tight">Skill Development</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <CardDescription className="text-center text-sm leading-relaxed text-muted-foreground/90">
                      Our mentors help team members develop both technical expertise and essential soft skills like leadership and problem-solving.
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="h-full border border-border/40 rounded-[2rem] bg-background hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-sans tracking-tight">Career Guidance</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <CardDescription className="text-center text-sm leading-relaxed text-muted-foreground/90">
                      With their industry experience, our mentors provide valuable insights into STEM career paths and future opportunities.
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="h-full border border-border/40 rounded-[2rem] bg-background hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-sans tracking-tight">Innovation Culture</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <CardDescription className="text-center text-sm leading-relaxed text-muted-foreground/90">
                      They foster a culture of innovation and continuous learning, encouraging students to push boundaries.
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-3xl mx-auto text-center space-y-8 p-12 md:p-16 rounded-[3rem] border border-border/40 bg-card shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tight">
                Interested in <span className="font-serif italic font-light">Mentoring?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                We're always looking for experienced professionals who want to share their knowledge and help inspire the next generation of engineers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="rounded-full px-8 uppercase tracking-wider text-xs font-bold" asChild>
                  <a href="/contact">Get Involved</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 uppercase tracking-wider text-xs font-bold border-border/60 hover:bg-muted/50" asChild>
                  <a href="/team">Learn About Our Team</a>
                </Button>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
