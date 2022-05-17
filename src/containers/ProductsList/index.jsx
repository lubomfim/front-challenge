import { useEffect, useMemo, useState } from 'react'
import { loadFromLocalstorage } from '../../utils/handleStorage'
import Loader from '../../components/Loader'
import * as S from './styled'
import Button from '../../components/Button'

const ProductsList = ({ t }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const getProducts = loadFromLocalstorage('@Luxclusif/ProductsList')

  const memoizedErrors = useMemo(() => {
    return getProducts.map((el) => <div>{el.name}</div>)
  }, [getProducts])

  return (
    <S.ProductsList>
      {products.length <= 0 && !loading && (
        <S.ProductsEmptyList>
          <p>{t('home.emptyResult')}</p>
          <Button path="/create-product">{t('home.addButton')}</Button>
        </S.ProductsEmptyList>
      )}
      {loading && <Loader />}

      {memoizedErrors}
    </S.ProductsList>
  )
}

export default ProductsList
