import { NotFoundContent } from "@components/NotFoundContent"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("NotFoundContent", () => {
  it("should render the not found content", () => {
    render(<NotFoundContent />)
    const image = screen.getByRole("img")
    const notFoundContent = screen.getByRole("link")

    expect(image).toBeDefined()
    expect(notFoundContent).toBeDefined()
  })
})
