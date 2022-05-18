import { useEffect, useState } from 'react'

import * as S from './styled'

import Layout from '../../components/Layout'
import ProductsList from '../../containers/ProductsList'

import HomeFilterContainer from '../../containers/HomeFilterContainer'
import { useProductContext } from '../../contexts/ProductContext'
import Button from '../../components/Button'

const Home = ({ t }) => {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const { products } = useProductContext()

  useEffect(() => {
    setList(products)
    setFilteredList(products)
    alert(JSON.stringify(localStorage.getItem('@Luxclusif/Products')))
  }, [products])

  return (
    <Layout headerInfo={{ grid: 2, showUser: true }}>
      {list?.length <= 0 && (
        <S.ProductsEmptyList>
          <p>{t('home.emptyResult')}</p>
          <Button path="/create-product">{t('home.addButton')}</Button>
        </S.ProductsEmptyList>
      )}
      {list?.length > 0 && (
        <>
          <S.HomeHeader>
            <HomeFilterContainer t={t} setFilteredList={setFilteredList} list={list} />

            <Button variant="primary" path="/create-product">
              {t('home.addButton')}
            </Button>
          </S.HomeHeader>

          <ProductsList t={t} list={filteredList} fullList={list} />
        </>
      )}
    </Layout>
  )
}

export default Home
