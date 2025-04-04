import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Welcome to our website
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              This is a demo website with a multilingual header. The header includes a logo, navigation menu, and
              language switcher.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

