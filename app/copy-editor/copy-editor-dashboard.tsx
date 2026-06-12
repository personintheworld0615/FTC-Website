"use client"

import { useState } from "react"
import { saveCopyAction } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Zap, Save, RefreshCw, Layout, Award, Rocket, Check, AlertCircle } from "lucide-react"
import { toast } from "sonner"

interface CopyEditorDashboardProps {
  initialCopy: any
}

export function CopyEditorDashboard({ initialCopy }: CopyEditorDashboardProps) {
  const [copy, setCopy] = useState(initialCopy)
  const [isSaving, setIsSaving] = useState(false)
  const [activeSection, setActiveSection] = useState<"hero" | "stats" | "mission" | "achievements">("hero")

  const handleFieldChange = (section: string, key: string, value: string) => {
    setCopy((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
  }

  const handleArrayFieldChange = (section: string, key: string, index: number, value: string) => {
    setCopy((prev: any) => {
      const updatedArray = [...prev[section][key]]
      updatedArray[index] = value
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [key]: updatedArray
        }
      }
    })
  }

  const handleSave = async () => {
    setIsSaving(true)
    const formData = new FormData()
    formData.append("copyData", JSON.stringify(copy))
    
    try {
      const result = await saveCopyAction(formData)
      if (result.success) {
        toast.success("Website copy updated successfully!")
      } else {
        toast.error(`Error saving changes: ${result.error}`)
      }
    } catch (err: any) {
      toast.error("An unexpected error occurred.")
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all edits to the current server values?")) {
      setCopy(initialCopy)
      toast.info("Form reset to original values.")
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Editorial Header */}
      <header className="border-b border-primary/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            Website Control Panel
          </div>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tighter uppercase text-foreground">
            Copywriting Studio
          </h1>
          <p className="text-muted-foreground text-sm font-medium">
            Update the website's headlines, statistics, and statements in real-time.
          </p>
        </div>
        
        <div className="flex items-center gap-3 shrink-0">
          <Button 
            variant="outline" 
            onClick={handleReset}
            className="border-primary/10 text-muted-foreground hover:bg-primary/5 rounded-full"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset Form
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="rounded-full shadow-sm hover:shadow"
          >
            {isSaving ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <aside className="md:col-span-3 space-y-2">
          <button
            onClick={() => setActiveSection("hero")}
            className={`w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between border transition-all duration-300 font-sans font-bold ${
              activeSection === "hero"
                ? "bg-white border-primary/20 text-primary shadow-sm"
                : "border-transparent text-muted-foreground hover:bg-primary/5"
            }`}
          >
            <span className="flex items-center gap-3">
              <Rocket className="w-5 h-5" />
              Hero Section
            </span>
            {activeSection === "hero" && <Check className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveSection("stats")}
            className={`w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between border transition-all duration-300 font-sans font-bold ${
              activeSection === "stats"
                ? "bg-white border-primary/20 text-primary shadow-sm"
                : "border-transparent text-muted-foreground hover:bg-primary/5"
            }`}
          >
            <span className="flex items-center gap-3">
              <Layout className="w-5 h-5" />
              Statistics Section
            </span>
            {activeSection === "stats" && <Check className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveSection("mission")}
            className={`w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between border transition-all duration-300 font-sans font-bold ${
              activeSection === "mission"
                ? "bg-white border-primary/20 text-primary shadow-sm"
                : "border-transparent text-muted-foreground hover:bg-primary/5"
            }`}
          >
            <span className="flex items-center gap-3">
              <Zap className="w-5 h-5" />
              Our Mission
            </span>
            {activeSection === "mission" && <Check className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveSection("achievements")}
            className={`w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between border transition-all duration-300 font-sans font-bold ${
              activeSection === "achievements"
                ? "bg-white border-primary/20 text-primary shadow-sm"
                : "border-transparent text-muted-foreground hover:bg-primary/5"
            }`}
          >
            <span className="flex items-center gap-3">
              <Award className="w-5 h-5" />
              Achievements
            </span>
            {activeSection === "achievements" && <Check className="w-4 h-4" />}
          </button>

          <div className="pt-6 px-4">
            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                Changes will be saved to <code className="bg-white/80 px-1 py-0.5 rounded text-[10px] border border-primary/10">copy.json</code> on the server. Next.js cache will revalidate automatically.
              </p>
            </div>
          </div>
        </aside>

        {/* Form Editor Area */}
        <main className="md:col-span-9 bg-white border border-primary/10 rounded-[2rem] p-6 md:p-8 shadow-sm">
          {activeSection === "hero" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold tracking-tight uppercase text-foreground mb-4">Hero Configuration</h2>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Badge Text</label>
                <Input
                  value={copy.hero.badgeText}
                  onChange={(e) => handleFieldChange("hero", "badgeText", e.target.value)}
                  className="rounded-xl border-primary/15 focus-visible:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Headline Part 1</label>
                  <Input
                    value={copy.hero.title1}
                    onChange={(e) => handleFieldChange("hero", "title1", e.target.value)}
                    className="rounded-xl border-primary/15 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Headline Part 2 (Accented)</label>
                  <Input
                    value={copy.hero.title2}
                    onChange={(e) => handleFieldChange("hero", "title2", e.target.value)}
                    className="rounded-xl border-primary/15 focus-visible:ring-primary font-drama text-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Hero Subtitle</label>
                <Textarea
                  value={copy.hero.subtitle}
                  onChange={(e) => handleFieldChange("hero", "subtitle", e.target.value)}
                  rows={3}
                  className="rounded-xl border-primary/15 focus-visible:ring-primary leading-relaxed font-medium"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Primary CTA Text</label>
                  <Input
                    value={copy.hero.primaryCtaText}
                    onChange={(e) => handleFieldChange("hero", "primaryCtaText", e.target.value)}
                    className="rounded-xl border-primary/15 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Secondary CTA Text</label>
                  <Input
                    value={copy.hero.secondaryCtaText}
                    onChange={(e) => handleFieldChange("hero", "secondaryCtaText", e.target.value)}
                    className="rounded-xl border-primary/15 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {activeSection === "stats" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold tracking-tight uppercase text-foreground mb-4">Statistics Section</h2>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Section Title</label>
                <Input
                  value={copy.stats.title}
                  onChange={(e) => handleFieldChange("stats", "title", e.target.value)}
                  className="rounded-xl border-primary/15 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Section Description</label>
                <Textarea
                  value={copy.stats.description}
                  onChange={(e) => handleFieldChange("stats", "description", e.target.value)}
                  rows={3}
                  className="rounded-xl border-primary/15 focus-visible:ring-primary font-medium"
                />
              </div>

              <hr className="border-primary/10 my-6" />

              <h3 className="text-lg font-bold text-foreground mb-2">Bento Stat Cards</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-primary/10 rounded-2xl bg-primary/5 space-y-4">
                  <span className="text-xs font-mono text-primary font-bold">Card 1 (Featured)</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Value</label>
                      <Input
                        value={copy.stats.card1Value}
                        onChange={(e) => handleFieldChange("stats", "card1Value", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Label</label>
                      <Input
                        value={copy.stats.card1Label}
                        onChange={(e) => handleFieldChange("stats", "card1Label", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-primary/10 rounded-2xl bg-primary/5 space-y-4">
                  <span className="text-xs font-mono text-primary font-bold">Card 2</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Value</label>
                      <Input
                        value={copy.stats.card2Value}
                        onChange={(e) => handleFieldChange("stats", "card2Value", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Label</label>
                      <Input
                        value={copy.stats.card2Label}
                        onChange={(e) => handleFieldChange("stats", "card2Label", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-primary/10 rounded-2xl bg-primary/5 space-y-4">
                  <span className="text-xs font-mono text-primary font-bold">Card 3</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Value</label>
                      <Input
                        value={copy.stats.card3Value}
                        onChange={(e) => handleFieldChange("stats", "card3Value", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Label</label>
                      <Input
                        value={copy.stats.card3Label}
                        onChange={(e) => handleFieldChange("stats", "card3Label", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-primary/10 rounded-2xl bg-primary/5 space-y-4">
                  <span className="text-xs font-mono text-primary font-bold">Card 4 (Featured)</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Value</label>
                      <Input
                        value={copy.stats.card4Value}
                        onChange={(e) => handleFieldChange("stats", "card4Value", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-[10px] font-mono uppercase text-muted-foreground">Label</label>
                      <Input
                        value={copy.stats.card4Label}
                        onChange={(e) => handleFieldChange("stats", "card4Label", e.target.value)}
                        className="bg-white rounded-lg border-primary/15"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "mission" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold tracking-tight uppercase text-foreground mb-4">Our Mission</h2>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Section Title</label>
                <Input
                  value={copy.mission.title}
                  onChange={(e) => handleFieldChange("mission", "title", e.target.value)}
                  className="rounded-xl border-primary/15 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Mission Statement</label>
                <Textarea
                  value={copy.mission.statement}
                  onChange={(e) => handleFieldChange("mission", "statement", e.target.value)}
                  rows={4}
                  className="rounded-xl border-primary/15 focus-visible:ring-primary leading-relaxed font-medium"
                />
              </div>
            </div>
          )}

          {activeSection === "achievements" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold tracking-tight uppercase text-foreground mb-4">Recent Achievements</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Title</label>
                  <Input
                    value={copy.achievements.title}
                    onChange={(e) => handleFieldChange("achievements", "title", e.target.value)}
                    className="rounded-xl border-primary/15 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Subtitle</label>
                  <Input
                    value={copy.achievements.subtitle}
                    onChange={(e) => handleFieldChange("achievements", "subtitle", e.target.value)}
                    className="rounded-xl border-primary/15 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <hr className="border-primary/10 my-6" />

              <h3 className="text-lg font-bold text-foreground">Card 1: Competition (Featured Wide)</h3>
              <div className="space-y-4 p-5 border border-primary/10 rounded-2xl bg-primary/5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-muted-foreground">Card Title</label>
                    <Input
                      value={copy.achievements.card1Title}
                      onChange={(e) => handleFieldChange("achievements", "card1Title", e.target.value)}
                      className="bg-white rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-muted-foreground">Season Badge</label>
                    <Input
                      value={copy.achievements.card1Season}
                      onChange={(e) => handleFieldChange("achievements", "card1Season", e.target.value)}
                      className="bg-white rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-muted-foreground">Card Text</label>
                  <Textarea
                    value={copy.achievements.card1Text}
                    onChange={(e) => handleFieldChange("achievements", "card1Text", e.target.value)}
                    rows={2}
                    className="bg-white rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-muted-foreground block">Key Bullet Points</label>
                  {copy.achievements.card1Points.map((point: string, idx: number) => (
                    <Input
                      key={idx}
                      value={point}
                      onChange={(e) => handleArrayFieldChange("achievements", "card1Points", idx, e.target.value)}
                      className="bg-white rounded-lg border-primary/15"
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground">Card 2: Mentorship</h3>
              <div className="space-y-4 p-5 border border-primary/10 rounded-2xl bg-primary/5">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-muted-foreground">Card Title</label>
                  <Input
                    value={copy.achievements.card2Title}
                    onChange={(e) => handleFieldChange("achievements", "card2Title", e.target.value)}
                    className="bg-white rounded-lg"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-muted-foreground">Card Text</label>
                  <Textarea
                    value={copy.achievements.card2Text}
                    onChange={(e) => handleFieldChange("achievements", "card2Text", e.target.value)}
                    rows={2}
                    className="bg-white rounded-lg"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground">Card 3: STEM Camp (Full Width)</h3>
              <div className="space-y-4 p-5 border border-primary/10 rounded-2xl bg-primary/5">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-muted-foreground">Card Title</label>
                  <Input
                    value={copy.achievements.card3Title}
                    onChange={(e) => handleFieldChange("achievements", "card3Title", e.target.value)}
                    className="bg-white rounded-lg"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-muted-foreground">Card Text</label>
                  <Textarea
                    value={copy.achievements.card3Text}
                    onChange={(e) => handleFieldChange("achievements", "card3Text", e.target.value)}
                    rows={2}
                    className="bg-white rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
