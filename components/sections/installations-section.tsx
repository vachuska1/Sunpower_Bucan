"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InstallationsSection({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: string
}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const installations = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/Instalace/Instalace_${i + 1}.jpg`,
    alt: `Installation example ${i + 1}`,
  }))

  const handlePrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 1 ? installations.length : selectedImage - 1)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === installations.length ? 1 : selectedImage + 1)
  }

  return (
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {dictionary.installations?.title || "Photo Gallery of Installations"}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {dictionary.installations?.description || "View our completed projects and installations"}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {installations.map((installation) => (
          <div
            key={installation.id}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(installation.id)}
          >
            <Image
              src={installation.src || "/placeholder.svg"}
              alt={installation.alt}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="relative h-full w-full">
              <Image
                src={`/Instalace/Instalace_${selectedImage}.jpg`}
                alt={`Installation example ${selectedImage}`}
                width={1200}
                height={800}
                className="max-h-[80vh] object-contain"
              />
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

