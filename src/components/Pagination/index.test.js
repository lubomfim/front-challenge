import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import 'jest-styled-components'
import '@testing-library/jest-dom'
import Pagination from './index'

describe('Pagination', () => {
  test('should render component without crash', () => {
    render(<Pagination />)
    const loader = screen.getByTestId('pagination')

    expect(loader).toBeInTheDocument()
  })
})
