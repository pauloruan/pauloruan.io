import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

interface H4Props extends HTMLProps<HTMLHeadingElement> {}

export function H4({ children, className, ...props }: H4Props) {
  return (
    <h4
      {...props}
      className={cn(
        "max-w-max max-h-max font-sans text-lg font-semibold text-sky-600 dark:text-sky-400 leading-relaxed tracking-wide",
        className
      )}
    >
      {children}
    </h4>
  )
}
