"use client"

import React, { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  ExternalLink, 
  Code2, 
  Wrench, 
  BookOpen, 
  Lightbulb, 
  Search, 
  ChevronRight, 
  Tag, 
  FolderOpen
} from "lucide-react"

interface Resource {
  name: string
  description: string
  link: string
  tags: string[]
  category: string
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTag, setSelectedTag] = useState<string>("all")

  console.log("ResourcesPage Render State:", { searchQuery, selectedCategory, selectedTag })

  const categories = [
    { id: "all", name: "All Categories", icon: FolderOpen },
    { id: "programming", name: "Programming & Control", icon: Code2 },
    { id: "mechanical", name: "Mechanical & CAD", icon: Wrench },
    { id: "business", name: "Business & Outreach", icon: BookOpen },
  ]

  const resources: Resource[] = [
    {
      name: "Pedro Pathing",
      description: "The premier, high-performance path follower built specifically for the modern FTC era, featuring advanced bezier curves and high-speed multi-threading.",
      link: "https://pedropathing.com/",
      tags: ["Pathing", "Java", "Advanced"],
      category: "programming",
    },
    {
      name: "Road Runner",
      description: "The classic motion profiling and trajectory generation library used by thousands of FTC teams for reliable autonomous movement.",
      link: "https://learnroadrunner.com/",
      tags: ["Odometry", "Pathing", "Standard"],
      category: "programming",
    },
    {
      name: "FTC Dashboard",
      description: "A utility that allows you to tune variables, test trajectories, and view live camera streams directly from a web browser during matches.",
      link: "https://acmerobotics.github.io/ftc-dashboard/",
      tags: ["Telemetry", "Tuning", "Vision"],
      category: "programming",
    },
    {
      name: "Official FTC Docs",
      description: "The official FIRST documentation covering the REV Control Hub, wiring guides, and basic programming pipelines.",
      link: "https://ftc-docs.firstinspires.org/",
      tags: ["Hardware", "Wiring", "Official"],
      category: "programming",
    },
    {
      name: "GameManual0 (gm0)",
      description: "The definitive open-source guide to FIRST Tech Challenge. Excellent chapters on drivetrains, intakes, lifts, and mechanisms.",
      link: "https://gm0.org/",
      tags: ["Build Guide", "Mechanisms", "Theory"],
      category: "mechanical",
    },
    {
      name: "goBILDA Official Docs",
      description: "Resources for working with the goBILDA pattern, including gear ratios, servo setups, and structural components.",
      link: "https://www.gobilda.com/documentation/",
      tags: ["Pattern", "Hardware", "Vendor"],
      category: "mechanical",
    },
    {
      name: "Onshape for Education",
      description: "The industry standard cloud-based CAD software. Highly recommended for collaborative FTC robot design and part libraries.",
      link: "https://www.onshape.com/en/education/",
      tags: ["CAD", "Design", "Modeling"],
      category: "mechanical",
    },
    {
      name: "SendableChooser FTC Models",
      description: "A large, curated collection of pre-made FTC CAD models, field field parts, and components for rapid virtual assembly.",
      link: "https://www.onshape.com/en/",
      tags: ["CAD", "Libraries", "Assemblies"],
      category: "mechanical",
    },
    {
      name: "Think Award Criteria",
      description: "Official judging rubrics and deep-dives into what makes a competitive, award-winning Engineering Portfolio.",
      link: "https://www.firstinspires.org/resource-library/ftc/award-descriptions",
      tags: ["Judging", "Portfolio", "Rubric"],
      category: "business",
    },
    {
      name: "Canva Pro (Nonprofits)",
      description: "Free access to Canva Pro for robotics teams. The absolute best tool for designing team branding, pits, and portfolios.",
      link: "https://www.canva.com/canva-for-nonprofits/",
      tags: ["Design", "Branding", "Tools"],
      category: "business",
    },
    {
      name: "Compass & Promote Awards",
      description: "Guidelines and best practices for filming, editing, and submitting high-quality videos for FIRST's special video awards.",
      link: "https://www.firstinspires.org/resource-library/ftc/award-descriptions",
      tags: ["Media", "Video", "Outreach"],
      category: "business",
    },
    {
      name: "Youth Protection Program",
      description: "Mandatory reading for all mentors and team leadership regarding safety, student protection, and inclusion practices.",
      link: "https://www.firstinspires.org/resource-library/youth-protection-policy",
      tags: ["Safety", "Mentors", "Mandatory"],
      category: "business",
    },
  ]

  // Gather all unique tags that belong to resources matching current category & search filter
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>()
    const matchedResources = resources.filter((resource) => {
      const matchesSearch = 
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = 
        selectedCategory === "all" || resource.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    
    matchedResources.forEach((r) => r.tags.forEach((t) => tagsSet.add(t)))
    return ["all", ...Array.from(tagsSet)]
  }, [searchQuery, selectedCategory])

  // Auto-reset selected tag if it's no longer relevant to the currently filtered dataset
  React.useEffect(() => {
    if (selectedTag !== "all" && !allTags.includes(selectedTag)) {
      setSelectedTag("all")
    }
  }, [allTags, selectedTag])

  // Filter resources based on search, category, and tag
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch = 
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = 
        selectedCategory === "all" || resource.category === selectedCategory

      const matchesTag = 
        selectedTag === "all" || resource.tags.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchQuery, selectedCategory, selectedTag])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 border-b border-border/40 relative overflow-hidden flex flex-col justify-center min-h-[45vh] bg-background">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="animate-slide-up">
                <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border-primary/20 text-primary bg-primary/10">
                  OPEN SOURCE KNOWLEDGEBASE
                </Badge>
              </div>
              <div className="animate-slide-up [animation-delay:100ms]">
                <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
                  Curated Tools & <br />
                  <span className="font-serif italic font-light text-primary text-[1.05em] capitalize tracking-normal">Resources.</span>
                </h1>
              </div>
              <div className="animate-slide-up [animation-delay:200ms]">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                  We believe in sharing what we learn. Explore this directory of software libraries, hardware guides, and business design tools vetted by FTC Team 19772.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Directory Explorer Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
              
              {/* Left Column: Sidebar Filters */}
              <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-28">
                <div className="animate-slide-up space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">CATEGORIES</h3>
                  <div className="flex flex-col gap-1">
                    {categories.map((cat) => {
                      const IconComponent = cat.icon
                      const isActive = selectedCategory === cat.id
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            console.log("Category clicked:", cat.id)
                            setSelectedCategory(cat.id)
                            setSelectedTag("all") // reset tag filter on category switch
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between text-sm font-medium transition-all ${
                            isActive 
                              ? "bg-primary/10 text-primary border-none shadow-sm" 
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-4 h-4 shrink-0" />
                            <span>{cat.name}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 opacity-55 transition-transform ${isActive ? "translate-x-1" : ""}`} />
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="animate-slide-up space-y-4 [animation-delay:150ms]">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">TAG FILTERS</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {allTags.map((tag) => {
                       const isActive = selectedTag === tag
                      return (
                        <Button
                          key={tag}
                          variant={isActive ? "default" : "outline"}
                          size="sm"
                          onClick={() => {
                            console.log("Tag clicked:", tag)
                            setSelectedTag(tag)
                          }}
                          className={`rounded-full text-xs px-3 py-1.5 h-auto transition-all ${
                            isActive 
                              ? "bg-primary text-primary-foreground" 
                              : "border-primary/10 hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {tag === "all" ? "Clear Filters" : tag}
                        </Button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Search + Flat List */}
              <div className="lg:col-span-9 space-y-8">
                <div className="relative max-w-2xl animate-slide-up">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground/60 pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Search resources by name, keyword, or descriptor..."
                    value={searchQuery}
                    onChange={(e) => {
                      console.log("Search input changed:", e.target.value)
                      setSearchQuery(e.target.value)
                    }}
                    className="pl-12 py-6 text-base rounded-2xl bg-card border-primary/10 hover:border-primary/25 focus-visible:ring-primary shadow-sm"
                  />
                </div>

                {/* Flat List Directory */}
                <div className="min-h-[500px] flex flex-col divide-y divide-border/30 border-t border-b border-border/30 animate-fade-in">
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                      <div key={resource.name} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-6 hover:bg-primary/[0.02] px-4 transition-all duration-200 border-none relative transform-gpu hover:-translate-y-0.5"
                        >
                          <div className="space-y-3 flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {resource.name}
                              </h3>
                              <Badge variant="outline" className="bg-muted/10 text-xs font-mono uppercase tracking-widest text-muted-foreground border-none px-2 py-0.5">
                                {resource.category}
                              </Badge>
                            </div>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium max-w-3xl">
                              {resource.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {resource.tags.map((tag) => (
                                <span key={tag} className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full border border-primary/5 flex items-center gap-1.5">
                                  <Tag className="w-2.5 h-2.5 shrink-0 text-primary/70" />
                                  <span>{tag}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="shrink-0 flex items-center gap-2 text-primary/40 group-hover:text-primary transition-colors md:self-center">
                            <span className="text-xs font-mono uppercase tracking-widest font-semibold hidden md:inline opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">VISIT SITE</span>
                            <ExternalLink className="w-5 h-5 shrink-0" />
                          </div>
                        </a>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20 space-y-4">
                      <FolderOpen className="w-12 h-12 text-primary/30 mx-auto" />
                      <h4 className="text-lg font-bold text-foreground">No resources found</h4>
                      <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium">
                        Try refining your search terms or selecting a different category to explore.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Suggestion Call to Action */}
        <section className="py-24 bg-card border-t border-border/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-8 animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 mb-6">
                <Lightbulb className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-foreground tracking-tighter uppercase">Have a Resource to Suggest?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                We are always expanding our technical directory. If your team has designed a helpful guide, CAD asset, or software library, let us know!
              </p>
              <Button size="lg" className="rounded-xl px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all duration-200 active:scale-95 font-semibold text-sm uppercase tracking-wider" asChild>
                <a href="/contact">Suggest a Resource</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
