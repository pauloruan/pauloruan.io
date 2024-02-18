import { RecentCard } from "./RecentCard"

export function RecentList({ posts }: IPostsListProps): JSX.Element {
  const lastPosts = posts
    .slice()
    .filter((post: INotionPost) => post.status === "Concluído")
    .sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    )
    .slice(0, 3)

  return (
    <ul className="w-full h-full flex flex-col my-1 space-y-4">
      {lastPosts.map((post: INotionPost) => (
        <RecentCard key={post.slug} {...post} />
      ))}
    </ul>
  )
}
