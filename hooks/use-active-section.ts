"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("")
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    // Resetear activeSection cuando no estamos en home
    if (!isHome) {
      setActiveSection("")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [isHome])

  return activeSection
}
