/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  const isLogin = () => {
    return localStorage.getItem('Identity') || false
  }

  useEffect(() => {}, [])

  const store = {
    user,
    setUser,
    isLogin
  }

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
