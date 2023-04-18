import Link from "next/link"
import { useRouter } from "next/router"

export function LogoLink(): JSX.Element {
  const router = useRouter()
  const active = "text-black dark:text-white"
  const general = "text-cod-gray-800 dark:text-cod-gray-200"
  const pathname = `/${router.pathname.split("/")[1]}`
  const pathStyle = pathname === "/" ? active : general

  return (
    <Link
      href="/"
      className={`text-xl tracking-tighter font-code font-bold uppercase ${pathStyle}`}
    >
      PR.
    </Link>
  )
}
