import { AboutContent } from "@/components/AboutContent"
import { Animation } from "@/components/shared/Animation"
import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { sanityQueries } from "@/utils/sanityQueries"
import { client } from "@lib/sanity.client"
import { NextSeo } from "next-seo"

export async function getStaticProps(): Promise<SobreGetStaticProps> {
  const [about] = await client.fetch(sanityQueries.about)

  return { props: { about } }
}

export default function Sobre({ about }: SobreProps): JSX.Element {
  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
      <NextSeo
        title="Sobre | Paulo Ruan"
        description="Desenvolvedor Web Full Stack, apaixonado por tecnologia e programação."
        canonical="https://pauloruan.vercel.app/sobre"
        openGraph={{
          url: "https://pauloruan.vercel.app/sobre",
          title: "Sobre | Paulo Ruan",
          images: [
            {
              url: `https://pauloruan.vercel.app/api/og?path=/sobre&title=${encodeURIComponent(
                "Sobre | Paulo Ruan"
              )}`
            }
          ]
        }}
      />
      <Animation>
        <Header />
        <SectionContainer title="Sobre Mim" subtitle="Oi, eu sou o Paulo Ruan!">
          <AboutContent {...about} />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
