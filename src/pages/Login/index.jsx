import Layout from '../../components/Layout'
import UserLoginAndRegister from '../../containers/UserLoginAndRegister'
import * as S from './styled'

const Login = ({ t }) => {
  return (
    <Layout headerInfo={{ title: t('titles.login'), grid: 1, showUser: false }}>
      <S.Login>
        <S.LogoContainer>
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
        <UserLoginAndRegister type="login" t={t} />
      </S.Login>
    </Layout>
  )
}

export default Login
