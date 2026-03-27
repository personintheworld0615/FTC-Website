import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Lightbulb, Award, Network } from 'lucide-react'

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
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm font-medium">
              Our Mentors
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Guiding Our Journey
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the experienced professionals who provide guidance, expertise, and inspiration to help our team reach new heights in robotics excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Philosophy */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Our Mentorship Philosophy</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our mentors guide us to discover solutions ourselves. Through their expertise and encouragement, we learn to think critically, solve complex problems, and develop both technical skills and leadership qualities.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">Innovation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Encouraging creative thinking and novel approaches to engineering challenges.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">Collaboration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fostering teamwork and effective communication within our diverse team.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border">
                <img
                  src="/images/mentorship-philosophy.png"
                  alt="Mentor teaching team members in workshop setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Mentors */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Meet Our Mentors</h2>
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Experienced professionals dedicated to nurturing the next generation of engineers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {mentors.map((mentor, index) => (
                <Card key={index} className="border border-border hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4">
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={`${mentor.name} - ${mentor.title}`}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border"
                      />
                    </div>
                    <CardTitle className="text-xl">{mentor.name}</CardTitle>
                    <Badge className="w-fit mx-auto bg-primary text-primary-foreground">
                      {mentor.title}
                    </Badge>
                    <CardDescription className="font-medium">{mentor.background}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {mentor.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground">Experience</h4>
                      <p className="text-sm text-muted-foreground">{mentor.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Network className="w-5 h-5 text-primary" />
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Connect</h2>
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Building bridges with industry leaders to provide real-world insights
              </p>
            </div>

            <div className="flex justify-center">
              {connections.map((connection, index) => (
                <Card key={index} className="border border-border hover:shadow-md transition-shadow duration-200 max-w-sm w-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4">
                      <img
                        src={connection.image || "/placeholder.svg"}
                        alt={connection.name}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border"
                      />
                    </div>
                    <CardTitle className="text-xl">{connection.name}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto">
                      {connection.title}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground">{connection.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                The Impact of Great Mentorship
              </h2>
              <p className="text-muted-foreground">How our mentors help shape the future of STEM education</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border border-border">
                <CardHeader className="text-center pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    Our mentors help team members develop both technical expertise and essential soft skills like leadership and problem-solving.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardHeader className="text-center pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Career Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    With their industry experience, our mentors provide valuable insights into STEM career paths and future opportunities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardHeader className="text-center pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Innovation Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    They foster a culture of innovation and continuous learning, encouraging students to push boundaries.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-8 rounded-xl border border-border bg-card">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Interested in Mentoring?
            </h2>
            <p className="text-muted-foreground">
              We're always looking for experienced professionals who want to share their knowledge and help inspire the next generation of engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get Involved</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/team">Learn About Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
