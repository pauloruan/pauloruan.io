import { GlobalContext } from "@/contexts/GlobalContext"
import Link from "next/link"
import { useContext } from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { Posts } from "../Posts"

export function RecentPosts(): JSX.Element {
  const { posts } = useContext(GlobalContext)

  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2">
      <h3 className="text-lg md:text-xl max-w-max max-h-max font-semibold text-black dark:text-white font-sans my-1">
        Textos recentes
      </h3>
      <div className="w-full h-full flex flex-col justify-center items-start gap-4">
        <Posts.RecentList posts={posts} />

        <Link
          href="/blog"
          className="flex justify-start items-center text-center gap-1 font-medium underline group cursor-pointer"
        >
          <FiArrowUpRight className="h-4 w-4" />
          Ver todos os textos
        </Link>
      </div>
    </div>
  )
}
