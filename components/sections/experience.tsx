import { experiences } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <span className="font-mono text-sm text-muted-foreground">
            02.
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Experiencia
          </h2>
        </MotionWrapper>

        <StaggerContainer className="mt-12 flex flex-col gap-0" staggerDelay={0.15}>
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <div className="group relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-foreground/20">
                    <Briefcase className="size-4 text-muted-foreground" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <Badge variant="outline" className="text-xs capitalize">
                        {exp.type === "internship"
                          ? "Practica"
                          : exp.type === "freelance"
                          ? "Freelance"
                          : "Trabajo"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                  <p className="mt-3 text-justify text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
