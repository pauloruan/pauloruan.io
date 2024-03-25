import { NotFoundContent } from "@/components/NotFoundContent"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página não encontrada"
}

export default function NotFound() {
  return (
    <SectionContainer>
      <NotFoundContent />
    </SectionContainer>
  )
}
