import React from 'react'
import { render, screen } from '@testing-library/react'

import 'jest-styled-components'
import '@testing-library/jest-dom'
import Loader from './index'

describe('Loader', () => {
  test('should render component without crash', () => {
    render(<Loader />)
    const loader = screen.getByTestId('loader')

    expect(loader).toBeInTheDocument()
  })
})
