import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
  NEXT_PUBLIC_SANITY_DATASET: z.string(),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string(),
  NEXT_PUBLIC_SANITY_WEBHOOK_SECRET: z.string(),
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: z.string(),
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: z.string(),
  NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: z.string(),
  NEXT_PUBLIC_NOTION_API_KEY: z.string(),
  NEXT_PUBLIC_NOTION_DATABASE_ID: z.string()
})

export const env = envSchema.parse(process.env)
