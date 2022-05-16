/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { loadFromLocalstorage } from '../../utils/handleStorage'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const isLogin = () => {
    const getUser = loadFromLocalstorage('@Luxclusif/LoggedUser')

    return user?.email || getUser?.email || false
  }

  useEffect(() => {
    const getUser = loadFromLocalstorage('@Luxclusif/LoggedUser')
    setUser(getUser)
  }, [])

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
