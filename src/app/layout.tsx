import { Footer } from "@/components/shared/Footer"
import { Header } from "@/components/shared/Header"
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton"
import { cn } from "@/lib/utils"
import ProgressBarProvider from "@/providers/progress-bar"
import ReactQueryProvider from "@/providers/react-query"
import ThemeProvider from "@/providers/theme"
import "@/styles/globals.css"
import type { Metadata } from "next"

import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true
})
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: "Paulo Ruan",
    template: "%s | Paulo Ruan"
  },
  description:
    "Portfólio de Paulo Ruan. Desenvolvedor Backend, apaixonado por programação e tecnologia.",
  icons: {
    icon: "/favicon.ico"
  },
  robots: {
    follow: true,
    index: true
  },
  openGraph: {
    locale: "pt-br",
    type: "website",
    url: "https://pauloruan.dev",
    siteName: "Paulo Ruan",
    images: [
      {
        url: "https://pauloruan.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Paulo Ruan"
      }
    ]
  },
  twitter: {
    images: [
      {
        url: "https://pauloruan.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Paulo Ruan"
      }
    ]
  }
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen w-full bg-background dark:bg-background",
          inter.variable,
          jetBrainsMono.variable
        )}
      >
        <ThemeProvider>
          <ProgressBarProvider>
            <ReactQueryProvider>
              <Header />
              {children}
              <Footer />
              <ScrollToTopButton />
            </ReactQueryProvider>
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
