import { sanityComponents } from "@/components/PortableText"
import { Typography } from "@/components/Typography"
import { GlobalContext } from "@/contexts/GlobalContext"
import { PortableText } from "@portabletext/react"
import { useContext } from "react"

export function Work() {
  const { about } = useContext(GlobalContext)

  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2">
      <Typography.H3>Trabalho</Typography.H3>
      <PortableText value={about.work} components={sanityComponents} />
    </div>
  )
}
