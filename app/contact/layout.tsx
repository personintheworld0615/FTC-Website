import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Rust in Piece FTC Team 19772",
  description:
    "Get in touch with Rust in Piece FTC Team 19772. Reach out for sponsorship inquiries, FLL mentorship requests, STEM camp information, or general questions. Email: rustinpieceftc@gmail.com.",
  alternates: { canonical: "https://www.rustinpiece.org/contact" },
  openGraph: {
    title: "Contact Us | Rust in Piece FTC Team 19772",
    description: "Reach out for sponsorship, FLL mentorship, STEM camp info, or general inquiries.",
    url: "https://www.rustinpiece.org/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
