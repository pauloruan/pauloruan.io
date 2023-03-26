import { PostsList } from "@components/PostsList"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import mock from "@mocks/post.mock"

describe("PostsList", () => {
  it("should render the posts list", () => {
    render(<PostsList posts={[mock]} />)
    const postsList = screen.getByRole("list")
    const postCard = screen.getByText("Post Title")

    expect(postsList).toBeDefined()
    expect(postCard).toBeDefined()
  })
})
