import { client } from "@lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { ProjectContentProps } from "@types"
import Image from "next/image"
import Link from "next/link"
import { FaCodeBranch } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

export function ProjectContent(props: ProjectContentProps): JSX.Element {
  const builder = urlBuilder(client)
  const date = new Date(props.project.date).getUTCFullYear()

  return (
    <div className="w-full h-full">
      <div className="w-72 flex flex-row justify-between items-center my-1 py-1 text-cod-gray-800 dark:text-cod-gray-200">
        <p className="font-sans text-base font-normal text-left py-1 text-cod-gray-900 dark:text-cod-gray-50">
          {date}
        </p>
        <div className="w-52 flex flex-row justify-between items-center">
          <Link
            href={props.project.repository}
            target="_blank"
            className="flex flex-row items-center text-center no-underline hover:underline decoration-2 text-cod-gray-800 dark:text-cod-gray-200 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
          >
            <FaCodeBranch className="mr-2 h-4 w-4 dark:text-white text-black" />
            Repositório
          </Link>
          <Link
            href={props.project.website}
            target="_blank"
            className="flex flex-row items-center text-center no-underline hover:underline decoration-2 text-cod-gray-800 dark:text-cod-gray-200 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
          >
            <TbWorld className="mr-2 h-4 w-4 dark:text-white text-black" />
            Website
          </Link>
        </div>
      </div>
      <p className="w-full h-full font-sans text-base font-normal text-left py-1 text-cod-gray-900 dark:text-cod-gray-50">
        {props.project.description}
      </p>
      <ul className="w-full h-full grid grid-cols-1 gap-8 my-8">
        {props.project.images.map((image) => (
          <Image
            key={image._key}
            src={builder.image(image.asset).url()}
            alt={image.alt}
            width={1200}
            height={800}
            priority
            className="rounded-md object-cover"
          />
        ))}
      </ul>
    </div>
  )
}
