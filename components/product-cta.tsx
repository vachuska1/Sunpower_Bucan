"use client"

import { Button } from "@/components/ui/button"

export default function ProductCTA({
  lang,
  inquiryText,
}: {
  lang: string
  inquiryText: string
}) {
  return (
    <Button
      size="lg"
      onClick={() => {
        // Navigate to contacts section on the main page
        window.location.href = `/${lang}/#contacts`
      }}
    >
      {inquiryText}
    </Button>
  )
}

