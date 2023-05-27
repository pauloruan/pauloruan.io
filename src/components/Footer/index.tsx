export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="box-border w-full max-w-[666px] mx-auto h-12 flex flex-col flex-nowrap items-start justify-center text-center font-sans text-sm px-4 py-2">
      <p className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200">
        &copy; {currentYear} • Paulo Ruan
      </p>
      <p className="max-w-max font-sans text-sm font-normal text-left text-cod-gray-800 dark:text-cod-gray-200">
        Desenvolvido com Next.js & Tailwind CSS.
      </p>
    </footer>
  )
}
