import { useUserContext } from 'contexts/UserContext'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useUserContext()
  return (
    <Route {...rest} render={(props) => (user ? <Component {...props} /> : <Redirect to="/" />)} />
  )
}

export default PrivateRoute
