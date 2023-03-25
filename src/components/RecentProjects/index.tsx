import { ProjectCard } from "@components/ProjectCard"
import { GlobalContext } from "@contexts/GlobalContext"
import * as React from "react"

export function RecentProjects(): JSX.Element {
  const { projects } = React.useContext(GlobalContext)

  return (
    <div className="w-full flex flex-col flex-wrap my-4">
      <div className="w-full flex my-4 flex-col lg:flex-row items-start lg:items-center lg:justify-between border-b border-b-cod-gray-200 dark:border-b-cod-gray-800">
        <h2 className="max-w-max h-full font-sans text-2xl font-bold text-left py-1 my-1 text-cod-gray-900 dark:text-cod-gray-50">
          Últimos projetos que construí
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 gap-10 my-2 py-2">
        {projects
          .filter((_, index) => index < 2)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </div>
  )
}
