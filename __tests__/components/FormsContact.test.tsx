import { FormContact } from "@components/FormsContact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("FormContact", (): void => {
  it("should render the form contact", (): void => {
    render(<FormContact />)
    const heading = screen.getByRole("heading", { level: 3 })
    const form = screen.getByRole("form")
    const inputName = screen.getByLabelText("Nome:")
    const inputEmail = screen.getByLabelText("E-mail:")
    const inputMessage = screen.getByLabelText("Mensagem:")
    const button = screen.getByRole("button")

    expect(form).toBeDefined()
    expect(heading).toBeDefined()
    expect(inputName).toBeDefined()
    expect(inputEmail).toBeDefined()
    expect(inputMessage).toBeDefined()
    expect(button).toBeDefined()
  })
})
