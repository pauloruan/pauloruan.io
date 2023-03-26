import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { HomeContent } from "@components/HomeContent"
import { SectionContainer } from "@components/SectionContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import { client } from "@lib/sanity.client"
import type { HomeGetStaticProps, HomeProps } from "@types"
import { sanityQueries } from "@utils/sanityQueries"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"
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
    <motion.div
      className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0,
        ease: "easeInOut"
      }}
    >
      <NextSeo
        title="Paulo Ruan - Desenvolvedor Web"
        description="Portfólio de Paulo Ruan, desenvolvedor web e estudante de Engenharia de Software."
        canonical="https://pauloruan.vercel.app"
        openGraph={{
          url: "https://pauloruan.vercel.app",
          title: "Paulo Ruan - Desenvolvedor Web",
          description:
            "Portfólio de Paulo Ruan, desenvolvedor web e estudante de Engenharia de Software.",
          images: [
            {
              url: "https://pauloruan.vercel.app/og-image.png",
              width: 1200,
              height: 630,
              alt: "Paulo Ruan - Desenvolvedor Web"
            }
          ],
          site_name: "Paulo Ruan - Desenvolvedor Web"
        }}
      />
      <Header />
      <SectionContainer>
        <HomeContent />
      </SectionContainer>
      <Footer />
    </motion.div>
  )
}
