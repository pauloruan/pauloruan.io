import { technologies } from "@/utils/technologies"
import { LinkCard } from "../LinkCard"

export function FrequentTechnologies() {
  const orderedTechnologies = technologies
    .slice()
    .filter(({ frequentlyUsed }) => frequentlyUsed)
    .sort((a, b) => a.order - b.order)

  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-1 space-y-1">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white font-sans my-1 py-1">
        Tecnologias que uso com frequência
      </h3>
      <div className="w-full h-full flex flex-row flex-wrap justify-start items-center gap-1">
        {orderedTechnologies.map((tech: ITechnology) => (
          <LinkCard key={tech.slug} linkData={tech} />
        ))}
      </div>
    </div>
  )
}
