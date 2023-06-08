import { PortableTextReactComponents } from "@portabletext/react"
import Link from "next/link"

export const components: Partial<PortableTextReactComponents> = {
  block: {
    p: ({ children }) => {
      return (
        <p className="text-base font-normal leading-relaxed text-cod-gray-900 dark:text-cod-gray-50 tracking-wide">
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
          className="hover:underline decoration-2 leading-relaxed tracking-wide transition duration-300 ease-in-out font-semibold text-cod-gray-900 dark:text-cod-gray-50 hover:text-black dark:hover:text-white"
        >
          {children}
        </Link>
      )
    }
  }
}
