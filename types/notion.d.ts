interface NotionDatabaseResponse {
  object: string
  results: NotionResult[]
  next_cursor: any
  has_more: boolean
  type: string
  page_or_database: NotionPageOrDatabase
  request_id: string
}

interface NotionResult {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: NotionUser
  last_edited_by: NotionUser
  cover: any
  icon: any
  parent: NotionParent
  archived: boolean
  properties: NotionProperties
  url: string
  public_url: any
}

interface NotionUser {
  object: string
  id: string
}

interface NotionParent {
  type: string
  database_id: string
}

interface NotionSlug {
  id: string
  type: string
  rich_text: NotionRichText[]
}

interface NotionRichText {
  type: string
  text: NotionText
  annotations: NotionAnnotations
  plain_text: string
  href: any
}

interface NotionText {
  content: string
  link: any
}

interface NotionAnnotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface NotionPublishedAt {
  id: string
  type: string
  date: NotionDate
}

interface NotionDate {
  start: string
  end: any
  time_zone: any
}

interface NotionTags {
  id: string
  type: string
  multi_select: NotionMultiSelect[]
}

interface NotionMultiSelect {
  id: string
  name: string
  color: string
}

interface NotionTitle {
  id: string
  type: string
  title: NotionRichText[]
}

interface NotionGSPResponse {
  props: {
    posts: NotionGSP[]
  }
}

interface NotionHomeProps {
  posts: NotionGSP[]
}

// Validados

interface INotionPostTextContent {
  content: string
  link: null
}

interface INotionPostTextAnnotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface INotionPostRichText {
  type: string
  text: INotionPostTextContent
  annotations: INotionPostTextAnnotations
  plain_text: string
  href: null
}

interface INotionPostDescription {
  id: string
  type: string
  rich_text: INotionPostRichText[]
}

interface NotionGSP {
  title: string
  slug: string
  description: string
  tags: string[]
  reading_time: number
  published_at: string
}

interface NotionProperties {
  slug: NotionSlug
  published_at: NotionPublishedAt
  description: INotionPostDescription
  tags: NotionTags
  title: NotionTitle
}

interface INotionFormattedPost {
  title: string
  slug: string
  description: string
  tags: string[]
  published_at: string
  content: string
}
