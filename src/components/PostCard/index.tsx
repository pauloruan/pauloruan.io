import { FormattedPost } from "@types"
import { readingTime } from "@utils/readTime"
import Link from "next/link"

export function PostCard(props: FormattedPost): JSX.Element {
  return (
    <Link
      href={`/blog/${props.slug}`}
      className="lg:w-full w-80 px-1 h-full flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center rounded-md shadow-md bg-cod-gray-200 dark:bg-cod-gray-800"
    >
      <h3 className="max-w-max font-sans text-lg font-semibold py-1 my-2 text-black dark:text-white">
        {props.title}
      </h3>
      <p className="max-w-max h-full flex flex-row justify-center items-center font-sans text-sm font-normal py-1 text-cod-gray-900 dark:text-cod-gray-50">
        {readingTime(props.body)} • {props.date}
      </p>
    </Link>
  )
}
