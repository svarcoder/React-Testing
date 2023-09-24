import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello Guest')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a name', () => {
    render(<Greet name="svarcoder" />)
    const textElement = screen.getByText('Hello svarcoder')
    expect(textElement).toBeInTheDocument()
  })
})
