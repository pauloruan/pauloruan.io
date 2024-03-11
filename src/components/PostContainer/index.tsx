import { components } from "@/components/PortableText"
import { convertToBrazilianDate } from "@/utils/convertToBrazilianDate"
import { readingTime } from "@/utils/readTime"
import ReactMarkdown from "react-markdown"

interface PostContainerProps {
  post: INotionFormattedPost
}

export function PostContainer({ post }: PostContainerProps) {
  return (
    <section className="box-border w-full h-full flex flex-col items-start justify-center gap-5 px-2">
      <div className="w-full flex flex-col py-4 gap-1 rounded-sm justify-start items-start text-start text-black dark:text-white">
        <h3 className="max-w-max h-full font-sans text-xl font-bold text-start my-1 py-1 text-black dark:text-white">
          {post.title}
        </h3>
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="max-w-max font-sans leading-relaxed text-xs font-normal text-start text-black dark:text-white">
            <p>
              <time>{convertToBrazilianDate(post.published_at)}</time> -&nbsp;
              {readingTime(post.reading_time)}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start text-start text-black dark:text-white space-y-2">
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
      </div>
    </section>
  )
}
