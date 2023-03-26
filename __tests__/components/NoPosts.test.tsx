import { NoPosts } from "@components/NoPosts"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("NoPosts", (): void => {
  it("should render the no posts message", (): void => {
    render(<NoPosts />)
    const message = screen.getByText(/Nenhum post encontrado./i)

    expect(message).toBeDefined()
  })
})
