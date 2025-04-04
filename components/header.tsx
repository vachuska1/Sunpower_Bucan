"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type Language = "cs" | "en" | "de"

export default function Header({ currentLang = "cs" }: { currentLang?: string }) {
  const [language, setLanguage] = useState<Language>((currentLang as Language) || "cs")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setLanguage((currentLang as Language) || "cs")
  }, [currentLang])

  // Updated menu items with smart navigation
  const menuItems = [
    {
      en: "Introduction",
      cs: "Úvod",
      de: "Einführung",
      type: "home", // Speciální typ pro hlavní stránku
      target: "introduction",
    },
    {
      en: "Products",
      cs: "Produkty",
      de: "Produkte",
      type: "section",
      target: "products",
    },
    {
      en: "Contacts",
      cs: "Kontakty",
      de: "Kontakte",
      type: "section",
      target: "contacts",
    },
    {
      en: "Articles",
      cs: "Články",
      de: "Artikel",
      type: "page",
      target: "/articles",
    },
  ]

  const languages = [
    { code: "cs", name: "Čeština", flag: "/czech.png" },
    { code: "en", name: "English", flag: "/english.png" },
    { code: "de", name: "Deutsch", flag: "/german.png" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const switchLanguage = (newLanguage: Language) => {
    const pathWithoutLang = pathname.replace(/^\/(en|cs|de)/, "")
    router.push(`/${newLanguage}${pathWithoutLang}`)
    setLanguage(newLanguage)
    document.cookie = `NEXT_LOCALE=${newLanguage}; path=/; max-age=31536000`
  }

  // Smart navigation function
  const handleNavigation = (item: typeof menuItems[0]) => {
    if (item.type === "page") {
      router.push(`/${language}${item.target}`)
    } else if (item.type === "home") {
      if (pathname === `/${language}`) {
        // Jsme na hlavní stránce - scrollujeme
        const element = document.getElementById(item.target)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      } else {
        // Jsme na jiné stránce - přesměrujeme na hlavní
        router.push(`/${language}`)
        // Po krátkém čase scrollujeme (až se stránka načte)
        setTimeout(() => {
          const element = document.getElementById(item.target)
          element?.scrollIntoView({ behavior: "smooth" })
        }, 300)
      }
    } else if (item.type === "section") {
      if (pathname === `/${language}`) {
        // Jsme na hlavní stránce - scrollujeme
        const element = document.getElementById(item.target)
        element?.scrollIntoView({ behavior: "smooth" })
      } else {
        // Jsme na jiné stránce - přesměrujeme na hlavní s hash
        router.push(`/${language}#${item.target}`)
      }
    }
  }

  const inquiryText = {
    en: "Inquiry",
    cs: "Poptávka",
    de: "Anfrage",
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-20">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link href={`/${language}`} className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={160} height={50} className="h-14 w-auto" />
            </Link>
          </div>

          {/* Navigation Menu Section */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.target}>
                    <button
                      onClick={() => handleNavigation(item)}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-lg font-medium px-5 py-3 cursor-pointer",
                        pathname.includes(`/${language}${item.target}`) ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item[language]}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Inquiry & Language Section */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Button onClick={() => handleNavigation(menuItems.find(item => item.target === "contacts")!)} 
                    className="text-base px-6 py-2 h-11">
              {inquiryText[language]}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 h-11 px-3">
                  <Image
                    src={currentLanguage.flag || "/placeholder.svg"}
                    alt={currentLanguage.name}
                    width={28}
                    height={18}
                    className="h-5 w-7 object-cover"
                  />
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code as Language)}
                    className={cn("gap-2 text-base py-2", language === lang.code && "bg-accent font-medium")}
                  >
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={lang.name}
                      width={28}
                      height={18}
                      className="h-5 w-7 object-cover"
                    />
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden justify-between items-center h-full">
          <Link href={`/${language}`} className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={140} height={45} className="h-12 w-auto" />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-11 w-11">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col gap-6 pt-6">
                {menuItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => handleNavigation(item)}
                    className={cn(
                      "text-xl font-medium transition-colors hover:text-primary text-left",
                      pathname.includes(`/${language}${item.target}`) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item[language]}
                  </button>
                ))}

                <Button 
                  onClick={() => handleNavigation(menuItems.find(item => item.target === "contacts")!)}
                  className="mt-4 w-full text-lg py-6"
                >
                  {inquiryText[language]}
                </Button>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex flex-col gap-3">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={language === lang.code ? "default" : "ghost"}
                        className="justify-start gap-3 text-lg h-12"
                        onClick={() => switchLanguage(lang.code as Language)}
                      >
                        <Image
                          src={lang.flag || "/placeholder.svg"}
                          alt={lang.name}
                          width={28}
                          height={18}
                          className="h-5 w-7 object-cover"
                        />
                        {lang.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}