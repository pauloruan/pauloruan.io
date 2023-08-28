import { TechCard } from "@components/TechCard"
import { technologies } from "@utils/technologies"

export function FrequentTechnologies() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-1 space-y-1">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white font-sans my-1 py-1">
        Tecnologias que uso com frequência
      </h3>
      <div className="w-full h-full grid grid-rows-1 grid-cols-10 gap-1">
        {technologies.map(({ url, icon: Icon }: Technology) => (
          <TechCard key={url} url={url}>
            <Icon className="h-8 w-8 text-black dark:text-white text-sm font-medium" />
          </TechCard>
        ))}
      </div>
    </div>
  )
}
