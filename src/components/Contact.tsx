// components/Contact.tsx
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const CONTACT_INFO = [
  {
    label: "Email",
    value: "mohammadhasansojib@gmail.com",
    href: "mailto:mohammadhasansojib@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+880 1882-521430",
    href: "tel:+8801882521430",
    icon: Phone,
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Get In Touch
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Have an opportunity or just want to say hi? Fill out the form below
          or reach me directly.
        </p>
      </div>

      {/* Quick contact info */}
      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CONTACT_INFO.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="group flex items-center gap-4 rounded-xl border border-muted-foreground/10 bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {label}
              </p>
              <p className="truncate font-medium">{value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Contact form (static for now, wire up submission later) */}
      <form className="space-y-5 rounded-xl border border-muted-foreground/10 bg-card p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="What's this about?" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me a bit about the opportunity or your message..."
            rows={5}
            required
          />
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Message
        </Button>
      </form>
    </section>
  )
}