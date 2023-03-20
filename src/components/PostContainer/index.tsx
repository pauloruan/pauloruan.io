import { FormContact } from "@components/FormsContact"
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
  return (
    <section className="box-border w-full md:w-[80vw] min-h-[50vh] flex flex-col items-start justify-center my-1 md:my-4 px-1 sm:px-8 md:px-24 lg:px-36">
      <div className="w-full flex flex-col my-2 justify-center items-start">
        <h1 className="max-w-max h-full font-sans text-4xl font-black text-left my-1 py-1 text-black dark:text-white">
          {props.post.title}
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-start my-1">
        <p className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200">
          {props.post.date}
        </p>
        <p className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200">
          {readingTime(props.post.body)}
        </p>
      </div>
      <div className="flex flex-col my-1 py-8 justify-center items-start text-start text-black dark:text-white border-b border-b-gray-600 dark:border-b-gray-400">
        <PortableText
          value={props.post.body}
          components={components}
        ></PortableText>
      </div>
      <div className="flex flex-row py-2 my-2 justify-start items-center text-start gap-8">
        {props.post.categories.map((category) => {
          return (
            <p
              key={category}
              className="flex flex-row items-center justify-center text-center text-xs md:text-sm text-black dark:text-white bg-cod-gray-200 dark:bg-cod-gray-800 px-2 py-2 rounded-sm font-semibold max-h-max max-w-max"
            >
              #{category.toLocaleLowerCase()}
            </p>
          )
        })}
      </div>
      <div className="flex flex-col w-full my-4 py-1 items-start text-start justify-center">
        <FormContact />
      </div>
    </section>
  )
}
