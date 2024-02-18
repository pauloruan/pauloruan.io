import { env } from "@/utils/env"
import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

const notion = new Client({ auth: env.NEXT_PUBLIC_NOTION_API_KEY })
const databaseId = env.NEXT_PUBLIC_NOTION_DATABASE_ID

async function fetchNotionPosts() {
  const response = await notion.databases.query({
    database_id: databaseId
  })
  return response.results as INotionResult[]
}

function mapToFormattedPost(post: INotionResult): INotionPost {
  return {
    title: post.properties.title.title[0].plain_text,
    slug: post.properties.slug.formula.string,
    status: post.properties.status.status.name,
    description: post.properties.description.rich_text[0].plain_text,
    tags: post.properties.tags.multi_select.map((tag) => tag.name),
    reading_time: post.properties.reading_time.number,
    created_by: post.properties.created_by.created_by.id,
    published_at: post.properties.published_at.date.start
  }
}

function extractSlugs(posts: INotionResult[]): string[] {
  return posts.map((post) => post.properties.slug.formula.string)
}

export async function getSlugs(): Promise<string[]> {
  const posts = await fetchNotionPosts()
  return extractSlugs(posts)
}

export async function getPosts(): Promise<INotionPost[]> {
  const posts = await fetchNotionPosts()
  return posts.map(mapToFormattedPost)
}

export async function getPost(slug: string): Promise<INotionFormattedPost> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug
      }
    }
  })

  const pageId = response.results[0].id

  const n2m = new NotionToMarkdown({ notionClient: notion })
  const mdBlocks = await n2m.pageToMarkdown(pageId)
  const mdStrings = n2m.toMarkdownString(mdBlocks)

  const post = response.results[0] as INotionResult
  const formattedPost = mapToFormattedPost(post)

  return {
    ...formattedPost,
    content: mdStrings.parent
  }
}
