/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react'
import { loadFromLocalstorage } from '../../utils/handleStorage'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null)

  const updateProducts = () => {
    const getProducts = loadFromLocalstorage('@Luxclusif/Products')

    getProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setProducts(getProducts)

    return getProducts
  }

  useEffect(() => {
    setProducts(updateProducts())
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
