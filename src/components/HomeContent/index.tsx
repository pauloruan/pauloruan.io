import { FrequentTechnologies } from "@components/FrequentTechnologies"
import { Hero } from "@components/Hero"
import { RecentPosts } from "@components/RecentPosts"

export function HomeContent(): JSX.Element {
  return (
    <div className="flex flex-col flex-wrap w-full justify-center items-center gap-5">
      <Hero />
      <FrequentTechnologies />
      <RecentPosts />
    </div>
  )
}
