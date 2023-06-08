import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { HomeContent } from "@components/HomeContent"
import { SectionContainer } from "@components/SectionContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import { client } from "@lib/sanity.client"
import { sanityQueries } from "@utils/sanityQueries"
import { useContext, useEffect } from "react"

export async function getStaticProps(): Promise<HomeGetStaticProps> {
  const posts = await client.fetch(sanityQueries.posts)

  return {
    props: { posts }
  }
}

export default function Home({ posts }: HomeProps): JSX.Element {
  const { setPosts } = useContext(GlobalContext)

  useEffect(() => {
    setPosts(posts)
  })

  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
      <Animation>
        <Header />
        <SectionContainer>
          <HomeContent />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
