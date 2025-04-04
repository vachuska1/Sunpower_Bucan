"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsSection({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: string
}) {
  const router = useRouter()

  // Expanded product list with 6 products
  const products = [
    {
      id: "heating-cooling",
      image: "/Produkty/klimastena.png",
      title: {
        en: "Heating and Cooling",
        cs: "Vytápění a chlazení",
        de: "Heizung und Kühlung",
      },
      description: {
        en: "Efficient heating and cooling solutions for residential and commercial buildings.",
        cs: "Efektivní řešení vytápění a chlazení pro obytné a komerční budovy.",
        de: "Effiziente Heiz- und Kühllösungen für Wohn- und Geschäftsgebäude.",
      },
    },
    {
      id: "storage-tanks",
      image: "/Produkty/akumulace.png",
      title: {
        en: "Storage Tanks",
        cs: "Akumulační nádrže",
        de: "Speichertanks",
      },
      description: {
        en: "High-capacity storage solutions for thermal energy management.",
        cs: "Vysokokapacitní skladovací řešení pro řízení tepelné energie.",
        de: "Hochkapazitäts-Speicherlösungen für thermisches Energiemanagement.",
      },
    },
    {
      id: "control-systems",
      image: "/Produkty/r_system.png",
      title: {
        en: "Control Systems",
        cs: "Řídicí systémy",
        de: "Steuerungssysteme",
      },
      description: {
        en: "Smart control systems for optimal energy usage and building management.",
        cs: "Inteligentní řídicí systémy pro optimální využití energie a správu budov.",
        de: "Intelligente Steuerungssysteme für optimale Energienutzung und Gebäudemanagement.",
      },
    },
    {
      id: "island-house",
      image: "/Produkty/ostrov.png",
      title: {
        en: "Island House",
        cs: "Ostrovní dům",
        de: "Inselhaus",
      },
      description: {
        en: "Self-sufficient housing solutions independent from external energy sources.",
        cs: "Soběstačná bytová řešení nezávislá na externích zdrojích energie.",
        de: "Autarke Wohnlösungen unabhängig von externen Energiequellen.",
      },
    },
    {
      id: "energy-concepts",
      image: "/Produkty/koncepce.png",
      title: {
        en: "Energy Concepts & Project Preparations",
        cs: "Energetické koncepty a přípravy projektů",
        de: "Energiekonzepte & Projektvorbereitungen",
      },
      description: {
        en: "Comprehensive planning and preparation for energy-efficient projects.",
        cs: "Komplexní plánování a příprava energeticky efektivních projektů.",
        de: "Umfassende Planung und Vorbereitung für energieeffiziente Projekte.",
      },
    },
    {
      id: "energy-management",
      image: "/Produkty/energetik.png",
      title: {
        en: "Energy Management",
        cs: "Energetický management",
        de: "Energiemanagement",
      },
      description: {
        en: "Solutions for monitoring and optimizing energy consumption in buildings.",
        cs: "Řešení pro sledování a optimalizaci spotřeby energie v budovách.",
        de: "Lösungen zur Überwachung und Optimierung des Energieverbrauchs in Gebäuden.",
      },
    },
  ]

  // Function to navigate to product detail page
  const navigateToProduct = (productId: string) => {
    // Get localized product ID based on current language
    let localizedId = productId

    if (lang === "cs") {
      const idMappings: Record<string, string> = {
        "heating-cooling": "vytapeni-chlazeni",
        "storage-tanks": "akumulacni-nadrze",
        "control-systems": "ridici-systemy",
        "island-house": "ostrovni-dum",
        "energy-concepts": "energeticke-koncepty",
        "energy-management": "energeticky-management",
      }
      localizedId = idMappings[productId] || productId
    } else if (lang === "de") {
      const idMappings: Record<string, string> = {
        "heating-cooling": "heizung-kuehlung",
        "storage-tanks": "speichertanks",
        "control-systems": "steuerungssysteme",
        "island-house": "inselhaus",
        "energy-concepts": "energiekonzepte",
        "energy-management": "energiemanagement",
      }
      localizedId = idMappings[productId] || productId
    }

    router.push(`/${lang}/products/${localizedId}`)
  }

  return (
    <div className="container" id="products">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dictionary.products.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {dictionary.products.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col h-full">
            <div className="aspect-[4/3] relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title[lang as keyof typeof product.title] || product.title.en}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{product.title[lang as keyof typeof product.title] || product.title.en}</CardTitle>
              <CardDescription>
                {product.description[lang as keyof typeof product.description] || product.description.en}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button variant="outline" className="w-full" onClick={() => navigateToProduct(product.id)}>
                {dictionary.products.detailsButton}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          size="lg"
          onClick={() => {
            document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          {dictionary.products.inquiryButton}
        </Button>
      </div>
    </div>
  )
}

