import { HomeContent } from "@/components/home/HomeContent"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("HomeContent", (): void => {
  it("should render the home content", (): void => {
    render(<HomeContent />)
    const hero = screen.getByRole("heading", { level: 1 })

    expect(hero).toBeDefined()
  })
})
