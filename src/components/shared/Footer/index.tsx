import { NowPlaying } from "@/components/shared/Footer/NowPlaying"

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="box-border w-full max-w-[666px] mx-auto h-32 flex flex-col flex-nowrap items-start justify-between text-center font-sans text-xs px-4 py-4 my-2 border-0 border-t border-cod-gray-300 dark:border-cod-gray-600">
      <NowPlaying />
      <div className="max-w-max font-sans font-normal text-left text-cod-gray-800 dark:text-cod-gray-200 leading-relaxed tracking-wide">
        <p>
          &copy; <time>2023</time> - <time>{currentYear}</time> • Paulo Ruan
        </p>
        <p>Desenvolvido com Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
