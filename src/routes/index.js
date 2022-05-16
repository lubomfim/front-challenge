import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import { useUserContext } from '../contexts/UserContext'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

function Routes() {
  const { isLogin } = useUserContext()
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="login"
          element={
            <PublicRoute user={isLogin()}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute user={isLogin()}>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="home"
          element={
            <ProtectedRoute user={isLogin()}>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Login />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
