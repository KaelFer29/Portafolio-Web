"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setOpen(false), [])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close()
        toggleRef.current?.focus()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, close])

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Focus trap
  useEffect(() => {
    if (!open || !navRef.current) return

    const focusableEls = navRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableEls.length === 0) return

    const firstEl = focusableEls[0]
    const lastEl = focusableEls[focusableEls.length - 1]

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    }

    firstEl.focus()
    window.addEventListener("keydown", trapFocus)
    return () => window.removeEventListener("keydown", trapFocus)
  }, [open])

  return (
    <div className="md:hidden">
      <Button
        ref={toggleRef}
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 top-16 z-40 bg-background/60 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              ref={navRef}
              id="mobile-nav-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegacion"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-16 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl"
            >
              <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
