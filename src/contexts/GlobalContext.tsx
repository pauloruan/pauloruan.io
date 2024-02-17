import * as React from "react"

interface GlobalContextProps {
  posts: NotionGSP[]
  setPosts: React.Dispatch<React.SetStateAction<NotionGSP[]>>
}

const DEFAULT_VALUE = {
  posts: [],
  setPosts: () => {}
}

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalProvider({
  children
}: IGlobalProviderProps): JSX.Element {
  const [posts, setPosts] = React.useState<NotionGSP[]>([])

  const memoizedValue = React.useMemo(
    () => ({
      posts,
      setPosts
    }),
    [posts]
  )

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  )
}
