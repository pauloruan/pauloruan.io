import { socialMedias } from "@/utils/socialMedias"
import { LinkCard } from "../LinkCard"

export function SocialMediaList(): JSX.Element {
  const orderedSocialMedias = socialMedias
    .slice()
    .filter(({ name }: ISocialMedia) => name !== "Email")
    .sort((a, b) => a.order - b.order)

  return (
    <div className="w-48 flex flex-row justify-start items-center py-2 gap-2">
      {orderedSocialMedias.map((media: ISocialMedia) => (
        <LinkCard key={media.slug} data={media} />
      ))}
    </div>
  )
}
