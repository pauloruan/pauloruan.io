import { FrequentTechnologies } from "@components/FrequentTechnologies"
import { Medias } from "@components/Medias"
import { components } from "@components/PortableText"
import { PortableText } from "@portabletext/react"

export function AboutContent({ content, contact }: About): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start my-4 gap-5">
      <PortableText
        aria-label="Sobre mim"
        value={content}
        components={components}
      />
      <FrequentTechnologies />
      <div className="w-full h-full flex flex-col items-start justify-start">
        <h3 className="text-2xl font-bold text-black dark:text-white font-sans my-2 py-1">
          Contato
        </h3>
        <PortableText
          aria-label="Contato"
          value={contact}
          components={components}
        />
        <Medias />
      </div>
    </div>
  )
}
