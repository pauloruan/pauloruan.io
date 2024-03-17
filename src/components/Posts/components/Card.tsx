import { Typography } from "@/components/Typography"
import {
  Card as CardContainer,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { convertToBrazilianDate } from "@/utils/convertToBrazilianDate"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

export function Card(post: IPost): JSX.Element {
  return (
    <Link href={`/blog/${post.slug}`}>
      <CardContainer className="h-full w-full rounded-md transition-all duration-300 ease-in-out hover:shadow-lg group hover:bg-secondary">
        <CardHeader className="p-2">
          <CardTitle className="h-6 max-w-max flex justify-start items-center gap-1 text-center truncate">
            <FiArrowUpRight className="h-4 w-4 text-sm font-medium" />
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm truncate">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-2 flex flex-col justify-center items-start gap-1">
          <Typography.P className="text-xs text-gray-500 dark:text-gray-400">
            {convertToBrazilianDate(post.publishedAt)}
          </Typography.P>
        </CardFooter>
      </CardContainer>
    </Link>
  )
}
