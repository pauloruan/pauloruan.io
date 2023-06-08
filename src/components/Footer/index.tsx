export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="box-border w-full max-w-[666px] mx-auto h-12 flex flex-col flex-nowrap items-start justify-center text-center font-sans text-xs px-4 py-2">
      <p className="max-w-max font-sans font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 leading-relaxed tracking-wide">
        &copy; <time>{currentYear}</time> • Paulo Ruan
      </p>
      <p className="max-w-max font-sans font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 leading-relaxed tracking-wide">
        Desenvolvido com Next.js & Tailwind CSS.
      </p>
    </footer>
  )
}
