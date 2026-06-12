import { promises as fs } from "fs"
import path from "path"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Heart, Zap, Cpu } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, SlideUp, TiltCard, ScaleIn, ParallaxBlock, StaggerContainer, StaggerItem, Bounce } from "@/components/animations"
import { InteractiveCounter } from "@/components/interactive-counter"
import { RobotDivider } from "@/components/robot-divider"

import { MissionRobot } from "@/components/mission-robot"
import Image from "next/image"
import dynamic from "next/dynamic"

const InteractiveRoboticArm = dynamic(
  () => import("@/components/interactive-robotic-arm").then((mod) => mod.InteractiveRoboticArm),
  { ssr: false }
)

export default async function HomePage() {
  const filePath = path.join(process.cwd(), "lib", "copy.json")
  const fileContent = await fs.readFile(filePath, "utf8")
  const copy = JSON.parse(fileContent)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />


      <main>
        <article>
          <section id="home" className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden flex flex-col justify-end border-b border-border/40 bg-background">
            {/* Full-bleed background image - optimized with Next.js Image */}
            <div className="absolute inset-0 opacity-90">
              <Image
                src="/images/design-mode/team-hero.webp"
                alt="FTC Team 19772 members in orange team shirts"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_top_20%]"
              />
            </div>
            {/* Heavy gradient overlay fading to the warm light-mode background color */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent"></div>
            {/* Ambient orange gradient blobs for atmosphere */}
            <div className="absolute bottom-32 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Interactive Robotic Arm Overlay */}
            <div className="hidden lg:block absolute right-[8%] bottom-[8%] w-[480px] h-[480px] z-20 pointer-events-none">
              <InteractiveRoboticArm />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 md:pb-24">
              <div className="max-w-4xl space-y-2">
                <SlideUp delay={0.1}>
                  <Badge
                    variant="outline"
                    className="font-mono text-xs tracking-widest uppercase border-primary/20 text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 select-none"
                  >
                    <Zap className="w-3 h-3 mr-2 inline" />
                    {copy.hero.badgeText}
                  </Badge>
                </SlideUp>

                <SlideUp delay={0.2} className="relative z-20 space-y-[-0.2em] md:space-y-[-0.4em]">
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-extrabold text-foreground tracking-tighter leading-none uppercase">
                    {copy.hero.title1}
                  </h1>
                  <h2
                    className="text-7xl sm:text-[8rem] md:text-[11rem] font-drama text-primary leading-none tracking-tighter pr-4 pb-2 select-none drop-shadow-[0_2px_12px_#FCFAF7]"
                  >
                    {copy.hero.title2}
                  </h2>
                </SlideUp>

                <SlideUp delay={0.3}>
                  <p className="text-lg md:text-2xl font-sans text-muted-foreground text-balance leading-relaxed max-w-xl mt-8 mb-10 font-medium">
                    {copy.hero.subtitle}
                  </p>
                </SlideUp>

                <SlideUp delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="group transform-gpu"
                      asChild
                    >
                      <a href="/team">
                        {copy.hero.primaryCtaText}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300 transform-gpu group"
                      asChild
                    >
                      <a href="/mentors">
                        <Cpu className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        {copy.hero.secondaryCtaText}
                      </a>
                    </Button>
                  </div>
                </SlideUp>
              </div>
            </div>
          </section>

          {/* Custom Animated Robot Divider between Hero and Stats */}
          <RobotDivider />

          <section className="py-24 relative overflow-hidden bg-background" aria-label="Team statistics">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Asymmetric Editorial Intro */}
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="text-4xl sm:text-5xl font-sans font-extrabold text-foreground tracking-tighter leading-[1.05] uppercase">
                    {copy.stats.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-xl">
                    {copy.stats.description}
                  </p>
                </div>
                
                {/* Right Column: Bento Grid of stats */}
                <div className="lg:col-span-7">
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <StaggerItem className="md:col-span-2">
                       <TiltCard className="text-left p-8 h-full rounded-[2rem] bg-white/70 border border-primary/15 hover:border-primary/30 hover:bg-primary/[0.01] transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">{copy.stats.card1Value}</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">{copy.stats.card1Label}</div>
                       </TiltCard>
                     </StaggerItem>
                     <StaggerItem className="md:col-span-1">
                       <TiltCard className="text-left p-8 h-full rounded-[2rem] bg-white/70 border border-primary/15 hover:border-primary/30 hover:bg-primary/[0.01] transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">{copy.stats.card2Value}</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">{copy.stats.card2Label}</div>
                       </TiltCard>
                     </StaggerItem>
                     <StaggerItem className="md:col-span-1">
                       <TiltCard className="text-left p-8 h-full rounded-[2rem] bg-white/70 border border-primary/15 hover:border-primary/30 hover:bg-primary/[0.01] transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">{copy.stats.card3Value}</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">{copy.stats.card3Label}</div>
                       </TiltCard>
                     </StaggerItem>
                     <StaggerItem className="md:col-span-2">
                       <TiltCard className="text-left p-8 h-full rounded-[2rem] bg-white/70 border border-primary/15 hover:border-primary/30 hover:bg-primary/[0.01] transition-all duration-300">
                         <div className="text-6xl font-extrabold text-primary font-sans tracking-tighter">{copy.stats.card4Value}</div>
                         <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-4">{copy.stats.card4Label}</div>
                       </TiltCard>
                     </StaggerItem>
                  </StaggerContainer>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 relative" aria-labelledby="mission-heading">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              <SlideUp className="max-w-4xl mx-auto text-center space-y-8">
                <h2 id="mission-heading" className="text-4xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[1.05]">
                  {copy.mission.title}
                </h2>
                <MissionRobot />
                  <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl mx-auto">
                    {copy.mission.statement}
                  </p>
              </SlideUp>
            </div>
          </section>

          {/* Custom Animated Robot Divider between Mission and Achievements */}
          <RobotDivider />

          <section className="py-24 bg-background" aria-labelledby="achievements-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-16">
                <SlideUp className="text-center space-y-6">
                  <h2 id="achievements-heading" className="text-4xl lg:text-5xl font-sans font-extrabold text-foreground tracking-tighter uppercase leading-[1.05]">
                    {copy.achievements.title}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-xl mx-auto font-medium">
                    {copy.achievements.subtitle}
                  </p>
                </SlideUp>

                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   <StaggerItem className="lg:col-span-2">
                     <TiltCard className="h-full border border-primary/15 bg-white/70 hover:border-primary/30 hover:bg-primary/[0.01] transition-all duration-500 rounded-[2rem] p-8 flex flex-col justify-between">
                       <div className="space-y-6 text-left">
                         <h3 className="flex items-center space-x-3 text-2xl font-extrabold text-foreground tracking-tight">
                           <div className="p-3 bg-primary/10 rounded-[1.25rem] transition-colors">
                             <Trophy className="w-6 h-6 text-primary" />
                           </div>
                           <span>{copy.achievements.card1Title}</span>
                         </h3>
                         <div className="grid md:grid-cols-2 gap-6 items-start pt-2">
                           <div className="space-y-2">
                             <span className="block font-bold text-foreground text-lg">{copy.achievements.card1Season}</span>
                             <p className="text-sm font-normal text-muted-foreground/80 leading-relaxed">
                               {copy.achievements.card1Text}
                             </p>
                           </div>
                           <ul className="space-y-3 text-sm font-semibold text-muted-foreground">
                             {copy.achievements.card1Points.map((point: string, idx: number) => (
                               <li key={idx} className="flex items-center">
                                 <Zap className="w-4 h-4 text-primary mr-2 shrink-0" />
                                 {point}
                               </li>
                             ))}
                           </ul>
                         </div>
                       </div>
                     </TiltCard>
                   </StaggerItem>

                   <StaggerItem className="lg:col-span-1">
                     <TiltCard className="h-full border border-primary/15 bg-white/70 hover:border-primary/30 hover:bg-primary/[0.01] transition-all duration-500 rounded-[2rem] p-8 flex flex-col justify-between">
                       <div className="space-y-6 text-left">
                         <h3 className="flex items-center space-x-3 text-2xl font-extrabold text-foreground tracking-tight">
                           <div className="p-3 bg-primary/10 rounded-[1.25rem] transition-colors">
                             <Users className="w-6 h-6 text-primary" />
                           </div>
                           <span>{copy.achievements.card2Title}</span>
                         </h3>
                         <p className="text-sm leading-relaxed text-muted-foreground/80 font-normal">
                           {copy.achievements.card2Text}
                         </p>
                       </div>
                     </TiltCard>
                   </StaggerItem>

                   <StaggerItem className="lg:col-span-3">
                     <TiltCard className="h-full border border-primary/15 bg-white/70 hover:border-primary/30 hover:bg-primary/[0.01] transition-all duration-500 rounded-[2rem] p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                       <div className="flex items-center space-x-4 shrink-0">
                         <div className="p-3 bg-primary/10 rounded-[1.25rem] transition-colors">
                           <Heart className="w-6 h-6 text-primary" />
                         </div>
                         <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                           {copy.achievements.card3Title}
                         </h3>
                       </div>
                       <p className="text-sm leading-relaxed text-muted-foreground/80 font-normal lg:max-w-2xl">
                         {copy.achievements.card3Text}
                       </p>
                     </TiltCard>
                   </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </section>

          <section className="py-20" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-gradient-orange rounded-3xl p-8 lg:p-16 text-center space-y-8 overflow-hidden">
                {/* Layered atmosphere */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
                {/* Oversized background type */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <span className="font-drama text-white/5 text-[20rem] leading-none tracking-tighter">R</span>
                </div>

                <ScaleIn>
                  <div className="relative">
                    <h2
                      id="cta-heading"
                      className="text-4xl lg:text-5xl font-bold text-primary-foreground text-balance mb-4"
                    >
                      Ready to Join Our Journey?
                    </h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-primary-foreground/90 max-w-xl mx-auto text-pretty leading-relaxed">
                      Interested in sponsoring our team or participating in our community programs? We'd
                      love to hear from you to see how we can work together.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative mt-8">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="hover:scale-105 transition-all duration-300 shadow-lg"
                      asChild
                    >
                      <a href="/contact">
                        <Heart className="w-4 h-4 mr-2" />
                        Contact Us
                      </a>
                    </Button>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
