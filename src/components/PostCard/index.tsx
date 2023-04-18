import { FormattedPost } from "@types"
import Link from "next/link"

export function PostCard(props: FormattedPost): JSX.Element {
  const { slug, title, subtitle, categories } = props
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full h-full flex flex-col justify-center items-start"
    >
      <h3 className="max-w-max font-sans text-lg font-semibold my-1 text-black dark:text-white hover:opacity-70 transition-all duration-300">
        {title}
      </h3>
      <div className="flex flex-row flex-wrap justify-start items-center space-x-2">
        {categories.map((category) => (
          <span
            key={category}
            className="max-w-max font-code text-xs font-semibold py-1 px-2 my-2 rounded-md uppercase text-black dark:text-white bg-cod-gray-200 dark:bg-cod-gray-800"
          >
            {category}
          </span>
        ))}
      </div>
      <h4 className="max-w-max font-sans text-sm font-normal my-1 text-cod-gray-900 dark:text-cod-gray-50">
        {subtitle}
      </h4>
    </Link>
  )
}
