import { Card } from "./Card"

export function List({ posts }: IPostsListProps): JSX.Element {
  const lastPosts = posts
    .slice()
    .filter((post: INotionPost) => post.status === "Concluído")
    .sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    )

  return (
    <ul className="w-full min-h-[221px] flex flex-col space-y-4">
      {lastPosts.map((post: INotionPost) => (
        <Card key={post.slug} {...post} />
      ))}
    </ul>
  )
}
