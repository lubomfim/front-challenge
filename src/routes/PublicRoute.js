import { useUserContext } from '../contexts/UserContext'
import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useUserContext()

  return (
    <Route
      {...rest}
      render={(props) => (isLogin() ? <Navigate to={`/home`} /> : <Component {...props} />)}
    />
  )
}

export default PublicRoute
