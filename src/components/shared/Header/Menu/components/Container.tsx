export function Container({ children }: IMenuProps): JSX.Element {
  return (
    <nav className="w-64 flex flex-row justify-center items-center">
      {children}
    </nav>
  )
}
