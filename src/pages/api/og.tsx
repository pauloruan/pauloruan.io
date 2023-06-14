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
  const url = "https://pauloruan.vercel.app"
  const title = searchParams.get("title") || "Paulo Ruan - Desenvolvedor Web"
  const path = searchParams.get("path") || "/"
  const author = "Paulo Ruan"

  if (!title || !author) {
    return noParamsImage
  }

  return new ImageResponse(
    (
      <div tw="flex w-full h-full flex-col justify-center items-center font-sans bg-[#121212] text-[#e3e3e3]">
        <div tw="flex text-[4rem] mb-4 font-black font-sans">{title}</div>
        <div tw="flex flex-row justify-center items-center text-[#a4a4a4] font-bold">
          <div tw="flex text-[2.5rem]">{author}</div>
          <div tw="flex text-[2.5rem] text-[#e3e3e3] mx-4">|</div>
          <div tw="flex text-[2.5rem]">{url.concat(path)}</div>
        </div>
      </div>
    ),
    IMAGE_DIMENSIONS
  )
}
