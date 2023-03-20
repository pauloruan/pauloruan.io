export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="box-border w-full md:w-[80vw] h-12 flex flex-col flex-nowrap items-start justify-center text-center font-sans px-1 sm:px-8 md:px-24 lg:px-36">
      <p className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200">
        &copy; {currentYear} • Paulo Ruan
      </p>
      <p className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200">
        Desenvolvido com Next.js & Tailwind CSS.
      </p>
    </footer>
  )
}
