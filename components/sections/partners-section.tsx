"use client"

import Image from "next/image"
import Link from "next/link"

export default function PartnersSection({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: string
}) {
  const partners = [
    {
      id: 1,
      name: "Reisenbauer",
      logo: "/Companies/Reisenbauer.png",
      url: "https://reisenbauer.solutions/",
    },
    {
      id: 2,
      name: "EKZ",
      logo: "/Companies/EKZ.png",
      url: "https://www.ekz-energieberatung.de/",
    },
    {
      id: 3,
      name: "JCU",
      logo: "/Companies/JCU.png",
      url: "https://www.fzt.jcu.cz/cz/",
    },
    {
      id: 4,
      name: "FSI",
      logo: "/Companies/FSI.png",
      url: "https://www.fme.vutbr.cz/",
    },
    {
      id: 5,
      name: "Nukleon",
      logo: "/Companies/Nukleon.png",
      url: "https://www.nukleon.cz/",
    },
    {
      id: 6,
      name: "TA",
      logo: "/Companies/TA.png",
      url: "https://www.ta.co.at/",
    },
  ]

  return (
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {dictionary.partners?.title || "We Cooperate"}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {dictionary.partners?.description || "Our trusted partners and collaborators"}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner) => (
          <Link
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
          >
            <div className="relative h-24 w-full">
              <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

