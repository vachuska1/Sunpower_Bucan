import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getDictionary } from "../../dictionaries"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import ProductCTA from "@/components/product-cta"

// Map localized IDs to standard IDs
const getStandardProductId = (localizedId: string, lang: string) => {
  if (lang === "cs") {
    const idMappings: Record<string, string> = {
      "vytapeni-chlazeni": "heating-cooling",
      "akumulacni-nadrze": "storage-tanks",
      "ridici-systemy": "control-systems",
      "ostrovni-dum": "island-house",
      "energeticke-koncepty": "energy-concepts",
      "energeticky-management": "energy-management",
    }
    return idMappings[localizedId] || localizedId
  } else if (lang === "de") {
    const idMappings: Record<string, string> = {
      "heizung-kuehlung": "heating-cooling",
      speichertanks: "storage-tanks",
      steuerungssysteme: "control-systems",
      inselhaus: "island-house",
      energiekonzepte: "energy-concepts",
      energiemanagement: "energy-management",
    }
    return idMappings[localizedId] || localizedId
  }
  return localizedId
}

// Product data - in a real app, this would come from a database or API
const getProductData = (productId: string) => {
  const products = {
    "heating-cooling": {
      image: "/placeholder.svg?height=600&width=1200",
      title: {
        en: "Heating and Cooling",
        cs: "Vytápění a chlazení",
        de: "Heizung und Kühlung",
      },
      sections: [
        {
          title: {
            en: "Efficient Solutions",
            cs: "Efektivní řešení",
            de: "Effiziente Lösungen",
          },
          content: {
            en: "Our heating and cooling solutions are designed to maximize energy efficiency while providing optimal comfort. Using the latest technologies, we ensure that your building maintains the perfect temperature year-round with minimal energy consumption.",
            cs: "Naše řešení vytápění a chlazení jsou navržena tak, aby maximalizovala energetickou účinnost a zároveň poskytovala optimální komfort. Pomocí nejnovějších technologií zajišťujeme, že vaše budova udržuje dokonalou teplotu po celý rok s minimální spotřebou energie.",
            de: "Unsere Heiz- und Kühllösungen sind darauf ausgelegt, die Energieeffizienz zu maximieren und gleichzeitig optimalen Komfort zu bieten. Mit den neuesten Technologien stellen wir sicher, dass Ihr Gebäude das ganze Jahr über die perfekte Temperatur mit minimalem Energieverbrauch beibehält.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Heat Pump Technology",
            cs: "Technologie tepelných čerpadel",
            de: "Wärmepumpentechnologie",
          },
          content: {
            en: "Heat pumps are at the core of our heating and cooling systems. These devices transfer heat from one place to another, allowing for efficient heating in winter and cooling in summer. Our heat pumps are selected based on your specific needs and building characteristics.",
            cs: "Tepelná čerpadla jsou jádrem našich systémů vytápění a chlazení. Tato zařízení přenášejí teplo z jednoho místa na druhé, což umožňuje efektivní vytápění v zimě a chlazení v létě. Naše tepelná čerpadla jsou vybírána na základě vašich specifických potřeb a charakteristik budovy.",
            de: "Wärmepumpen bilden den Kern unserer Heiz- und Kühlsysteme. Diese Geräte übertragen Wärme von einem Ort zum anderen und ermöglichen so effizientes Heizen im Winter und Kühlen im Sommer. Unsere Wärmepumpen werden basierend auf Ihren spezifischen Anforderungen und Gebäudeeigenschaften ausgewählt.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Underfloor Heating",
            cs: "Podlahové vytápění",
            de: "Fußbodenheizung",
          },
          content: {
            en: "Underfloor heating provides a comfortable and even heat distribution throughout your space. It works at lower temperatures than traditional radiators, making it more energy-efficient and compatible with renewable energy sources like heat pumps.",
            cs: "Podlahové vytápění poskytuje pohodlné a rovnoměrné rozložení tepla v celém prostoru. Funguje při nižších teplotách než tradiční radiátory, což jej činí energeticky účinnějším a kompatibilním s obnovitelnými zdroji energie, jako jsou tepelná čerpadla.",
            de: "Die Fußbodenheizung sorgt für eine angenehme und gleichmäßige Wärmeverteilung in Ihrem Raum. Sie arbeitet mit niedrigeren Temperaturen als herkömmliche Heizkörper, was sie energieeffizienter und kompatibel mit erneuerbaren Energiequellen wie Wärmepumpen macht.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    "storage-tanks": {
      image: "/placeholder.svg?height=600&width=1200",
      title: {
        en: "Storage Tanks",
        cs: "Akumulační nádrže",
        de: "Speichertanks",
      },
      sections: [
        {
          title: {
            en: "Energy Storage Solutions",
            cs: "Řešení pro ukládání energie",
            de: "Energiespeicherlösungen",
          },
          content: {
            en: "Our storage tanks are designed to efficiently store thermal energy, allowing you to capture excess heat when available and use it when needed. This balances energy supply and demand, reducing waste and improving system efficiency.",
            cs: "Naše akumulační nádrže jsou navrženy pro efektivní ukládání tepelné energie, což vám umožňuje zachytit přebytečné teplo, když je k dispozici, a použít ho, když je potřeba. To vyvažuje nabídku a poptávku po energii, snižuje plýtvání a zlepšuje účinnost systému.",
            de: "Unsere Speichertanks sind darauf ausgelegt, thermische Energie effizient zu speichern, sodass Sie überschüssige Wärme bei Verfügbarkeit speichern und bei Bedarf nutzen können. Dies gleicht Energieangebot und -nachfrage aus, reduziert Verschwendung und verbessert die Systemeffizienz.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Stratification Technology",
            cs: "Technologie stratifikace",
            de: "Schichtungstechnologie",
          },
          content: {
            en: "Our tanks utilize advanced stratification technology to maintain temperature layers within the tank. This ensures that hot water is available when needed while maximizing the efficiency of your heating system.",
            cs: "Naše nádrže využívají pokročilou technologii stratifikace k udržení teplotních vrstev uvnitř nádrže. To zajišťuje, že horká voda je k dispozici, když je potřeba, a zároveň maximalizuje účinnost vašeho topného systému.",
            de: "Unsere Tanks nutzen fortschrittliche Schichtungstechnologie, um Temperaturschichten im Tank aufrechtzuerhalten. Dies stellt sicher, dass heißes Wasser bei Bedarf verfügbar ist und gleichzeitig die Effizienz Ihres Heizsystems maximiert wird.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Integration Capabilities",
            cs: "Možnosti integrace",
            de: "Integrationsfähigkeiten",
          },
          content: {
            en: "Our storage tanks are designed to integrate seamlessly with various heat sources, including solar thermal systems, heat pumps, and traditional boilers. This flexibility allows for hybrid systems that maximize efficiency and reliability.",
            cs: "Naše akumulační nádrže jsou navrženy tak, aby se bezproblémově integrovaly s různými zdroji tepla, včetně solárních termálních systémů, tepelných čerpadel a tradičních kotlů. Tato flexibilita umožňuje hybridní systémy, které maximalizují účinnost a spolehlivost.",
            de: "Unsere Speichertanks sind darauf ausgelegt, sich nahtlos in verschiedene Wärmequellen zu integrieren, darunter Solarthermieanlagen, Wärmepumpen und herkömmliche Kessel. Diese Flexibilität ermöglicht Hybridsysteme, die Effizienz und Zuverlässigkeit maximieren.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    "control-systems": {
      image: "/placeholder.svg?height=600&width=1200",
      title: {
        en: "Control Systems",
        cs: "Řídicí systémy",
        de: "Steuerungssysteme",
      },
      sections: [
        {
          title: {
            en: "Smart Building Controls",
            cs: "Inteligentní řízení budov",
            de: "Intelligente Gebäudesteuerung",
          },
          content: {
            en: "Our control systems bring intelligence to your building's energy systems. By continuously monitoring conditions and adjusting parameters, they ensure optimal performance while minimizing energy consumption.",
            cs: "Naše řídicí systémy přinášejí inteligenci do energetických systémů vaší budovy. Nepřetržitým sledováním podmínek a úpravou parametrů zajišťují optimální výkon při minimalizaci spotřeby energie.",
            de: "Unsere Steuerungssysteme bringen Intelligenz in die Energiesysteme Ihres Gebäudes. Durch kontinuierliche Überwachung der Bedingungen und Anpassung der Parameter gewährleisten sie optimale Leistung bei minimiertem Energieverbrauch.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Remote Monitoring",
            cs: "Vzdálené monitorování",
            de: "Fernüberwachung",
          },
          content: {
            en: "Access your building's energy systems from anywhere with our remote monitoring capabilities. Receive alerts, adjust settings, and track performance through our user-friendly interface on your computer or mobile device.",
            cs: "Přistupujte k energetickým systémům vaší budovy odkudkoli díky našim možnostem vzdáleného monitorování. Přijímejte upozornění, upravujte nastavení a sledujte výkon prostřednictvím našeho uživatelsky přívětivého rozhraní na počítači nebo mobilním zařízení.",
            de: "Greifen Sie mit unseren Fernüberwachungsfunktionen von überall auf die Energiesysteme Ihres Gebäudes zu. Erhalten Sie Warnmeldungen, passen Sie Einstellungen an und verfolgen Sie die Leistung über unsere benutzerfreundliche Oberfläche auf Ihrem Computer oder Mobilgerät.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Predictive Algorithms",
            cs: "Prediktivní algoritmy",
            de: "Prädiktive Algorithmen",
          },
          content: {
            en: "Our advanced control systems use predictive algorithms to anticipate heating and cooling needs based on weather forecasts, building occupancy patterns, and thermal characteristics. This proactive approach further enhances efficiency and comfort.",
            cs: "Naše pokročilé řídicí systémy používají prediktivní algoritmy k předvídání potřeb vytápění a chlazení na základě předpovědi počasí, vzorců obsazenosti budovy a tepelných charakteristik. Tento proaktivní přístup dále zvyšuje účinnost a komfort.",
            de: "Unsere fortschrittlichen Steuerungssysteme verwenden prädiktive Algorithmen, um den Heiz- und Kühlbedarf basierend auf Wettervorhersagen, Gebäudebelegungsmustern und thermischen Eigenschaften zu antizipieren. Dieser proaktive Ansatz verbessert Effizienz und Komfort weiter.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    "island-house": {
      image: "/placeholder.svg?height=600&width=1200",
      title: {
        en: "Island House",
        cs: "Ostrovní dům",
        de: "Inselhaus",
      },
      sections: [
        {
          title: {
            en: "Energy Independence",
            cs: "Energetická nezávislost",
            de: "Energieunabhängigkeit",
          },
          content: {
            en: "Our Island House concept provides complete energy independence, allowing your home to function off-grid. By combining renewable energy generation, efficient storage, and smart consumption management, we create self-sufficient living spaces.",
            cs: "Náš koncept Ostrovního domu poskytuje úplnou energetickou nezávislost, což umožňuje vašemu domovu fungovat mimo síť. Kombinací výroby obnovitelné energie, efektivního skladování a inteligentního řízení spotřeby vytváříme soběstačné obytné prostory.",
            de: "Unser Inselhaus-Konzept bietet vollständige Energieunabhängigkeit und ermöglicht es Ihrem Zuhause, netzunabhängig zu funktionieren. Durch die Kombination von erneuerbarer Energieerzeugung, effizientem Speicher und intelligentem Verbrauchsmanagement schaffen wir autarke Wohnräume.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Renewable Energy Integration",
            cs: "Integrace obnovitelné energie",
            de: "Integration erneuerbarer Energien",
          },
          content: {
            en: "Our Island House solutions integrate multiple renewable energy sources, including solar photovoltaic panels, small wind turbines, and biomass systems. This diversity ensures reliable energy supply regardless of weather conditions.",
            cs: "Naše řešení Ostrovního domu integrují více zdrojů obnovitelné energie, včetně solárních fotovoltaických panelů, malých větrných turbín a systémů na biomasu. Tato rozmanitost zajišťuje spolehlivou dodávku energie bez ohledu na povětrnostní podmínky.",
            de: "Unsere Inselhaus-Lösungen integrieren mehrere erneuerbare Energiequellen, darunter Photovoltaikanlagen, kleine Windturbinen und Biomassesysteme. Diese Vielfalt gewährleistet eine zuverlässige Energieversorgung unabhängig von den Wetterbedingungen.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Water Management",
            cs: "Hospodaření s vodou",
            de: "Wassermanagement",
          },
          content: {
            en: "Complete independence includes water management. Our Island House concept incorporates rainwater harvesting, water purification, and wastewater treatment systems, ensuring a sustainable and self-sufficient water supply.",
            cs: "Úplná nezávislost zahrnuje i hospodaření s vodou. Náš koncept Ostrovního domu zahrnuje sběr dešťové vody, čištění vody a systémy čištění odpadních vod, což zajišťuje udržitelný a soběstačný přívod vody.",
            de: "Vollständige Unabhängigkeit umfasst auch Wassermanagement. Unser Inselhaus-Konzept beinhaltet Regenwassersammlung, Wasseraufbereitung und Abwasserbehandlungssysteme, die eine nachhaltige und autarke Wasserversorgung gewährleisten.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    "energy-concepts": {
      image: "/placeholder.svg?height=600&width=1200",
      title: {
        en: "Energy Concepts & Project Preparations",
        cs: "Energetické koncepty a přípravy projektů",
        de: "Energiekonzepte & Projektvorbereitungen",
      },
      sections: [
        {
          title: {
            en: "Comprehensive Planning",
            cs: "Komplexní plánování",
            de: "Umfassende Planung",
          },
          content: {
            en: "Our energy concept development begins with a thorough analysis of your needs, site conditions, and goals. We create detailed plans that outline the optimal energy systems for your project, considering both current requirements and future expansion.",
            cs: "Náš vývoj energetického konceptu začíná důkladnou analýzou vašich potřeb, podmínek lokality a cílů. Vytváříme podrobné plány, které nastiňují optimální energetické systémy pro váš projekt, s ohledem na současné požadavky i budoucí rozšíření.",
            de: "Unsere Energiekonzeptentwicklung beginnt mit einer gründlichen Analyse Ihrer Bedürfnisse, Standortbedingungen und Ziele. Wir erstellen detaillierte Pläne, die die optimalen Energiesysteme für Ihr Projekt skizzieren, unter Berücksichtigung sowohl aktueller Anforderungen als auch zukünftiger Erweiterungen.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Feasibility Studies",
            cs: "Studie proveditelnosti",
            de: "Machbarkeitsstudien",
          },
          content: {
            en: "Before committing to a specific energy concept, we conduct detailed feasibility studies to evaluate technical, economic, and environmental aspects. This ensures that your investment delivers the expected benefits and meets regulatory requirements.",
            cs: "Před přijetím konkrétního energetického konceptu provádíme podrobné studie proveditelnosti k vyhodnocení technických, ekonomických a environmentálních aspektů. To zajišťuje, že vaše investice přinese očekávané výhody a splní regulační požadavky.",
            de: "Bevor wir uns auf ein bestimmtes Energiekonzept festlegen, führen wir detaillierte Machbarkeitsstudien durch, um technische, wirtschaftliche und ökologische Aspekte zu bewerten. Dies stellt sicher, dass Ihre Investition die erwarteten Vorteile bringt und die regulatorischen Anforderungen erfüllt.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Regulatory Compliance",
            cs: "Soulad s předpisy",
            de: "Einhaltung von Vorschriften",
          },
          content: {
            en: "Our team stays current with energy regulations and building codes to ensure your project meets all requirements. We handle permit applications and documentation, simplifying the approval process and avoiding costly delays.",
            cs: "Náš tým se průběžně seznamuje s energetickými předpisy a stavebními normami, aby váš projekt splňoval všechny požadavky. Zajišťujeme žádosti o povolení a dokumentaci, zjednodušujeme proces schvalování a předcházíme nákladným zpožděním.",
            de: "Unser Team hält sich über Energievorschriften und Bauvorschriften auf dem Laufenden, um sicherzustellen, dass Ihr Projekt alle Anforderungen erfüllt. Wir kümmern uns um Genehmigungsanträge und Dokumentation, vereinfachen den Genehmigungsprozess und vermeiden kostspielige Verzögerungen.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    "energy-management": {
      image: "/placeholder.svg?height=600&width=1200",
      title: {
        en: "Energy Management",
        cs: "Energetický management",
        de: "Energiemanagement",
      },
      sections: [
        {
          title: {
            en: "Consumption Monitoring",
            cs: "Sledování spotřeby",
            de: "Verbrauchsüberwachung",
          },
          content: {
            en: "Our energy management systems provide real-time monitoring of energy consumption across your building. Detailed analytics help identify usage patterns, inefficiencies, and opportunities for optimization.",
            cs: "Naše systémy energetického managementu poskytují sledování spotřeby energie v reálném čase v celé vaší budově. Podrobné analýzy pomáhají identifikovat vzorce využití, neefektivnosti a příležitosti pro optimalizaci.",
            de: "Unsere Energiemanagementsysteme bieten Echtzeitüberwachung des Energieverbrauchs in Ihrem gesamten Gebäude. Detaillierte Analysen helfen dabei, Nutzungsmuster, Ineffizienzen und Optimierungsmöglichkeiten zu identifizieren.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Demand Response",
            cs: "Reakce na poptávku",
            de: "Nachfragereaktion",
          },
          content: {
            en: "Our systems can participate in demand response programs, automatically adjusting energy usage during peak periods. This not only reduces costs but also contributes to grid stability and environmental sustainability.",
            cs: "Naše systémy se mohou účastnit programů reakce na poptávku a automaticky upravovat spotřebu energie během špičkových období. To nejen snižuje náklady, ale také přispívá ke stabilitě sítě a environmentální udržitelnosti.",
            de: "Unsere Systeme können an Nachfragereaktionsprogrammen teilnehmen und den Energieverbrauch während Spitzenzeiten automatisch anpassen. Dies reduziert nicht nur die Kosten, sondern trägt auch zur Netzstabilität und ökologischen Nachhaltigkeit bei.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: {
            en: "Performance Optimization",
            cs: "Optimalizace výkonu",
            de: "Leistungsoptimierung",
          },
          content: {
            en: "Continuous performance monitoring allows our systems to identify and address inefficiencies. Automated adjustments and maintenance alerts ensure your energy systems always operate at peak efficiency.",
            cs: "Nepřetržité sledování výkonu umožňuje našim systémům identifikovat a řešit neefektivnosti. Automatické úpravy a upozornění na údržbu zajišťují, že vaše energetické systémy vždy fungují s maximální účinností.",
            de: "Kontinuierliche Leistungsüberwachung ermöglicht es unseren Systemen, Ineffizienzen zu identifizieren und zu beheben. Automatische Anpassungen und Wartungsalarme stellen sicher, dass Ihre Energiesysteme immer mit maximaler Effizienz arbeiten.",
          },
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      gallery: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
  }

  return products[productId] || null
}

export default async function ProductPage({
  params: { lang, productId },
}: {
  params: { lang: string; productId: string }
}) {
  const dict = await getDictionary(lang as "en" | "cs" | "de")

  // Convert localized ID to standard ID
  const standardProductId = getStandardProductId(productId, lang)

  // Get product data
  const productData = getProductData(standardProductId)

  // If product not found, return 404
  if (!productData) {
    notFound()
  }

  return (
    <main className="pb-16">
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <Image
          src={productData.image || "/placeholder.svg"}
          alt={productData.title[lang as keyof typeof productData.title] || productData.title.en}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            {productData.title[lang as keyof typeof productData.title] || productData.title.en}
          </h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mt-8">
        <Link href={`/${lang}/#products`}>
          <Button variant="outline" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            {dict.products.backButton || "Back to Products"}
          </Button>
        </Link>
      </div>

      {/* Content Sections - Alternating Layout */}
      <div className="container space-y-16 mt-8">
        {productData.sections.map((section, index) => (
          <div key={index} className={`grid md:grid-cols-2 gap-8 items-center`}>
            <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <div className="relative aspect-video">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={section.title[lang as keyof typeof section.title] || section.title.en}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {section.title[lang as keyof typeof section.title] || section.title.en}
              </h2>
              <p className="text-lg text-muted-foreground">
                {section.content[lang as keyof typeof section.content] || section.content.en}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="container mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{dict.products.galleryTitle || "Gallery"}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {productData.gallery.map((image, index) => (
            <div key={index} className="relative aspect-[4/3]">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">{dict.products.ctaTitle || "Interested in this solution?"}</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          {dict.products.ctaText || "Contact us for more information or to discuss your specific requirements."}
        </p>
        <ProductCTA lang={lang} inquiryText={dict.products.inquiryButton} />
      </div>
    </main>
  )
}

