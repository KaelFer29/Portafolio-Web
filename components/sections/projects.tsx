import Link from "next/link"
import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"
import { ArrowUpRight, ArrowRight, Briefcase, GraduationCap, User } from "lucide-react"

const categoryConfig = {
  professional: { label: "Laboral", icon: Briefcase, color: "text-blue-500" },
  academic: { label: "Académico", icon: GraduationCap, color: "text-purple-500" },
  personal: { label: "Personal", icon: User, color: "text-green-500" },
}

export function ProjectsSection() {
  // Mostrar primero los proyectos profesionales, luego académicos ordenados por fecha
  const displayProjects = [...projects].sort((a, b) => {
    if (a.category === "professional" && b.category !== "professional") return -1
    if (a.category !== "professional" && b.category === "professional") return 1
    return 0
  }).slice(0, 6)

  return (
    <section id="projects" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <span className="font-mono text-sm text-muted-foreground">
            03.
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Proyectos
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Una selección de proyectos en los que he trabajado, desde
            aplicaciones web hasta herramientas de visualización.
          </p>
        </MotionWrapper>

        <StaggerContainer
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {displayProjects.map((project) => {
            const categoryInfo = categoryConfig[project.category]
            const CategoryIcon = categoryInfo.icon
            
            return (
              <StaggerItem key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/10 hover:shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CategoryIcon className={`size-3.5 ${categoryInfo.color}`} />
                          <span className={`text-xs font-medium ${categoryInfo.color}`}>
                            {categoryInfo.label}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-foreground/80">
                          {project.title}
                        </h3>
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
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {projects.length > displayProjects.length && (
          <MotionWrapper delay={0.3} className="mt-10 text-center">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/projects">
                Ver todos los proyectos ({projects.length})
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </MotionWrapper>
        )}
      </div>
    </section>
  )
}
