import { PostContainer } from "@/components/PostContainer"
import { Animation } from "@/components/shared/Animation"
import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { Loading } from "@/components/shared/Loading"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { sanityQueries } from "@/utils/sanityQueries"
import { client } from "@lib/sanity.client"
import { NextSeo } from "next-seo"
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
      <NextSeo
        title={`${post.title} | Paulo Ruan`}
        description="Desenvolvedor Web Full Stack, apaixonado por tecnologia e programação."
        canonical={`https://pauloruan.vercel.app/blog/${post.slug}`}
        openGraph={{
          url: `https://pauloruan.vercel.app/blog/${post.slug}`,
          title: `${post.title} | Paulo Ruan`,
          images: [
            {
              url: `https://pauloruan.vercel.app/api/og?path=${encodeURIComponent(
                post.slug
              )}&title=${encodeURIComponent(post.title)}`
            }
          ]
        }}
      />
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
