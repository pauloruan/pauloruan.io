import { RecentProjects } from "@components/RecentProjects"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("RecentBuilding", (): void => {
  it("should render the projects section", (): void => {
    render(<RecentProjects />)

    const title = screen.getByRole("heading", { name: "Projetos", level: 2 })
    expect(title).toBeDefined()
  })
})
