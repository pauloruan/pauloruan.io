import { components } from "@components/PortableText"
import { PortableText } from "@portabletext/react"
import { convertToBrazilianDate } from "@utils/convertToBrazilianDate"
import { readingTime } from "@utils/readTime"
import Image from "next/image"

export function PostContainer({ post }: PostProps): JSX.Element {
  const { title, authorName, date, body } = post

  return (
    <section className="box-border w-full h-full flex flex-col items-start justify-center gap-5">
      <div className="w-full flex flex-col py-4 rounded-md justify-center items-center text-center text-black dark:text-white bg-cod-gray-200 dark:bg-cod-gray-800">
        <h1 className="max-w-max h-full font-sans text-4xl font-black text-center my-1 py-1 text-black dark:text-white">
          {title}
        </h1>
        <p className="max-w-max font-sans leading-relaxed text-xs font-normal text-center text-black dark:text-white">
          {authorName} - <time>{convertToBrazilianDate(date)}</time> -&nbsp;
          {readingTime(body)}
        </p>
      </div>
      <figure className="flex flex-col justify-center items-center space-y-2 w-full h-full my-4">
        <Image
          src="https://images.unsplash.com/photo-1607971584791-aca00eb17fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Imagem de capa do post"
          width={1170}
          height={500}
          className="w-full h-full aspect-video object-cover object-center rounded-md shadow-md"
        />
        <figcaption className="w-full flex flex-col justify-center items-center text-center text-black/50 dark:text-white/50 text-xs font-normal italic">
          Foto de mãos de pessoa no teclado do computador por Mohammad Rahmani
          no Unsplash
        </figcaption>
      </figure>
      {/* Criar uma linha apos o texto */}
      <div className="flex flex-col justify-center items-start text-start text-black dark:text-white after:content-[''] after:w-full after:h-[2px] after:bg-cod-gray-200 dark:after:bg-cod-gray-800 after:my-10">
        <PortableText value={body} components={components} />
      </div>
    </section>
  )
}
