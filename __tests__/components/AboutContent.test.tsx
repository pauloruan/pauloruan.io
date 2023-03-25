import { AboutContent } from "@components/AboutContent"
import mock from "@mocks/aboutContent.mock"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("AboutContent", () => {
  it("should render the component", () => {
    render(<AboutContent {...mock} />)

    const title = screen.getByText(mock.title)
    const pronouns = screen.getByText(mock.pronouns)
    const location = screen.getByText(mock.location)
    const occupation = screen.getByText(mock.occupation)
    const interests = screen.getByText(mock.interests)
    const content = screen.getByText(mock.content[0].children[0].text)

    expect(title).toBeInTheDocument()
    expect(pronouns).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(occupation).toBeInTheDocument()
    expect(interests).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
