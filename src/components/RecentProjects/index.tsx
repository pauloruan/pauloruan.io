import { RecentCard } from "@components/RecentCard"
import { GlobalContext } from "@contexts/GlobalContext"
import * as React from "react"

export function RecentProjects(): JSX.Element {
  const { projects } = React.useContext(GlobalContext)

  return (
    <div className="w-full flex flex-col flex-wrap my-2 lg:my-4">
      <div className="w-full flex my-1 flex-col items-start">
        <h2 className="max-w-max h-full font-sans text-lg font-bold text-left text-cod-gray-900 dark:text-cod-gray-50">
          Projetos
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 my-1">
        {projects
          .filter((project, index) => project.published && index < 3)
          .map((project) => (
            <RecentCard
              key={project.title}
              href={`/projetos/${project.slug}`}
              {...project}
            />
          ))}
      </div>
    </div>
  )
}
