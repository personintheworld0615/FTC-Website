import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Star, Heart, Building, Handshake, Trophy, Check } from "lucide-react"
import { SlideUp, TiltCard, StaggerContainer, StaggerItem } from "@/components/animations"

interface Sponsor {
  name: string
  tier: string
  logo: string
  description: string
}

export default function SponsorsPage() {
  const benefitsList = [
    {
      name: "Logo on team merch + frequent updates of team achievement",
      checkmarks: { rusted: 1, sterling: 2, platinum: 3, titleSponsor: 4 },
    },
    {
      name: "Company website linked to socials/website + team updates",
      checkmarks: { rusted: 0, sterling: 1, platinum: 2, titleSponsor: 4 },
    },
    {
      name: "Company name on posters, robot, banner",
      checkmarks: { rusted: 0, sterling: 0, platinum: 2, titleSponsor: 4 },
    },
    {
      name: "Company's contribution highlighted during outreach presentations",
      checkmarks: { rusted: 0, sterling: 0, platinum: 3, titleSponsor: 4 },
    },
    {
      name: "Company name on back of shirts (largest) & exclusive company banner at comps",
      checkmarks: { rusted: 0, sterling: 0, platinum: 0, titleSponsor: 4 },
    },
  ]

  const sponsorshipTiers = [
    {
      name: "Title Sponsor",
      key: "titleSponsor" as const,
      icon: Crown,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary",
      amount: "$2500+",
    },
    {
      name: "Platinum",
      key: "platinum" as const,
      icon: Star,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/60",
      amount: "$1200-2500",
    },
    {
      name: "Sterling",
      key: "sterling" as const,
      icon: Heart,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/40",
      amount: "$500-1200",
    },
    {
      name: "Rusted",
      key: "rusted" as const,
      icon: Building,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      amount: "$250-500",
    },
  ]

  const currentSponsors: Sponsor[] = [
    /*{
      name: "TechCorp Industries",
      tier: "Platinum Partner",
      logo: "/ftc-robotics-team-working-on-robot-in-workshop.jpg?height=300&width=400&text=TechCorp",
      description: "Leading technology solutions provider",
    },
    {
      name: "palantair Industries",
      tier: "Gold Partner",
      logo: "/ftc-robotics-team-working-on-robot-in-workshop.jpg?height=120&width=110&text=TechCorp",
      description: "Leading technology solutions provider",
    },
    */
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <SlideUp delay={0.1}>
              <Badge variant="outline" className="text-primary border-primary animate-pulse-glow">
                Our Sponsors
              </Badge>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Partners in Innovation
              </h1>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                We're grateful for the generous support of our sponsors who make our robotics journey possible and help us
                inspire the next generation of STEM leaders.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Why Sponsor Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideUp className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Handshake className="w-6 h-6 text-primary animate-bounce" />
                  <h2 className="text-3xl font-bold text-foreground">Why Partner With Us?</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  By sponsoring Rust in Piece, you're not just supporting a robotics team—you're investing in the future
                  of STEM education and helping develop the next generation of engineers, programmers, and innovators.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                  <Trophy className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-foreground">Support Our Robot Build</h3>
                    <p className="text-sm text-muted-foreground">
                      Help fund the development of our robot and make our vision a reality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                  <Building className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-foreground">Brand Visibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Gain exposure at competitions, events, and through our digital presence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-foreground">Talent Pipeline</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with motivated students interested in STEM careers.
                    </p>
                  </div>
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.3} className="relative">
              <TiltCard>
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-500 group shadow-lg">
                  <img
                    src="/sponsor-partnership.jpg"
                    alt="Team members with sponsor representatives in workshop"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </TiltCard>
            </SlideUp>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Rust In Piece Benefits Chart</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our sponsorship tiers and the exclusive benefits each level provides
              </p>
            </div>

            {/* Desktop Table View */}
            <SlideUp className="hidden lg:block overflow-x-auto">
              <div className="min-w-full border-4 border-primary rounded-xl overflow-hidden shadow-2xl">
                {/* Header Row */}
                <div className="grid grid-cols-5 bg-gradient-orange">
                  <div className="p-6 border-r-2 border-primary/30 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-primary-foreground">PLAN LEVEL</h3>
                  </div>
                  {sponsorshipTiers.map((tier, index) => (
                    <div
                      key={index}
                      className={`p-6 ${index < sponsorshipTiers.length - 1 ? "border-r-2 border-primary/30" : ""} flex flex-col items-center justify-center space-y-2`}
                    >
                      <h3 className="text-xl font-bold text-primary-foreground uppercase">{tier.name}</h3>
                    </div>
                  ))}
                </div>

                {/* Price Row */}
                <div className="grid grid-cols-5 bg-muted/30">
                  <div className="p-6 border-r-2 border-border flex items-center justify-center bg-muted">
                    <h4 className="text-lg font-bold text-foreground">PRICE</h4>
                  </div>
                  {sponsorshipTiers.map((tier, index) => (
                    <div
                      key={index}
                      className={`p-6 ${index < sponsorshipTiers.length - 1 ? "border-r-2 border-border" : ""} flex items-center justify-center bg-card`}
                    >
                      <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary font-bold">
                        {tier.amount}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Benefits Rows */}
                {benefitsList.map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
                    className={`grid grid-cols-5 ${benefitIndex % 2 === 0 ? "bg-muted/20" : "bg-card"}`}
                  >
                    <div className="p-6 border-r-2 border-border flex items-center bg-muted/50">
                      <p className="text-sm font-medium text-foreground leading-relaxed">{benefit.name}</p>
                    </div>
                    {sponsorshipTiers.map((tier, tierIndex) => {
                      const checkmarkCount = benefit.checkmarks[tier.key]

                      return (
                        <div
                          key={tierIndex}
                          className={`p-6 ${tierIndex < sponsorshipTiers.length - 1 ? "border-r-2 border-border" : ""} flex items-center justify-center`}
                        >
                          {checkmarkCount > 0 && (
                            <div className="flex gap-1">
                              {Array.from({ length: checkmarkCount }).map((_, i) => (
                                <Check
                                  key={i}
                                  className="w-6 h-6 text-primary animate-scale-in"
                                  style={{ animationDelay: `${i * 100}ms` }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 text-center">
                <p className="text-lg text-muted-foreground">
                  <Check className="w-5 h-5 inline text-primary" /> = included benefit • More checkmarks = greater
                  frequency/prominence
                </p>
              </div>
            </SlideUp>

            {/* Mobile Card View */}
            <StaggerContainer className="lg:hidden grid gap-6">
              {sponsorshipTiers.map((tier, index) => {
                const IconComponent = tier.icon
                return (
                  <StaggerItem key={index}>
                    <TiltCard>
                      <Card className={`${tier.borderColor} border-2 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm`}>
                        <CardHeader className="text-center space-y-4 bg-gradient-orange rounded-t-lg">
                          <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                            <IconComponent className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <div className="space-y-2">
                            <CardTitle className="text-2xl text-primary-foreground uppercase">{tier.name}</CardTitle>
                            <Badge variant="secondary" className="text-lg px-4 py-2 font-bold">
                              {tier.amount}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                          <h4 className="font-semibold text-foreground">Benefits Include:</h4>
                          <ul className="space-y-3">
                            {benefitsList.map((benefit, benefitIdx) => {
                              const checkmarkCount = benefit.checkmarks[tier.key]

                              return (
                                <li
                                  key={benefitIdx}
                                  className={`flex items-start space-x-3 ${checkmarkCount === 0 ? "opacity-30" : ""}`}
                                >
                                  <div className="flex gap-1 mt-0.5">
                                    {checkmarkCount > 0 ? (
                                      Array.from({ length: checkmarkCount }).map((_, i) => (
                                        <Check key={i} className="w-5 h-5 text-primary flex-shrink-0" />
                                      ))
                                    ) : (
                                      <div className="w-5 h-5 flex-shrink-0" />
                                    )}
                                  </div>
                                  <span className="text-sm text-muted-foreground leading-relaxed">{benefit.name}</span>
                                </li>
                              )
                            })}
                          </ul>
                        </CardContent>
                      </Card>
                    </TiltCard>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Amazing Sponsors</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thank you to these incredible organizations that make our success possible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSponsors.map((sponsor, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="mx-auto">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        className="h-20 w-auto mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {sponsor.name}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        {sponsor.tier}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{sponsor.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Placeholder for more sponsors */}
            <div className="text-center space-y-4 animate-slide-up delay-500">
              <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                <Building className="w-12 h-12 text-muted-foreground mx-auto mb-4 group-hover:text-primary group-hover:animate-bounce transition-colors" />
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Your Logo Here
                </h3>
                <p className="text-muted-foreground text-sm">
                  Join our amazing sponsors and help support STEM education
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-orange rounded-2xl p-8 lg:p-12 text-center space-y-6 animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
                Join our community of sponsors and help us continue making an impact in STEM education. Let's build the
                future together!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Button
                variant="secondary"
                size="lg"
                className="hover:scale-105 transition-all duration-300 shadow-lg"
                asChild
              >
                <a href="/contact">Become a Sponsor</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:rustinpieceftc@gmail.com">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
