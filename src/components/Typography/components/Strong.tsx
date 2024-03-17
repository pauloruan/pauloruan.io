import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

interface StrongProps extends HTMLProps<HTMLElement> {}

export function Strong({ children, className, ...props }: StrongProps) {
  return (
    <strong {...props} className={cn("text-black dark:text-white", className)}>
      {children}
    </strong>
  )
}
