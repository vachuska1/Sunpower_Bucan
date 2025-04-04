"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactsSection({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: string
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in a real app, this would send the data to a server
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert(dictionary.contacts.successMessage)
  }

  return (
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dictionary.contacts.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {dictionary.contacts.description}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{dictionary.contacts.infoTitle}</CardTitle>
              <CardDescription>{dictionary.contacts.infoDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">{dictionary.contacts.addressTitle}</h3>
                  <p className="text-sm text-muted-foreground">
                    Jarošovská 840/II
                    <br />
                    Jindřichův Hradec, 377 02
                    <br />
                    Czech Republic
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">{dictionary.contacts.phoneTitle}</h3>
                  <p className="text-sm text-muted-foreground">+420 731 744 188</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">{dictionary.contacts.emailTitle}</h3>
                  <p className="text-sm text-muted-foreground">office@sunpower.cz</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.1088726152!2d15.00066307688793!3d49.14159197125761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d1d6c1f1d2a8f%3A0x5f568493b3c77c97!2zSmFyb8Whb3Zza8OhIDg0MC9JSSwgMzc3IDAyIEppbmTFmWljaOWvdiBIcmFkZWM!5e0!3m2!1sen!2scz!4v1712159066345!5m2!1sen!2scz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="inquiry">
          <Card>
            <CardHeader>
              <CardTitle>{dictionary.contacts.formTitle}</CardTitle>
              <CardDescription>{dictionary.contacts.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{dictionary.contacts.nameLabel}</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{dictionary.contacts.emailLabel}</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{dictionary.contacts.subjectLabel}</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{dictionary.contacts.messageLabel}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  {dictionary.contacts.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

