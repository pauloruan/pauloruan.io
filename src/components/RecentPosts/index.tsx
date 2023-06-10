import { Posts } from "@components/Posts"
import { GlobalContext } from "@contexts/GlobalContext"
import { useContext } from "react"

export function RecentPosts(): JSX.Element {
  const { posts } = useContext(GlobalContext)
  const lastPosts = posts
  const lastPostsList = lastPosts.slice(0, 3)

  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-2 py-2 space-y-4">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white font-sans my-1 py-1">
        Últimos textos que escrevi
      </h3>
      <div className="w-full h-full grid grid-cols-1 space-y-2">
        {lastPostsList.map((post) => (
          <Posts.Card key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}
