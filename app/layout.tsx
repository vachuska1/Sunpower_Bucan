import type { Metadata } from 'next'
import './globals.css'

// Podporované jazyky
const supportedLanguages = ['en', 'cs', 'de'] as const
type SupportedLanguage = typeof supportedLanguages[number]

// Lokalizované titulky a popisy
const metadataTitles = {
  en: 'Sunpower - Meaningful Energy',
  cs: 'Sunpower - Smysluplné energie',
  de: 'Sunpower - Sinnvolle Energie'
}

const metadataDescriptions = {
  en: 'High quality energy solutions with focus on maximum efficiency',
  cs: 'Kvalitní energetická řešení se zaměřením na maximální efektivitu',
  de: 'Hochwertige Energielösungen mit Fokus auf maximale Effizienz'
}

// Generování metadat
export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const lang = supportedLanguages.includes(params.lang as SupportedLanguage) 
    ? params.lang as SupportedLanguage
    : 'en'

  return {
    title: metadataTitles[lang],
    description: metadataDescriptions[lang],
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    openGraph: {
      title: metadataTitles[lang],
      description: metadataDescriptions[lang],
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Sunpower',
        },
      ],
    },
  }
}

// Generování statických cest
export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = supportedLanguages.includes(params.lang as SupportedLanguage) 
    ? params.lang as SupportedLanguage
    : 'en'

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* PWA meta tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}