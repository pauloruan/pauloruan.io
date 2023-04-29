import { PostCard } from "@components/PostCard"
import mock from "@mocks/post.mock"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("PostCard", (): void => {
  it("should render the post card", (): void => {
    render(<PostCard {...mock} />)

    const title = screen.getByRole("heading", { name: mock.title, level: 3 })
    const subtitle = screen.getByRole("heading", {
      name: mock.subtitle,
      level: 4
    })

    expect(title).toBeDefined()
    expect(subtitle).toBeDefined()
  })
})
