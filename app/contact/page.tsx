"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Instagram, MapPin, Clock, Users, Heart, Trophy } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message anytime",
      contact: "rustinpieceftc@gmail.com",
      link: "mailto:rustinpieceftc@gmail.com",
    },
    {
      icon: Instagram,
      title: "Follow Us",
      description: "Stay updated on our journey",
      contact: "@rust_in_piece_robotics",
      link: "https://www.instagram.com/rust_in_piece_robotics/",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Princeton STEM Academy",
      contact: "During school hours",
      link: "#",
    },
  ]

  const reasons = [
    {
      icon: Users,
      title: "Join Our Team",
      description: "Interested in becoming a team member? We welcome passionate students who want to learn and grow.",
    },
    {
      icon: Heart,
      title: "Sponsor Us",
      description: "Support our mission and help us continue making an impact in STEM education.",
    },
    {
      icon: Trophy,
      title: "Collaborate",
      description: "Partner with us for demonstrations, workshops, or community events.",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiry: "",
          message: "",
        })
      } else {
        setSubmitStatus({ type: "error", message: data.message })
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-primary border-primary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">Contact Us</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Ready to join our team, become a sponsor, or learn more about our programs? We'd love to hear from you and
              explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ways to Reach Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-lg font-semibold text-foreground">{method.contact}</div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={method.link}>Connect</a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible. Whether you're interested in
                  joining, sponsoring, or collaborating, we're excited to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Why Contact Us?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => {
                    const IconComponent = reason.icon
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-foreground">{reason.title}</h4>
                          <p className="text-sm text-muted-foreground">{reason.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>We'll respond within 24-48 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select
                      value={formData.inquiry}
                      onValueChange={(value) => setFormData({ ...formData, inquiry: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="join">Join the Team</SelectItem>
                        <SelectItem value="sponsor">Sponsorship Opportunity</SelectItem>
                        <SelectItem value="demo">Request a Demonstration</SelectItem>
                        <SelectItem value="mentor">Mentoring Opportunity</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {submitStatus && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6 space-y-3">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="text-sm text-muted-foreground">24-48 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6 space-y-3">
                  <MapPin className="w-8 h-8 text-primary mx-auto" />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-sm text-muted-foreground">Princeton STEM Academy</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6 space-y-3">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Team Size</h3>
                    <p className="text-sm text-muted-foreground">18 Members</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6 space-y-3">
                  <Trophy className="w-8 h-8 text-primary mx-auto" />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Team Number</h3>
                    <p className="text-sm text-muted-foreground">#19772</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Don't wait - reach out today and become part of our journey to inspire the next generation of STEM leaders
              and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:rustinpieceftc@gmail.com">Email Us Now</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://www.instagram.com/rust_in_piece_robotics/">Follow on Instagram</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
