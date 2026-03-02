import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${project.title} | Portafolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Todos los proyectos
        </Link>

        <header className="flex flex-col gap-4">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>

          <p className="text-justify text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-normal">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.demoUrl && (
              <Button size="sm" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-4" />
                  Demo en vivo
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  Repositorio
                </a>
              </Button>
            )}
          </div>
        </header>

        <Separator className="my-8" />

        <section className="flex flex-col gap-8">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Descripción del proyecto
            </h2>
            <p className="text-justify leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>

          {project.highlights.length > 0 && (
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Aspectos destacados
              </h2>
              <ul className="flex flex-col gap-2">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-foreground/30" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Stack tecnológico
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
