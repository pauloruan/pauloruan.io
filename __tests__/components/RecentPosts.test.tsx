import { RecentPosts } from "@components/RecentPosts"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("RecentBuilding", (): void => {
  it("should render the posts section", (): void => {
    render(<RecentPosts />)

    const title = screen.getByRole("heading", { name: "Textos", level: 2 })
    expect(title).toBeDefined()
  })
})
