import { Mail, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <Image src="/logo.png" alt="Rust in Piece Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-bold text-lg">Rust in Piece</span>
            </div>
            <p className="text-sm text-muted-foreground">FTC Team 19772</p>
            <p className="text-sm text-muted-foreground">The Princeton STEM Academy</p>
            <p className="text-sm text-muted-foreground">666 Plainsboro Rd #1161</p>
            <p className="text-sm text-muted-foreground">Plainsboro Township, NJ 08536</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/team" className="block text-muted-foreground hover:text-primary transition-colors">
                Team Members
              </Link>
              <Link href="/mentors" className="block text-muted-foreground hover:text-primary transition-colors">
                Our Mentors
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Community</h3>
            <div className="space-y-2 text-sm">
              <Link href="/sponsors" className="block text-muted-foreground hover:text-primary transition-colors">
                Sponsors
              </Link>
              <Link href="/community" className="block text-muted-foreground hover:text-primary transition-colors">
                Impact
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:rustinpieceftc@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rust_in_piece_robotics/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Rust in Piece - FTC Team 19772. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
