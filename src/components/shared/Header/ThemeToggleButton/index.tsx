"use client"

import { Button } from "@/components/ui/button"
import { useThemeToggle } from "@/hooks/useThemeToggle"
import { RxMoon, RxSun } from "react-icons/rx"

export function ThemeToggleButton(): JSX.Element {
  const { currentTheme, toggleTheme } = useThemeToggle()
  const Icon = currentTheme === "dark" ? RxSun : RxMoon

  return (
    <Button
      size="icon"
      variant="outline"
      type="button"
      onClick={toggleTheme}
      title="Alterar tema"
      aria-label="Alterar tema"
      className="flex items-center justify-center w-8 h-8 md:w-11 md:h-11"
    >
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
    </Button>
  )
}
