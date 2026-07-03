import { useParams, Link, Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { FaGithub as Github } from "react-icons/fa"
import { PROJECTS } from "@/data/projects"

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <Link
        to="/#projects"
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {project.name}
      </h1>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Project
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub Repo (Client)
          </a>
        </Button>
      </div>

      <Separator className="my-8" />

      <section>
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Challenges Faced</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {project.challenges}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Future Improvements</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {project.improvements}
        </p>
      </section>
    </div>
  )
}