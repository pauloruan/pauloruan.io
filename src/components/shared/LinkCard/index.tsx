import Link from "next/link"

export function LinkCard({ data }: ILinkCardProps): JSX.Element {
  const { url, name, renderLabel, label, icon: Icon } = data

  return (
    <Link
      href={url}
      passHref
      target="_blank"
      title={`Visitar ${name}`}
      aria-label={`Visitar ${name}`}
      className="p-2 max-h-max max-w-max flex flex-row items-center justify-center text-center gap-1 text-primary dark:text-primary font-sans text-sm font-normal transition-all duration-300 ease-in-out group rounded-md bg-card dark:bg-card hover:underline cursor-pointer shadow-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground border"
    >
      <Icon className="h-4 w-4 text-primary dark:text-primary text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-accent-foreground dark:group-hover:text-accent-foreground" />
      {renderLabel ? label : name}
    </Link>
  )
}
