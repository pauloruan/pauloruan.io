"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("")

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme)
  }, [systemTheme, theme])

  function toggleTheme(): void {
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  return { currentTheme, toggleTheme }
}
