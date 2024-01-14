import { PostContainer } from "@/components/PostContainer"
import mock from "@mocks/post.mock"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("PostContainer", (): void => {
  it("should render the post container", (): void => {
    render(<PostContainer post={mock} />)

    const title = screen.getByText(mock.title)
    const body = screen.getByText(mock.body[0].children[0].text)

    expect(title).toBeDefined()
    expect(body).toBeDefined()
  })
})
