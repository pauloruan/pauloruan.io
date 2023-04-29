import { SectionContainer } from "@components/SectionContainer"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("SectionContainer", (): void => {
  it("should render the section container", (): void => {
    render(
      <SectionContainer title="Title Test" subtitle="Subtitle Test">
        <p>Text Test</p>
      </SectionContainer>
    )
    const heading = screen.getByRole("heading", { level: 1 })
    const subheading = screen.getByRole("heading", { level: 2 })
    const paragraph = screen.getByText("Text Test")

    expect(heading).toBeDefined()
    expect(subheading).toBeDefined()
    expect(paragraph).toBeDefined()
  })
})
