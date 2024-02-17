import Image from "next/image"

export function Hero(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start my-1 py-2 px-2 space-y-2">
      <div className="space-y-2 md:space-y-4">
        <div className="max-h-max w-full flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center gap-2 md:gap-4">
          <Image
            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md shadow-md"
            src="https://avatars.githubusercontent.com/u/85769241?v=4"
            alt="Foto de Paulo Ruan"
            width={112}
            height={112}
          />
          <div className="w-full h-full flex flex-col justify-between items-start">
            <h1 className="max-w-max max-h-max font-sans text-3xl lg:text-4xl font-black text-left text-black dark:text-white tracking-wide">
              Paulo Ruan
            </h1>
            <h2 className="max-w-max max-h-max font-sans text-xl md:text-2xl font-bold text-left text-primary/70 dark:text-primary/80 leading-relaxed tracking-wide">
              Desenvolvedor Backend
            </h2>
            <span className="max-w-max max-h-max font-sans text-sm md:text-lg font-semibold text-left text-primary/80 dark:text-primary/90 leading-relaxed tracking-wide">
              Construo sistemas, interfaces e experiências.
            </span>
          </div>
        </div>
        <p className="max-w-max max-h-max my-2 font-sans text-sm md:text-base font-medium text-left text-black dark:text-white">
          Brasileiro, desenvolvedor e estudante de&nbsp;
          <strong>Análise e Desenvolvimento de Sistemas</strong> que adora criar
          coisas com código e solucionar problemas. Apaixonado por tecnologia,
          desenvolvimento de software e entusiasta de Código Aberto.
        </p>
      </div>
    </div>
  )
}
