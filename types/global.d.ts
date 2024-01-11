interface IRootLayoutProps {
  children: React.ReactNode
}

declare type GlobalProviderProps = IRootLayoutProps

declare type BodyChildren = {
  _key: string
  _type: string
  marks: string[]
  text: string
}

declare type MarkDefsChildren = {
  _key: string
  _type: string
  href: string
}

declare type BodyContent = {
  _key: string
  _type: string
  children: BodyChildren[]
  markDefs: MarkDefsChildren[]
  style: string
}

declare type Post = {
  authorName: string
  authorImage: string
  body: BodyContent[]
  date: string
  slug: string
  title: string
  subtitle: string
  categories: string[]
  published: boolean
}

declare type NavLink = {
  name: string
  path: string
}

declare type MenuProps = IRootLayoutProps

declare type PostsProps = IRootLayoutProps

declare type PostContainerProps = IRootLayoutProps

declare type PostsListProps = {
  posts: Post[]
}

declare type SectionContainerProps = IRootLayoutProps & {
  title?: string
  subtitle?: string
}

declare type AnimationProps = IRootLayoutProps

declare type About = {
  title: string
  occupation: string
  location: string
  image: string
  alt: string
  content: BodyContent[]
  contact: BodyContent[]
  interests: string
  pronouns: string
}

declare type SocialLinkProps = {
  href: string
  target: string
  icon: React.ForwardRefExoticComponent
  label: string
}

declare type SobreGetStaticProps = {
  props: {
    about: About
  }
}

declare type SobreProps = {
  about: About
}

declare type HomeGetStaticProps = {
  props: HomeProps
}

declare type HomeProps = {
  posts: Post[]
}

declare type BlogGetStaticProps = {
  props: Posts
}

declare type BlogProps = {
  posts: Post[]
}

declare type PostProps = {
  post: Post
}

declare type TechCardProps = IRootLayoutProps & {
  url: string
}

declare type NowPlayingProps = {
  album: string
  albumCover: string
  songUrl: string
  artist: string
  isPlaying: boolean
  title: string
}

declare type Technology = {
  order: number
  name: string
  slug: string
  url: string
  icon: ElementType
}

declare type SocialMedia = Technology
