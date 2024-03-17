import { Card } from "./Card"

interface IPostsListProps {
  posts: IPost[]
}

export function RecentList({ posts }: IPostsListProps): JSX.Element {
  const lastPosts = posts
    .slice()
    .filter((post: IPost) => post.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3)

  return (
    <ul className="w-full h-full flex flex-col my-1 space-y-4">
      {lastPosts.map((post: IPost) => (
        <Card key={post.slug} {...post} />
      ))}
    </ul>
  )
}
