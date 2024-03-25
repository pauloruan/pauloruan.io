import { sanityComponents } from "@/components/PortableText"
import { Typography } from "@/components/Typography"
import { PortableText } from "@portabletext/react"

interface WorkProps {
  work: IBodyContent[]
}

export function Work({ work }: WorkProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2 font-sans">
      <Typography.H3>Trabalho</Typography.H3>
      <PortableText value={work} components={sanityComponents} />
    </div>
  )
}
