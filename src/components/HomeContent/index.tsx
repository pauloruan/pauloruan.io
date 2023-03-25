import { Hero } from "@components/Hero"
import { RecentPosts } from "@components/RecentPosts"
import { RecentProjects } from "@components/RecentProjects"

export function HomeContent(): JSX.Element {
  return (
    <div className="flex flex-col flex-wrap w-full">
      <Hero />
      <RecentPosts />
      <RecentProjects />
    </div>
  )
}
