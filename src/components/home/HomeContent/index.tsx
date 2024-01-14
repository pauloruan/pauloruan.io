import { Hero } from "@/components/home/Hero"
import { FrequentTechnologies } from "@/components/shared/FrequentTechnologies"

export function HomeContent(): JSX.Element {
  return (
    <div className="flex flex-col flex-wrap w-full justify-center items-center gap-5">
      <Hero />
      <FrequentTechnologies />
    </div>
  )
}
