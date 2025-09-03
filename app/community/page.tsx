import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, GraduationCap, Lightbulb, Award, Calendar, MapPin, Target } from "lucide-react"

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
        "We actively mentor 2 FIRST Lego League teams, sharing our knowledge and passion for robotics with younger students.",
      details: [
        "Weekly mentoring sessions during FLL season",
        "Hands-on guidance with robot design and programming",
        "Competition strategy and teamwork development",
        "Inspiring the next generation of robotics enthusiasts",
      ],
      image: "/placeholder.svg?height=300&width=400&text=FLL+Mentorship",
    },
    {
      title: "Annual STEM Camp",
      icon: GraduationCap,
      description:
        "Our flagship community program brings STEM education to 3rd-8th grade students through hands-on activities and robotics workshops.",
      details: [
        "Week-long summer camp experience",
        "Introduction to programming and engineering",
        "Team-building activities and challenges",
        "Inspiring interest in STEM careers",
      ],
      image: "/placeholder.svg?height=300&width=400&text=STEM+Camp",
    },
    {
      title: "School Demonstrations",
      icon: Lightbulb,
      description:
        "We visit local schools to demonstrate our robot and share the excitement of competitive robotics with students of all ages.",
      details: [
        "Interactive robot demonstrations",
        "Q&A sessions about robotics and engineering",
        "Encouraging STEM participation",
        "Building community connections",
      ],
      image: "/placeholder.svg?height=300&width=400&text=School+Demo",
    },
    {
      title: "Community Workshops",
      icon: Award,
      description:
        "We host workshops and events to share robotics knowledge with the broader community and promote STEM education.",
      details: [
        "Public robotics workshops",
        "Parent and family engagement events",
        "Collaboration with local organizations",
        "Promoting STEM literacy in our community",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Community+Workshop",
    },
  ]

  const testimonials = [
    {
      quote:
        "The mentorship from Rust in Piece has been incredible. Our FLL team learned so much about teamwork and problem-solving.",
      author: "Sarah Chen",
      role: "FLL Team Coach",
    },
    {
      quote:
        "My daughter came home from the STEM camp so excited about robotics. She's now considering engineering as a career path!",
      author: "Michael Rodriguez",
      role: "Parent",
    },
    {
      quote:
        "The team's demonstration at our school inspired many of our students to join our robotics club. Their passion is contagious!",
      author: "Dr. Emily Johnson",
      role: "Middle School Principal",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-primary border-primary">
              Community Impact
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Building Tomorrow's Innovators
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Beyond competition, we're committed to inspiring the next generation through mentorship, education, and
              community outreach that makes STEM accessible to all students.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Impact by the Numbers</h2>
              </div>
              <p className="text-lg text-muted-foreground">Measuring our commitment to community education</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Community Programs</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated initiatives that bring STEM education and robotics to our community
              </p>
            </div>

            <div className="space-y-16">
              {programs.map((program, index) => {
                const IconComponent = program.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
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
                      <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                        <img
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
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
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Community Voices</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from those who have experienced our programs firsthand
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Upcoming Community Events</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Join us at these upcoming opportunities to engage with STEM
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <Badge variant="outline">Summer 2024</Badge>
                  </div>
                  <CardTitle>Annual STEM Camp</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription>
                    Week-long robotics and engineering camp for 3rd-8th grade students. Registration opens in Spring!
                  </CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Princeton STEM Academy</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <Badge variant="outline">Monthly</Badge>
                  </div>
                  <CardTitle>FLL Mentoring Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription>
                    Regular mentoring sessions with our FLL teams during competition season. Building the next
                    generation of roboticists!
                  </CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Various Locations</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <Badge variant="outline">On Request</Badge>
                  </div>
                  <CardTitle>School Demonstrations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription>
                    Interactive robot demonstrations and STEM presentations for schools and community groups. Contact us
                    to schedule!
                  </CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Your Location</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Get Involved in Our Community
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Whether you're a student, parent, educator, or community member, there are many ways to join our mission
              of inspiring the next generation through STEM education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">Partner With Us</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="mailto:rust123">Request a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
