import React from 'react'
import { BrowserRouter, Routes as Switch } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import { UserProvider } from '../contexts/UserContext'

function Routes() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          {/*           <PrivateRoute path="/:lang/:path/:id" component={App} />
          <PrivateRoute path="/:lang/:path" component={App} />
          <PublicRoute path="/:lang?" component={Login} exact />
          <PublicRoute path="*" component={Page404} exact /> */}
        </Switch>
      </BrowserRouter>
    </UserProvider>
  )
}

export default Routes
