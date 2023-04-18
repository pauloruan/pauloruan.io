import { PortableText, PortableTextReactComponents } from "@portabletext/react"
import type { PostProps } from "@types"
import { readingTime } from "@utils/readTime"
import Link from "next/link"

export const components: Partial<PortableTextReactComponents> = {
  block: {
    p: ({ children }) => {
      return (
        <p className="text-base font-normal text-cod-gray-900 dark:text-cod-gray-50">
          {children}
        </p>
      )
    }
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <Link
          href={value.href}
          target="_blank"
          className="hover:underline decoration-2 transition duration-300 ease-in-out font-semibold text-cod-gray-900 dark:text-cod-gray-50 hover:text-black dark:hover:text-white"
        >
          {children}
        </Link>
      )
    }
  }
}

export function PostContainer(props: PostProps): JSX.Element {
  const { title, authorName, date, body } = props.post
  return (
    <section className="box-border w-full md:w-[80vw] min-h-[50vh] flex flex-col items-start justify-center my-1 md:my-4 px-1 sm:px-8 md:px-24 lg:px-36">
      <div className="w-full flex flex-col my-2 py-4 rounded-md justify-center items-center text-center text-black dark:text-white bg-cod-gray-200 dark:bg-cod-gray-800">
        <h1 className="max-w-max h-full font-sans text-4xl font-black text-center my-1 py-1 text-black dark:text-white">
          {title}
        </h1>
        <p className="max-w-max font-sans text-xs font-normal text-center text-black dark:text-white">
          {authorName} - {date} - {readingTime(body)}
        </p>
      </div>
      <div className="flex flex-col my-1 py-8 justify-center items-start text-start text-black dark:text-white border-b border-b-gray-600 dark:border-b-gray-400">
        <PortableText value={body} components={components}></PortableText>
      </div>
    </section>
  )
}
