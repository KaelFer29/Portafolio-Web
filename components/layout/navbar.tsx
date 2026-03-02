"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks, personalInfo } from "@/lib/data"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-muted-foreground"
        >
          {personalInfo.name.toLowerCase().replace(/\s+/g, "")}
          <span className="text-muted-foreground">.dev</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "")
            const isActive = isHome && activeSection === sectionId

            return (
              <Link
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="mt-0.5 block h-px w-full bg-foreground" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
