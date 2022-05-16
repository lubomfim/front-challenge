import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import { useUserContext } from '../contexts/UserContext'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import UserInformation from '../pages/UserInformation'
import { handleChangeLanguage } from '../constants/translations/i18n'
import { useTranslation } from 'react-i18next'

function Routes() {
  const { isLogin } = useUserContext()
  const { i18n } = useTranslation()

  if (!i18n.language) {
    handleChangeLanguage('pt')
  }

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
        <Route
          path="info"
          element={
            <ProtectedRoute user={isLogin()}>
              <UserInformation />
            </ProtectedRoute>
          }
        />

        {/*  <Route path="*" element={<Login />} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
