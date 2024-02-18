import {
  Card as CardContainer,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

export function RecentCard(post: INotionPost): JSX.Element {
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
      </CardContainer>
    </Link>
  )
}
