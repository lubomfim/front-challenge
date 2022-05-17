import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout'
import * as S from './styled'

const ProductCreateAndUpgrade = ({ type }) => {
  const { i18n, t } = useTranslation()
  return (
    <Layout
      headerInfo={{
        grid: 3,
        showUser: true,
        showLogo: false,
        path: `/home`,
        title: 'add'
      }}
    >
      <S.ProductCreateAndUpgrade></S.ProductCreateAndUpgrade>
    </Layout>
  )
}

export default ProductCreateAndUpgrade
