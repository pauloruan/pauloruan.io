import Link from "next/link"

export function LinkCard({ linkData }: ILinkCardProps): JSX.Element {
  const { url, name, renderLabel, label, icon: Icon } = linkData

  return (
    <Link
      href={url}
      passHref
      target="_blank"
      className="p-2 max-h-max max-w-max flex flex-row items-center justify-center text-center gap-1 text-black dark:text-white text-sm font-normal transition-all duration-300 ease-in-out hover:text-black/60 dark:hover:text-white/60 hover:underline hover:underline-offset-2 group"
    >
      <Icon className="h-4 w-4 text-black dark:text-white text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-black/60 dark:group-hover:text-white/60" />
      {renderLabel ? label : name}
    </Link>
  )
}
