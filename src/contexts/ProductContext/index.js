/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { loadFromLocalstorage } from '../../utils/handleStorage'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null)

  const updateProducts = () => {
    const getUser = loadFromLocalstorage('@Luxclusif/Products')

    getUser.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setProducts(getUser)
  }

  useEffect(() => {
    const getUser = loadFromLocalstorage('@Luxclusif/Products')

    getUser.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setProducts(getUser)
  }, [])

  const store = {
    updateProducts,
    products
  }

  return <ProductContext.Provider value={store}>{children}</ProductContext.Provider>
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}
