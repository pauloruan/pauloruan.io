import { socialMedias } from "@utils/social-medias"
import Link from "next/link"

export function Medias(): JSX.Element {
  return (
    <div className="flex flex-row justify-between items-center my-4 w-64">
      {socialMedias.map(({ name, url, icon: Icon }) => (
        <Link
          key={name}
          href={url}
          passHref
          target="_blank"
          aria-label={name}
          className="flex flex-row justify-center items-center rounded-sm p-1 cursor-pointer transition-all duration-300 ease-in-out hover:bg-cod-gray-200 dark:hover:bg-cod-gray-800 gap-1"
        >
          <Icon className="h-4 w-4 text-black dark:text-white text-sm font-medium" />
          {name}
        </Link>
      ))}
    </div>
  )
}
