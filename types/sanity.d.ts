interface IBodyChildren {
  _key: string
  _type: string
  marks: string[]
  text: string
}

interface IMarkDefsChildren {
  _key: string
  _type: string
  href: string
}

interface IBodyContent {
  _key: string
  _type: string
  children: IBodyChildren[]
  markDefs: IMarkDefsChildren[]
  style: string
}

interface ICodeBlock {
  filename?: string
  _type: "code"
  _key: string
  code: string
  language: string
}

interface IAuthorPost {
  name: string
  image: string
}

interface IPost {
  author: IAuthorPost
  body: IBodyContent[]
  publishedAt: string
  slug: string
  title: string
  description: string
  categories: string[]
  published: boolean
}

interface IAbout {
  title: string
  content: IBodyContent[]
  contact: IBodyContent[]
  work: IBodyContent[]
}

interface IExperience {
  slug: string
  company: string
  position: string
  linkedInURL: string
  description: IBodyContent
  start: Date
  end: Date | null
  current: boolean
}
