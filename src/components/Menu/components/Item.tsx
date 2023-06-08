import Link from "next/link"
import { useRouter } from "next/router"

export function Item({ name, path }: NavLink): JSX.Element {
  const router = useRouter()
  const active = "text-black dark:text-white font-bold"
  const general = "text-cod-gray-800 dark:text-cod-gray-200 font-medium"
  const pathname = `/${router.pathname.split("/")[1]}`
  const style = pathname === path ? active : general

  return (
    <Link
      aria-label={name}
      href={path}
      target="_self"
      className={`h-8 w-16 no-underline text-sm cursor-pointer p-1 mx-1 flex items-center justify-center transition duration-300 ease-in-out ${style}`}
    >
      {name}
    </Link>
  )
}
