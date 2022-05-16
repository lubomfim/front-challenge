import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../pages/Login'

const PublicRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/home" replace />
  }

  return children ? children : <Login />
}

export default PublicRoute
