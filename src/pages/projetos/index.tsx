import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { ProjectsContent } from "@components/ProjectsContent"
import { SectionContainer } from "@components/SectionContainer"
import { GlobalContext } from "@contexts/GlobalContext"
import { client } from "@lib/sanity.client"
import { ProjectProps, ProjectsGSP } from "@types"
import { sanityQueries } from "@utils/sanityQueries"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"
import * as React from "react"

export async function getStaticProps(): Promise<ProjectsGSP> {
  const projects = await client.fetch(sanityQueries.projects)

  return {
    props: {
      projects
    }
  }
}

export default function Projetos(props: ProjectProps): JSX.Element {
  const { setProjects } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setProjects(props.projects)
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
        title="Projetos - Paulo Ruan"
        description="Portfólio de Paulo Ruan, desenvolvedor web e estudante de Engenharia de Software."
        canonical="https://pauloruan.vercel.app/projetos"
        openGraph={{
          url: "https://pauloruan.vercel.app/projetos",
          title: "Projetos - Paulo Ruan",
          description:
            "Portfólio de Paulo Ruan, desenvolvedor web e estudante de Engenharia de Software.",
          images: [
            {
              url: "https://pauloruan.vercel.app/og-image.png",
              width: 1200,
              height: 628,
              alt: "Projetos - Paulo Ruan"
            }
          ],
          site_name: "Projetos - Paulo Ruan"
        }}
      />
      <Header />
      <SectionContainer title="Projetos">
        <ProjectsContent />
      </SectionContainer>
      <Footer />
    </motion.div>
  )
}
