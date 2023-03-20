import { ButtonToggleTheme } from "@components/ButtonToggleTheme"
import { Menu } from "@components/Menu"
import { navLinks } from "@utils/navLinks"

export function Header(): JSX.Element {
  return (
    <header className="box-border w-full md:w-[80vw] h-12 flex flex-row flex-nowrap items-center justify-between px-1 sm:px-8 md:px-24 lg:px-36">
      <Menu links={navLinks} />
      <div className="flex flex-row justify-between items-center text-center gap-2">
        <ButtonToggleTheme />
      </div>
    </header>
  )
}
