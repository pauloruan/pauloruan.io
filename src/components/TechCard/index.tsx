import Link from "next/link"

export function TechCard({ children, url }: TechCardProps): JSX.Element {
  return (
    <Link
      href={url}
      passHref
      className="p-2 h-8 w-8 flex flex-row items-center justify-center text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-cod-gray-200 dark:hover:bg-cod-gray-800 rounded-sm"
    >
      {children}
    </Link>
  )
}
