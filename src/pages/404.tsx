import { Animation } from "@components/Animation"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { NotFoundContent } from "@components/NotFoundContent"
import { SectionContainer } from "@components/SectionContainer"

export default function NotFound(): JSX.Element {
  return (
    <main className="min-h-screen w-full bg-cod-gray-100 dark:bg-cod-gray-900">
      <Animation>
        <Header />
        <SectionContainer title="Página não encontrada">
          <NotFoundContent />
        </SectionContainer>
        <Footer />
      </Animation>
    </main>
  )
}
