import Link from "next/link"

export function Card(props: Post): JSX.Element {
  const { slug, title, subtitle, categories } = props

  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full h-full flex flex-col justify-center items-start shadow-md transition-all duration-300 ease-in-out cursor-pointer border border-cod-gray-200 dark:border-cod-gray-800 rounded-md px-4 py-2 hover:bg-cod-gray-200 dark:hover:bg-cod-gray-800"
    >
      <h3 className="max-w-max font-sans text-lg font-semibold my-1 text-black dark:text-white">
        {title}
      </h3>
      <div className="flex flex-row flex-wrap justify-start items-center space-x-2 my-1">
        {categories.map((category) => (
          <span
            key={category}
            className="max-w-max font-sans text-xs font-normal py-1 px-2 my-2 rounded-md lowercase shadow-md text-black dark:text-white bg-cod-gray-300 dark:bg-cod-gray-700"
          >
            #{category}
          </span>
        ))}
      </div>
      <p className="max-w-max font-sans text-sm font-medium my-1 text-cod-gray-900 dark:text-cod-gray-50">
        {subtitle}
      </p>
    </Link>
  )
}
