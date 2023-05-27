import Image from "next/image"
import Link from "next/link"

export function Hero(): JSX.Element {
  return (
    <div className="flex flex-nowrap flex-col w-full h-full justify-center items-center gap-4">
      <div className="flex flex-nowrap flex-col md:flex-row w-full h-full justify-start items-start md:justify-between md:items-center gap-2">
        <Image
          src="https://avatars.githubusercontent.com/u/85769241?v=4"
          alt="Paulo Ruan"
          width={1940}
          height={1940}
          className="rounded-full w-24 h-24 my-2 md:mr-4"
        />
        <div className="flex flex-nowrap flex-col w-full h-full justify-center items-start text-start">
          <h1 className="max-w-max max-h-max font-sans text-2xl font-black text-left text-black dark:text-white">
            Oi, eu sou o Paulo Ruan!
          </h1>
          <p className="max-w-max max-h-max font-sans text-sm font-medium text-left text-black dark:text-white">
            Desenvolvedor Full Stack JR
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full min-w-[30%] w-full justify-start items-start">
        <p className="max-w-max max-h-max font-sans text-base font-normal text-left text-cod-gray-900 dark:text-cod-gray-50">
          Bem-vindo(a) ao meu lugar na internet. Eu construo coisas para a web.
          <br />
          Sou apaixonado por tecnologia, desenvolvimento de software e&nbsp;
          <Link
            href="https://www.java.com/pt-BR"
            target="_blank"
            className="text-black dark:text-white text-base font-medium"
          >
            Java
          </Link>
          ,&nbsp;evangelista de&nbsp;
          <Link
            href="https://go.dev"
            target="_blank"
            className="text-black dark:text-white text-base font-medium"
          >
            Go
          </Link>
          &nbsp;e entusiasta de&nbsp;
          <Link
            href="https://opensource.guide/pt"
            target="_blank"
            className="text-black dark:text-white text-base font-medium"
          >
            Código Aberto
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
