import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Loading } from "@components/Loading"
import { PostContainer } from "@components/PostContainer"
import { SectionContainer } from "@components/SectionContainer"
import { client } from "@lib/sanity.client"
import { sanityQueries } from "@utils/sanityQueries"
import { useRouter } from "next/router"

export async function getStaticProps(context: any) {
  const { slug } = context.params
  const [post] = await client.fetch(sanityQueries.postBySlug, { slug })

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const slugs = await client.fetch(sanityQueries.postSlugs)

  const paths = slugs.map((post: Post) => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default function Post({ post }: PostProps): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
      <Animation>
        <Header />
        <SectionContainer>
          <PostContainer post={post} />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
