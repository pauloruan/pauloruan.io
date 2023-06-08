export function Container({ children }: MenuProps): JSX.Element {
  return (
    <nav className="w-64 flex flex-row justify-center items-center">
      {children}
    </nav>
  )
}
