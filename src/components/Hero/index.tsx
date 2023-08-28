export function Hero(): JSX.Element {
  return (
    <div className="flex flex-nowrap flex-col w-full h-full justify-center items-start text-start">
      <div className="space-y-4">
        <div>
          <h1 className="max-w-max max-h-max font-sans text-2xl font-bold text-left text-black dark:text-white tracking-wide">
            Paulo Ruan
          </h1>
          <h2 className="max-w-max max-h-max font-sans text-base font-normal text-left text-cod-gray-900/70 dark:text-cod-gray-50/50 leading-relaxed tracking-wide">
            Construo interfaces, sistemas e experiências.
          </h2>
        </div>
        <p className="max-w-max max-h-max my-2 font-sans text-base font-normal text-left text-cod-gray-900 dark:text-cod-gray-50">
          Olá, sou Paulo Ruan, um desenvolvedor e estudante de engenharia de
          software que adora criar coisas com código. Apaixonado por tecnologia,
          desenvolvimento de software e entusiasta de Código Aberto.
        </p>
      </div>
    </div>
  )
}
