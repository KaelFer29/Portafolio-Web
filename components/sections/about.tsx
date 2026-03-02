import { personalInfo } from "@/lib/data"
import { MapPin, GraduationCap, Calendar } from "lucide-react"
import { MotionWrapper } from "@/components/motion-wrapper"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <span className="font-mono text-sm text-muted-foreground">
            01.
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Sobre Mi
          </h2>
        </MotionWrapper>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <MotionWrapper delay={0.1} className="flex-1">
            <div className="flex flex-col gap-4">
              {personalInfo.aboutParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2} className="lg:w-72">
            <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-secondary">
                  <GraduationCap className="size-4 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {personalInfo.career}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {personalInfo.university}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-secondary">
                  <Calendar className="size-4 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {personalInfo.careerYear}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    En curso
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-secondary">
                  <MapPin className="size-4 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {personalInfo.location}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Disponible remoto
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
