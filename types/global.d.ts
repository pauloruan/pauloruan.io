interface IRootLayoutProps {
  children: React.ReactNode
}

interface IGlobalProviderProps extends IRootLayoutProps {}

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

interface INavLink {
  name: string
  path: string
}

interface IMenuProps extends IRootLayoutProps {}

interface IPostsProps extends IRootLayoutProps {}

interface IPostContainerProps extends IRootLayoutProps {}

interface ISectionContainerProps extends IRootLayoutProps {
  title?: string
  subtitle?: string
}

interface IAnimationProps extends IRootLayoutProps {}

interface IAbout {
  title: string
  occupation: string
  location: string
  image: string
  alt: string
  content: IBodyContent[]
  contact: IBodyContent[]
  interests: string
  pronouns: string
}

interface ISobreGetStaticProps {
  props: {
    about: IAbout
  }
}

interface ISobreProps {
  about: IAbout
}

interface IHomeGetStaticProps {
  props: IHomeProps
}

interface IHomeProps {
  posts: IPost[]
}

interface IBlogGetStaticProps {
  props: IPosts
}

interface IBlogProps {
  posts: IPost[]
}

interface IPostProps {
  post: IPost
}

interface ITechCardProps extends IRootLayoutProps {
  url: string
}

interface INowPlayingProps {
  album: string
  albumCover: string
  songUrl: string
  artist: string
  isPlaying: boolean
  title: string
}

interface ILink {
  label: string
  renderLabel: boolean
}

interface ISocialMedia extends ILink {
  order: number
  name: string
  slug: string
  url: string
  icon: ElementType
}

interface ITechnology extends ISocialMedia {
  frequentlyUsed: boolean
}

interface ILinkCardProps {
  data: ISocialMedia | ITechnology
}

interface IMenuLinksProps {
  links: INavLink[]
}
