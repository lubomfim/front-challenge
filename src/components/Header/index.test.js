import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import 'jest-styled-components'
import '@testing-library/jest-dom'

import Header from './index'

const HeaderComponent = (props) => {
  const history = createMemoryHistory()
  return (
    <Router location={history.location} navigator={history}>
      <Header {...props}></Header>
    </Router>
  )
}

describe('Header', () => {
  test('should render component without crash', () => {
    render(<HeaderComponent />)
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument()
  })

  test('should render besides on props', () => {
    render(<HeaderComponent path="/home" showUser={false} showLogo={false} title="Title" />)
    const header = screen.getByTestId('header')
    const title = screen.getByTestId('header-title')

    expect(header).toBeInTheDocument()
    expect(screen.queryByTestId('header-logo')).not.toBeInTheDocument()
    expect(screen.queryByTestId('header-user')).not.toBeInTheDocument()
    expect(screen.getByTestId('header-back')).toBeInTheDocument()
    expect(title).toHaveTextContent('Title')
  })

  test('should render the right grid cols style', () => {
    render(
      <HeaderComponent path="/home" showUser={false} showLogo={false} title="Title" grid={2} />
    )
    const header = screen.getByTestId('header')

    expect(header).toHaveStyle('grid-template-columns: repeat(2,1fr)')
  })
})
