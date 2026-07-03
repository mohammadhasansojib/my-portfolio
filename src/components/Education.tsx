// components/Education.tsx
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const EDUCATION = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "Your University Name",
    location: "Bangladesh",
    duration: "20XX — Present",
    status: "Currently Pursuing",
    description:
      "Focused on core CS fundamentals — data structures, algorithms, database systems, and software engineering — alongside hands-on backend and full-stack web development.",
  },
]

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-3xl px-4 py-16 md:py-20"
    >
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Education
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
      </div>

      <div className="space-y-5">
        {EDUCATION.map((edu) => (
          <Card key={edu.degree} className="border-muted-foreground/10">
            <CardContent className="flex gap-4 p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">
                    {edu.duration}
                  </span>
                </div>

                <p className="mt-0.5 text-sm text-muted-foreground">
                  {edu.institution} · {edu.location}
                </p>

                <span className="mt-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {edu.status}
                </span>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}