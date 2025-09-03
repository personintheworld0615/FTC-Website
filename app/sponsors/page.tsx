import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Star, Heart, Building, Handshake, Trophy } from "lucide-react"
import { InteractiveCounter } from "@/components/interactive-counter"

export default function SponsorsPage() {
  const sponsorshipTiers = [
  {
    name: "Platinum Partner",
    icon: Crown,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    amount: "$2,500+",
    benefits: [
      "Logo prominently displayed on robot, team banner, and competition shirts",
      "Full-page feature on homepage with company profile",
      "Monthly social media promotion across all team channels",
      "Logo included in press releases and local media coverage",
      "Featured in team newsletter sent to sponsors, parents, and school community",
      "Opportunity to co-host STEM events with the team for maximum exposure",
    ],
  },
  {
    name: "Gold Supporter",
    icon: Star,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    amount: "$1,250+",
    benefits: [
      "Logo displayed on robot and team shirts",
      "Recognition on sponsors page of website",
      "Quarterly social media promotion",
      "Mention in team newsletter",
      "Acknowledgment at competitions",
    ],
  },
  {
    name: "Silver Contributor",
    icon: Heart,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    amount: "$500+",
    benefits: [
      "Logo on team website and printed materials",
      "Mention in social media posts",
      "Acknowledgment at competitions",
    ],
  },
  {
    name: "Bronze Supporter",
    icon: Building,
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    amount: "$0+",
    benefits: [
      "Name listed on team website",
      "Mention in social media posts",
      "Acknowledgment at public demonstrations",
    ],
  },
];



  const currentSponsors = [
    {
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
  
    // {
    //   name: "New Sponsor Name",
    //   tier: "Platinum Partner", // or "Gold Supporter", "Silver Contributor", "Bronze Friend"
    //   logo: "/path/to/sponsor/logo.png", // Upload logo to public folder first
    //   description: "Brief description of the sponsor",
    // },
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
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge variant="outline" className="text-primary border-primary animate-pulse-glow">
              Our Sponsors
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance animate-slide-up">
              Partners in Innovation
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed animate-slide-up delay-200">
              We're grateful for the generous support of our sponsors who make our robotics journey possible and help us
              inspire the next generation of STEM leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
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
                    <h3 className="font-semibold text-foreground">Community Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Support our mentorship of <InteractiveCounter end={2} /> FLL teams and annual STEM camp for
                      3rd-8th graders.
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
            </div>

            <div className="relative animate-slide-up delay-300">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500 group">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Sponsor+Partnership"
                  alt="Team with sponsor representatives"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Sponsorship Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the partnership level that works best for your organization
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {sponsorshipTiers.map((tier, index) => {
                const IconComponent = tier.icon
                return (
                  <Card
                    key={index}
                    className={`${tier.borderColor} border-2 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="text-center space-y-4">
                      <div
                        className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-8 h-8 ${tier.color} group-hover:animate-bounce`} />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{tier.name}</CardTitle>
                        <Badge
                          variant="outline"
                          className="text-lg px-3 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          {tier.amount}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Benefits Include:</h4>
                        <ul className="space-y-2">
                          {tier.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm hover:text-primary transition-colors"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
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
                <a href="mailto:rust123">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
