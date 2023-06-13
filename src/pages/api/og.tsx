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
  const title = searchParams.get("title") || "Paulo Ruan - Desenvolvedor Web"
  const path = searchParams.get("path") || "https://pauloruan.vercel.app"
  const author = "Paulo Ruan"

  if (!title || !author) {
    return noParamsImage
  }

  return new ImageResponse(
    (
      <div
        tw={`flex w-full h-full flex-col justify-center items-center font-sans bg-black text-gray-200`}
      >
        <div tw="flex text-5xl mb-4">{title}</div>
        <div tw="flex flex-row">
          <div tw="flex mx-2 text-2xl text-gray-500 dark:text-gray-300 italic">
            {author}
          </div>
          <div tw="flex text-2xl">|</div>
          <div tw="flex text-2xl mx-2">{path}</div>
        </div>
      </div>
    ),
    IMAGE_DIMENSIONS
  )
}
