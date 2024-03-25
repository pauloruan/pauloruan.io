"use client"

import { Posts } from "@/components/Posts"
import { Typography } from "../Typography"
import { useQuery } from "@tanstack/react-query"
import { getSanityPosts } from "@/lib/sanity.queries"

interface BlogContentProps {
  posts: IPost[]
}

export function BlogContent({ posts }: BlogContentProps) {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getSanityPosts,
    initialData: posts
  })

  const filteredPosts = data.slice().filter((post) => post.published)

  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-8">
      <Typography.H1>Blog</Typography.H1>
      <Posts.Container>
        {filteredPosts.length === 0 && <Posts.Empty />}
        {filteredPosts.length > 0 && <Posts.List posts={filteredPosts} />}
      </Posts.Container>
    </div>
  )
}
