import { Menu } from ".."

export function Links({ links }: IMenuLinksProps): JSX.Element {
  return (
    <div className="flex flex-row justify-start items-center space-x-1">
      {links.map((link: INavLink) => (
        <Menu.Item key={link.path} {...link} />
      ))}
    </div>
  )
}
