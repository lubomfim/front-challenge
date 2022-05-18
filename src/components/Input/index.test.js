import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import 'jest-styled-components'
import '@testing-library/jest-dom'

import Input from './index'

describe('Input', () => {
  test('should render component without crash', () => {
    render(<Input />)
    const inputContainer = screen.getByTestId('input-container')
    const input = screen.getByTestId('input')

    expect(inputContainer).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  test('should render besides on props', () => {
    render(<Input as="select" label="Label" error={true} />)

    const input = screen.getByTestId('select')
    const label = screen.getByText('Label')
    const error = screen.getByTestId('error')

    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('error')
    expect(label).toBeInTheDocument()
    expect(error).toBeInTheDocument()
  })

  test('should change value', () => {
    const fn = jest.fn()

    render(<Input onChange={fn} />)

    const input = screen.getByTestId('input')

    fireEvent.change(input, {
      target: { value: 'testing' }
    })

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('testing')

    render(<Input onChange={fn} as="select" options={['testing']} />)

    const select = screen.getByTestId('select')

    fireEvent.change(select, {
      target: { value: 'testing' }
    })

    expect(select).toHaveValue('testing')
  })
})
