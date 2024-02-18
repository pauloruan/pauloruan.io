import { RecentPosts } from "@/components/RecentPosts"
import { Hero } from "@/components/home/Hero"
import { Contact } from "@/components/shared/Contact"
import { FrequentTechnologies } from "@/components/shared/FrequentTechnologies"

export function HomeContent(): JSX.Element {
  return (
    <div className="flex flex-col flex-wrap w-full justify-center items-center gap-5">
      <Hero />
      <FrequentTechnologies />
      <RecentPosts />
      <Contact />
    </div>
  )
}
