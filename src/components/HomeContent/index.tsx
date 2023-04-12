import { Hero } from "@components/Hero"
import { RecentGrid } from "@components/RecentGrid"

export function HomeContent(): JSX.Element {
  return (
    <div className="flex flex-col flex-wrap w-full justify-center items-center">
      <Hero />
      <RecentGrid />
    </div>
  )
}
