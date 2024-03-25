import { MaintenanceContent } from "@/components/MaintenanceContent"
import { SectionContainer } from "@/components/shared/SectionContainer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Em manutenção"
}

export default function Snippets() {
  return (
    <SectionContainer>
      <MaintenanceContent />
    </SectionContainer>
  )
}
