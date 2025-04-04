"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function IntroductionSection({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: string
}) {
  const router = useRouter()

  // Language-specific content
  const introContent = {
    en: {
      title: "Sunpower",
      subtitle: "meaningful energy",
      description1:
        "Welcome to the website of the purely Czech company SUNPOWER s.r.o. Here you will find our products, services, important documents, articles and contacts.",
      description2:
        "We focus on the energy concept, use and storage of individual types of energy with a focus on the highest efficiency. Get to know us more below.",
    },
    cs: {
      title: "Sunpower",
      subtitle: "smysluplné energie",
      description1:
        "Vítáme Vás na webu ryze české společnosti SUNPOWER s.r.o. Najdete zde naše produkty, služby, důležité dokumenty, články a kontakty.",
      description2:
        "Zaměřujeme se na energetické koncepce, využívání a ukládání jednotlivých druhů energií se zaměřením na nejvyšší efektivnost. Poznejte nás více níže.",
    },
    de: {
      title: "Sunpower",
      subtitle: "sinnvolle Energie",
      description1:
        "Willkommen auf der Website des rein tschechischen Unternehmens SUNPOWER s.r.o. Hier finden Sie unsere Produkte, Dienstleistungen, wichtige Dokumente, Artikel und Kontakte.",
      description2:
        "Wir konzentrieren uns auf das Energiekonzept, die Nutzung und Speicherung einzelner Energiearten mit Fokus auf höchste Effizienz. Lernen Sie uns unten näher kennen.",
    },
  }

  // Get content based on current language
  const content = introContent[lang as keyof typeof introContent] || introContent.en

  return (
    <div className="container px-6 md:px-8" id="introduction">
      {/* Use a flex column layout on mobile, grid on larger screens */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text content with proper padding */}
        <div className="space-y-6 w-full max-w-2xl mx-auto lg:mx-0">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">{content.title}</h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium">{content.subtitle}</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground md:text-xl">{content.description1}</p>
            <p className="text-lg text-muted-foreground md:text-xl">{content.description2}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {dictionary.home.exploreButton}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {dictionary.home.contactButton}
            </Button>
          </div>
        </div>

        {/* Image - full width on mobile, constrained on larger screens */}
        {/* Image - full width on mobile, constrained on larger screens */}
        <div className="w-full mt-8 lg:mt-0">
          <div className="relative aspect-square w-full lg:max-w-3xl lg:mx-auto ">
            <Image
              src="/Animation/Animation.png"
              alt="SUNPOWER Energy Solutions"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

