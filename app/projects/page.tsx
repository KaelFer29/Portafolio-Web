import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos | Portafolio",
  description: "Todos mis proyectos de desarrollo de software.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-[100dvh] px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Todos los Proyectos
        </h1>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Una colección completa de los proyectos en los que he trabajado,
          tanto personales como académicos y profesionales.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/10 hover:shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-foreground group-hover:text-foreground/80">
                      {project.title}
                    </h2>
                    {project.featured && (
                      <Badge variant="outline" className="text-[10px] font-normal shrink-0">
                        Destacado
                      </Badge>
                    )}
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                </div>

                <p className="mt-2 flex-1 text-justify text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs font-normal">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
