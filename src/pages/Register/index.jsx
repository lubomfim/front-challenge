import Layout from '../../components/Layout'
import UserLoginAndRegister from '../../containers/UserLoginAndRegister'
import * as S from './styled'

const Register = ({ t }) => {
  return (
    <Layout headerInfo={{ title: t('titles.register'), grid: 1, showUser: false }}>
      <S.Register>
        <S.LogoContainer>
          <img src="assets/logo.jpg" alt="" />
        </S.LogoContainer>
        <UserLoginAndRegister t={t} type="register" />
      </S.Register>
    </Layout>
  )
}

export default Register
