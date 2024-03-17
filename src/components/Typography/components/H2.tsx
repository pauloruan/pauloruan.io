import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

interface H2Props extends HTMLProps<HTMLHeadingElement> {}

export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2
      {...props}
      className={cn(
        "max-w-max max-h-max font-sans text-2xl font-extrabold text-sky-600 dark:text-sky-400 leading-relaxed tracking-wide",
        className
      )}
    >
      {children}
    </h2>
  )
}
