"use client"

import { useState } from "react"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MotionWrapper } from "@/components/motion-wrapper"
import { Github, Linkedin, Mail, Send, CheckCircle2, Loader2 } from "lucide-react"
import { z } from "zod"
import { trackEvent } from "@/lib/analytics"

type FormStatus = "idle" | "loading" | "success" | "error"

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formStartedAt] = useState<number>(() => Date.now())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string,
      sentAt: Date.now() - formStartedAt,
    }

    // Validar con Zod
    const validation = contactFormSchema.safeParse(data)
    if (!validation.success) {
      const errors: Record<string, string> = {}
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message
        }
      })
      setFieldErrors(errors)
      setStatus("error")
      setErrorMessage("Por favor corrige los errores en el formulario")
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const errorData = await res.json()
        trackEvent("contact_submit_error", {
          status: res.status,
        })
        throw new Error(errorData.error || "Error al enviar el mensaje")
      }

      trackEvent("contact_submit_success", {
        location: "contact_section",
      })
      setStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      trackEvent("contact_submit_error", {
        status: "exception",
      })
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Error al enviar el mensaje"
      )
    }
  }

  return (
    <section id="contact" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <MotionWrapper>
          <span className="font-mono text-sm text-muted-foreground">
            05.
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Contacto
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Estoy abierto a oportunidades laborales, colaboraciones y proyectos
            interesantes. No dudes en contactarme.
          </p>
        </MotionWrapper>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <MotionWrapper delay={0.1} className="flex-1">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-card p-12 text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
                  <CheckCircle2 className="size-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setStatus("idle")}
                  className="mt-2"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      disabled={status === "loading"}
                      className={fieldErrors.name ? "border-destructive" : ""}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      disabled={status === "loading"}
                      className={fieldErrors.email ? "border-destructive" : ""}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Asunto del mensaje"
                    required
                    disabled={status === "loading"}
                    className={fieldErrors.subject ? "border-destructive" : ""}
                  />
                  {fieldErrors.subject && (
                    <p className="mt-1 text-xs text-destructive">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    disabled={status === "loading"}
                    className={fieldErrors.message ? "border-destructive" : ""}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-xs text-destructive">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </MotionWrapper>

          <MotionWrapper delay={0.2} className="lg:w-72">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Contacto directo
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  También puedes contactarme directamente por email o redes
                  sociales.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={personalInfo.socialLinks.email}
                  className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-muted-foreground transition-colors hover:border-foreground/10 hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0" />
                  <span>{personalInfo.email}</span>
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-muted-foreground transition-colors hover:border-foreground/10 hover:text-foreground"
                >
                  <Github className="size-4 shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-muted-foreground transition-colors hover:border-foreground/10 hover:text-foreground"
                >
                  <Linkedin className="size-4 shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
