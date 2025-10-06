import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Zap } from "lucide-react"

export default function TeamPage() {
  const leadership = [
    {
      name: "Rohin K",
      role: "Captain",
      grade: "11th Grade",
      specialties: ["Leadership", "Strategy", "Team Management"],
      bio: "Leads the team with vision and oversees all operations.",
      image: "/kudeti?height=300&width=300&text=Captain",
    },
    {
      name: "Chinmay C",
      role: "Co-Captain",
      grade: "9th Grade",
      specialties: ["Leadership", "CAD", "Design"],
      bio: "Supports team leadership and drives innovation.",
      image: "/chinny.jpeg?height=300&width=300&text=Co-Captain",
    },
    {
      name: "Krish S",
      role: "Programming Lead",
      grade: "10th Grade",
      specialties: ["Java", "Autonomous", "Control Systems"],
      bio: "Leads all programming activities and robot control systems.",
      image: "/krish.jpg?height=300&width=300&text=Programming+Lead",
    },
    {
      name: "Aarav G",
      role: "Business Lead",
      grade: "11th Grade",
      specialties: ["Outreach", "Sponsorships", "Marketing"],
      bio: "Manages business operations, sponsorships, and community engagement.",
      image: "/GOAT?height=300&width=300&text=Business+Lead",
    },
    {
      name: "Srihaan B",
      role: "Mechanical Lead",
      grade: "10th Grade",
      specialties: ["CAD", "Assembly", "Engineering"],
      bio: "Leads mechanical design and construction of robot systems.",
      image: "/sri.JPG?height=300&width=300&text=Srihaan+M",
    },
    {
      name: "Ishana M",
      role: "Outreach Captain",
      grade: "11th Grade",
      specialties: ["Community Engagement", "Social Media", "Events"],
      bio: "Leads all outreach initiatives and community engagement efforts.",
      image: "/ishana.jpg?height=300&width=300&text=Ishana+M",
    },
  ]

  const associates = [
    {
      name: "Akshit T",
      role: "Programming Associate",
      grade: "12th Grade",
      specialties: ["Sensors", "Vision"],
      bio: "Develops robot programming and sensor integration.",
      image: "/dosa.jpeg?height=300&width=300&text=Prog+Associate+1",
    },
    {
      name: "Vihaan M",
      role: "Programming Associate",
      grade: "9th Grade",
      specialties: ["Java", "Testing"],
      bio: "Works on robot control algorithms and testing protocols.",
      image: "/3slices.jpg?height=300&width=300&text=Prog+Associate+2",
    },
    {
      name: "Atharv S",
      role: "Mechanical Associate",
      grade: "9th Grade",
      specialties: ["Assembly", "CNC"],
      bio: "Assists with robot construction and mechanical systems.",
      image: "/atharv.jpeg?height=300&width=300&text=Mech+Associate+1",
    },
    {
      name: "Veer S",
      role: "Mechanical Associate",
      grade: "11th Grade",
      specialties: ["Assembly", "CAD"],
      bio: "Supports mechanical design and material selection.",
      image: "/veer.jpg?height=300&width=300&text=Mech+Associate+2",
    },
    {
      name: "Varsha K",
      role: "Outreach Associate",
      grade: "10th Grade",
      specialties: ["Social Media", "Events"],
      bio: "Manages social media presence and event coordination.",
      image: "/varsha.jpg?height=300&width=300&text=Outreach+Associate+1",
    },
  ]

  const trainees = [
    {
      name: "Felix Z",
      role: "Programming Trainee",
      grade: "8th Grade",
      specialties: ["Learning Java", "Basic Programming"],
      bio: "New to programming, eager to learn robot control systems.",
      image: "/felix.jpg?height=300&width=300&text=Prog+Trainee+1",
    },
    {
      name: "Sid M",
      role: "Programming Trainee",
      grade: "10th Grade",
      specialties: ["Learning Java", "Problem Solving"],
      bio: "Developing programming skills and logical thinking.",
      image: "/sid.jpeg?height=300&width=300&text=Prog+Trainee+2",
    },
    {
      name: "Ankita S",
      role: "Programming Trainee",
      grade: "9th Grade",
      specialties: ["Learning java", "Learning teleop"],
      bio: "Learning mechanical design principles and tool usage.",
      image: "/ankita.jpg?height=300&width=300&text=Mech+Trainee+1",
    },
    {
      name: "Aditya N",
      role: "Mechanical Trainee",
      grade: "8th Grade",
      specialties: ["CAD", "Assembly"],
      bio: "Gaining hands-on experience with robot assembly.",
      image: "/tuffnavale.jpg?height=300&width=300&text=Mech+Trainee+2",
    },
    {
      name: "Aditya D",
      role: "Mechanical Trainee",
      grade: "10th Grade",
      specialties: ["Physics", "Learning Business"],
      bio: "Developing communication and business skills.",
      image: "/IMG_2381.jpg?height=300&width=300&text=Outreach+Trainee+1",
    },
    {
      name: "Samarth p",
      role: "Mech Trainee",
      grade: "9th Grade",
      specialties: ["Assembly", "Mech"],
      bio: "Mastering CAD and Building the robot.",
      image: "/rookie.jpeg?height=300&width=300&text=Outreach+Trainee+2",
    },
    {
      name: "Ayush B",
      role: "Outreach Trainee",
      grade: "8th Grade",
      specialties: ["Fundraising", "Spreadability"],
      bio: "Learning how to spread FIRST and fundraise money.",
      image: "/Ahush?height=300&width=300&text=Outreach+Trainee+2",
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
              <div className="text-3xl font-bold text-primary">6</div>
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

      <Footer />
    </div>
  )
}
