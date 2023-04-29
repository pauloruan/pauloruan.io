import { Hero } from "@components/Hero"

export function HomeContent(): JSX.Element {
  return (
    <div className="flex flex-col flex-wrap w-full justify-center items-center">
      <Hero />
    </div>
  )
}
