import { components } from "@components/PostContainer"
import { PortableText } from "@portabletext/react"
import { EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { About } from "@types"
import Link from "next/link"

export function AboutContent(props: About): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start my-4 gap-12">
      <PortableText
        aria-label="About"
        value={props.content}
        components={components}
      ></PortableText>
      <div>
        <h3 className="text-3xl font-bold text-black dark:text-white font-sans my-2 py-1">
          Contato
        </h3>
        <p className="text-base font-normal text-cod-gray-900 dark:text-cod-gray-50">
          Estou sempre aberto para conversar, conectar-me com novas pessoas e
          explorar novas oportunidades.
        </p>
        <p className="text-base font-normal text-cod-gray-900 dark:text-cod-gray-50">
          Se você tem um projeto ou ideia em mente onde eu posso contribuir, não
          hesite em me contatar!
        </p>
        <p className="text-base font-normal text-cod-gray-900 dark:text-cod-gray-50">
          Existem algumas maneiras pelas quais você pode entrar em contato:
        </p>
        <div className="flex flex-row justify-between items-center my-4 w-48">
          <Link
            href="mailto:ruanpr182@gmail.com?subject=Olá, PR!"
            target="_blank"
            className="text-sm font-sans text-black dark:text-white h-8 max-w-max px-2 bg-cod-gray-200 dark:bg-cod-gray-800 rounded-md flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <EnvelopeClosedIcon className="h-4 w-4" />
            Email
          </Link>
          <Link
            href="https://linkedin.com/in/pauloruan/"
            target="_blank"
            className="text-sm font-sans text-black dark:text-white h-8 max-w-max px-2 bg-cod-gray-200 dark:bg-cod-gray-800 rounded-md flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <LinkedInLogoIcon className="h-4 w-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  )
}
