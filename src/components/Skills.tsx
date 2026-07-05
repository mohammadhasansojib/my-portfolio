// components/Skills.tsx

const SKILL_CATEGORIES = [
  {
    title: "Language",
    skills: [
      {name: "TypeScript", icon: "typescript"},
      {name: "JavaScript", icon: "javascript"},
      {name: "HTML", icon: "html"},
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      {name: "CSS", icon: "css"},
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "postman" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Prisma", icon: "prisma" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-4 py-16 md:py-20"
    >
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Skills
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {SKILL_CATEGORIES.map(({ title, skills }) => (
          <div
            key={title}
            className="rounded-xl border border-muted-foreground/10 bg-card p-6"
          >
            <h3 className="mb-5 text-lg font-semibold">{title}</h3>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-lg p-3 transition-colors hover:bg-muted"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={name}
                    className="h-10 w-10 sm:h-12 sm:w-12"
                  />
                  <span className="text-center text-xs text-muted-foreground sm:text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}