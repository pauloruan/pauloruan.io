import { Posts } from "@/components/Posts"
import { GlobalContext } from "@/contexts/GlobalContext"
import { useContext } from "react"
import { Typography } from "../Typography"

export function BlogContent(): JSX.Element {
  const { posts } = useContext(GlobalContext)

  const filteredPosts = posts.slice().filter((post) => post.published)

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
