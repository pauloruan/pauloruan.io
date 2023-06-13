import { TechCard } from "@components/TechCard"
import { technologies } from "@utils/technologies"

export function FrequentTechnologies() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-2 py-2 space-y-4">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white font-sans my-1 py-1">
        Tecnologias que uso com frequência
      </h3>
      <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-6">
        {technologies.map(({ icon, url }: Technology) => (
          <TechCard key={url} url={url}>
            {icon}
          </TechCard>
        ))}
      </div>
    </div>
  )
}
