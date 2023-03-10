export type BodyChildren = {
  _key: string
  _type: string
  marks: string[]
  text: string
}

export type MarkDefsChildren = {
  _key: string
  _type: string
  href: string
}

export type Body = {
  _key: string
  _type: string
  children: BodyChildren[]
  markDefs: MarkDefsChildren[]
  style: string
}

export type FormattedPost = {
  authorName: string
  authorImage: string
  body: Body[]
  date: string
  slug: string
  title: string
  subtitle: string
  categories: string[]
  published: boolean
}

export type FormattedPosts = {
  formattedPosts: FormattedPost[]
}

export type BlogGetStaticProps = {
  props: FormattedPosts
}

export type BlogProps = {
  formattedPosts: FormattedPost[]
}

export type PostProps = {
  post: FormattedPost
}

export type NavLink = {
  name: string
  path: string
}

export type MenuProps = {
  links: NavLink[]
}

export type SectionContainerProps = {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export type PostContainerProps = {
  children: React.ReactNode
}

export type PageLayoutProps = {
  children: React.ReactNode
}

export type Project = {
  name: string
  description: string
  slug: string
  repository: string
  website: string
  poster: string
  images: ProjectImage[]
  technologies: string[]
}

export type ProjectImage = {
  _key: string
  _type: string
  alt: string
  asset: {
    _ref: string
    _type: string
  }
}

export type ProjectsContainerProps = {
  projects: Project[]
}

export type PostsListProps = {
  posts: FormattedPost[]
}

export type FormContactProps = {
  name: string
  email: string
  message: string
}

export type ProjectsGSP = {
  props: Projects
}

export type Projects = {
  projects: Projects[]
}

export type ProjectProps = {
  projects: Project[]
}

export type ProjectContentProps = {
  project: Project
}

export type About = {
  title: string
  occupation: string
  location: string
  image: string
  alt: string
  content: Body[]
}

export type SobreGetStaticProps = {
  props: {
    about: About
  }
}

export type SobreProps = {
  about: About
}
