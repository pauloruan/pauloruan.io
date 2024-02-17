export function Container({ children }: IMenuProps): JSX.Element {
  return (
    <div className="w-[96%] px-2 h-full flex flex-row flex-nowrap items-center justify-between">
      {children}
    </div>
  )
}
