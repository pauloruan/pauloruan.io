import Head from "next/head"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { ProjectsContent } from "@components/ProjectsContent"
import { SectionContainer } from "@components/SectionContainer"

export default function Projects(): JSX.Element {
  return (
    <div className="bg-gray-100 dark:bg-black flex min-h-screen flex-col items-center justify-between py-2 px-8 md:py-4 md:px-16">
      <Head>
        <html lang="pt-br" />
        <title>pauloruan.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SectionContainer title="Projetos">
        <ProjectsContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
