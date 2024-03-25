"use client"

import { sanityComponents } from "@/components/PortableText"
import { Typography } from "@/components/Typography"
import { Experience } from "@/components/content/Experience"
import { Contact } from "@/components/shared/Contact"
import { Work } from "@/components/shared/Work"
import { getSanityAbout, getSanityExperiences } from "@/lib/sanity.queries"
import { PortableText } from "@portabletext/react"
import { useQuery } from "@tanstack/react-query"

interface AboutContentProps {
  about: IAbout
  experiences: IExperience[]
}

async function getContent(): Promise<AboutContentProps> {
  const [about, experiences] = await Promise.all([
    getSanityAbout(),
    getSanityExperiences()
  ])

  return { about, experiences }
}

export function AboutContent({ about, experiences }: AboutContentProps) {
  console.log("about", about)
  console.log("experiences", experiences)

  const { data } = useQuery({
    queryKey: ["about", "experiences"],
    queryFn: getContent,
    initialData: { about, experiences }
  })

  return (
    <div className="w-full h-full flex flex-col items-start justify-start space-y-4">
      <div className="w-full h-full px-2 font-sans">
        <Typography.H1 className="mb-4">Sobre Mim</Typography.H1>
        <PortableText
          value={data.about.content}
          components={sanityComponents}
        />
      </div>
      <Work work={data.about.work} />
      <Experience experiences={data.experiences} />
      <Contact contact={data.about.contact} />
    </div>
  )
}
