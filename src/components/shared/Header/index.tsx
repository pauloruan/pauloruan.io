import { ButtonToggleTheme } from "@/components/shared/Header/ButtonToggleTheme"
import { LogoLink } from "@/components/shared/Header/LogoLink"
import { Menu } from "@/components/shared/Header/Menu"
import { navLinks } from "@/utils/navLinks"

export function Header(): JSX.Element {
  return (
    <header className="box-border w-full max-w-[666px] mx-auto my-2 h-12 flex flex-col items-center justify-center border-0 border-b border-cod-gray-300 dark:border-cod-gray-600">
      <div className="w-[96%] h-full px-2 py-2 flex flex-row flex-nowrap items-center justify-between">
        <LogoLink />
        <Menu.Container>
          {navLinks.map((link: INavLink) => (
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
