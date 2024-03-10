import Image from "next/image"

export function Hero(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2 mb-4">
      <div className="space-y-2 md:space-y-5">
        <div className="max-h-max w-full flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center gap-2 md:gap-4">
          <Image
            className="w-20 h-20 object-cover rounded-lg shadow-lg"
            src="https://avatars.githubusercontent.com/u/85769241?v=4"
            alt="Foto de Paulo Ruan"
            width={112}
            height={112}
          />
          <div className="w-full h-full flex flex-col justify-between items-start">
            <h1 className="max-w-max max-h-max font-sans text-2xl font-black text-left tracking-wide bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
              Paulo Ruan
            </h1>
            <h2 className="max-w-max max-h-max font-sans text-xl font-extrabold text-left text-black/70 dark:text-white/80 leading-relaxed tracking-wide">
              Desenvolvedor Backend
            </h2>
            <span className="max-w-max max-h-max font-sans text-sm md:text-base font-semibold text-left text-black/80 dark:text-white/90 leading-relaxed tracking-wide">
              Construo&nbsp;
              <span className="underline underline-offset-2 decoration-2 decoration-slice decoration-sky-600 dark:decoration-sky-400">
                sistemas
              </span>
              ,&nbsp;
              <span className="underline underline-offset-2 decoration-2 decoration-slice decoration-sky-600 dark:decoration-sky-400">
                interfaces
              </span>
              &nbsp;e&nbsp;
              <span className="underline underline-offset-2 decoration-2 decoration-slice decoration-sky-600 dark:decoration-sky-400">
                experiências
              </span>
              .
            </span>
          </div>
        </div>
        <p className="max-w-max max-h-max my-2 font-sans text-sm md:text-base font-normal text-left text-black dark:text-white">
          Brasileiro, desenvolvedor e graduando em&nbsp;
          <strong className="underline underline-offset-2 decoration-2 decoration-slice decoration-sky-600 dark:decoration-sky-400">
            Análise e Desenvolvimento de Sistemas
          </strong>
          . Adoro criar coisas com código e solucionar problemas. Apaixonado por
          tecnologia, desenvolvimento de software e entusiasta de Código Aberto.
        </p>
      </div>
    </div>
  )
}
