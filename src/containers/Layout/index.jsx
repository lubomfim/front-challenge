import Header from '../../components/Header'
import * as S from './styled'
import { useUserContext } from '../../contexts/UserContext'

const Layout = ({ children, headerInfo }) => {
  const { user } = useUserContext()

  return (
    <S.Layout>
      <Header {...headerInfo} user={user} />
      {children}
    </S.Layout>
  )
}

export default Layout
