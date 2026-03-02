import { skillCategories } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper"

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <span className="font-mono text-sm text-muted-foreground">
            04.
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Skills & Tecnologias
          </h2>
        </MotionWrapper>

        <StaggerContainer
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.name}>
              <div className="flex h-full min-h-[180px] flex-col gap-3 rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  {category.name}
                </h3>
                <div className="flex flex-1 flex-wrap content-start gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
