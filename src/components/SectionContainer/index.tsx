import { ScrollToTopButton } from "@components/ScrollToTopButton"

export function SectionContainer(props: SectionContainerProps): JSX.Element {
  return (
    <section className="box-border w-full h-full min-h-[80vh] max-w-[666px] mx-auto flex flex-col items-start justify-center my-2 px-4 py-2">
      {props.title && (
        <h1 className="max-w-max h-full font-sans text-3xl font-black text-left py-1 text-black dark:text-white leading-relaxed tracking-tight">
          {props.title}
        </h1>
      )}
      {props.subtitle && (
        <h2 className="max-w-max h-full font-sans text-base font-normal text-left py-1 text-cod-gray-900/70 dark:text-cod-gray-50/50 leading-relaxed tracking-tight">
          {props.subtitle}
        </h2>
      )}
      <div className="min-h-[76vh] h-full w-full flex flex-col items-start">
        {props.children}
      </div>
      <ScrollToTopButton />
    </section>
  )
}
