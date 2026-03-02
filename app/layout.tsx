import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"),
  title: {
    default: "Kael Fernández | FullStack Developer & CS Student",
    template: "%s | Kael Fernández",
  },
  description:
    "Desarrollador FullStack y estudiante de Ciencias de la Computación en la Universidad de Chile. Especializado en React, Next.js, Node.js y arquitecturas escalables.",
  keywords: [
    "Kael Fernández",
    "desarrollador fullstack",
    "fullstack developer",
    "programador chile",
    "ciencias de la computación",
    "universidad de chile",
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "portafolio",
  ],
  authors: [{ name: "Kael Fernández Hernández" }],
  creator: "Kael Fernández Hernández",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://tudominio.com",
    title: "Kael Fernández | FullStack Developer & CS Student",
    description:
      "Desarrollador FullStack y estudiante de Ciencias de la Computación en la Universidad de Chile.",
    siteName: "Kael Fernández Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kael Fernández - FullStack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kael Fernández | FullStack Developer & CS Student",
    description:
      "Desarrollador FullStack y estudiante de Ciencias de la Computación en la Universidad de Chile.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
