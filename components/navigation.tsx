"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/mentors", label: "Mentors" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/community", label: "Community" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ]

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto border transition-all duration-500 rounded-[2rem] px-4 sm:px-6 mx-auto
          ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-border shadow-xl py-2 w-full max-w-6xl"
            : "bg-transparent border-transparent py-4 w-full max-w-7xl"
          }
        `}
      >
        <div className="flex items-center w-full justify-between">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image src="/logo.png" alt="Rust in Piece Logo" width={40} height={80} className="object-contain leading-8" />
            </div>
            <span className="font-bold text-xl text-foreground">Rust in Piece</span>
            <Badge className="ml-2 bg-primary text-primary-foreground border-primary">#19772</Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 rounded-full hover:bg-primary/5">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center shrink-0">
            <motion.div
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-primary/30 hover:shadow-lg transition-shadow" asChild>
                <a
                  href="https://hcb.hackclub.com/donations/start/rust-in-piece"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="w-4 h-4 mr-1" />
                  Support Us
                </a>
              </Button>
            </motion.div>
            </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden w-11 h-11 p-0 flex items-center justify-center rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b border-border">
                  <div className="w-10 h-10 relative flex items-center justify-center">
                    <Image src="/logo.png" alt="Rust in Piece Logo" width={40} height={40} className="object-contain" />
                  </div>
                  <span className="font-bold text-lg text-foreground">Rust in Piece</span>
                  <Badge className="bg-primary text-primary-foreground border-primary">#19772</Badge>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Donate to</div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <a
                        href="https://hcb.hackclub.com/donations/start/rust-in-piece"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Support Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}
