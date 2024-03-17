import { HomeContent } from "@/components/home/HomeContent"
import { Animation } from "@/components/shared/Animation"
import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { GlobalContext } from "@/contexts/GlobalContext"
import { client } from "@/lib/sanity.client"
import { sanityQueries } from "@/lib/sanity.queries"
import { NextSeo } from "next-seo"
import { useContext, useEffect } from "react"

interface BlogProps {
  posts: IPost[]
  about: IAbout
  experiencies: IExperience[]
}

interface BlogGetStaticProps {
  props: BlogProps
}

export async function getStaticProps(): Promise<BlogGetStaticProps> {
  const posts = await client.fetch(sanityQueries.posts)
  const [about] = await client.fetch(sanityQueries.about)
  const experiencies = await client.fetch(sanityQueries.experiencies)

  return { props: { posts, about, experiencies } }
}

export default function Home(props: BlogProps): JSX.Element {
  const { posts, about, experiencies } = props
  const { setPosts, setAbout, setExperiencies } = useContext(GlobalContext)
  console.log("about: ", about)
  // console.log("posts: ", posts)
  console.log("experiencies: ", experiencies)

  useEffect(() => {
    setPosts(posts)
    setAbout(about)
    setExperiencies(experiencies)
  })

  return (
    <main className="min-h-screen w-full bg-background dark:bg-background">
      <NextSeo
        title="Paulo Ruan"
        description="Desenvolvedor Web Full Stack, apaixonado por tecnologia e programação."
        canonical="https://pauloruan.vercel.app"
        openGraph={{
          url: "https://pauloruan.vercel.app",
          title: "Paulo Ruan"
        }}
      />
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
