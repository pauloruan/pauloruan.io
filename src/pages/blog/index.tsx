import { Animation } from "@components/Animation"
import { BlogContent } from "@components/BlogContent"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { SectionContainer } from "@components/SectionContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import { client } from "@lib/sanity.client"
import { sanityQueries } from "@utils/sanityQueries"
import { NextSeo } from "next-seo"
import * as React from "react"

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
      <NextSeo
        title="Blog | Paulo Ruan"
        description="Desenvolvedor Web Full Stack, apaixonado por tecnologia e programação."
        canonical="https://pauloruan.vercel.app/blog"
        openGraph={{
          url: "https://pauloruan.vercel.app/blog",
          title: "Blog | Paulo Ruan",
          images: [
            {
              url: `https://pauloruan.vercel.app/api/og?path=/blog&title=${encodeURIComponent(
                "Blog | Paulo Ruan"
              )}`
            }
          ]
        }}
      />
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
