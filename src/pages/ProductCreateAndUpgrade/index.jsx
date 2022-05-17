import Layout from '../../containers/Layout'
import * as S from './styled'

const ProductCreateAndUpgrade = ({ type }) => {
  return (
    <Layout
      headerInfo={{
        grid: 2,
        showUser: true,
        showLogo: false,
        path: `home`
      }}
    ></Layout>
  )
}

export default ProductCreateAndUpgrade
