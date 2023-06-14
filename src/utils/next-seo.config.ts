import { DefaultSeoProps } from "next-seo"

const title = "Paulo Ruan"
const description =
  "Portfólio de Paulo Ruan Desenvolvedor Web, apaixonado por tecnologia e programação."

const config: DefaultSeoProps = {
  title,
  description,
  canonical: "https://pauloruan.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pauloruan.vercel.app",
    siteName: "Paulo Ruan",
    title,
    description,
    images: [
      {
        url: "https://pauloruan.vercel.app/api/og",
        width: 1200,
        height: 628,
        alt: "Og Image Alt",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image"
  }
}

export default config
