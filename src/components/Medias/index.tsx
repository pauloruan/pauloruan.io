import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Medias(): JSX.Element {
  return (
    <div className="flex flex-row justify-between items-center my-4 w-44">
      <Link
        href="https://github.com/pauloruan"
        passHref
        target="_blank"
        aria-label="GitHub"
        className="flex flex-row justify-center items-center gap-1 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
      >
        <FaGithub className="h-4 w-4 text-black dark:text-white text-sm font-medium" />
        Github
      </Link>
      <Link
        href="https://linkedin.com/in/pauloruan/"
        passHref
        target="_blank"
        aria-label="LinkedIn"
        className="flex flex-row justify-center items-center gap-1 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
      >
        <FaLinkedin className="h-4 w-4 text-black dark:text-white text-sm font-medium" />
        LinkedIn
      </Link>
    </div>
  )
}
