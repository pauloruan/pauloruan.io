"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

interface IReactQueryProviderProps {
  children: React.ReactNode
}

function ReactQueryProvider({ children }: IReactQueryProviderProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
