import { GlobalContext } from "@contexts/GlobalContext"
import { useContext } from "react"
import { BsSearch } from "react-icons/bs"

export function Search(): JSX.Element {
  const { setSearchValue, searchValue } = useContext(GlobalContext)

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setSearchValue(value)
  }

  return (
    <div className="w-full h-full flex flex-row flex-nowrap items-center justify-start my-2 px-2 py-1 bg-cod-gray-200 dark:bg-cod-gray-800 rounded-sm">
      <BsSearch className="w-4 h-4 mr-2 text-cod-gray-900 dark:text-cod-gray-50" />
      <input
        type="search"
        className="block w-full rounded-sm border-0 bg-transparent px-1 py-2 focus:outline-none focus:ring-0 focus:border-transparent text-cod-gray-900 dark:text-cod-gray-50 placeholder:text-sm placeholder-cod-gray-900 dark:placeholder-cod-gray-50 placeholder:opacity-70"
        onChange={(event) => handleSearch(event)}
        placeholder="Buscar post"
        value={searchValue}
      />
    </div>
  )
}
