import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Users, Heart, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-in">
              <Badge variant="outline" className="text-primary border-primary">
                About Our Team
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance animate-slide-up animation-delay-200">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed animate-slide-up animation-delay-400">
              We are Rust in Piece, a passionate team of 18 students dedicated to robotics excellence, innovation, and
              making a meaningful impact in our community through STEM education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-primary animate-bounce-gentle" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  We are an FTC robotics team passionate about STEM education, engineering, and innovation. We design,
                  build, and program competitive robots while also mentoring younger students and giving back to our
                  community through educational outreach and STEM advocacy.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-6 h-6 text-primary animate-pulse-gentle" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  To inspire the next generation of engineers, scientists, and innovators through hands-on robotics
                  education and community engagement, fostering a culture of creativity, collaboration, and continuous
                  learning.
                </p>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Team+Mission"
                  alt="Team working together on robotics project"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do, from robot design to community engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="animate-slide-up animation-delay-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Collaboration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe in the power of teamwork, where diverse perspectives and skills come together to create
                    innovative solutions and foster mutual growth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-slide-up animation-delay-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <span>Innovation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We embrace creative thinking and cutting-edge technology to push the boundaries of what's possible
                    in robotics and engineering.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-slide-up animation-delay-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <span>Community Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We're committed to giving back through mentorship, education, and outreach programs that inspire the
                    next generation of STEM leaders.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-slide-up animation-delay-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span>Excellence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We strive for the highest standards in everything we do, from robot performance to sportsmanship and
                    academic achievement.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-slide-up animation-delay-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span>Continuous Learning</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We embrace challenges as opportunities to grow, constantly seeking new knowledge and skills to
                    improve ourselves and our community.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="animate-slide-up animation-delay-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Mentorship</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe in sharing our knowledge and passion, actively mentoring younger students and supporting
                    their journey in STEM fields.
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
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center space-y-6 animate-scale-in hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">Want to Learn More?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Discover our team members, meet our mentors, and see how we're making an impact in our community through
              STEM education and robotics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="hover:scale-105 transition-transform duration-200"
              >
                <a href="/team">Meet Our Team</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-200"
                asChild
              >
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
