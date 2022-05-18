import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import 'jest-styled-components'
import '@testing-library/jest-dom'

import Modal from './index'

describe('Modal', () => {
  test('should render component without crash', () => {
    render(<Modal />)
    const modal = screen.getByTestId('modal')

    expect(modal).toBeInTheDocument()
  })

  test('should render button and fire event when clicked', () => {
    let handleConfirm = jest.fn()
    let handleBack = jest.fn()
    render(
      <Modal
        handleConfirm={handleConfirm}
        handleBack={handleBack}
        textConfirm="Confirm"
        textBack="Back"
      />
    )
    const modal = screen.getByTestId('modal')
    const confirm = screen.getByText('Confirm')
    const back = screen.getByText('Back')

    userEvent.click(confirm)
    userEvent.click(back)

    expect(modal).toBeInTheDocument()
    expect(handleConfirm).toHaveBeenCalledTimes(1)
    expect(handleConfirm).toHaveBeenCalledTimes(1)
  })
})
