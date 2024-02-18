import * as React from "react"

interface GlobalContextProps {
  posts: INotionPost[]
  setPosts: React.Dispatch<React.SetStateAction<INotionPost[]>>
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
  const [posts, setPosts] = React.useState<INotionPost[]>([])

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
