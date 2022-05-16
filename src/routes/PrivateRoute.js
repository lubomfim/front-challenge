import { useUserContext } from '../contexts/UserContext'
import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import i18n from 'i18next'
import { useLocation } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useUserContext()
  const param = useLocation()

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} />
        ) : (
          <Navigate to={`/${param.pathname?.split('/')[1] || i18n.language}`} />
        )
      }
    />
  )
}

export default PrivateRoute
