import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Juan Cristian Kunz de Borba | Desenvolvedor Flutter & Web",
  description:
    "Desenvolvedor Flutter & Web apaixonado por criar experiências digitais inovadoras. Portfolio de Juan Cristian Kunz de Borba.",
  keywords: ["desenvolvedor", "flutter", "web", "react", "typescript", "blumenau"],
  authors: [{ name: "Juan Cristian Kunz de Borba" }],
  openGraph: {
    title: "Juan Cristian Kunz de Borba | Desenvolvedor Flutter & Web",
    description: "Desenvolvedor Flutter & Web apaixonado por criar experiências digitais inovadoras",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
        {children}
        <Analytics />
    </html>
  )
}
