import { PostCard } from "@components/PostCard"
import mock from "@mocks/post.mock"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("PostCard", (): void => {
  it("should render the post card", (): void => {
    render(<PostCard {...mock} />)

    const title = screen.getByRole("heading", { name: mock.title })
    const date = screen.getByText(`1 min de leitura • ${mock.date}`)

    expect(title).toBeDefined()
    expect(date).toBeDefined()
  })
})
