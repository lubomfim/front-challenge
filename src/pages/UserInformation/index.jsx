import Button from '../../components/Button'
import Layout from '../../containers/Layout'
import { useUserContext } from '../../contexts/UserContext'
import { truncate } from '../../utils/handleString'
import { useTranslation } from 'react-i18next'

import * as S from './styled'
import LanguagePicker from '../../containers/LanguagePicker'

const UserInformation = () => {
  const { i18n, t } = useTranslation()
  const { user, setUser } = useUserContext()

  const handleLogout = () => {
    localStorage.removeItem('@Luxclusif/LoggedUser')
    setUser(null)
  }

  return (
    <Layout headerInfo={{ grid: 1, showUser: false, showLogo: false, path: '/home' }}>
      <S.UserName>
        {t('hello')}, {truncate(user?.name || user?.email, 10)}!
      </S.UserName>
      <LanguagePicker i18n={i18n} t={t} />
      <Button variant="primary" onClick={handleLogout}>
        {t('logout')}
      </Button>
    </Layout>
  )
}

export default UserInformation
