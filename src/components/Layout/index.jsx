import Header from '../Header'
import * as S from './styled'
import { useUserContext } from '../../contexts/UserContext'

const Layout = ({ children, headerInfo }) => {
  const { user } = useUserContext()

  return (
    <S.Layout data-testid="layout">
      <Header {...headerInfo} user={user} />
      {children}
    </S.Layout>
  )
}

export default Layout
