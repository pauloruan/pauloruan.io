import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Loading } from "@components/Loading"
import { PostContainer } from "@components/PostContainer"
import { SectionContainer } from "@components/SectionContainer"
import { client } from "@lib/sanity.client"
import { FormattedPost, PostProps } from "@types"
import { convertToBrazilianDate } from "@utils/convertToBrazilianDate"
import { sanityQueries } from "@utils/sanityQueries"
import { useRouter } from "next/router"

export async function getStaticProps(context: any) {
  const { slug } = context.params
  const [postBySlug] = await client.fetch(sanityQueries.postBySlug, { slug })
  const post = {
    ...postBySlug,
    date: convertToBrazilianDate(postBySlug.date)
  }
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const slugs = await client.fetch(sanityQueries.postSlugs)

  const paths = slugs.map((post: FormattedPost) => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default function Post(props: PostProps): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
      <Animation>
        <Header />
        <SectionContainer>
          <PostContainer post={props.post} />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
