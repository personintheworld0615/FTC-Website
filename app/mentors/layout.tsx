import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentors | Rust in Piece FTC Team 19772",
  description:
    "Meet the mentors guiding Rust in Piece FTC Team 19772 at Princeton STEM Academy. Industry professionals and educators with expertise in robotics, programming, mechanical engineering, and competition strategy.",
  alternates: { canonical: "https://www.rustinpiece.org/mentors" },
  openGraph: {
    title: "Mentors | Rust in Piece FTC Team 19772",
    description: "Industry professionals and educators guiding Team 19772 at Princeton STEM Academy, NJ.",
    url: "https://www.rustinpiece.org/mentors",
  },
}

export default function MentorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
