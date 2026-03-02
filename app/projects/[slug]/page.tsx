import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ProjectActionButtons } from "@/components/projects/project-action-buttons"
import { ArrowLeft, Briefcase, GraduationCap, User, Calendar, Building2, Info } from "lucide-react"
import type { Metadata } from "next"

const categoryConfig = {
  professional: { label: "Laboral", icon: Briefcase, color: "text-blue-500 bg-blue-500/10" },
  academic: { label: "Académico", icon: GraduationCap, color: "text-purple-500 bg-purple-500/10" },
  personal: { label: "Personal", icon: User, color: "text-green-500 bg-green-500/10" },
}

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

  const categoryInfo = categoryConfig[project.category]
  const CategoryIcon = categoryInfo.icon

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
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 ${categoryInfo.color}`}>
              <CategoryIcon className="size-4" />
              <span className="text-sm font-medium">{categoryInfo.label}</span>
            </div>
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{project.period}</span>
            </div>
            {project.institution && (
              <div className="flex items-center gap-2">
                <Building2 className="size-4" />
                <span>{project.institution}</span>
              </div>
            )}
          </div>

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

          <ProjectActionButtons
            slug={project.slug}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          />
        </header>

        <Separator className="my-8" />

        <section className="flex flex-col gap-8">
          {project.slug === "sistema-calificaciones-municipalidad" && (
            <Alert className="border-blue-200/60 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:border-blue-800/40 dark:from-blue-950/30 dark:to-indigo-950/30">
              <Info className="text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100 font-semibold">
                Video demostrativo con datos ficticios.
              </AlertTitle>
              <AlertDescription className="text-justify text-blue-800/90 dark:text-blue-200/80 leading-relaxed">
                Este proyecto fue desarrollado para la Municipalidad de Vitacura y maneja 
                información confidencial de funcionarios públicos. Por razones de privacidad 
                y seguridad, el video y las imágenes que verás a continuación utilizan únicamente 
                datos ficticios creados para fines demostrativos, no información real de la 
                institución ni de sus funcionarios.
              </AlertDescription>
            </Alert>
          )}

          {project.videoUrl && (
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Video demostración
              </h2>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                <video
                  controls
                  className="absolute inset-0 size-full object-contain"
                  poster={project.image}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Galería del proyecto
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Captura ${index + 1}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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
