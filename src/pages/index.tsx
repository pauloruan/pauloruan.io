import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { HomeContent } from "@components/HomeContent"
import { SectionContainer } from "@components/SectionContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import { client } from "@lib/sanity.client"
import type { HomeGetStaticProps, HomeProps } from "@types"
import { sanityQueries } from "@utils/sanityQueries"
import * as React from "react"

export async function getStaticProps(): Promise<HomeGetStaticProps> {
  const projects = await client.fetch(sanityQueries.projects)
  const posts = await client.fetch(sanityQueries.posts)

  return {
    props: {
      projects,
      posts
    }
  }
}

export default function Home(props: HomeProps): JSX.Element {
  const { setProjects, setPosts } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setProjects(props.projects)
    setPosts(props.posts)
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
