import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/index'
import GlobalBase from './constants/styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalBase />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
