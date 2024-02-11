import Image from "next/image"

export function Hero(): JSX.Element {
  return (
    <div className="p-2 flex flex-nowrap flex-col w-full h-full justify-center items-start text-start">
      <div className="space-y-2 md:space-y-4">
        <div className="max-h-max w-full flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center gap-2 md:gap-4">
          <Image
            className="w-20 h-20 md:w-25 md:h-25 object-cover rounded-md shadow-md"
            src="https://avatars.githubusercontent.com/u/85769241?v=4"
            alt="Foto de Paulo Ruan"
            width={100}
            height={100}
          />
          <div className="w-full h-full flex flex-col justify-between items-start">
            <h1 className="max-w-max max-h-max font-sans text-3xl lg:text-4xl font-black text-left text-black dark:text-white tracking-wide">
              Paulo Ruan
            </h1>
            <h2 className="max-w-max max-h-max font-sans text-xl md:text-2xl font-bold text-left text-theme-dark/60 dark:text-theme-light/50 leading-relaxed tracking-wide">
              Desenvolvedor Backend
            </h2>
            <span className="max-w-max max-h-max font-sans text-sm md:text-base font-semibold text-left text-theme-dark/80 dark:text-theme-light/50 leading-relaxed tracking-wide">
              Construo sistemas, interfaces e experiências.
            </span>
          </div>
        </div>
        <p className="max-w-max max-h-max my-2 font-sans text-sm md:text-base font-medium text-left text-theme-dark dark:text-theme-light">
          Brasileiro, desenvolvedor e estudante de&nbsp;
          <strong>Análise e Desenvolvimento de Sistemas</strong> que adora criar
          coisas com código e solucionar problemas. Apaixonado por tecnologia,
          desenvolvimento de software e entusiasta de Código Aberto.
        </p>
      </div>
    </div>
  )
}
