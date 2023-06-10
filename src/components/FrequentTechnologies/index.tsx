import { TechCard } from "@components/TechCard"
import { FaJava } from "react-icons/fa"
import { SiAngular, SiDocker, SiPostgresql, SiSpring } from "react-icons/si"

export function FrequentTechnologies(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-2 py-2 space-y-4">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white font-sans my-1 py-1">
        Tecnologias que uso com frequência
      </h3>
      <div className="w-full h-full grid grid-cols-5 md:grid-cols-5 gap-2">
        <TechCard url="https://www.java.com/pt-BR">
          <FaJava className="h-5 w-5 text-black dark:text-white text-sm font-medium" />
        </TechCard>
        <TechCard url="https://spring.io/projects/spring-boot">
          <SiSpring className="h-5 w-5 text-black dark:text-white text-sm font-medium" />
        </TechCard>
        <TechCard url="https://angular.io">
          <SiAngular className="h-5 w-5 text-black dark:text-white text-sm font-medium" />
        </TechCard>
        <TechCard url="https://www.postgresql.org">
          <SiPostgresql className="h-5 w-5 text-black dark:text-white text-sm font-medium" />
        </TechCard>
        <TechCard url="https://www.docker.com">
          <SiDocker className="h-5 w-5 text-black dark:text-white text-sm font-medium" />
        </TechCard>
      </div>
    </div>
  )
}
