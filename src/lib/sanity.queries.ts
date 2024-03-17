export const sanityQueries = {
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
  experiencies: `*[_type == 'experience'] |
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
