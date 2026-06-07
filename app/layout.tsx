import type React from "react"
import type { Metadata } from "next"
import { Albert_Sans, Prata, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import { AIChatbot } from "@/components/ai-chatbot"
import { SoundEngine } from "@/components/sound-engine"
import "./globals.css"

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const drama = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-drama",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rustinpiece.org"),
  title: "Rust in Piece - FTC Team 19772 | Princeton STEM Academy Robotics",
  description:
    "Princeton STEM Academy FTC robotics team passionate about STEM education, engineering, and innovation. Mentoring FLL teams and inspiring the next generation of engineers through competitive robotics and community outreach.",
  keywords:
    "FTC robotics, FIRST Tech Challenge, Princeton STEM Academy, Team 19772, Rust in Piece, robotics competition, STEM education, engineering, mentorship, FLL mentoring, robotics team New Jersey, competitive robotics, robot design, programming, mechanical engineering, CAD design, community outreach, STEM camp, youth robotics, Princeton robotics, New Jersey FTC, high school robotics, middle school robotics, robotics mentorship, FIRST robotics, autonomous programming, teleoperated robot, robot building, engineering education, technology education, science education, mathematics education",
  authors: [{ name: "Rust in Piece FTC Team 19772" }],
  creator: "Rust in Piece FTC Team 19772",
  publisher: "Princeton STEM Academy",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rustinpiece.org",
    siteName: "Rust in Piece - FTC Team 19772",
    title: "Rust in Piece - FTC Team 19772 | Princeton STEM Academy Robotics",
    description:
      "Princeton STEM Academy FTC robotics team with 18 dedicated members passionate about STEM education, engineering, and innovation. Mentoring 2 FLL teams, hosting annual STEM camps, and competing in FIRST Tech Challenge.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
        width: 1200,
        height: 630,
        alt: "Rust in Piece FTC Team 19772 members in orange team shirts at Princeton STEM Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rust in Piece - FTC Team 19772 | Princeton STEM Academy Robotics",
    description:
      "Princeton STEM Academy FTC robotics team with 18 members passionate about STEM education, engineering, and innovation. Mentoring FLL teams and competing in FIRST Tech Challenge.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
    ],
    creator: "@rust_in_piece_robotics",
  },
  alternates: {
    canonical: "https://www.rustinpiece.org",
  },
  category: "Education",
  classification: "Robotics Team",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsTeam",
              name: "Rust in Piece FTC Team 19772",
              alternateName: ["Team 19772", "Rust in Piece Robotics", "Rust in Piece"],
              url: "https://www.rustinpiece.org",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
              description:
                "Princeton STEM Academy FTC robotics team with 18 dedicated members passionate about STEM education, engineering, and innovation. Mentoring 2 FLL teams and inspiring the next generation of engineers through competitive robotics and community outreach programs.",
              foundingDate: "2023",
              sport: "Robotics",
              numberOfMembers: 18,
              email: "rustinpieceftc@gmail.com",
              memberOf: [
                {
                  "@type": "Organization",
                  name: "FIRST Tech Challenge",
                  url: "https://www.firstinspires.org/robotics/ftc",
                },
              ],
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "Princeton STEM Academy",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "666 Plainsboro Rd #1161",
                addressLocality: "Plainsboro Township",
                addressRegion: "NJ",
                postalCode: "08536",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.instagram.com/rust_in_piece_robotics/",
                "https://hcb.hackclub.com/donations/start/rust-in-piece",
              ],
              knowsAbout: [
                "Robotics",
                "STEM Education",
                "Engineering",
                "Programming",
                "Mechanical Design",
                "CAD",
                "Community Outreach",
                "Mentorship",
                "Java Programming",
                "Autonomous Programming",
                "Robot Design",
                "FTC Competition",
                "FIRST Robotics",
              ],
              subjectOf: [
                {
                  "@type": "WebPage",
                  name: "Team Members",
                  url: "https://www.rustinpiece.org/team",
                },
                {
                  "@type": "WebPage",
                  name: "Mentors",
                  url: "https://www.rustinpiece.org/mentors",
                },
                {
                  "@type": "WebPage",
                  name: "Sponsors",
                  url: "https://www.rustinpiece.org/sponsors",
                },
                {
                  "@type": "WebPage",
                  name: "Community Impact",
                  url: "https://www.rustinpiece.org/community",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.rustinpiece.org",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Team",
                  item: "https://www.rustinpiece.org/team",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Mentors",
                  item: "https://www.rustinpiece.org/mentors",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Sponsors",
                  item: "https://www.rustinpiece.org/sponsors",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Community",
                  item: "https://www.rustinpiece.org/community",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Contact",
                  item: "https://www.rustinpiece.org/contact",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rust in Piece FTC Team 19772",
              url: "https://www.rustinpiece.org",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
              description:
                "FTC robotics team from Princeton STEM Academy dedicated to STEM education, mentorship, and competitive robotics",
              email: "rustinpieceftc@gmail.com",
              foundingDate: "2023",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 18,
              },
              areaServed: {
                "@type": "Place",
                name: "Princeton, New Jersey",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "rustinpieceftc@gmail.com",
                contactType: "General Inquiries",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${albert.variable} ${drama.variable} ${mono.variable} bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground`}>
        {/* Cinematic Global Noise Overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[100] opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <Suspense fallback={null}>{children}</Suspense>
        <AIChatbot />
        <SoundEngine />
      </body>
    </html>
  )
}
