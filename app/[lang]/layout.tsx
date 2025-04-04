import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

// Define supported languages
export const supportedLanguages = ["en", "cs", "de"] as const
export type SupportedLanguage = typeof supportedLanguages[number]

// Generate static params for SSG
export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }))
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLanguage }
}): Promise<Metadata> {
  const titles = {
    en: "Sunpower - Energy Solutions",
    cs: "Sunpower - Energetická řešení",
    de: "Sunpower - Energielösungen"
  }

  return {
    title: titles[params.lang],
    description: "High quality energy solutions", // Add your translations here
    generator: "Next.js",
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: SupportedLanguage }
}) {
  // Validate language
  const lang = supportedLanguages.includes(params.lang) 
    ? params.lang 
    : "en" // Fallback to English

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Header currentLang={lang} />
        {children}
      </body>
    </html>
  )
}