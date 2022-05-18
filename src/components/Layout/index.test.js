import React from 'react'
import { render, screen } from '@testing-library/react'

import 'jest-styled-components'
import '@testing-library/jest-dom'
import Layout from './index'
import { UserProvider } from '../../contexts/UserContext'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const LayoutComponent = (props) => {
  const history = createMemoryHistory()
  return (
    <Router location={history.location} navigator={history}>
      <Layout {...props} />
    </Router>
  )
}

describe('Layout', () => {
  test('should render component without crash', () => {
    render(
      <UserProvider>
        <LayoutComponent />
      </UserProvider>
    )
    const layout = screen.getByTestId('layout')

    expect(layout).toBeInTheDocument()
  })
})
