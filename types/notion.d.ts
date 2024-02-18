interface IParent {
  type: string
  database_id: string
}

interface IUser {
  object: string
  id: string
}

interface IDate {
  start: string
  end: any
  time_zone: any
}

interface INotionPublishedAt {
  id: string
  type: string
  date: IDate
}

interface IFormula {
  type: string
  string: string
}

interface INotionSlug {
  id: string
  type: string
  formula: IFormula
}

interface ICreatedBy {
  object: string
  id: string
}

interface IMultiSelect {
  id: string
  name: string
  color: string
}

interface INotionTags {
  id: string
  type: string
  multi_select: IMultiSelect[]
}

interface IText {
  content: string
  link: any
}

interface IAnnotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface IRichText {
  type: string
  text: IText
  annotations: IAnnotations
  plain_text: string
  href: any
}

interface INotionTitle {
  id: string
  type: string
  title: IRichText[]
}

interface INotionCreatedBy {
  id: string
  type: string
  created_by: ICreatedBy
}

interface IPostTextContent {
  content: string
  link: null
}

interface IPostTextAnnotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

interface INotionStatus {
  id: string
  type: string
  status: IStatus
}

interface IStatus {
  id: string
  name: string
  color: string
}

interface INotionReadingTime {
  id: string
  type: string
  number: number
}

interface IPostRichText {
  type: string
  text: IPostTextContent
  annotations: IPostTextAnnotations
  plain_text: string
  href: null
}

interface INotionPostDescription {
  id: string
  type: string
  rich_text: IPostRichText[]
}

interface INotionProperties {
  title: INotionTitle
  slug: INotionSlug
  tags: INotionTags
  status: INotionStatus
  created_by: INotionCreatedBy
  reading_time: INotionReadingTime
  published_at: INotionPublishedAt
  description: INotionPostDescription
}

interface INotionResult {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: IUser
  last_edited_by: IUser
  cover: any
  icon: any
  parent: IParent
  archived: boolean
  properties: INotionProperties
  url: string
  public_url: any
}

interface INotionDatabaseResponse {
  results: INotionResult[]
}

interface INotionPost {
  title: string
  slug: string
  description: string
  tags: string[]
  reading_time: number
  published_at: string
  status: string
  created_by: string
}

interface INotionFormattedPost {
  title: string
  slug: string
  description: string
  tags: string[]
  published_at: string
  reading_time: number
  status: string
  created_by: string
  content: string
}

interface NotionGSPResponse {
  props: {
    posts: INotionPost[]
  }
}

interface IPostsListProps {
  posts: INotionPost[]
}

interface NotionHomeProps extends IPostsListProps {}
