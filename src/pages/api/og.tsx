import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "edge"
}

const IMAGE_DIMENSIONS = { width: 1200, height: 628 }

const noParamsImage = new ImageResponse(
  <p>Visite com &quot;?title=title&quot;</p>,
  IMAGE_DIMENSIONS
)

export default async function handler(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const url = "https://pauloruan.dev"
  const title = searchParams.get("title") || "Desenvolvedor Backend"
  const path = searchParams.get("path") || ""
  const author = "Paulo Ruan"

  if (!title || !author) {
    return noParamsImage
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to bottom, #7dd3fc, #0369a1)"
        }}
      >
        <div
          style={{
            display: "flex",
            height: "30%",
            width: "98%",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "start",
            padding: "20px",
            backgroundColor: "#fff",
            backdropFilter: "blur(90%)",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            margin: "10px"
          }}
        >
          <h1
            style={{
              color: "#09090b",
              fontSize: 40,
              letterSpacing: 1,
              fontWeight: 900,
              padding: 0,
              margin: 0
            }}
          >
            {author}
          </h1>
          <h2
            style={{
              color: "#09090b",
              fontSize: 28,
              letterSpacing: 1,
              fontWeight: 600
            }}
          >
            {title}
          </h2>
          <span
            style={{
              color: "#09090b",
              fontSize: 20,
              letterSpacing: 2,
              fontWeight: 300
            }}
          >
            {url.concat(path)}
          </span>
        </div>
      </div>
    ),
    IMAGE_DIMENSIONS
  )
}
