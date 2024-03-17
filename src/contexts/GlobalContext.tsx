import * as React from "react"

interface GlobalContextProps {
  posts: IPost[]
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
  about: IAbout
  setAbout: React.Dispatch<React.SetStateAction<IAbout>>
  experiencies: IExperience[]
  setExperiencies: React.Dispatch<React.SetStateAction<IExperience[]>>
}

const DEFAULT_VALUE = {
  posts: [] as IPost[],
  setPosts: () => {},
  about: {} as IAbout,
  setAbout: () => {},
  experiencies: [] as IExperience[],
  setExperiencies: () => {}
}

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalProvider({ children }: IGlobalProviderProps) {
  const [posts, setPosts] = React.useState<IPost[]>([])
  const [about, setAbout] = React.useState<IAbout>({} as IAbout)
  const [experiencies, setExperiencies] = React.useState<IExperience[]>([])

  const memoizedValue = React.useMemo(
    () => ({
      posts,
      setPosts,
      about,
      setAbout,
      experiencies,
      setExperiencies
    }),
    [posts, about, experiencies]
  )

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  )
}
