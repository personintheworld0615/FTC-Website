import type { Metadata } from "next"
import { SponsorsContent } from "@/components/sponsors-content"

export const metadata: Metadata = {
  title: "Partner with Us | Rust in Piece FTC Team 19772",
  description:
    "Support Rust in Piece FTC Team 19772 from Princeton STEM Academy. Partner with a student-led robotics team inspiring community STEM outreach and engineering excellence.",
  alternates: { canonical: "https://www.rustinpiece.org/sponsors" },
  openGraph: {
    title: "Partner with Us | Rust in Piece FTC Team 19772",
    description: "Support youth robotics and STEM education. Partner with FTC Team 19772.",
    url: "https://www.rustinpiece.org/sponsors",
  },
}

export default function SponsorsPage() {
  return <SponsorsContent />
}
