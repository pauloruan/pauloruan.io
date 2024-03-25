import { Typography } from "@/components/Typography"

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Typography.H1 className="animate-pulse">Carregando...</Typography.H1>
    </div>
  )
}
