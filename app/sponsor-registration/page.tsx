"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Mail, Phone, User, Globe, MessageSquare } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function SponsorRegistrationPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    sponsorshipTier: "",
    companyWebsite: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = createClient()

      const { error } = await supabase.from("sponsorships").insert({
        company_name: formData.companyName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        sponsorship_tier: formData.sponsorshipTier,
        company_website: formData.companyWebsite || null,
        message: formData.message || null,
      })

      if (error) throw error

      // Success - redirect to sponsors page with success message
      router.push("/sponsors?registration=success")
    } catch (error) {
      console.error("Error submitting sponsorship:", error)
      alert("There was an error submitting your sponsorship registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 border-b border-border/40 relative overflow-hidden flex flex-col justify-center min-h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.9]">
              Become a <span className="font-serif italic text-[1.1em] font-light">Sponsor.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Partner with Rust in Piece and help shape the future of STEM education.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h2 className="text-3xl font-sans font-bold text-foreground tracking-tight uppercase">Company Information</h2>

                <div className="space-y-2">
                  <Label htmlFor="companyName">
                    Company Name <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="companyName"
                      required
                      placeholder="Your Company Name"
                      className="pl-10"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyWebsite">Company Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="companyWebsite"
                      type="url"
                      placeholder="https://yourcompany.com"
                      className="pl-10"
                      value={formData.companyWebsite}
                      onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-3xl font-sans font-bold text-foreground tracking-tight uppercase">Contact Information</h2>

                <div className="space-y-2">
                  <Label htmlFor="contactName">
                    Contact Name <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="contactName"
                      required
                      placeholder="John Doe"
                      className="pl-10"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="contact@company.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Sponsorship Details */}
              <div className="space-y-4">
                <h2 className="text-3xl font-sans font-bold text-foreground tracking-tight uppercase">Sponsorship Details</h2>

                <div className="space-y-2">
                  <Label htmlFor="sponsorshipTier">
                    Sponsorship Tier <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.sponsorshipTier}
                    onValueChange={(value) => setFormData({ ...formData, sponsorshipTier: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rusted">Rusted ($250-500)</SelectItem>
                      <SelectItem value="sterling">Sterling ($500-1200)</SelectItem>
                      <SelectItem value="platinum">Platinum ($1200-2500)</SelectItem>
                      <SelectItem value="title">Title Sponsor ($2500+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      id="message"
                      placeholder="Tell us about your interest in sponsoring our team..."
                      className="pl-10 min-h-32"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Sponsorship Registration"}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}
