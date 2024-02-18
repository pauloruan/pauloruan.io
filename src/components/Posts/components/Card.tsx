import { Badge } from "@/components/ui/badge"
import {
  Card as CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { convertToBrazilianDate } from "@/utils/convertToBrazilianDate"
import { readingTime } from "@/utils/readTime"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

export function Card(post: INotionPost): JSX.Element {
  return (
    <Link href={`/blog/${post.slug}`}>
      <CardContainer className="h-full w-full rounded-md transition-all duration-300 ease-in-out hover:shadow-lg group">
        <CardHeader className="p-2">
          <CardTitle className="h-6 max-w-max flex justify-start items-center gap-1 text-center truncate">
            {post.title}
            <FiArrowUpRight className="h-4 w-4 text-sm font-medium transition-all duration-300 ease-in-out" />
          </CardTitle>
          <CardDescription className="truncate">
            {post.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2">
          {post.tags.map((tag) => (
            <Badge key={tag} className="capitalize mr-2" variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="p-2 flex flex-col justify-center items-start gap-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {readingTime(post.reading_time)}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {convertToBrazilianDate(post.published_at)}
          </p>
        </CardFooter>
      </CardContainer>
    </Link>
  )
}
