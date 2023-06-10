import Link from "next/link"

export function TechCard({ children, url }: TechCardProps): JSX.Element {
  return (
    <Link
      href={url}
      passHref
      className="p-2 h-12 w-12 bg-cod-gray-200 dark:bg-cod-gray-800 flex flex-row items-center justify-center text-center rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
    >
      {children}
    </Link>
  )
}
