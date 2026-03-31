import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SlideUp, TiltCard, StaggerContainer, StaggerItem } from "@/components/animations"
import { ExternalLink, Code2, Wrench, BookOpen, GitBranch, Shield, Lightbulb } from "lucide-react"

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Programming & Control",
      icon: Code2,
      description: "Libraries, guides, and control setups we recommend for advanced FTC programming.",
      resources: [
        {
          name: "Pedro Pathing",
          description: "The premier, high-performance path follower built specifically for the modern FTC era, featuring advanced bezier curves and high-speed multi-threading.",
          link: "https://pedropathing.com/",
          tags: ["Pathing", "Java", "Advanced"],
        },
        {
          name: "Road Runner",
          description: "The classic motion profiling and trajectory generation library used by thousands of FTC teams for reliable autonomous movement.",
          link: "https://learnroadrunner.com/",
          tags: ["Odometry", "Pathing", "Standard"],
        },
        {
          name: "FTC Dashboard",
          description: "A utility that allows you to tune variables, test trajectories, and view live camera streams directly from a web browser during matches.",
          link: "https://acmerobotics.github.io/ftc-dashboard/",
          tags: ["Telemetry", "Tuning", "Vision"],
        },
        {
          name: "Official FTC Docs",
          description: "The official FIRST documentation covering the REV Control Hub, wiring guides, and basic programming pipelines.",
          link: "https://ftc-docs.firstinspires.org/",
          tags: ["Hardware", "Wiring", "Official"],
        },
      ],
    },
    {
      title: "Mechanical & CAD",
      icon: Wrench,
      description: "Structural building frameworks, 3D printing resources, and mechanism inspiration.",
      resources: [
        {
          name: "GameManual0 (gm0)",
          description: "The definitive open-source guide to FIRST Tech Challenge. Excellent chapters on drivetrains, intakes, lifts, and mechanisms.",
          link: "https://gm0.org/",
          tags: ["Build Guide", "Mechanisms", "Theory"],
        },
        {
          name: "goBILDA Official Docs",
          description: "Resources for working with the goBILDA pattern, including gear ratios, servo setups, and structural components.",
          link: "https://www.gobilda.com/documentation/",
          tags: ["Pattern", "Hardware", "Vendor"],
        },
        {
          name: "Onshape for Education",
          description: "The industry standard cloud-based CAD software. Highly recommended for collaborative FTC robot design and part libraries.",
          link: "https://www.onshape.com/en/education/",
          tags: ["CAD", "Design", "Modeling"],
        },
        {
          name: "SendableChooser FTC Models",
          description: "A large, curated collection of pre-made FTC CAD models, field parts, and components for rapid virtual assembly.",
          link: "https://www.onshape.com/en/",
          tags: ["Libraries", "Assemblies"],
        },
      ],
    },
    {
      title: "Business & Outreach",
      icon: BookOpen,
      description: "Templates, advice, and strategies for the Engineering Portfolio, Judging, and Fundraising.",
      resources: [
        {
          name: "Think Award Criteria",
          description: "Official judging rubrics and deep-dives into what makes a competitive, award-winning Engineering Portfolio.",
          link: "https://www.firstinspires.org/resource-library/ftc/award-descriptions",
          tags: ["Judging", "Portfolio"],
        },
        {
          name: "Canva Pro (Nonprofits)",
          description: "Free access to Canva Pro for robotics teams. The absolute best tool for designing team branding, pits, and portfolios.",
          link: "https://www.canva.com/canva-for-nonprofits/",
          tags: ["Design", "Branding", "Tools"],
        },
        {
          name: "Compass & Promote Awards",
          description: "Guidelines and best practices for filming, editing, and submitting high-quality videos for FIRST's special video awards.",
          link: "https://www.firstinspires.org/resource-library/ftc/award-descriptions",
          tags: ["Media", "Video", "Outreach"],
        },
        {
          name: "Youth Protection Program",
          description: "Mandatory reading for all mentors and team leadership regarding safety, student protection, and inclusion practices.",
          link: "https://www.firstinspires.org/resource-library/youth-protection-policy",
          tags: ["Safety", "Mentors", "Mandatory"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 border-b border-border/40 relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 z-0"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
              <StaggerItem>
                <Badge variant="outline" className="text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border-primary/50 text-primary">
                  Open Source & Knowledge
                </Badge>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                  Resources for the <span className="font-serif italic text-[1.1em] font-light">Community.</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                  We believe in Gracious Professionalism. Here is a curated list of the best tools, libraries, and guides 
                  we use to build our robots and run our team. We hope these help rookie and veteran teams alike!
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Categories Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          {resourceCategories.map((category, categoryIndex) => (
            <section key={category.title} className="space-y-12">
              <SlideUp className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </SlideUp>

              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                {category.resources.map((resource, index) => (
                  <StaggerItem key={index}>
                    <TiltCard className="h-full">
                      <Card className="h-full flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="space-y-3 pb-4">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                              {resource.name}
                            </CardTitle>
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full opacity-50 group-hover:opacity-100 group-hover:bg-primary/10 group-hover:text-primary transition-all -mt-1 -mr-1" asChild>
                              <a href={resource.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${resource.name}`}>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {resource.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground font-medium text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 text-muted-foreground leading-relaxed">
                          <p>{resource.description}</p>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          ))}
        </div>

        {/* Contributing CTA */}
        <section className="py-20 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SlideUp className="max-w-2xl mx-auto space-y-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto border border-primary/20 mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Have a resource to add?</h2>
              <p className="text-lg text-muted-foreground">
                We are always looking to expand our knowledge base. If your team has created a helpful guide, CAD model, or library, let us know!
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg" asChild>
                <a href="/contact">Suggest a Resource</a>
              </Button>
            </SlideUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
