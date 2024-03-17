import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

interface H3Props extends HTMLProps<HTMLHeadingElement> {}

export function H3({ children, className, ...props }: H3Props) {
  return (
    <h3
      {...props}
      className={cn(
        "max-w-max max-h-max font-sans text-xl font-bold text-sky-600 dark:text-sky-400 leading-relaxed tracking-wide",
        className
      )}
    >
      {children}
    </h3>
  )
}
