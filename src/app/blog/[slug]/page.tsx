import { MaintenanceContent } from "@/components/MaintenanceContent"
// import { PostContainer } from "@/components/PostContainer"
import { SectionContainer } from "@/components/shared/SectionContainer"
// import { getSanityPostBySlug, getSanityPostSlugs } from "@/lib/sanity.queries"
// import { Metadata } from "next"

// interface PostProps {
//   params: { slug: string }
// }

// interface Slug {
//   slug: string
// }

// export async function generateMetadata({
//   params
// }: PostProps): Promise<Metadata> {
//   const post = await getSanityPostBySlug(params.slug)

//   return {
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       url: `https://pauloruan.dev/blog/${params.slug}`,
//       type: "article"
//     }
//   }
// }

// export async function generateStaticParams() {
//   const slugs = await getSanityPostSlugs()
//   return slugs.map(({ slug }: Slug) => ({ slug }))
// }

// export default async function Post({ params }: PostProps) {
export default async function Post() {
  // const post = await getSanityPostBySlug(params.slug)

  return (
    <SectionContainer>
      {/* <PostContainer post={post} slug={params.slug} /> */}
      <MaintenanceContent />
    </SectionContainer>
  )
}
