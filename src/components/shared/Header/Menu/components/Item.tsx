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
      className="h-8 px-1 max-w-max no-underline text-sm md:text-base text-primary dark:text-primary font-medium cursor-pointer flex items-center justify-center text-center transition duration-300 ease-in-out data-[current-path='true']:font-semibold data-[current-path='true']:underline data-[current-path='true']:underline-offset-2 data-[current-path='true']:decoration-accent"
    >
      {name}
    </Link>
  )
}
