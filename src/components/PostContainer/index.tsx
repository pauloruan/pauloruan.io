"use client"

import { sanityComponents } from "@/components/PortableText"
import { Typography } from "@/components/Typography"
import { getSanityPostBySlug } from "@/lib/sanity.queries"
import { convertToBrazilianDate } from "@/utils/convertToBrazilianDate"
import { PortableText } from "@portabletext/react"
import { useQuery } from "@tanstack/react-query"

interface IPostContainerProps {
  post: IPost
  slug: string
}

export function PostContainer({ post, slug }: IPostContainerProps) {
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const data = await getSanityPostBySlug(slug)
      return data
    },
    initialData: post
  })

  return (
    <section className="box-border w-full h-full flex flex-col items-start justify-center gap-5 px-2">
      <div className="w-full flex flex-col py-4 gap-1 rounded-sm justify-start items-start text-start text-black dark:text-white">
        <Typography.H1>{data.title}</Typography.H1>
        <div className="flex flex-row justify-center items-center gap-4">
          <time className="max-w-max font-sans leading-relaxed text-xs font-normal text-start text-black dark:text-white">
            {convertToBrazilianDate(data.publishedAt)}
          </time>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start text-start font-sans text-black dark:text-white space-y-2">
        <PortableText value={data.body} components={sanityComponents} />
      </div>
    </section>
  )
}
