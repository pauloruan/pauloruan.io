import { sanityComponents } from "@/components/PortableText"
import { Typography } from "@/components/Typography"
import { GlobalContext } from "@/contexts/GlobalContext"
import { PortableText } from "@portabletext/react"
import Link from "next/link"
import { useContext } from "react"

export function Experience() {
  const { experiencies } = useContext(GlobalContext)
  console.log(experiencies)
  const orderedExperiencies = experiencies
    .slice()
    .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())

  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2">
      <Typography.H3>Experiencia</Typography.H3>

      <div className="w-full h-full flex flex-col justify-center items-start space-y-2 gap-4">
        {orderedExperiencies.map((experience) => (
          <div
            key={experience.company}
            className="flex flex-col justify-center items-start space-y-2"
          >
            <Typography.P className="w-full flex flex-col items-start justify-center max-w-max max-h-max space-y-1 font-sans">
              <Link
                href={experience.linkedInURL}
                passHref
                target="_blank"
                className="text-md md:text-lg font-medium md:font-semibold text-black dark:text-white leading-relaxed tracking-wide underline"
              >
                {experience.company}
              </Link>
              <span className="text-xs md:text-sm font-normal text-black/70 dark:text-white/80">
                {experience.position},&nbsp;
                {new Date(experience.start).getFullYear()} —&nbsp;
                {experience.current
                  ? "Atualmente"
                  : new Date(experience.end || "").getFullYear()}
              </span>
            </Typography.P>
            <PortableText
              value={experience.description}
              components={sanityComponents}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
