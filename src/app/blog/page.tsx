// import { BlogContent } from "@/components/BlogContent"
import { MaintenanceContent } from "@/components/MaintenanceContent"
import { SectionContainer } from "@/components/shared/SectionContainer"
// import { getSanityPosts } from "@/lib/sanity.queries"
import { Metadata } from "next"

export const metadata: Metadata = {
  // title: "Blog"
  title: "Em manutenção"
}

export default async function Blog() {
  // const posts = await getSanityPosts()

  return (
    <SectionContainer>
      {/* <BlogContent posts={posts} /> */}
      <MaintenanceContent />
    </SectionContainer>
  )
}
