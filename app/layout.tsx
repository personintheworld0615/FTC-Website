import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rust in Piece - FTC Team 19772 | Princeton STEM Academy Robotics",
  description:
    "Princeton STEM Academy FTC robotics team passionate about STEM education, engineering, and innovation. Mentoring FLL teams and inspiring the next generation of engineers.",
  keywords:
    "FTC robotics, FIRST Tech Challenge, Princeton STEM Academy, Team 19772, robotics competition, STEM education, engineering, mentorship, FLL mentoring, robotics team New Jersey, competitive robotics, robot design, programming, mechanical engineering, CAD design, community outreach, STEM camp, youth robotics",
  authors: [{ name: "Rust in Piece FTC Team 19772" }],
  creator: "Rust in Piece FTC Team 19772",
  publisher: "Princeton STEM Academy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rustinpiece.com",
    siteName: "Rust in Piece - FTC Team 19772",
    title: "Rust in Piece - FTC Team 19772 | Princeton STEM Academy Robotics",
    description:
      "Princeton STEM Academy FTC robotics team passionate about STEM education, engineering, and innovation. Mentoring FLL teams, hosting STEM camps, and competing in FIRST Tech Challenge.",
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
      "Princeton STEM Academy FTC robotics team passionate about STEM education, engineering, and innovation. Mentoring FLL teams and competing in FIRST Tech Challenge.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://rustinpiece.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsTeam",
              name: "Rust in Piece FTC Team 19772",
              alternateName: ["Team 19772", "Rust in Piece Robotics"],
              url: "https://rustinpiece.com",
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Screenshot%202025-09-04%20at%206.19.03%E2%80%AFPM%281%29-u5yI5GjjGLWmPcTpGYDwQB6JBMU5vE.png",
              description:
                "Princeton STEM Academy FTC robotics team passionate about STEM education, engineering, and innovation. Mentoring FLL teams and inspiring the next generation of engineers.",
              foundingDate: "2023",
              sport: "Robotics",
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
                addressLocality: "Princeton",
                addressRegion: "NJ",
                addressCountry: "US",
              },
              sameAs: ["https://www.instagram.com/rust_in_piece_robotics/"],
              knowsAbout: [
                "Robotics",
                "STEM Education",
                "Engineering",
                "Programming",
                "Mechanical Design",
                "CAD",
                "Community Outreach",
                "Mentorship",
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
                  item: "https://rustinpiece.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Team",
                  item: "https://rustinpiece.com/team",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Mentors",
                  item: "https://rustinpiece.com/mentors",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Sponsors",
                  item: "https://rustinpiece.com/sponsors",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Community",
                  item: "https://rustinpiece.com/community",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Contact",
                  item: "https://rustinpiece.com/contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
