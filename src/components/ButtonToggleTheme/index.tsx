import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ButtonToggleTheme(): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("")
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme)
  }, [systemTheme, theme])

  function handleTheme(): void {
    if (currentTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button
      type="button"
      onClick={handleTheme}
      title="Alterar tema"
      aria-label="Alterar tema"
      className="flex items-center justify-center w-8 h-8 md:w-11 md:h-11"
    >
      {currentTheme === "dark" ? (
        <MoonIcon className="w-4 h-4 md:w-5 md:h-5" />
      ) : (
        <SunIcon className="w-4 h-4 md:w-5 md:h-5" />
      )}
    </button>
  )
}
