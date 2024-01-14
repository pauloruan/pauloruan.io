import { components } from "@/components/PortableText"
import { convertToBrazilianDate } from "@/utils/convertToBrazilianDate"
import { readingTime } from "@/utils/readTime"
import { urlFor } from "@/utils/url-for"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

export function PostContainer({ post }: PostProps): JSX.Element {
  const { title, authorName, authorImage, date, body } = post

  return (
    <section className="box-border w-full h-full flex flex-col items-start justify-center gap-5">
      <div className="w-full flex flex-col py-4 gap-1 rounded-sm justify-start items-start text-start text-black dark:text-white">
        <h1 className="max-w-max h-full font-sans text-4xl font-black text-start my-1 py-1 text-black dark:text-white">
          {title}
        </h1>
        <div className="flex flex-row justify-center items-center gap-4">
          <Image
            src={urlFor(authorImage).url()}
            alt={authorName}
            width={48}
            height={48}
            className="rounded-full shadow-md w-10 h-10"
          />
          <div className="max-w-max font-sans leading-relaxed text-xs font-normal text-start text-black dark:text-white">
            <p>{authorName}</p>
            <p>
              <time>{convertToBrazilianDate(date)}</time> -&nbsp;
              {readingTime(body)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start text-start text-black dark:text-white">
        <PortableText value={body} components={components} />
        <hr className="w-full h-px bg-cod-gray-200 dark:bg-cod-gray-800 my-6" />
      </div>
    </section>
  )
}
