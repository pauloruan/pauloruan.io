import { PostContainer } from "@/components/PostContainer"
import { Animation } from "@/components/shared/Animation"
import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { Loading } from "@/components/shared/Loading"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import { getPost, getSlugs } from "../_services/notion"

export async function getStaticProps(context: any) {
  const { slug } = context.params
  const post = await getPost(slug)
  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const slugs = await getSlugs()

  const paths = slugs.map((slug: string) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

interface IPost {
  post: INotionFormattedPost
}

export default function Post({ post }: IPost): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }

  return (
    <main className="min-h-screen w-full bg-theme-light dark:bg-theme-dark">
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
