import { PostsList } from "@components/PostsList"
import mock from "@mocks/post.mock"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("PostsList", () => {
  it("should render the posts list", () => {
    render(<PostsList posts={[mock]} />)
    const postsList = screen.getByRole("list")
    const postCard = screen.getByText("Post Title")

    expect(postsList).toBeDefined()
    expect(postCard).toBeDefined()
  })
})
