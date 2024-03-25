import { AboutContent } from "@/components/AboutContent"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { getSanityAbout, getSanityExperiences } from "@/lib/sanity.queries"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre"
}

export default async function Sobre() {
  const [about, experiences] = await Promise.all([
    getSanityAbout(),
    getSanityExperiences()
  ])

  return (
    <SectionContainer>
      <AboutContent about={about} experiences={experiences} />
    </SectionContainer>
  )
}
