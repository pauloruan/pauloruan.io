import { Menu } from "@/components/shared/Header/Menu"
import { ThemeToggleButton } from "@/components/shared/Header/ThemeToggleButton"
import { navLinks } from "@/utils/navLinks"

export function Header(): JSX.Element {
  return (
    <header className="box-border w-full max-w-[666px] mx-auto my-2 h-12 flex flex-col items-center justify-center">
      <Menu.Container>
        <Menu.Nav>
          <Menu.Links links={navLinks} />
        </Menu.Nav>
        <Menu.Buttons>
          <ThemeToggleButton />
        </Menu.Buttons>
      </Menu.Container>
    </header>
  )
}
