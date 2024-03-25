import { client } from "./sanity.client"

const queries = {
  posts: `*[_type == 'post' && published == true] {
    title,
    description,
    "slug": slug.current,
    "categories": categories[]-> slug.current,
    author->{name, "image": image.asset._ref},
    body,
    published,
    publishedAt
  }`,
  postBySlug: `*[_type == "post" && slug.current == $slug] {
    title,
    description,
    "slug": slug.current,
    "categories": categories[]-> slug.current,
    author->{name, "image": image.asset._ref},
    body,
    published,
    publishedAt
  }`,
  postSlugs: `*[_type == "post"]{
    "slug": slug.current
  }`,
  about: `*[_type == 'about'] {
    title, content, contact, work,
  }`,
  experiences: `*[_type == 'experience'] |
  {
    company,
    position,
    linkedInURL,
    "slug": slug.current,
    description,
    current,
    "start": startDate,
    "end": endDate,
  }`
}

export async function getSanityAbout(): Promise<IAbout> {
  const [response] = await client.fetch(queries.about)
  return response
}

export async function getSanityExperiences() {
  const response = await client.fetch(queries.experiences)
  return response
}

export async function getSanityPosts(): Promise<IPost[]> {
  return await client.fetch(queries.posts)
}

export async function getSanityPostBySlug(slug: string): Promise<IPost> {
  const [response] = await client.fetch(queries.postBySlug, { slug })
  return response
}

export async function getSanityPostSlugs() {
  const response = await client.fetch(queries.postSlugs)
  return response
}
