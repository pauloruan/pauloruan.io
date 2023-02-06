import { AboutContent } from "@components/AboutContent"
import { Footer } from "@components/Footer"
import { HeadDefault } from "@components/HeadDefault"
import { Header } from "@components/Header"
import { SectionContainer } from "@components/SectionContainer"

export default function About(): JSX.Element {
  return (
    <div className="bg-gray-100 dark:bg-black flex min-h-screen flex-col items-center justify-between py-2 px-8 md:py-4 md:px-16">
      <HeadDefault />
      <Header />
      <SectionContainer title="Sobre Mim">
        <AboutContent />
      </SectionContainer>
      <Footer />
    </div>
  )
}
