import { Posts } from "@components/Posts"
import { GlobalContext } from "@contexts/GlobalContext"
import { useContext } from "react"

export function BlogContent(): JSX.Element {
  const { posts, searchValue } = useContext(GlobalContext)

  const initialDisplayPosts = posts
  const filteredPosts = searchValue
    ? initialDisplayPosts.filter((post: Post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : initialDisplayPosts

  return (
    <Posts.Container>
      <Posts.Search />
      {filteredPosts.length === 0 && <Posts.Empty />}
      {filteredPosts.length > 0 && <Posts.List posts={filteredPosts} />}
    </Posts.Container>
  )
}
