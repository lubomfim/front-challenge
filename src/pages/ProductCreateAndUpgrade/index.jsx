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
        showUser: false,
        showLogo: false,
        path: `/home`,
        title: type === 'upgrade-product' ? t('titles.updateProduct') : t('titles.addProduct')
      }}
    >
      <S.ProductCreateAndUpgrade>
        <ProductForm t={t} i18n={i18n} type={type} />
      </S.ProductCreateAndUpgrade>
    </Layout>
  )
}

export default ProductCreateAndUpgrade
