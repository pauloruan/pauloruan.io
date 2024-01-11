import { ButtonToggleTheme } from "@components/ButtonToggleTheme"
import { LogoLink } from "@components/LogoLink"
import { Menu } from "@components/Menu"
import { navLinks } from "@utils/navLinks"

export function Header(): JSX.Element {
  return (
    <header className="box-border w-full max-w-[666px] mx-auto h-12 flex flex-col items-center justify-center border-0 border-b border-cod-gray-300 dark:border-cod-gray-600">
      <div className="w-[96%] h-full px-2 py-2 flex flex-row flex-nowrap items-center justify-between">
        <LogoLink />
        <Menu.Container>
          {navLinks.map((link: NavLink) => (
            <Menu.Item key={link.path} {...link} />
          ))}
        </Menu.Container>
        <Menu.Buttons>
          <ButtonToggleTheme />
        </Menu.Buttons>
      </div>
    </header>
  )
}
