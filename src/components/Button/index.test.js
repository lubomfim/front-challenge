import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Button from './index'
import userEvent from '@testing-library/user-event'

import 'jest-styled-components'
import '@testing-library/jest-dom'

describe('Button', () => {
  test('should render component without crash', () => {
    render(<Button>Clique</Button>)
    const button = screen.getByTestId('button')

    expect(button).toHaveTextContent('Clique')
    expect(button).toBeInTheDocument()
  })

  test('should render besides on props', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Button path="/home" variant="primary">
          Clique
        </Button>
      </Router>
    )
    const button = screen.getByRole('link')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/home')
    expect(button).toHaveStyle('background-color: #000')
  })

  test('should call onClick function when button is clicked', () => {
    const fn = jest.fn()

    render(
      <Button variant="primary" onClick={fn}>
        Clique
      </Button>
    )
    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
