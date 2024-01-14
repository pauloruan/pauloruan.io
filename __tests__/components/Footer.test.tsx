import { Footer } from "@/components/shared/Footer"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Footer", (): void => {
  it("should render the footer", (): void => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    const footer = screen.getByRole("contentinfo")
    const paragraph = screen.getByText(`© ${currentYear} • Paulo Ruan`)

    expect(footer).toBeDefined()
    expect(paragraph).toBeDefined()
  })
})
