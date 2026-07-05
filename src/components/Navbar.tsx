// components/Navbar.tsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Eye } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Scroll-spy: watch each section, mark whichever is most visible as active
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // Section counts as "active" once it's roughly in the middle band of the screen
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* Left: Logo/Photo */}
        <Link to="/#home" className="flex items-center gap-2">
          <img
            src="/profile.png"
            alt="Mohammad Hasan Sojib Photo"
            className="h-9 w-9 rounded-full object-cover"
          />
        </Link>

        {/* Center: Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Resume buttons (desktop) */}
        <div className="hidden md:flex">
          <Button asChild size="sm" className="rounded-r-none">
            <a href="/resume.pdf" download rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-l-none border-l-0">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Resume">
              <Eye className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Full-screen mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex h-[100dvh] flex-col items-center justify-center overflow-y-auto bg-background px-6 py-16 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          <nav className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`text-2xl font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Resume actions inside mobile menu */}
          <div className="mt-10 flex">
            <Button asChild className="rounded-r-none">
              <a href="/resume.pdf" download rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-l-none border-l-0">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Resume">
                <Eye className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}