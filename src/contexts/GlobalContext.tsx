import type { FormattedPost, Project } from "@types"
import * as React from "react"

interface GlobalContextProps {
  posts: FormattedPost[]
  setPosts: React.Dispatch<React.SetStateAction<FormattedPost[]>>
  projects: Project[]
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
  posts: [],
  setPosts: () => {},
  projects: [],
  setProjects: () => {},
  searchValue: "",
  setSearchValue: () => {}
}

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [posts, setPosts] = React.useState<FormattedPost[]>([])
  const [projects, setProjects] = React.useState<Project[]>([])
  const [searchValue, setSearchValue] = React.useState("")

  const memoizedValue = React.useMemo(
    () => ({
      posts,
      setPosts,
      projects,
      setProjects,
      searchValue,
      setSearchValue
    }),
    [posts, projects, searchValue]
  )

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  )
}
