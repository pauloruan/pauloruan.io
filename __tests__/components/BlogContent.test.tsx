import { BlogContent } from "@components/BlogContent"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("BlogContent", (): void => {
  it("should render the NoPosts component", (): void => {
    render(<BlogContent />)
    const noPosts = screen.getByText("Nenhum post encontrado.")

    expect(noPosts).toBeDefined()
  })
})
