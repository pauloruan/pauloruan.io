import Link from "next/link"

export function Hero(): JSX.Element {
  return (
    <div className="flex flex-nowrap flex-col w-full h-full justify-center items-center">
      <div className="flex flex-col h-full min-w-[30%] w-full justify-start items-start my-1">
        <h1 className="max-w-max max-h-max font-sans text-2xl font-black my-1 py-1 text-left text-black dark:text-white">
          Olá, eu sou o Paulo Ruan!
        </h1>
        <p className="max-w-max max-h-max font-sans text-base font-normal text-left py-1 text-cod-gray-900 dark:text-cod-gray-50">
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
