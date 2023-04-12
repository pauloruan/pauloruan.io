import type { RecentCardProps } from "@types"
import Link from "next/link"

export function RecentCard({
  title,
  subtitle,
  summary,
  href
}: RecentCardProps): JSX.Element {
  return (
    <Link href={href} className="max-w-max h-full hover:underline">
      <h3 className="max-w-max font-sans text-base font-bold text-cod-gray-900 dark:text-cod-gray-50">
        {title}
      </h3>
      {subtitle && (
        <p className="max-w-max font-sans text-sm font-normal truncate text-cod-gray-900 dark:text-cod-gray-50">
          {subtitle}
        </p>
      )}
      {summary && (
        <p className="max-w-max font-sans text-sm font-normal truncate text-cod-gray-900 dark:text-cod-gray-50">
          {summary}
        </p>
      )}
    </Link>
  )
}
