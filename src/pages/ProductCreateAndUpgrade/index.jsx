import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout'
import ProductForm from '../../containers/ProductForm'
import * as S from './styled'

const ProductCreateAndUpgrade = ({ type, t }) => {
  const { i18n } = useTranslation()
  return (
    <Layout
      headerInfo={{
        grid: 3,
        showUser: true,
        showLogo: false,
        path: `/home`,
        title: t('titles.addProduct')
      }}
    >
      <S.ProductCreateAndUpgrade>
        <ProductForm t={t} i18n={i18n} />
      </S.ProductCreateAndUpgrade>
    </Layout>
  )
}

export default ProductCreateAndUpgrade
