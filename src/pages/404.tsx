import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { NotFoundContent } from "@components/NotFoundContent"
import { SectionContainer } from "@components/SectionContainer"
import { NextSeo } from "next-seo"

export default function NotFound(): JSX.Element {
  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
      <NextSeo
        title="Página não encontrada | Paulo Ruan"
        description="Desenvolvedor Web Full Stack, apaixonado por tecnologia e programação."
        canonical="https://pauloruan.vercel.app"
        openGraph={{
          url: "https://pauloruan.vercel.app",
          title: "Página não encontrada | Paulo Ruan"
        }}
      />
      <Animation>
        <Header />
        <SectionContainer title="Página não encontrada">
          <NotFoundContent />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
