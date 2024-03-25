import { Posts } from "@/components/Posts"
import { Typography } from "@/components/Typography"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

interface RecentPostsProps {
  posts: IPost[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2">
      <Typography.H3>Textos recentes</Typography.H3>
      <div className="w-full h-full flex flex-col justify-center items-start gap-4">
        <Posts.RecentList posts={posts} />

        <Link
          href="/blog"
          className="flex justify-start font-sans items-center text-center gap-1 font-medium underline group cursor-pointer"
        >
          <FiArrowUpRight className="h-4 w-4" />
          Ver todos os textos
        </Link>
      </div>
    </div>
  )
}
