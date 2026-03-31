import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Zap } from "lucide-react"
import { SlideUp, TiltCard, StaggerContainer, StaggerItem } from "@/components/animations"

interface TeamMember {
  name: string
  role: string
  grade: string
  specialties: string[]
  bio: string
  image: string
}

interface TeamSectionProps {
  title: string
  members: TeamMember[]
  icon: React.ElementType
  badgeVariant: "default" | "secondary" | "outline"
  delay?: number
}

export default function TeamPage() {
  const leadership = [
    {
      name: "Rohin K",
      role: "Captain",
      grade: "11th Grade",
      specialties: ["Leadership", "Strategy", "Team Management"],
      bio: "Leads the team with vision and oversees all operations.",
      image: "/kudeti.jpg?height=300&width=300&text=Captain",
    },
    {
      name: "Chinmay C",
      role: "Co-Captain",
      grade: "9th Grade",
      specialties: ["Leadership", "CAD", "Design"],
      bio: "Supports team leadership and drives innovation.",
      image: "/chin2.jpg?height=300&width=300&text=Co-Captain",
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
      grade: "9th Grade",
      specialties: ["Outreach", "Sponsorships", "Marketing"],
      bio: "Manages business operations, sponsorships, and community engagement.",
      image: "/GOAT.jpg?height=300&width=300&text=Business+Lead",
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
      image: "/dosa2.jpg?height=300&width=300&text=Prog+Associate+1",
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
      name: "Veer S",
      role: "Mechanical Trainee",
      grade: "11th Grade",
      specialties: ["Assembly", "CAD"],
      bio: "Supports mechanical design and material selection.",
      image: "/veer.jpg?height=300&width=300&text=Mech+Associate+2",
    },
    {
      name: "Sid M",
      role: "Programming Trainee",
      grade: "10th Grade",
      specialties: ["Learning Java", "Problem Solving"],
      bio: "Developing programming skills and logical thinking.",
      image: "/sid2.jpg?height=300&width=300&text=Prog+Trainee+2",
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
      image: "/sam2.jpg?height=300&width=300&text=Outreach+Trainee+2",
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

  const TeamSection = ({ title, members, icon: Icon, badgeVariant, delay = 0 }: TeamSectionProps) => (
    <SlideUp className="space-y-12" delay={delay / 1000}>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Icon className="w-8 h-8 text-primary" />
          <h3 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground uppercase">{title}</h3>
        </div>
      </div>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member: TeamMember, index: number) => (
          <StaggerItem key={index}>
            <TiltCard>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 shadow-md bg-white/60 backdrop-blur-sm border-primary/10">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 rounded-full object-cover object-center mx-auto"
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
                {member.specialties.map((specialty: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SlideUp>
  )

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
                Meet Our Team
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                The Minds Behind <span className="font-serif italic text-[1.1em] font-light">Rust in Piece.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                Our team of 17 dedicated students from Princeton STEM Academy combines diverse skills, unique
                perspectives, and an unwavering passion for robotics and innovation.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">17</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Leadership Roles</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Departments</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
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
