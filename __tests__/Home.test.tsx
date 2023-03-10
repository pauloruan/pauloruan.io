import Home from "@pages/index"
import { render, screen, within } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("Home", (): void => {
  test("renders the home page", (): void => {
    render(<Home />)
    const heading = within(screen.getByRole("heading", { level: 1 })).getByText(
      "Paulo Ruan"
    )
    const subheading = within(
      screen.getByRole("heading", { level: 2 })
    ).getByText("Desenvolvedor Full Stack")

    expect(heading).toBeDefined()
    expect(subheading).toBeDefined()
  })
})
