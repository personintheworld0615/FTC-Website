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

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image src="/logo.png" alt="Rust in Piece Logo" width={40} height={80} className="object-contain leading-8" />
            </div>
            <span className="font-bold text-xl text-foreground">Rust in Piece</span>
            <Badge className="ml-2 bg-primary text-primary-foreground border-primary">#19772</Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a
                  href="https://hcb.hackclub.com/donations/start/rust-in-piece"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="w-4 h-4 mr-1" />
                  Support Us
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
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
      </div>
    </nav>
  )
}
