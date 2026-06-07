"use client"

import React, { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight, 
  Mail, 
  Cpu, 
  BookOpen, 
  CheckCircle2,
  Compass,
  Instagram
} from "lucide-react"
import { SlideUp, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations"
import { InteractiveBlockWorkspace } from "@/components/interactive-block-workspace"
import { registerCamp } from "@/app/actions/camp-actions"
import { toast } from "sonner"

export default function CampPage() {
  const [formData, setFormData] = useState({
    childName: "",
    gradeLevel: "",
    parentName: "",
    email: "",
    phone: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const result = await registerCamp(formData)
      if (result.success) {
        setIsSubmitted(true)
        toast.success("Registration completed successfully!")
      } else {
        setErrorMessage(result.error || "Failed to register. Please check your details.")
        toast.error(result.error || "Failed to register.")
      }
    } catch (err) {
      console.error(err)
      setErrorMessage("An unexpected network error occurred. Please try again.")
      toast.error("Connection error.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const campCurriculum = [
    {
      title: "Grades K–2 Foundation",
      subtitle: "LEGO CS & AI Kit 45520",
      icon: BookOpen,
      desc: "An introduction to core computational concepts using 276 LEGO pieces, custom minifigures, color sensors, and interactive motors. Focuses on hardware basics and sequences.",
      bulletPoints: [
        "Explore hardware basics, connection cards, and motors",
        "Learn programmatic events, loops, and action sequences",
        "Introduction to datasets and how robots recognize color values",
        "Hands-on building blocks combined with introductory visual coding"
      ]
    },
    {
      title: "Grades 3–5 Application",
      subtitle: "LEGO CS & AI Kit 45521",
      icon: Cpu,
      desc: "Step up to building interactive models using 321 LEGO pieces and dual motors. Students build logical algorithms using complex conditionals and variables.",
      bulletPoints: [
        "Program double motor chassis to execute precision navigation steering",
        "Implement sensor logic using loops, variables, and logic gates",
        "Explore AI classification systems and how systems label data",
        "Work in collaborative groups to solve structural design challenges"
      ]
    },
    {
      title: "Grades 6–7 Mastery",
      subtitle: "LEGO CS & AI Kit 45522",
      icon: Compass,
      desc: "Advanced mechanics and programming using 379 LEGO pieces, interactive double/single motors, color sensors, and computer-vision AI camera integrations.",
      bulletPoints: [
        "Design complex robotics utilizing multiple actuators and sensors",
        "Write advanced algorithms involving functions, variables, and loops",
        "Train local AI vision models to detect and classify physical elements",
        "Formulate autonomous pathfinding strategies akin to FTC competitions"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Header Area */}
      <section className="py-24 lg:py-32 border-b border-border/40 relative overflow-hidden flex flex-col justify-center min-h-[70vh]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAF6F0_1px,transparent_1px),linear-gradient(to_bottom,#FAF6F0_1px,transparent_1px)] bg-[size:30px_30px] opacity-80 pointer-events-none z-0" />
        <div className="absolute bottom-12 right-12 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
            <StaggerItem>
              <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border-primary/20 text-primary bg-primary/5">
                <Sparkles className="w-3 h-3 mr-2 inline animate-pulse" />
                SUMMER PROGRAM JULY 20-24
              </Badge>
            </StaggerItem>
            
            <StaggerItem className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[0.95]">
                CSAI <br />
                <span className="font-serif italic font-light text-primary capitalize tracking-normal">Summer Camp</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium pt-2">
                A week-long immersive coding and robotics program hosted by FTC Team 19772 "Rust in Piece" at the Princeton STEM Academy.
              </p>
            </StaggerItem>

            {/* Quick Metadata Badges */}
            <StaggerItem className="flex flex-wrap justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 bg-[#FAF6F0] border border-[#EAE3DB] rounded-2xl px-5 py-3">
                <Calendar className="w-4.5 h-4.5 text-primary shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2421]">July 20 - 24</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FAF6F0] border border-[#EAE3DB] rounded-2xl px-5 py-3">
                <Users className="w-4.5 h-4.5 text-primary shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2421]">Grades K - 7th</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FAF6F0] border border-[#EAE3DB] rounded-2xl px-5 py-3">
                <MapPin className="w-4.5 h-4.5 text-primary shrink-0" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2B2421]">Princeton STEM Academy</span>
              </div>
            </StaggerItem>

            <StaggerItem className="pt-4">
              <Button size="lg" className="rounded-xl px-8 uppercase tracking-wider text-xs font-bold transition-transform duration-200 ease-out active:scale-[0.97] bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#register">Register Student Now</a>
              </Button>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-24 bg-background relative border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tight uppercase">
              What We <span className="font-serif italic font-light text-primary">Teach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              We focus on building key problem-solving structures in students, connecting software coding concepts with physical robot actions.
            </p>
          </div>

          {/* Asymmetric Curriculum Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {campCurriculum.map((topic, index) => {
              const Icon = topic.icon
              const isAccent = index === 0
              return (
                <Card 
                  key={topic.title}
                  className={`rounded-[2.5rem] border p-8 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 ${
                    isAccent ? "bg-[#FAF6F0] border-primary/20" : "bg-card border-border/40"
                  }`}
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">{topic.subtitle}</span>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium pt-1">
                        {topic.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border/40 pt-6">
                    <ul className="space-y-3">
                      {topic.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed font-medium">
                          <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Activity Section */}
      <section className="py-24 bg-muted/10 relative border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="outline" className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border-primary/20 text-primary">
              TRY IT NOW
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tight uppercase">
              Interactive <span className="font-serif italic font-light text-primary">Workspace</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              We teach programming visually using blocks that represent actual Java commands. Try executing an autonomous robot run yourself:
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <InteractiveBlockWorkspace />
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-start">
            
            {/* Contact Details / Info */}
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-sans font-extrabold text-foreground tracking-tight uppercase">
                  Register <br />
                  <span className="font-serif italic font-light text-primary">Your Student</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Spaces are limited to ensure safe mentor-student ratios. Please fill out the registration form, and we will follow up with confirmation details.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold">Location</h4>
                    <p className="text-sm font-semibold text-foreground mt-0.5">Princeton STEM Academy</p>
                    <p className="text-xs text-muted-foreground">666 Plainsboro Road, Plainsboro NJ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold">Camp Schedule</h4>
                    <p className="text-sm font-semibold text-foreground mt-0.5">July 20 - July 24</p>
                    <p className="text-xs text-muted-foreground">Monday – Friday, 9:00 AM – 3:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold">Contact Us</h4>
                    <a href="mailto:rustinpieceftc@gmail.com" className="text-sm font-semibold text-primary hover:underline mt-0.5 block">
                      rustinpieceftc@gmail.com
                    </a>
                    <a href="https://www.instagram.com/rust_in_piece_robotics/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1.5 mt-1 transition-colors">
                      <Instagram className="w-3.5 h-3.5" />
                      @rust_in_piece_robotics
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="md:col-span-3">
              <Card className="rounded-[2.5rem] bg-card border border-border/40 p-8">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="camp-form"
                      onSubmit={handleRegister}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="childName">Student Full Name <span className="text-primary">*</span></Label>
                        <Input
                          id="childName"
                          placeholder="Jane Doe"
                          required
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          className="rounded-xl border-[#EAE3DB] focus-visible:ring-[#C85A32]"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="gradeLevel">Grade Level (Fall 2026) <span className="text-primary">*</span></Label>
                          <Select
                            value={formData.gradeLevel}
                            onValueChange={(val) => setFormData({ ...formData, gradeLevel: val })}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger id="gradeLevel" className="rounded-xl border-[#EAE3DB] focus:ring-[#C85A32]">
                              <SelectValue placeholder="Select Grade" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-[#EAE3DB] rounded-xl">
                              <SelectItem value="K">Kindergarten</SelectItem>
                              <SelectItem value="1">1st Grade</SelectItem>
                              <SelectItem value="2">2nd Grade</SelectItem>
                              <SelectItem value="3">3rd Grade</SelectItem>
                              <SelectItem value="4">4th Grade</SelectItem>
                              <SelectItem value="5">5th Grade</SelectItem>
                              <SelectItem value="6">6th Grade</SelectItem>
                              <SelectItem value="7">7th Grade</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parentName">Parent/Guardian Name <span className="text-primary">*</span></Label>
                          <Input
                            id="parentName"
                            placeholder="John Doe"
                            required
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            className="rounded-xl border-[#EAE3DB] focus-visible:ring-[#C85A32]"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address <span className="text-primary">*</span></Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="parent@domain.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl border-[#EAE3DB] focus-visible:ring-[#C85A32]"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number <span className="text-primary">*</span></Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-xl border-[#EAE3DB] focus-visible:ring-[#C85A32]"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Special Notes / Medical / Allergies</Label>
                        <Textarea
                          id="notes"
                          placeholder="Let us know if your student has allergies or special learning accommodations."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="rounded-xl border-[#EAE3DB] min-h-[80px] focus-visible:ring-[#C85A32]"
                          disabled={isSubmitting}
                        />
                      </div>

                      {errorMessage && (
                        <div className="text-xs text-primary font-semibold font-mono bg-primary/5 p-3 rounded-lg border border-primary/20">
                          {errorMessage}
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#C85A32] hover:bg-[#C85A32]/90 text-white rounded-xl py-4 transition-transform active:scale-[0.98]"
                      >
                        {isSubmitting ? "Processing..." : "Complete Registration"}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="camp-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-6"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
                        <CheckCircle2 className="w-8 h-8 text-primary animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-[#2B2421]">Registration Received!</h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                          Thank you for registering. We have saved your spot and sent a details summary to your email: <span className="font-semibold">{formData.email}</span>.
                        </p>
                      </div>

                      <div className="bg-[#FAF6F0] rounded-2xl border border-[#EAE3DB] p-4 text-left max-w-xs mx-auto space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold">Camp Entry Details</h4>
                        <div className="text-xs space-y-1 text-foreground">
                          <p><strong>Student:</strong> {formData.childName}</p>
                          <p><strong>Grade:</strong> {formData.gradeLevel}</p>
                          <p><strong>Dates:</strong> July 20 - July 24</p>
                          <p><strong>Place:</strong> Princeton STEM Academy</p>
                        </div>
                      </div>

                      <Button
                        onClick={() => {
                          setFormData({
                            childName: "",
                            gradeLevel: "",
                            parentName: "",
                            email: "",
                            phone: "",
                            notes: "",
                          })
                          setIsSubmitted(false)
                        }}
                        variant="outline"
                        className="rounded-xl border-[#EAE3DB]"
                      >
                        Register Another Student
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
