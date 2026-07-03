// components/Hero.tsx
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedin },
  { label: "Twitter", href: "https://twitter.com/your-username", icon: FaTwitter },
  { label: "Facebook", href: "https://facebook.com/your-username", icon: FaFacebook },
]


export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row md:justify-between md:gap-12 md:py-20"
    >
      {/* Left: Text content */}
      <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
        <p className="text-sm font-medium uppercase tracking-wide text-primary sm:text-base">
          Full Stack Developer
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Hi, I'm <span className="text-primary">Hasan</span>
        </h1>

        <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
          A backend-focused full-stack developer building fast, reliable web
          applications with Node.js, PostgreSQL, and React.
        </p>

        {/* Resume button */}
        <Button asChild size="lg" className="mt-8">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>

        {/* Social links */}
        <div className="mt-6 flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      {/* Right: Photo */}
      <div className="flex justify-center md:w-1/2 md:justify-end">
        <div className="h-40 w-40 overflow-hidden rounded-full border sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80">
          <img
            src="/profile.png"
            alt="Hasan"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}