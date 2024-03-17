import { AboutContent } from "@/components/AboutContent"
import { Animation } from "@/components/shared/Animation"
import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { client } from "@/lib/sanity.client"
import { sanityQueries } from "@/lib/sanity.queries"
import { NextSeo } from "next-seo"

export async function getStaticProps(): Promise<ISobreGetStaticProps> {
  const [about] = await client.fetch(sanityQueries.about)

  return { props: { about } }
}

export default function Sobre({ about }: ISobreProps): JSX.Element {
  return (
    <main className="min-h-screen w-full bg-theme-light dark:bg-theme-dark">
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
        <SectionContainer>
          <AboutContent {...about} />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
