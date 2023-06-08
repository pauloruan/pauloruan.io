import { Card } from "./Card"

export function List({ posts }: PostsListProps): JSX.Element {
  return (
    <ul className="w-full min-h-[221px] my-2 py-2 flex flex-col">
      {posts
        .filter((post: Post) => post.published)
        .map((post: Post) => (
          <Card key={post.slug} {...post} />
        ))}
    </ul>
  )
}
