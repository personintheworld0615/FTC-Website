import { Mail, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <div className="bg-background pt-10">
      <footer className="bg-slate-950 text-slate-300 py-16 rounded-t-[4rem] shadow-2xl overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative flex items-center justify-center bg-white/10 rounded-full p-2">
                <Image src="/logo.png" alt="Rust in Piece Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-sans font-bold text-xl text-white">Rust in Piece</span>
            </div>
            <p className="text-sm font-mono text-slate-400">FTC Team 19772</p>
            <p className="text-sm font-mono text-slate-400">The Princeton STEM Academy</p>
            <p className="text-sm font-mono text-slate-400">666 Plainsboro Rd #1161</p>
            <p className="text-sm font-mono text-slate-400">Plainsboro, NJ 08536</p>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans font-bold text-white uppercase tracking-wider text-sm">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <Link href="/team" className="block text-slate-400 hover:text-white transition-colors">
                Team Members
              </Link>
              <Link href="/mentors" className="block text-slate-400 hover:text-white transition-colors">
                Our Mentors
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans font-bold text-white uppercase tracking-wider text-sm">Community</h3>
            <div className="space-y-3 text-sm">
              <Link href="/sponsors" className="block text-slate-400 hover:text-white transition-colors">
                Sponsors
              </Link>
              <Link href="/community" className="block text-slate-400 hover:text-white transition-colors">
                Impact
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans font-bold text-white uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:rustinpieceftc@gmail.com"
                className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rust_in_piece_robotics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@ftcrustinpiece19772"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-slate-500 gap-4">
          <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
            <span className="tracking-tight text-xs uppercase">System Operational</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Rust in Piece - FTC Team 19772. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
