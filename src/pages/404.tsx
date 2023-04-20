import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { NotFoundContent } from "@components/NotFoundContent"
import { SectionContainer } from "@components/SectionContainer"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"

export default function NotFound(): JSX.Element {
  return (
    <motion.div
      className="bg-cod-gray-100 dark:bg-cod-gray-900 flex min-h-screen w-full flex-col items-center justify-between py-2 px-4 md:py-4 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0,
        ease: "easeInOut"
      }}
    >
      <NextSeo
        title="Página não encontrada - Paulo Ruan"
        description="Portfólio de Paulo Ruan, desenvolvedor web e estudante de Engenharia de Software."
        canonical="https://pauloruan.vercel.app/404"
        openGraph={{
          url: "https://pauloruan.vercel.app/404",
          title: "Página não encontrada - Paulo Ruan",
          description:
            "Portfólio de Paulo Ruan, desenvolvedor web e estudante de Engenharia de Software.",
          images: [
            {
              url: "https://pauloruan.vercel.app/og-image.png",
              width: 1200,
              height: 628,
              alt: "Página não encontrada - Paulo Ruan"
            }
          ],
          site_name: "Página não encontrada - Paulo Ruan"
        }}
      />
      <Header />
      <SectionContainer title="Página não encontrada">
        <NotFoundContent />
      </SectionContainer>
      <Footer />
    </motion.div>
  )
}
