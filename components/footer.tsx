import { Mail, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <div className="bg-background pt-10">
      <footer className="bg-[var(--foreground)] text-[#FAF6F0]/90 py-16 rounded-t-[4rem] shadow-2xl overflow-hidden relative border-t border-primary/20">
        {/* Brand orange glow stripe at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-primary/10 blur-2xl rounded-full" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 relative flex items-center justify-center bg-primary/10 border border-primary/20 rounded-full p-2">
                  <Image src="/logo.png" alt="Rust in Piece Logo" width={32} height={32} className="object-contain" />
                </div>
                <span className="font-sans font-bold text-xl text-white">Rust in Piece</span>
              </div>
              <p className="text-sm font-mono text-[#EAE3DB]/80">FTC Team 19772</p>
              <p className="text-sm font-mono text-[#EAE3DB]/80">The Princeton STEM Academy</p>
              <p className="text-sm font-mono text-[#EAE3DB]/80">666 Plainsboro Rd #1161</p>
              <p className="text-sm font-mono text-[#EAE3DB]/80">Plainsboro, NJ 08536</p>
            </div>

            <div className="space-y-6">
              <h3 className="font-sans font-bold text-primary uppercase tracking-widest text-xs">Quick Links</h3>
              <div className="space-y-3 text-sm">
                <Link href="/team" className="block text-[#EAE3DB]/80 hover:text-primary transition-colors duration-200">
                  Team Members
                </Link>
                <Link href="/mentors" className="block text-[#EAE3DB]/80 hover:text-primary transition-colors duration-200">
                  Our Mentors
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-sans font-bold text-primary uppercase tracking-widest text-xs">Community</h3>
              <div className="space-y-3 text-sm">
                <Link href="/sponsors" className="block text-[#EAE3DB]/80 hover:text-primary transition-colors duration-200">
                  Sponsors
                </Link>
                <Link href="/community" className="block text-[#EAE3DB]/80 hover:text-primary transition-colors duration-200">
                  Impact
                </Link>
                <Link href="/contact" className="block text-[#EAE3DB]/80 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-sans font-bold text-primary uppercase tracking-widest text-xs">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="mailto:rustinpieceftc@gmail.com"
                  className="text-[#EAE3DB]/80 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label="Email us"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/rust_in_piece_robotics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EAE3DB]/80 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@ftcrustinpiece19772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EAE3DB]/80 hover:text-primary hover:-translate-y-1 transition-all duration-300"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-[#EAE3DB]/60 gap-4">
            <div className="flex items-center space-x-2 bg-white/5 border border-primary/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
              <span className="tracking-widest text-xs uppercase">System Operational</span>
            </div>
            <p className="text-center md:text-right text-balance leading-relaxed max-w-[280px] sm:max-w-md md:max-w-none">&copy; {new Date().getFullYear()} Rust in Piece — FTC Team 19772. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
