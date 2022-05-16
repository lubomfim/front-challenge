import Layout from '../../containers/Layout'
import UserLogin from '../../containers/UserLoginAndRegister'
import * as S from './styled'

const Register = () => {
  return (
    <Layout headerInfo={{ title: 'Register', grid: 1 }}>
      <S.Register>
        <S.LogoContainer>
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
        <UserLogin type="register" />
      </S.Register>
    </Layout>
  )
}

export default Register
