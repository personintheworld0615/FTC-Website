import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Lightbulb, Award, Mail, Linkedin } from "lucide-react"

export default function MentorsPage() {
  const mentors = [
    {
      name: "Dr. Rogers",
      title: "Lead Mentor",
      background: "Engineering Professor",
      expertise: ["Robotics Engineering", "Systems Design", "Project Management"],
      experience: "15+ years in robotics and engineering education",
      bio: "Dr. Rogers brings extensive experience in robotics engineering and has been instrumental in guiding our team's technical development and strategic thinking.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Rogers",
      contact: {
        email: "dr.rogers@example.com",
        linkedin: "#",
      },
    },
    {
      name: "Mr. Levi",
      title: "Technical Mentor",
      background: "Industry Professional",
      expertise: ["Programming", "Electronics", "Competition Strategy"],
      experience: "10+ years in software development and robotics",
      bio: "Mr. Levi provides hands-on technical guidance and helps our team navigate the complexities of competitive robotics programming and electronics.",
      image: "/placeholder.svg?height=300&width=300&text=Mr.+Levi",
      contact: {
        email: "mr.levi@example.com",
        linkedin: "#",
      },
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
              Our Mentors
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">Guiding Our Journey</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Meet the experienced professionals who provide guidance, expertise, and inspiration to help our team reach
              new heights in robotics and engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Philosophy */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mentorship Philosophy</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Our mentors don't just provide answers—they guide us to discover solutions ourselves. Through their
                  expertise and encouragement, we learn to think critically, solve complex problems, and develop both
                  technical skills and leadership qualities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Innovation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Encouraging creative thinking and novel approaches to engineering challenges.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Collaboration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fostering teamwork and effective communication within our diverse team.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Mentorship+in+Action"
                  alt="Mentors working with team members"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Mentors */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet Our Mentors</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to nurturing the next generation of engineers and innovators
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mentors.map((mentor, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center space-y-4">
                    <div className="mx-auto">
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={`${mentor.name} - ${mentor.title}`}
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{mentor.name}</CardTitle>
                      <Badge variant="default" className="bg-primary">
                        {mentor.title}
                      </Badge>
                      <CardDescription className="text-base font-medium">{mentor.background}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{mentor.bio}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Experience</h4>
                      <p className="text-sm text-muted-foreground">{mentor.experience}</p>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${mentor.contact.email}`} className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>Contact</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={mentor.contact.linkedin} className="flex items-center space-x-2">
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                The Impact of Great Mentorship
              </h2>
              <p className="text-lg text-muted-foreground">How our mentors help shape the future of STEM education</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle>Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Our mentors help team members develop both technical expertise and essential soft skills like
                    leadership, communication, and problem-solving.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle>Career Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    With their industry experience, our mentors provide valuable insights into STEM career paths and
                    help students make informed decisions about their futures.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle>Innovation Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    They foster a culture of innovation and continuous learning, encouraging students to push boundaries
                    and explore new possibilities.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Interested in Mentoring?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              We're always looking for experienced professionals who want to share their knowledge and help inspire the
              next generation of engineers and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">Get Involved</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="/about">Learn About Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
