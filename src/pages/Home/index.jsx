import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout'
import ProductsList from '../../containers/ProductsList'

import * as S from './styled'

const Home = ({ t }) => {
  return (
    <Layout headerInfo={{ grid: 2, showUser: true }}>
      <ProductsList t={t} />
    </Layout>
  )
}

export default Home
