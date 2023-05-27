import { ButtonToggleTheme } from "@components/ButtonToggleTheme"
import { LogoLink } from "@components/LogoLink"
import { Menu } from "@components/Menu"
import { navLinks } from "@utils/navLinks"

export function Header(): JSX.Element {
  return (
    <header className="box-border w-full max-w-[666px] mx-auto h-12 flex flex-row flex-nowrap items-center justify-between px-4 py-2">
      <LogoLink />
      <Menu links={navLinks} />
      <div className="flex flex-row justify-between items-center text-center gap-2">
        <ButtonToggleTheme />
      </div>
    </header>
  )
}
