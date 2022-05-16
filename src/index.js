import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/index'
import GlobalBase from './constants/styles/global'
import { UserProvider } from './contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <GlobalBase />
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>
)
