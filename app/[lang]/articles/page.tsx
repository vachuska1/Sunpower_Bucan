import { getDictionary } from "../dictionaries"

export default async function ArticlesPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as "en" | "cs" | "de")

  // Sample articles - in a real app, these would come from a database or API
  const articles = [
    {
      id: 1,
      title: {
        en: "First Article Title",
        cs: "Název prvního článku",
        de: "Erster Artikeltitel",
      },
      excerpt: {
        en: "This is a short excerpt from the first article.",
        cs: "Toto je krátký úryvek z prvního článku.",
        de: "Dies ist ein kurzer Auszug aus dem ersten Artikel.",
      },
      date: "2023-04-15",
    },
    {
      id: 2,
      title: {
        en: "Second Article Title",
        cs: "Název druhého článku",
        de: "Zweiter Artikeltitel",
      },
      excerpt: {
        en: "This is a short excerpt from the second article.",
        cs: "Toto je krátký úryvek z druhého článku.",
        de: "Dies ist ein kurzer Auszug aus dem zweiten Artikel.",
      },
      date: "2023-05-20",
    },
    {
      id: 3,
      title: {
        en: "Third Article Title",
        cs: "Název třetího článku",
        de: "Dritter Artikeltitel",
      },
      excerpt: {
        en: "This is a short excerpt from the third article.",
        cs: "Toto je krátký úryvek z třetího článku.",
        de: "Dies ist ein kurzer Auszug aus dem dritten Artikel.",
      },
      date: "2023-06-10",
    },
  ]

  return (
    <main className="container py-16" id="articles">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">{dict.articles.title}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div key={article.id} className="border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-semibold mb-2">
              {article.title[lang as keyof typeof article.title] || article.title.en}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {new Date(article.date).toLocaleDateString(lang === "en" ? "en-US" : lang === "cs" ? "cs-CZ" : "de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mb-4">{article.excerpt[lang as keyof typeof article.excerpt] || article.excerpt.en}</p>
            <a href={`/${lang}/articles/${article.id}`} className="text-primary hover:underline">
              {dict.articles.readMore} →
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

