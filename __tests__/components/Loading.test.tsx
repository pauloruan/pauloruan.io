import { Loading } from "@/components/shared/Loading"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("Loading", (): void => {
  it("should render the loading", (): void => {
    render(<Loading />)
    const loading = screen.getByText("Carregando...", { exact: true })

    expect(loading).toBeDefined()
  })
})
