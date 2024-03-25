"use client"

import { ThemeProvider as Provider } from "next-themes"
import { useEffect, useState } from "react"

interface IThemeProviderProps extends IRootLayoutProps {}

function ThemeProvider({ children }: IThemeProviderProps): JSX.Element {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div>{children}</div>
  }

  return (
    <Provider enableSystem={true} attribute="class">
      {children}
    </Provider>
  )
}

export default ThemeProvider
