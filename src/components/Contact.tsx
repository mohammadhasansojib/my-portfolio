// components/Contact.tsx
import { Mail, Phone } from "lucide-react"

const CONTACT_INFO = [
  {
    label: "Email",
    value: "hasan@example.com",
    href: "mailto:hasan@example.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
    href: "tel:+8801XXXXXXXXX",
    icon: Phone,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-4 py-16 md:py-20"
    >
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Get In Touch
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Have an opportunity or just want to say hi? Feel free to reach out
          directly — I'll get back to you as soon as I can.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    </section>
  )
}