export function Buttons({ children }: MenuProps): JSX.Element {
  return (
    <div className="flex flex-row max-w-max h-full justify-between items-center text-center gap-2">
      {children}
    </div>
  )
}
