import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function TeamPage() {
  // Sample team member data - in a real app this would come from a database or CMS
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Team Captain",
      grade: "12th Grade",
      specialties: ["Programming", "Strategy"],
      bio: "Passionate about autonomous programming and team leadership.",
      image: "/placeholder.svg?height=300&width=300&text=Alex+C",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Engineer",
      grade: "11th Grade",
      specialties: ["Mechanical Design", "CAD"],
      bio: "Specializes in robot chassis design and mechanical systems.",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+J",
    },
    {
      name: "Marcus Rodriguez",
      role: "Programming Lead",
      grade: "12th Grade",
      specialties: ["Java", "Computer Vision"],
      bio: "Expert in robot programming and autonomous navigation.",
      image: "/placeholder.svg?height=300&width=300&text=Marcus+R",
    },
    {
      name: "Emma Thompson",
      role: "Outreach Coordinator",
      grade: "11th Grade",
      specialties: ["Community Engagement", "Presentations"],
      bio: "Leads our community outreach and mentorship programs.",
      image: "/placeholder.svg?height=300&width=300&text=Emma+T",
    },
    {
      name: "David Kim",
      role: "Hardware Specialist",
      grade: "10th Grade",
      specialties: ["Electronics", "Sensors"],
      bio: "Focuses on robot electronics and sensor integration.",
      image: "/placeholder.svg?height=300&width=300&text=David+K",
    },
    {
      name: "Zoe Martinez",
      role: "Design Lead",
      grade: "11th Grade",
      specialties: ["3D Modeling", "Prototyping"],
      bio: "Creates innovative designs and rapid prototypes.",
      image: "/placeholder.svg?height=300&width=300&text=Zoe+M",
    },
    {
      name: "Ryan Park",
      role: "Build Team",
      grade: "10th Grade",
      specialties: ["Assembly", "Testing"],
      bio: "Expert at bringing designs to life through precise assembly.",
      image: "/placeholder.svg?height=300&width=300&text=Ryan+P",
    },
    {
      name: "Lily Wang",
      role: "Documentation Lead",
      grade: "12th Grade",
      specialties: ["Technical Writing", "Project Management"],
      bio: "Manages team documentation and project timelines.",
      image: "/placeholder.svg?height=300&width=300&text=Lily+W",
    },
    {
      name: "Jordan Smith",
      role: "Build Team",
      grade: "9th Grade",
      specialties: ["Manufacturing", "Quality Control"],
      bio: "Ensures high-quality construction and assembly standards.",
      image: "/placeholder.svg?height=300&width=300&text=Jordan+S",
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
              Meet Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              The Minds Behind Rust in Piece
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Our team of 18 dedicated students from Princeton STEM Academy brings together diverse skills,
              perspectives, and a shared passion for robotics and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">18</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Grade Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Specialization Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Team Members</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each member brings unique skills and perspectives to create our collaborative success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} - ${member.role}`}
                        className="w-24 h-24 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <div className="space-y-2">
                      <Badge variant="default" className="bg-primary">
                        {member.role}
                      </Badge>
                      <CardDescription className="text-sm">{member.grade}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Placeholder cards for remaining members */}
              {Array.from({ length: 9 }, (_, index) => (
                <Card key={`placeholder-${index}`} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto">
                        <Users className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">Team Member</CardTitle>
                    <div className="space-y-2">
                      <Badge variant="outline">Role TBD</Badge>
                      <CardDescription className="text-sm">Grade TBD</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Another dedicated member of our robotics team contributing to our success.
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <Badge variant="secondary" className="text-xs">
                        STEM
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Robotics
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Interested in Joining Us?</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              We're always looking for passionate students who want to learn, grow, and make an impact through robotics.
              No prior experience necessary - just enthusiasm and dedication!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="/contact">Apply to Join</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
