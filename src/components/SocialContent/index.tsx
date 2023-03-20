import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function SocialContent(): JSX.Element {
  return (
    <ul className="max-w-max h-full flex flex-row items-center justify-between gap-4 my-2">
      <li className="list-none">
        <Link
          href="https://linkedin.com/in/pauloruan/"
          target="_blank"
          aria-label="LinkedIn Profile"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
        >
          <FaLinkedin className="text-lg md:text-2xl" />
        </Link>
      </li>
      <li className="list-none">
        <Link
          href="https://github.com/pauloruan/"
          target="_blank"
          aria-label="GitHub Profile"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 ease-in-out"
        >
          <FaGithub className="text-lg md:text-2xl" />
        </Link>
      </li>
    </ul>
  )
}
