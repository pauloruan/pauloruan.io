export function Container({ children }: IPostsProps): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-between items-start min-h-[280px]">
      {children}
    </div>
  )
}
