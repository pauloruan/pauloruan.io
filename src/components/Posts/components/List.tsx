import { Card } from "./Card"

interface IPostsListProps {
  posts: IPost[]
}

export function List({ posts }: IPostsListProps): JSX.Element {
  const lastPosts = posts
    .slice()
    .filter((post: IPost) => post.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )

  return (
    <ul className="w-full min-h-[221px] flex flex-col space-y-4">
      {lastPosts.map((post: IPost) => (
        <Card key={post.slug} {...post} />
      ))}
    </ul>
  )
}
