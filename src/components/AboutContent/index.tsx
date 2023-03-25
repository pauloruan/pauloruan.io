import { components } from "@components/PostContainer"
import { client } from "@lib/sanity.client"
import { PortableText } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { About } from "@types"
import Image from "next/image"
import * as Icon from "react-icons/md"

export function AboutContent(props: About): JSX.Element {
  const builder = urlBuilder(client)

  return (
    <div className="w-full h-full flex flex-col items-start justify-start my-4">
      <div className="h-full min-w-fit flex flex-col-reverse text-center justify-center items-start md:items-center mb-4 md:flex-row">
        <Image
          aria-label="Profile Picture"
          src={builder.image(props.image).url()}
          alt={props.alt}
          width={192}
          height={192}
          priority
          className="rounded-md md:mr-4 my-4"
        />
        <div className="flex flex-col items-start justify-start text-start">
          <h3 className="text-3xl font-bold text-black dark:text-white font-sans my-2 py-1">
            TL;DR
          </h3>
          <ul className="flex flex-col justify-start items-start my-4 md:my-0 mx-2 md:mx-0">
            <li className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 flex justify-start items-center capitalize py-1">
              <Icon.MdPerson className="mr-2 h-4 w-4 dark:text-white text-black" />
              {props.title}
            </li>
            <li className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 flex justify-start items-center capitalize py-1">
              <Icon.MdMale className="mr-2 h-4 w-4 dark:text-white text-black" />
              {props.pronouns}
            </li>
            <li className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 flex justify-start items-center capitalize py-1">
              <Icon.MdLocationOn className="mr-2 h-4 w-4 dark:text-white text-black" />
              {props.location}
            </li>
            <li className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 flex justify-start items-center capitalize py-1">
              <Icon.MdWork className="mr-2 h-4 w-4 dark:text-white text-black" />
              {props.occupation}
            </li>
            <li className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 flex justify-start items-center py-1">
              <Icon.MdInterests className="mr-2 h-4 w-4 dark:text-white text-black" />
              {props.interests}
            </li>
          </ul>
        </div>
      </div>
      <PortableText
        aria-label="About"
        value={props.content}
        components={components}
      ></PortableText>
    </div>
  )
}
