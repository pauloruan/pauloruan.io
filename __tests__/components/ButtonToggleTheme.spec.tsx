import { ButtonToggleTheme } from "@components/ButtonToggleTheme"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("ButtonToggleTheme", (): void => {
  it("should render the button", (): void => {
    render(<ButtonToggleTheme />)
    const button = screen.getByRole("switch")

    expect(button).toBeDefined()
  })
})
