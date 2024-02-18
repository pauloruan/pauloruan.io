import { NowPlaying } from "@/components/shared/Footer/NowPlaying"

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="box-border w-full max-w-[666px] mx-auto h-32 flex flex-col flex-nowrap items-start justify-between text-center font-sans text-xs px-4 py-4 my-2">
      <div className="w-full h-full flex flex-col justify-center items-start my-1 py-1 px-2 space-y-1">
        <NowPlaying />
        <div className="max-w-max font-sans font-normal text-left text-primary dark:text-primary leading-relaxed tracking-wide">
          <p>
            &copy; <time>2023</time> - <time>{currentYear}</time> • Paulo Ruan
          </p>
          <p>Desenvolvido com Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
