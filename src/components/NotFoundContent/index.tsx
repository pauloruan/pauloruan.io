import Image from "next/image"
import Link from "next/link"
import { BsArrowLeftShort } from "react-icons/bs"

export function NotFoundContent(): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full gap-4">
      <p className="text-black dark:text-white font-normal text-sm text-start md:text-base my-2 py-1">
        <Link
          href="/"
          className="flex flex-row items-center text-center no-underline decoration-2 transition duration-300 ease-in-out text-black dark:text-white"
        >
          <BsArrowLeftShort className="mr-1" /> Voltar para a&nbsp;
          <strong className="no-underline hover:underline">
            página inicial
          </strong>
          .
        </Link>
      </p>
      <Image
        src="https://media.giphy.com/media/JuFwy0zPzd6jC/giphy.gif"
        alt="Gif de um gato andando em cima de um teclado de computador"
        width={500}
        height={500}
        loading="eager"
        priority
        className="object-contain object-center w-full h-full"
      />
    </div>
  )
}
