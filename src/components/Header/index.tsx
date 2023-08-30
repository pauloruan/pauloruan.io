import { ButtonToggleTheme } from "@components/ButtonToggleTheme"
import { LogoLink } from "@components/LogoLink"
import { Menu } from "@components/Menu"
import { navLinks } from "@utils/navLinks"

export function Header(): JSX.Element {
  return (
    <header className="box-border w-[96%] max-w-[666px] mx-auto h-12 flex flex-row flex-nowrap items-center justify-between px-4 py-2 my-2 shadow-md rounded-sm bg-cod-gray-200 dark:bg-cod-gray-800">
      <LogoLink />
      <Menu.Container>
        {navLinks.map((link: NavLink) => (
          <Menu.Item key={link.path} {...link} />
        ))}
      </Menu.Container>
      <Menu.Buttons>
        <ButtonToggleTheme />
      </Menu.Buttons>
    </header>
  )
}
