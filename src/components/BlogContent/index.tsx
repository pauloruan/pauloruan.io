import { Posts } from "@/components/Posts"
import { GlobalContext } from "@/contexts/GlobalContext"
import { useContext } from "react"

export function BlogContent(): JSX.Element {
  const { posts } = useContext(GlobalContext)

  const filteredPosts = posts.filter((post) => post.status === "Concluído")

  return (
    <Posts.Container>
      {filteredPosts.length === 0 && <Posts.Empty />}
      {filteredPosts.length > 0 && <Posts.List posts={filteredPosts} />}
    </Posts.Container>
  )
}
