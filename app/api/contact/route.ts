import { NextResponse } from "next/server"

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const MIN_FORM_FILL_TIME_MS = 1500

type RateLimitStore = Map<string, number[]>

declare global {
  var __contactRateLimitStore__: RateLimitStore | undefined
}

function getRateLimitStore(): RateLimitStore {
  if (!globalThis.__contactRateLimitStore__) {
    globalThis.__contactRateLimitStore__ = new Map<string, number[]>()
  }
  return globalThis.__contactRateLimitStore__
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }
  return request.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string): boolean {
  const store = getRateLimitStore()
  const now = Date.now()
  const attempts = (store.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  )

  if (attempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    store.set(ip, attempts)
    return true
  }

  attempts.push(now)
  store.set(ip, attempts)
  return false
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, website, sentAt } = body
    const clientIp = getClientIp(request)

    // Honeypot: si el campo oculto viene con contenido, es probable bot.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Mensaje recibido" })
    }

    // Tiempo mínimo de llenado del formulario para evitar bots rápidos.
    if (typeof sentAt !== "number" || sentAt < MIN_FORM_FILL_TIME_MS) {
      return NextResponse.json(
        { error: "No se pudo validar el formulario. Intenta nuevamente." },
        { status: 400 }
      )
    }

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Intenta nuevamente en unos minutos." },
        { status: 429 }
      )
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalido" },
        { status: 400 }
      )
    }

    if (name.length > 120 || subject.length > 160 || message.length > 5000) {
      return NextResponse.json(
        { error: "El contenido excede el tamaño permitido" },
        { status: 400 }
      )
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      // If no API key, still return success for development
      console.log("[Contact Form]", { name, email, subject, message })
      return NextResponse.json({
        success: true,
        message: "Mensaje recibido (modo desarrollo)",
      })
    }

    // Send email via Resend
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "tu@email.com"],
      subject: `[Portafolio] ${subject}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
    })

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    )
  }
}
