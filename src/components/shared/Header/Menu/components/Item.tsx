import Link from "next/link"
import { usePathname } from "next/navigation"

export function Item({ name, path }: INavLink): JSX.Element {
  const pathname = usePathname()
  const currentPath = pathname === path ? true : false

  return (
    <Link
      href={path}
      target="_self"
      aria-label={name}
      data-current-path={currentPath}
      className="h-8 px-1 max-w-max no-underline text-sm md:text-sm text-primary/80 dark:text-primary/80 font-medium cursor-pointer flex items-center justify-center text-center transition duration-300 ease-in-out data-[current-path='true']:font-bold data-[current-path='true']:text-primary dark:data-[current-path='true']:text-primary"
    >
      {name}
    </Link>
  )
}
