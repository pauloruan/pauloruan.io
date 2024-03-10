import { Badge } from "@/components/ui/badge"
import { technologies } from "@/utils/technologies"

export function FrequentTechnologies() {
  const orderedTechnologies = technologies
    .slice()
    .filter(({ frequentlyUsed }) => frequentlyUsed)
    .sort((a, b) => a.order - b.order)

  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2">
      <h3 className="text-lg md:text-xl max-w-max max-h-max my-1 py-1 font-sans font-semibold text-black dark:text-white">
        Tecnologias utilizadas frequentemente
      </h3>
      <div className="w-full h-full max-w-xl flex flex-row flex-wrap justify-start items-center gap-2">
        {orderedTechnologies.map(({ slug, name }: ITechnology) => (
          <Badge
            key={slug}
            variant="secondary"
            className="text-xs font-normal tracking-wide rounded-sm gap-2 shadow-sm"
          >
            {name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
