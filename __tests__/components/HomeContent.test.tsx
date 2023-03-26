import { HomeContent } from "@components/HomeContent"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("HomeContent", (): void => {
  it("should render the home content", (): void => {
    render(<HomeContent />)
    const hero = screen.getByRole("heading", { level: 1 })
    const recentPosts = screen.getByText("Últimos textos que escrevi", {
      exact: true
    })
    const recentProjects = screen.getByText("Últimos projetos que construí", {
      exact: true
    })

    expect(hero).toBeDefined()
    expect(recentPosts).toBeDefined()
    expect(recentProjects).toBeDefined()
  })
})
