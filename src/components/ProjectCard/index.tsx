import { client } from "@lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { Project } from "@types"
import Image from "next/image"
import Link from "next/link"

export function ProjectCard(props: Project): JSX.Element {
  const builder = urlBuilder(client)

  return (
    <Link
      href={`/projetos/${props.slug}`}
      className="lg:w-full w-80 h-full flex flex-col lg:flex-row items-start justify-start gap-4 rounded-md shadow-md bg-cod-gray-200 dark:bg-cod-gray-800"
    >
      <Image
        src={builder.image(props.poster).url()}
        alt={props.title}
        width={320}
        height={288}
        priority
        className="object-cover rounded-t-md lg:rounded-r-none lg:rounded-l-md"
      />
      <div className="flex flex-col flex-wrap gap-1 mx-2 w-full">
        <h3 className="max-w-max font-sans text-xl font-semibold text-left py-1 my-1 text-cod-gray-900 dark:text-cod-gray-50">
          {props.title}
        </h3>
        <p className="max-w-max font-sans text-sm font-normal text-left py-1 my-2 text-cod-gray-900 dark:text-cod-gray-50">
          {props.summary}
        </p>
      </div>
    </Link>
  )
}
