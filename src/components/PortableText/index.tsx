import { Typography } from "@/components/Typography"
import { PortableTextReactComponents } from "@portabletext/react"
import Link from "next/link"
import React from "react"

export const sanityComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value, ...props }) => {
      return <Typography.Code value={value} {...props} />
    }
  },
  block: {
    p: ({ children }) => {
      return <Typography.P>{children}</Typography.P>
    },
    h3: ({ children }) => {
      return (
        <Typography.H3 className="text-sky-600 dark:text-sky-400 my-2 py-1">
          {children}
        </Typography.H3>
      )
    },
    strong: ({ children }) => {
      return <Typography.Strong>{children}</Typography.Strong>
    }
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <Link
          href={value.href}
          target="_blank"
          className="underline decoration-2 leading-relaxed tracking-wide font-semibold text-black dark:text-white text-sm md:text-base"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }) => {
      return <Typography.Strong>{children}</Typography.Strong>
    }
  }
}
