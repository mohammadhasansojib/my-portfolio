// components/Projects.tsx
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS } from "@/data/projects"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Projects
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col overflow-hidden rounded-lg border border-muted-foreground/15 transition-all duration-300 hover:-translate-y-1 hover:border-muted-foreground/30 hover:shadow-lg"
          >
            {/* Image */}
            <div className="aspect-video w-full overflow-hidden border-b border-muted-foreground/15 bg-muted">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold">{project.name}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge variant="outline" className="text-xs font-normal">
                    +{project.techStack.length - 3}
                  </Badge>
                )}
              </div>

              {/* Button wrapper: pushed to bottom, with top spacing */}
              <div className="mt-auto pt-5">
                <Button
                  asChild
                  className="w-full bg-zinc-900 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                >
                  <Link to={`/projects/${project.slug}`}>
                    View Details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}