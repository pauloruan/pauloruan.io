import { convertToBrazilianDate } from "@/utils/convertToBrazilianDate"
import Link from "next/link"

export function Card({ slug, title, date }: Post): JSX.Element {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full h-full font-sans flex flex-col justify-center items-start gap-2 shadow-md transition-all duration-300 ease-in-out cursor-pointer rounded-sm px-4 py-2 bg-cod-gray-200 dark:bg-cod-gray-800 hover:bg-cod-gray-300/60 dark:hover:bg-cod-gray-700 text-black dark:text-white"
    >
      <h3 className="max-w-max text-lg font-semibold">{title}</h3>
      <time className="lowercase text-xs py-1 my-1">
        {convertToBrazilianDate(date)}
      </time>
    </Link>
  )
}
