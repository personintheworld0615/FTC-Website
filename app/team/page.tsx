import type { Metadata } from "next"
import TeamPageClient from "./team-page-client"

export const metadata: Metadata = {
  title: "Our Team | Rust in Piece FTC Team 19772",
  description:
    "Meet the 17 student engineers, programmers, and designers of Rust in Piece FTC Team 19772 from Princeton STEM Academy. Captains, lead engineers, software developers, and more.",
  alternates: { canonical: "https://www.rustinpiece.org/team" },
  openGraph: {
    title: "Our Team | Rust in Piece FTC Team 19772",
    description: "Meet the 17 student engineers, programmers, and designers of Rust in Piece FTC Team 19772.",
    url: "https://www.rustinpiece.org/team",
  },
}

export default function TeamPage() {
  return <TeamPageClient />
}
