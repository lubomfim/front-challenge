import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import 'jest-styled-components'
import '@testing-library/jest-dom'
import ToggleBoxes from './index'

const mock = [
  {
    title: 1,
    code: 1,
    selected: false
  },
  {
    title: 2,
    code: 2,
    selected: true
  },
  'testing'
]

describe('ToggleBoxes', () => {
  test('should render component without crash', () => {
    render(<ToggleBoxes />)
    const toggleBoxes = screen.getByTestId('toggleboxes')

    expect(toggleBoxes).toBeInTheDocument()
  })

  test('should render the right length of child', () => {
    render(<ToggleBoxes list={mock} />)
    const toggleBoxes = screen.getByTestId('toggleboxes')
    const boxes = screen.getAllByTestId('boxes')

    expect(toggleBoxes).toBeInTheDocument()
    expect(boxes).toHaveLength(mock.length)
  })

  test('should call onClick function on each child', () => {
    const fn = jest.fn()
    render(<ToggleBoxes list={mock} onClick={fn} />)
    const toggleBoxes = screen.getByTestId('toggleboxes')
    const boxes = screen.getAllByTestId('boxes')

    for (let i = 0; i < boxes.length; i++) {
      userEvent.click(boxes[i])
    }

    expect(toggleBoxes).toBeInTheDocument()
    expect(fn).toHaveBeenCalledTimes(3)
  })
})
