import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-sm text-muted-foreground">404</span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Lo siento, la página que buscas no existe o fue movida a otra ubicación.
      </p>
      <Button asChild className="mt-8 gap-2">
        <Link href="/">
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>
      </Button>
    </div>
  )
}
