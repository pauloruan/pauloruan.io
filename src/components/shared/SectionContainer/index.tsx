import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton"

export function SectionContainer({ children }: ISectionContainerProps) {
  return (
    <section className="box-border w-full h-full min-h-[80vh] max-w-[666px] mx-auto flex flex-col items-start justify-start my-2 px-4 py-2">
      <div className="min-h-[70vh] h-full w-full flex flex-col items-start justify-start">
        {children}
      </div>
      <ScrollToTopButton />
    </section>
  )
}
