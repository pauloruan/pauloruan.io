import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

interface H1Props extends HTMLProps<HTMLHeadingElement> {}

export function H1({ children, className, ...props }: H1Props) {
  return (
    <h1
      {...props}
      className={cn(
        "max-w-max max-h-max font-sans text-4xl font-black tracking-wide bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </h1>
  )
}
