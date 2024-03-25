import { sanityComponents } from "@/components/PortableText"
import { Typography } from "@/components/Typography"
import { SocialMediaList } from "@/components/shared/SocialMediaList"
import { socialMedias } from "@/utils/socialMedias"
import { PortableText } from "@portabletext/react"
import Link from "next/link"

interface ContactProps {
  contact: IBodyContent[]
}

export function Contact({ contact }: ContactProps) {
  const [{ url, label }] = socialMedias
    .slice()
    .filter(({ name }: ISocialMedia) => name === "Email")

  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2 font-sans">
      <Typography.H3>Contato</Typography.H3>
      <PortableText value={contact} components={sanityComponents} />
      <Link
        href={url}
        target="_blank"
        className="max-w-max py-2 font-medium text-base leading-relaxed tracking-wide underline"
      >
        {label}
      </Link>
      <Typography.P>
        Você pode me encontrar em qualquer uma das redes sociais abaixo
      </Typography.P>
      <SocialMediaList />
    </div>
  )
}
