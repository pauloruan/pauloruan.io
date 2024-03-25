"use client"

import { RecentPosts } from "@/components/RecentPosts"
import { Hero } from "@/components/home/Hero"
import { Contact } from "@/components/shared/Contact"
import { FrequentTechnologies } from "@/components/shared/FrequentTechnologies"
import { getSanityAbout, getSanityPosts } from "@/lib/sanity.queries"
import { useQuery } from "@tanstack/react-query"

interface HomeContentProps {
  posts: IPost[]
  about: IAbout
}

async function getContent(): Promise<HomeContentProps> {
  const [posts, about] = await Promise.all([getSanityPosts(), getSanityAbout()])
  return { posts, about }
}

export function HomeContent({ posts, about }: HomeContentProps) {
  const { data } = useQuery({
    queryKey: ["posts", "about"],
    queryFn: getContent,
    initialData: { posts, about }
  })

  return (
    <div className="flex flex-col flex-wrap w-full justify-center items-center gap-5">
      <Hero />
      <FrequentTechnologies />
      <RecentPosts posts={data.posts} />
      <Contact contact={data.about.contact} />
    </div>
  )
}
