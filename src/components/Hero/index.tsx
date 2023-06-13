import { Medias } from "@components/Medias"
import Image from "next/image"
import useNextBlurhash from "use-next-blurhash"

export function Hero(): JSX.Element {
  const [blurDataUrl] = useNextBlurhash("UWK1%f?bt7j[~qt7RjofWBWBRjj[ayWBofj[")

  return (
    <div className="flex flex-nowrap flex-col w-full h-full justify-center items-center text-center">
      <div className="flex flex-nowrap flex-col md:flex-row w-full h-full justify-start items-start md:justify-between md:items-center gap-2">
        <Image
          src="https://avatars.githubusercontent.com/u/85769241?v=4"
          alt="Foto de Paulo Ruan"
          width={1940}
          height={1940}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          loading="eager"
          className="rounded-md shadow-md w-20 h-20"
        />
        <div className="flex flex-nowrap flex-col w-full h-full justify-center items-start text-start gap-1">
          <h1 className="max-w-max max-h-max font-sans text-3xl font-black text-left text-black dark:text-white tracking-wide">
            Paulo Ruan
          </h1>
          <p className="max-w-max max-h-max font-sans text-base font-medium text-left text-cod-gray-900/70 dark:text-cod-gray-50/50 leading-relaxed tracking-wide">
            Desenvolvedor Full Stack
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full min-w-[30%] w-full justify-start items-start my-4">
        <p className="max-w-max max-h-max font-sans text-base font-normal text-left text-cod-gray-900 dark:text-cod-gray-50">
          Bem-vindo(a) ao meu lugar na internet. Eu construo coisas para a web.
        </p>
        <p className="max-w-max max-h-max font-sans text-base font-normal text-left text-cod-gray-900 dark:text-cod-gray-50">
          Apaixonado por tecnologia, desenvolvimento de software e entusiasta de
          Código Aberto.
        </p>
        <Medias />
      </div>
    </div>
  )
}
