"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectActionButtonsProps {
  slug: string
  demoUrl?: string
  repoUrl?: string
}

export function ProjectActionButtons({ slug, demoUrl, repoUrl }: ProjectActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {demoUrl && (
        <Button size="sm" asChild>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="size-4" />
            Demo en vivo
          </a>
        </Button>
      )}
      {repoUrl && (
        <Button size="sm" variant="outline" asChild>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-4" />
            Repositorio
          </a>
        </Button>
      )}
    </div>
  )
}
