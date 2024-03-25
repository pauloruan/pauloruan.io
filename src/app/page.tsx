import { HomeContent } from "@/app/_components/HomeContent"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { getSanityAbout, getSanityPosts } from "@/lib/sanity.queries"

export default async function Page() {
  const [posts, about] = await Promise.all([getSanityPosts(), getSanityAbout()])

  return (
    <SectionContainer>
      <HomeContent posts={posts} about={about} />
    </SectionContainer>
  )
}
