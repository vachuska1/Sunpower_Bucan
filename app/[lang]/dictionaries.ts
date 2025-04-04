import "server-only"

// Define the dictionary type
interface Dictionary {
  home: {
    title: string
    description: string
    exploreButton: string
    contactButton: string
    featuresTitle: string
    features: string[]
  }
  products: {
    title: string
    description: string
    detailsButton: string
    inquiryButton: string
    backButton: string
    galleryTitle: string
    ctaTitle: string
    ctaText: string
  }
  installations: {
    title: string
    description: string
  }
  partners: {
    title: string
    description: string
  }
  contacts: {
    title: string
    description: string
    infoTitle: string
    infoDescription: string
    addressTitle: string
    phoneTitle: string
    emailTitle: string
    mapPlaceholder: string
    formTitle: string
    formDescription: string
    nameLabel: string
    emailLabel: string
    subjectLabel: string
    messageLabel: string
    submitButton: string
    successMessage: string
  }
  articles: {
    title: string
    readMore: string
  }
  navigation: {
    introduction: string
    products: string
    contacts: string
    articles: string
  }
}

// Create dictionaries for each language (now as direct objects)
const dictionaries: Record<string, Dictionary> = {
  en: {
    home: {
      title: "Welcome to our Website",
      description: "Discover our amazing products and services designed to meet your needs.",
      exploreButton: "Explore Products",
      contactButton: "Contact Us",
      featuresTitle: "Our Features",
      features: ["High quality products", "Fast delivery", "Customer support", "Money-back guarantee"],
    },
    products: {
      title: "Our Solutions",
      description: "Browse our selection of high-quality energy solutions designed for your needs.",
      detailsButton: "View Details",
      inquiryButton: "Make an Inquiry",
      backButton: "Back to Solutions",
      galleryTitle: "Gallery",
      ctaTitle: "Interested in this solution?",
      ctaText: "Contact us for more information or to discuss your specific requirements.",
    },
    installations: {
      title: "Photo Gallery of Installations",
      description: "View our completed projects and installations",
    },
    partners: {
      title: "We Cooperate",
      description: "Our trusted partners and collaborators",
    },
    contacts: {
      title: "Contact Us",
      description: "Get in touch with our team for any questions or inquiries.",
      infoTitle: "Contact Information",
      infoDescription: "Feel free to reach out to us using any of the following methods.",
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email",
      mapPlaceholder: "Map will be displayed here",
      formTitle: "Send an Inquiry",
      formDescription: "Fill out the form below and we will get back to you as soon as possible.",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitButton: "Send Message",
      successMessage: "Your message has been sent successfully!",
    },
    articles: {
      title: "Articles",
      readMore: "Read more",
    },
    navigation: {
      introduction: "Introduction",
      products: "Products",
      contacts: "Contacts",
      articles: "Articles",
    },
  },
  cs: {
    home: {
      title: "Sunpower",
      description: "Smysluplné energie",
      exploreButton: "Prozkoumat produkty",
      contactButton: "Kontaktujte nás",
      featuresTitle: "Naše funkce",
      features: ["Vysoce kvalitní produkty", "Rychlé doručení", "Zákaznická podpora", "Záruka vrácení peněz"],
    },
    products: {
      title: "Naše řešení",
      description: "Prohlédněte si náš výběr vysoce kvalitních energetických řešení navržených pro vaše potřeby.",
      detailsButton: "Zobrazit detaily",
      inquiryButton: "Vytvořit poptávku",
      backButton: "Zpět na řešení",
      galleryTitle: "Galerie",
      ctaTitle: "Máte zájem o toto řešení?",
      ctaText: "Kontaktujte nás pro více informací nebo pro diskuzi o vašich specifických požadavcích.",
    },
    installations: {
      title: "Fotogalerie instalací",
      description: "Prohlédněte si naše dokončené projekty a instalace",
    },
    partners: {
      title: "Spolupracujeme",
      description: "Naši důvěryhodní partneři a spolupracovníci",
    },
    contacts: {
      title: "Kontaktujte nás",
      description: "Spojte se s naším týmem pro jakékoli dotazy nebo poptávky.",
      infoTitle: "Kontaktní informace",
      infoDescription: "Neváhejte nás kontaktovat pomocí některého z následujících způsobů.",
      addressTitle: "Adresa",
      phoneTitle: "Telefon",
      emailTitle: "Email",
      mapPlaceholder: "Zde bude zobrazena mapa",
      formTitle: "Poslat poptávku",
      formDescription: "Vyplňte níže uvedený formulář a my se vám co nejdříve ozveme.",
      nameLabel: "Vaše jméno",
      emailLabel: "Emailová adresa",
      subjectLabel: "Předmět",
      messageLabel: "Zpráva",
      submitButton: "Odeslat zprávu",
      successMessage: "Vaše zpráva byla úspěšně odeslána!",
    },
    articles: {
      title: "Články",
      readMore: "Číst více",
    },
    navigation: {
      introduction: "Úvod",
      products: "Produkty",
      contacts: "Kontakty",
      articles: "Články",
    },
  },
  de: {
    home: {
      title: "Willkommen auf unserer Website",
      description: "Entdecken Sie unsere erstaunlichen Produkte und Dienstleistungen, die auf Ihre Bedürfnisse zugeschnitten sind.",
      exploreButton: "Produkte erkunden",
      contactButton: "Kontaktieren Sie uns",
      featuresTitle: "Unsere Funktionen",
      features: ["Hochwertige Produkte", "Schnelle Lieferung", "Kundensupport", "Geld-zurück-Garantie"],
    },
    products: {
      title: "Unsere Lösungen",
      description: "Durchsuchen Sie unsere Auswahl an hochwertigen Energielösungen, die für Ihre Bedürfnisse entwickelt wurden.",
      detailsButton: "Details anzeigen",
      inquiryButton: "Eine Anfrage stellen",
      backButton: "Zurück zu Lösungen",
      galleryTitle: "Galerie",
      ctaTitle: "Interessiert an dieser Lösung?",
      ctaText: "Kontaktieren Sie uns für weitere Informationen oder um Ihre spezifischen Anforderungen zu besprechen.",
    },
    installations: {
      title: "Fotogalerie der Installationen",
      description: "Sehen Sie sich unsere abgeschlossenen Projekte und Installationen an",
    },
    partners: {
      title: "Wir kooperieren",
      description: "Unsere vertrauenswürdigen Partner und Mitarbeiter",
    },
    contacts: {
      title: "Kontaktieren Sie uns",
      description: "Nehmen Sie Kontakt mit unserem Team auf für Fragen oder Anfragen.",
      infoTitle: "Kontaktinformationen",
      infoDescription: "Zögern Sie nicht, uns über eine der folgenden Methoden zu kontaktieren.",
      addressTitle: "Adresse",
      phoneTitle: "Telefon",
      emailTitle: "E-Mail",
      mapPlaceholder: "Hier wird eine Karte angezeigt",
      formTitle: "Eine Anfrage senden",
      formDescription: "Füllen Sie das untenstehende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.",
      nameLabel: "Ihr Name",
      emailLabel: "E-Mail-Adresse",
      subjectLabel: "Betreff",
      messageLabel: "Nachricht",
      submitButton: "Nachricht senden",
      successMessage: "Ihre Nachricht wurde erfolgreich gesendet!",
    },
    articles: {
      title: "Artikel",
      readMore: "Weiterlesen",
    },
    navigation: {
      introduction: "Einführung",
      products: "Produkte",
      contacts: "Kontakte",
      articles: "Artikel",
    },
  }
}

// Function to get the dictionary with error handling
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const defaultLocale = "en"
  const validLocale = ["en", "cs", "de"].includes(locale) ? locale as "en" | "cs" | "de" : defaultLocale
  
  const dictionary = dictionaries[validLocale]
  
  if (!dictionary) {
    throw new Error(`Dictionary for locale ${locale} not found`)
  }
  
  return dictionary
}