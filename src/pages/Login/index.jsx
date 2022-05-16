import Layout from '../../containers/Layout'
import UserLoginAndRegister from '../../containers/UserLoginAndRegister'
import * as S from './styled'

const Login = () => {
  return (
    <Layout headerInfo={{ title: 'Login', grid: 1 }}>
      <S.Login>
        <S.LogoContainer>
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
        <UserLoginAndRegister type="login" />
      </S.Login>
    </Layout>
  )
}

export default Login
