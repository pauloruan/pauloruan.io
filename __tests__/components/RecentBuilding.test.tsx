import { RecentBuilding } from "@components/RecentBuilding"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("RecentBuilding", (): void => {
  it("should render the building projects section", (): void => {
    render(<RecentBuilding />)

    const title = screen.getByRole("heading", { name: "Construindo", level: 2 })
    expect(title).toBeDefined()
  })
})
