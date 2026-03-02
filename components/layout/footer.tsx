import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo, navLinks } from "@/lib/data"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-sm font-semibold text-foreground">
              {personalInfo.name.toLowerCase().replace(/\s+/g, "")}
              <span className="text-muted-foreground">.dev</span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {personalInfo.shortBio}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-foreground">
              Navegacion
            </span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-foreground">
              Contacto
            </span>
            <div className="flex gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            {"Hecho con Next.js & desplegado en Vercel"}
          </p>
        </div>
      </div>
    </footer>
  )
}
