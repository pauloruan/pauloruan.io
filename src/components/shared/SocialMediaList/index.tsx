import { socialMedias } from "@/utils/socialMedias"
import { LinkCard } from "../LinkCard"

export function SocialMediaList(): JSX.Element {
  const orderedSocialMedias = socialMedias
    .slice()
    .sort((a, b) => a.order - b.order)

  return (
    <div className="flex flex-row justify-between items-center my-4 w-64">
      {orderedSocialMedias.map((media: ISocialMedia) => (
        <LinkCard key={media.slug} linkData={media} />
      ))}
    </div>
  )
}