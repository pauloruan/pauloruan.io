import Image from "next/image"
import Link from "next/link"

export function Hero(): JSX.Element {
  return (
    <div className="flex flex-nowrap flex-col w-full h-full justify-center items-center">
      <div className="flex flex-nowrap flex-col lg:flex-row w-full h-full justify-center items-center my-2 lg:my-4">
        <Image
          aria-label="Profile Picture"
          src="https://avatars.githubusercontent.com/u/85769241?v=4"
          alt="Profile Picture"
          width={150}
          height={150}
          priority
          className="rounded-full lg:rounded-md my-2 lg:mr-4"
        />
        <div className="flex flex-col h-full min-w-[30%] w-full justify-center items-center lg:items-start my-1">
          <h1 className="max-w-max max-h-max font-sans text-2xl font-black my-1 py-1 text-center lg:text-left text-black dark:text-white">
            Olá, eu sou o Paulo Ruan!
          </h1>
          <p className="max-w-max max-h-max font-sans text-base font-normal text-center lg:text-left py-1 text-cod-gray-900 dark:text-cod-gray-50">
            Bem-vindo(a) ao meu lugar na internet. Eu construo coisas para a
            web.
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
    </div>
  )
}
