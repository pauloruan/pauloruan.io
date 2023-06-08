import Link from "next/link"

export function SocialLink({ href, target, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      passHref
      className="text-sm font-sans text-black dark:text-white h-8 max-w-max px-2 bg-cod-gray-200 dark:bg-cod-gray-800 rounded-md flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300"
      target={target}
    >
      {icon}
      {label}
    </Link>
  )
}
