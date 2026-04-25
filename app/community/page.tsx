import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, GraduationCap, Target } from "lucide-react"
import { SlideUp, TiltCard, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations"

export const metadata: Metadata = {
  title: "Community Impact | Rust in Piece FTC Team 19772",
  description:
    "Rust in Piece mentors 2 FLL robotics teams, runs annual STEM camps for 50+ students in grades 3–8, and has reached 100+ young engineers in the Princeton, NJ area through outreach and workshops.",
  alternates: { canonical: "https://www.rustinpiece.org/community" },
  openGraph: {
    title: "Community Impact | Rust in Piece FTC Team 19772",
    description: "Mentoring FLL teams, running STEM camps, and reaching 100+ students in the Princeton, NJ area.",
    url: "https://www.rustinpiece.org/community",
  },
}

export default function CommunityPage() {
  const impactStats = [
    {
      number: "2",
      label: "FLL Teams Mentored",
      description: "Guiding younger students in robotics fundamentals",
    },
    {
      number: "50+",
      label: "STEM Camp Participants",
      description: "3rd-8th graders inspired annually",
    },
    {
      number: "100+",
      label: "Students Reached",
      description: "Through various outreach programs",
    },
    {
      number: "5+",
      label: "Community Events",
      description: "Demonstrations and workshops hosted",
    },
  ]

  const programs = [
    {
      title: "FLL Team Mentorship",
      icon: Users,
      description:
        "We actively mentor two FIRST Lego League teams, sharing our knowledge and passion for robotics with the next generation of innovators.",
      details: [
        "Weekly mentoring sessions throughout the FLL season",
        "Hands-on guidance with robot design and programming",
        "Competition strategy and teamwork development",
        "Inspiring future robotics enthusiasts through shared experience",
      ],
      image: "/fll-team-mentorship.jpg",
    },
    {
      title: "Annual STEM Camp",
      icon: GraduationCap,
      description:
        "Our flagship community program brings engaging STEM education to 3rd-8th grade students through hands-on activities and interactive robotics workshops.",
      details: [
        "Week-long immersive summer camp experience",
        "Introduction to programming and engineering principles",
        "Team-building activities and collaborative challenges",
        "Inspiring interest in STEM careers and lifelong learning",
      ],
      image: "/summer-camp-robotics.jpg",
    },
    {
      title: "Constant Outreaches",
      icon: Target,
      description:
        "We actively participate in community events and public demonstrations to spread awareness about FIRST and inspire students to explore STEM through robotics.",
      details: [
        "Regular participation in community parades and festivals",
        "Public demonstrations showcasing our robot and technology",
        "Promoting FIRST values of Gracious Professionalism and Coopertition",
        "Engaging with the community to inspire the next generation of roboticists",
      ],
      image: "/community-outreach-parade.jpg",
    },
  ]

  const testimonials = [
    {
      quote: "My son had a fantastic time at the camp—it really sparked his love for robotics.",
      author: "Anonymous",
      role: "Parent of a child who attended the summer camp",
    },
    {
      quote: "Seeing young children so passionate in STEM really warms my heart",
      author: "Anonymous",
      role: "STEM professional",
    },
    {
      quote: "Your work is truly amazing its wonderful its so cool how your team managed to do this",
      author: "George",
      role: "GMC specialist",
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
              <Badge variant="outline" className="text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border-primary/50 text-primary">
                Community Impact
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                Building Tomorrow's <span className="font-serif italic text-[1.1em] font-light">Innovators.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                Beyond competition, we're committed to inspiring the next generation through mentorship, education, and
                community outreach that makes STEM accessible and exciting for all students.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Impact by the Numbers</h2>
              </div>
              <p className="text-lg text-muted-foreground">Measuring our commitment to community STEM education</p>
            </div>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="text-center space-y-2">
                    <div className="text-5xl lg:text-6xl font-mono font-bold text-primary group-hover:animate-bounce">
                      {stat.number}
                    </div>
                    <div className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Community Programs</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated initiatives bringing STEM education and robotics excellence to our community
              </p>
            </div>

            <div className="space-y-16">
              {programs.map((program, index) => {
                const IconComponent = program.icon
                const isEven = index % 2 === 0

                return (
                  <SlideUp
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
                    delay={index * 0.2}
                  >
                    <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{program.title}</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">{program.description}</p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Program Highlights:</h4>
                        <ul className="space-y-2">
                          {program.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={`relative ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                      <TiltCard>
                        <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden hover:shadow-2xl transition-all duration-300">
                          <img
                            src={program.image || "/placeholder.svg"}
                            alt={program.title}
                            className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </TiltCard>
                    </div>
                  </SlideUp>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Community Voices</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Testimonials from those who have experienced our programs firsthand
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <TiltCard>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 shadow-md">
                      <CardContent className="p-6 space-y-4">
                        <div className="text-primary text-4xl font-serif">"</div>
                        <blockquote className="text-muted-foreground italic leading-relaxed">
                          {testimonial.quote}
                        </blockquote>
                        <div className="space-y-1">
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center space-y-6 animate-fade-in">
            <ScaleIn>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
                Get Involved in Our Community
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
                Whether you're a student, parent, educator, or community member, there are many ways to join our mission
                of inspiring the next generation through hands-on STEM education and robotics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="shadow-xl" asChild>
                  <a href="/contact">Partner With Us</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="mailto:rustinpieceftc@gmail.com">Request a Demo</a>
                </Button>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
