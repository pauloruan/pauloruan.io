import { RecentBuilding } from "@components/RecentBuilding"
import { RecentPosts } from "@components/RecentPosts"
import { RecentProjects } from "@components/RecentProjects"

export function RecentGrid(): JSX.Element {
  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-8 w-full">
      <RecentBuilding />
      <RecentProjects />
      <RecentPosts />
    </div>
  )
}
