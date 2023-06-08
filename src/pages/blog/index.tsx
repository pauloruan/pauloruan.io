import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { SectionContainer } from "@components/SectionContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import { client } from "@lib/sanity.client"
import { sanityQueries } from "@utils/sanityQueries"
import * as React from "react"
import { BlogContent } from "@components/BlogContent"

export async function getStaticProps(): Promise<BlogGetStaticProps> {
  const posts = await client.fetch(sanityQueries.posts)

  return {
    props: { posts }
  }
}

export default function Blog({ posts }: BlogProps): JSX.Element {
  const { setPosts } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setPosts(posts)
  })

  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
      <Animation>
        <Header />
        <SectionContainer
          title="Blog"
          subtitle="Aqui eu compartilho artigos sobre tecnologia e desenvolvimento."
        >
          <BlogContent />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
