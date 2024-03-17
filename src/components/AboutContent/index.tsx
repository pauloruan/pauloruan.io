import { sanityComponents } from "@/components/PortableText"
import { Typography } from "@/components/Typography"
import { Experience } from "@/components/content/Experience"
import { Contact } from "@/components/shared/Contact"
import { Work } from "@/components/shared/Work"
import { PortableText } from "@portabletext/react"

export function AboutContent({ content }: IAbout) {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start space-y-4">
      <div className="w-full h-full px-2">
        <Typography.H1 className="mb-4">Sobre Mim</Typography.H1>
        <PortableText value={content} components={sanityComponents} />
      </div>
      <Work />
      <Experience />
      <Contact />
    </div>
  )
}
