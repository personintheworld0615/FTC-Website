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
    "FTC robotics, FIRST Tech Challenge, Princeton STEM Academy, Team 19772, robotics competition, STEM education, engineering, mentorship",
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
      "Princeton STEM Academy FTC robotics team passionate about STEM education, engineering, and innovation.",
    images: [
      {
        url: "/ftc-robotics-team-working-on-robot-in-workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Rust in Piece FTC Team 19772 working on their robot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rust in Piece - FTC Team 19772",
    description: "Princeton STEM Academy FTC robotics team passionate about STEM education and innovation.",
    images: ["/ftc-robotics-team-working-on-robot-in-workshop.jpg"],
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
              "@type": "Organization",
              name: "Rust in Piece FTC Team 19772",
              alternateName: "Team 19772",
              url: "https://rustinpiece.com",
              logo: "/ftc-robotics-team-working-on-robot-in-workshop.jpg",
              description:
                "Princeton STEM Academy FTC robotics team passionate about STEM education, engineering, and innovation.",
              foundingDate: "2023",
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "Princeton STEM Academy",
              },
              memberOf: {
                "@type": "Organization",
                name: "FIRST Tech Challenge",
              },
              sameAs: ["https://instagram.com/rustme"],
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
