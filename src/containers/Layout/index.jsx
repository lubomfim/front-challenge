import Header from '../../components/Header'
import * as S from './styled'

const Layout = ({ children, headerInfo }) => {
  return (
    <S.Layout>
      <Header {...headerInfo} />
      {children}
    </S.Layout>
  )
}

export default Layout
