import { useEffect, useState } from "react"
import { BsArrowUpShort } from "react-icons/bs"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const visibility = isVisible ? "opacity-100" : "opacity-0 pointer-events-none"

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setIsVisible(scrollTop > 0)
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <button
      className={`md:hidden fixed flex items-center justify-center bottom-4 right-4 p-2 rounded-full font-bold bg-cod-gray-800 text-white dark:bg-cod-gray-200 dark:text-black transition-opacity ease-in-out duration-300 ${visibility}`}
      type="button"
      title="Voltar ao topo"
      onClick={scrollToTop}
    >
      <BsArrowUpShort className="w-4 h-4" />
    </button>
  )
}
