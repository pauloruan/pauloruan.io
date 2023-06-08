export function Buttons({ children }: MenuProps): JSX.Element {
  return (
    <div className="flex flex-row max-w-max h-full justify-between items-center text-center gap-2 before:content-[''] before:w-[2px] before:h-[50%] md:before:h-[60%] before:bg-cod-gray-800/50 dark:before:bg-cod-gray-200/50">
      {children}
    </div>
  )
}
