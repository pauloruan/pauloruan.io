import { Loading } from "@components/Loading"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Loading", (): void => {
  it("should render the loading", (): void => {
    render(<Loading />)
    const loading = screen.getByText("Carregando...", { exact: true })

    expect(loading).toBeDefined()
  })
})
