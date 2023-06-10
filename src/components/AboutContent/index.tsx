import { components } from "@components/PortableText"
import { SocialLink } from "@components/SocialLink"
import { PortableText } from "@portabletext/react"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export function AboutContent({ content, contact }: About): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start my-4 gap-5">
      <PortableText
        aria-label="Sobre mim"
        value={content}
        listNestingMode="html"
        components={components}
      />
      <div className="w-full h-full flex flex-col items-start justify-start">
        <h3 className="text-2xl font-bold text-black dark:text-white font-sans my-2 py-1">
          Contato
        </h3>
        <PortableText
          aria-label="Contato"
          value={contact}
          listNestingMode="html"
          components={components}
        />
        <div className="flex flex-row justify-between items-center my-4 w-48">
          <SocialLink
            label="Email"
            target="_blank"
            href="mailto:ruanpr182@gmail.com?subject=Olá, PR!"
            icon={<MdEmail className="h-4 w-4" />}
          />
          <SocialLink
            label="LinkedIn"
            target="_blank"
            href="https://linkedin.com/in/pauloruan/"
            icon={<FaLinkedin className="h-4 w-4" />}
          />
        </div>
      </div>
    </div>
  )
}
