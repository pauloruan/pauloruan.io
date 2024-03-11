import { BlogContent } from "@/components/BlogContent"
import { Animation } from "@/components/shared/Animation"
import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { GlobalContext } from "@/contexts/GlobalContext"
import { NextSeo } from "next-seo"
import { useContext, useEffect } from "react"
import { getPosts } from "../_services/notion"

interface BlogProps {
  posts: INotionPost[]
}

interface BlogGetStaticProps {
  props: BlogProps // Ajuste para usar BlogProps
}

export async function getStaticProps(): Promise<BlogGetStaticProps> {
  const posts = await getPosts()

  return {
    props: { posts }
  }
}

export default function Blog({ posts }: BlogProps): JSX.Element {
  const { setPosts } = useContext(GlobalContext)

  useEffect(() => {
    setPosts(posts)
  })

  return (
    <main className="min-h-screen w-full bg-theme-light dark:bg-theme-dark">
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
        <SectionContainer title="Blog">
          <BlogContent />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
