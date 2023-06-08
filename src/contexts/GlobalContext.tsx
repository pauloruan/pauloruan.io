import * as React from "react"

interface GlobalContextProps {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
  posts: [],
  setPosts: () => {},
  searchValue: "",
  setSearchValue: () => {}
}

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalProvider({ children }: GlobalProviderProps): JSX.Element {
  const [posts, setPosts] = React.useState<Post[]>([])
  const [searchValue, setSearchValue] = React.useState("")

  const memoizedValue = React.useMemo(
    () => ({
      posts,
      setPosts,
      searchValue,
      setSearchValue
    }),
    [posts, searchValue]
  )

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  )
}
