import Layout from '../../containers/Layout'
import UserLogin from '../../containers/UserLoginAndRegister'
import * as S from './styled'

const Login = () => {
  return (
    <Layout headerInfo={{ title: 'Login', grid: 1 }}>
      <S.Login>
        <S.LogoContainer>
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
        <UserLogin type="login" />
      </S.Login>
    </Layout>
  )
}

export default Login
