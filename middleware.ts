import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// List of supported locales
const locales = ["en", "cs", "de"]

// Language-specific path mappings
const pathMappings: Record<string, Record<string, string>> = {
  cs: {
    uvod: "introduction",
    produkty: "products",
    kontakty: "contacts",
    clanky: "articles",
  },
  de: {
    einfuhrung: "introduction",
    produkte: "products",
    kontakte: "contacts",
    artikel: "articles",
  },
}

// Reverse mappings for URL rewriting
const reversePathMappings: Record<string, Record<string, string>> = {
  cs: Object.fromEntries(Object.entries(pathMappings.cs).map(([k, v]) => [v, k])),
  de: Object.fromEntries(Object.entries(pathMappings.de).map(([k, v]) => [v, k])),
}

// Get the preferred locale from request headers
function getLocale(request: NextRequest) {
  // Check if there's a cookie with a preferred locale
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Otherwise, use the Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    // Parse the Accept-Language header and find the best match
    const parsedLocales = acceptLanguage
      .split(",")
      .map((l) => {
        const [locale, priority] = l.split(";q=")
        return { locale: locale.trim().split("-")[0], priority: priority ? Number(priority) : 1 }
      })
      .sort((a, b) => b.priority - a.priority)

    // Find the first supported locale
    const matchedLocale = parsedLocales.find((l) => locales.includes(l.locale))
    if (matchedLocale) return matchedLocale.locale
  }

  // Default to Czech
  return "cs"
}

// Check if a path should be handled by the middleware
function shouldHandlePath(pathname: string) {
  // Skip all internal paths (_next, api, _vercel, static files)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_vercel") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|js|css|txt)$/)
  ) {
    return false
  }

  return true
}

// Handle language-specific paths
function handleLanguageSpecificPaths(pathname: string, locale: string) {
  if (!pathMappings[locale]) return pathname

  // Split the pathname into segments
  const segments = pathname.split("/")

  // Check if the first segment after the locale is a mapped path
  if (segments.length > 2) {
    const pathSegment = segments[2]
    const mappedSegment = pathMappings[locale][pathSegment]

    if (mappedSegment) {
      segments[2] = mappedSegment
      return segments.join("/")
    }
  }

  return pathname
}

// Localize paths for display (e.g., /en/introduction -> /cs/uvod)
function localizePathForDisplay(pathname: string, locale: string) {
  if (!reversePathMappings[locale]) return pathname

  // Split the pathname into segments
  const segments = pathname.split("/")

  // Check if the first segment after the locale is a path that needs localization
  if (segments.length > 2) {
    const pathSegment = segments[2]
    const localizedSegment = reversePathMappings[locale][pathSegment]

    if (localizedSegment) {
      segments[2] = localizedSegment
      return segments.join("/")
    }
  }

  return pathname
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip paths that shouldn't be handled
  if (!shouldHandlePath(pathname)) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // Get the locale from the request
  const locale = getLocale(request)

  // If the pathname doesn't have a locale, redirect to the locale-prefixed path
  if (!pathnameHasLocale) {
    // Handle root path
    if (pathname === "/") {
      request.nextUrl.pathname = `/${locale}`
      return NextResponse.redirect(request.nextUrl)
    }

    // Handle other paths
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  // Handle language-specific paths (e.g., /cs/uvod -> /cs/introduction)
  const currentLocale = pathname.split("/")[1]
  const mappedPathname = handleLanguageSpecificPaths(pathname, currentLocale)

  if (mappedPathname !== pathname) {
    request.nextUrl.pathname = mappedPathname
    return NextResponse.rewrite(request.nextUrl)
  }

  // For anchor links to sections on the main page
  if (pathname.match(/^\/(en|cs|de)\/?(introduction|products|contacts)?$/)) {
    // If it's a request to a section that's on the main page, rewrite to the main page
    const locale = pathname.split("/")[1]
    request.nextUrl.pathname = `/${locale}`
    return NextResponse.rewrite(request.nextUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

