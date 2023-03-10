import { client } from "@lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { ProjectContentProps } from "@types"
import Image from "next/image"
import Link from "next/link"
import { FaCodeBranch } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

export function ProjectContent(props: ProjectContentProps): JSX.Element {
  const builder = urlBuilder(client)
  return (
    <div className="w-full h-full">
      <div className="w-72 flex flex-row justify-between items-center my-1 py-1 text-gray-600 dark:text-gray-400">
        <p>2022</p>
        <div className="w-52 flex flex-row justify-between items-center">
          <Link
            href={props.project.repository}
            target="_blank"
            className="flex flex-row items-center text-center no-underline hover:underline decoration-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
          >
            <FaCodeBranch className="mr-1" /> Repositório
          </Link>
          <Link
            href={props.project.website}
            target="_blank"
            className="flex flex-row items-center text-center no-underline hover:underline decoration-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
          >
            <TbWorld className="mr-1" /> Website
          </Link>
        </div>
      </div>
      <p className="text-black dark:text-white my-2 py-2">
        {props.project.description}
      </p>
      <ul className="w-full h-full grid grid-cols-1 gap-4 my-4">
        {props.project.images.map((image) => (
          <Image
            key={image._key}
            src={builder.image(image.asset).url()}
            alt={image.alt}
            width={1200}
            height={800}
            className="rounded-2xl object-cover"
          />
        ))}
      </ul>
    </div>
  )
}
