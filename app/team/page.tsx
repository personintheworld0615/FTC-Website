import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Star, Zap } from "lucide-react"

export default function TeamPage() {
  const leadership = [
    {
      name: "Rohin K",
      role: "Team Captain/Lead Engineer",
      grade: "11th Grade",
      specialties: ["Leadership", "Engineering", "Strategy"],
      bio: "Leads the team and oversees all engineering operations.",
      image: "/placeholder.svg?height=300&width=300&text=Team+Captain",
    },
    {
      name: "Srihaan B",
      role: "Computer Aided Design Specialist",
      grade: "10th Grade",
      specialties: ["CAD", "3D Modeling", "Design"],
      bio: "Creates detailed 3D models and technical drawings for robot components.",
      image: "/placeholder.svg?height=300&width=300&text=CAD+Specialist",
    },
    {
      name: "Krish S",
      role: "Head of Programming Operations",
      grade: "11th Grade",
      specialties: ["Java", "Autonomous", "TeleOp"],
      bio: "Oversees all programming activities and robot control systems.",
      image: "/placeholder.svg?height=300&width=300&text=Programming+Head",
    },
    
    {
      name: "Ishana M",
      role: "Head of Community Outreach",
      grade: "11th Grade",
      specialties: ["Community", "Business", "Presentations"],
      bio: "Manages community engagement and outreach programs.",
      image: "/placeholder.svg?height=300&width=300&text=Outreach+Head",
    },
  ]

  const associates = [
    {
      name: "Aarav G",
      role: "Programming Associate",
      grade: "10th Grade",
      specialties: ["Java", "Sensors", "Vision"],
      bio: "Develops robot programming and sensor integration.",
      image: "/placeholder.svg?height=300&width=300&text=Prog+Associate+1",
    },
    {
      name: "Akshit T",
      role: "Programming Associate",
      grade: "12th Grade",
      specialties: ["Java", "Sensors", "Vision"],
      bio: "Develops robot programming and sensor integration.",
      image: "/placeholder.svg?height=300&width=300&text=Prog+Associate+1",
    },
    {
      name: "Vihaan M",
      role: "Programming Associate",
      grade: "9th Grade",
      specialties: ["Java", "Control Systems", "Testing"],
      bio: "Works on robot control algorithms and testing protocols.",
      image: "/placeholder.svg?height=300&width=300&text=Prog+Associate+2",
    },
    {
      name: "Atharv K",
      role: "Mechanical Associate",
      grade: "10th Grade",
      specialties: ["Fabrication", "Assembly", "Tools"],
      bio: "Assists with robot construction and mechanical systems.",
      image: "/placeholder.svg?height=300&width=300&text=Mech+Associate+1",
    },
     {
      name: "Veer S",
      role: "Mechanical Associate",
      grade: "10th Grade",
      specialties: ["Design", "Materials", "Testing"],
      bio: "Supports mechanical design and material selection.",
      image: "/placeholder.svg?height=300&width=300&text=Mech+Associate+2",
    },
    {
      name: "Varsha K",
      role: "Outreach Associate",
      grade: "10th Grade",
      specialties: ["Social Media", "Events", "Documentation"],
      bio: "Manages social media presence and event coordination.",
      image: "/placeholder.svg?height=300&width=300&text=Outreach+Associate+1",
    },
    
  ]

  const trainees = [
    {
      name: "Felix Z",
      role: "Programming Trainee",
      grade: "9th Grade",
      specialties: ["Learning Java", "Basic Programming"],
      bio: "New to programming, eager to learn robot control systems.",
      image: "/placeholder.svg?height=300&width=300&text=Prog+Trainee+1",
    },
    {
      name: "Sid M",
      role: "Programming Trainee",
      grade: "8th Grade",
      specialties: ["Learning Java", "Problem Solving"],
      bio: "Developing programming skills and logical thinking.",
      image: "/placeholder.svg?height=300&width=300&text=Prog+Trainee+2",
    },
    {
      name: "Ankita S",
      role: "Programming Trainee",
      grade: "9th Grade",
      specialties: ["Learning CAD", "Basic Tools"],
      bio: "Learning mechanical design principles and tool usage.",
      image: "/placeholder.svg?height=300&width=300&text=Mech+Trainee+1",
    },
    {
      name: "Aditya N",
      role: "Mechanical Trainee",
      grade: "8th Grade",
      specialties: ["Assembly", "Learning Design"],
      bio: "Gaining hands-on experience with robot assembly.",
      image: "/placeholder.svg?height=300&width=300&text=Mech+Trainee+2",
    },
    {
      name: "Aditya D",
      role: "Mechanical Trainee",
      grade: "9th Grade",
      specialties: ["Communication", "Learning Business"],
      bio: "Developing communication and business skills.",
      image: "/placeholder.svg?height=300&width=300&text=Outreach+Trainee+1",
    },
    {
      name: "Ayush B",
      role: "Outreach Trainee",
      grade: "8th Grade",
      specialties: ["Event Support", "Learning Outreach"],
      bio: "Supporting events and learning outreach strategies.",
      image: "/placeholder.svg?height=300&width=300&text=Outreach+Trainee+2",
    },
    {
      name: "Chinmay C",
      role: "mech trainee",
      grade: "10th Grade",
      specialties: ["Mechanical Design", "Assembly", "Testing"],
      bio: "has fun with robots.",
      image: "/placeholder.svg?height=300&width=300&text=Mechanical+Head",
    },
  ]

  const TeamSection = ({ title, members, icon: Icon, badgeVariant, delay = 0 }) => (
    <div className="space-y-8 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Icon className="w-6 h-6 text-primary" />
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{title}</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${delay + index * 100}ms` }}
          >
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
                <Badge variant={badgeVariant} className={badgeVariant === "default" ? "bg-primary" : ""}>
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
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary animate-slide-up">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance animate-slide-up delay-100">
              The Minds Behind Rust in Piece
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed animate-slide-up delay-200">
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
            <div className="text-center animate-slide-up delay-100">
              <div className="text-3xl font-bold text-primary">18</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </div>
            <div className="text-center animate-slide-up delay-200">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Leadership Roles</div>
            </div>
            <div className="text-center animate-slide-up delay-300">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Departments</div>
            </div>
            <div className="text-center animate-slide-up delay-500">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Hierarchy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <TeamSection title="Leadership Team" members={leadership} icon={Crown} badgeVariant="default" delay={0} />

          <TeamSection title="Associates" members={associates} icon={Star} badgeVariant="secondary" delay={200} />

          <TeamSection title="Trainees" members={trainees} icon={Zap} badgeVariant="outline" delay={400} />
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance animate-slide-up delay-100">
              Interested in Joining Us?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed animate-slide-up delay-200">
              We're always looking for passionate students who want to learn, grow, and make an impact through robotics.
              No prior experience necessary - just enthusiasm and dedication!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
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
