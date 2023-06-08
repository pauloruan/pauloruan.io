import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { SectionContainer } from "@components/SectionContainer"
import { client } from "@lib/sanity.client"
import { sanityQueries } from "@utils/sanityQueries"
import { AboutContent } from "@components/AboutContent"

export async function getStaticProps(): Promise<SobreGetStaticProps> {
  const [about] = await client.fetch(sanityQueries.about)

  return {
    props: { about }
  }
}

export default function Sobre({ about }: SobreProps): JSX.Element {
  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
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
