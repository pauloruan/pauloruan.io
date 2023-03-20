import { SectionContainerProps } from "@types"

export function SectionContainer(props: SectionContainerProps): JSX.Element {
  return (
    <section className="box-border w-full md:w-[80vw] min-h-[50vh] flex flex-col items-start justify-center my-1 md:my-4 px-1 sm:px-8 md:px-24 lg:px-36">
      {props.title && (
        <h1 className="max-w-max h-full font-sans text-4xl font-black text-left my-1 py-1 text-black dark:text-white">
          {props.title}
        </h1>
      )}
      {props.subtitle && (
        <h2 className="max-w-max h-full font-sans text-2xl font-bold text-left py-1 my-1 text-cod-gray-900 dark:text-cod-gray-50">
          {props.subtitle}
        </h2>
      )}
      <div className="w-full flex flex-col items-start">{props.children}</div>
    </section>
  )
}
