import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

interface PProps extends HTMLProps<HTMLParagraphElement> {}

export function P({ children, className, ...props }: PProps) {
  return (
    <p
      {...props}
      className={cn(
        "max-w-max max-h-max font-sans text-base font-normal text-black dark:text-white",
        className
      )}
    >
      {children}
    </p>
  )
}
