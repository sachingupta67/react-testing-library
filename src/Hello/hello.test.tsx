import { render, screen } from '@testing-library/react'
import { Hello } from './index'

describe('Hello component', () => {
  it('renders with correct text', () => {
    render(<Hello name="Sachin" />)
    expect(screen.getByText('Hello, Sachin!')).toBeInTheDocument()
  })
})
