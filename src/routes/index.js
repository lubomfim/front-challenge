import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import { useUserContext } from '../contexts/UserContext'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import UserInformation from '../pages/UserInformation'
import ProductDetails from '../pages/ProductDetails'
import ProductCreateAndUpgrade from '../pages/ProductCreateAndUpgrade'

import { handleChangeLanguage } from '../constants/translations/i18n'
import { useTranslation } from 'react-i18next'

import ScrollToTop from '../utils/scrollToTop'

function Routes() {
  const { isLogin } = useUserContext()
  const { i18n, t } = useTranslation()

  if (!i18n.language) {
    handleChangeLanguage('pt')
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path=""
          element={
            <PublicRoute user={isLogin()}>
              <Login t={t} />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute user={isLogin()}>
              <Register t={t} />
            </PublicRoute>
          }
        />
        <Route
          path="home"
          element={
            <ProtectedRoute user={isLogin()}>
              <Home t={t} />
            </ProtectedRoute>
          }
        />
        <Route
          path="info"
          element={
            <ProtectedRoute user={isLogin()}>
              <UserInformation t={t} />
            </ProtectedRoute>
          }
        />
        <Route
          path="create-product"
          element={
            <ProtectedRoute user={isLogin()}>
              <ProductCreateAndUpgrade t={t} type="create-product" />
            </ProtectedRoute>
          }
        />

        <Route
          path="upgrade-product/:id"
          element={
            <ProtectedRoute user={isLogin()}>
              <ScrollToTop>
                <ProductCreateAndUpgrade t={t} type="upgrade-product" />
              </ScrollToTop>
            </ProtectedRoute>
          }
        />
        <Route
          path="details-product/:id"
          element={
            <ProtectedRoute user={isLogin()}>
              <ScrollToTop>
                <ProductDetails t={t} />
              </ScrollToTop>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Home t={t} />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
