import Button from '../../components/Button'
import Layout from '../../components/Layout'
import { useUserContext } from '../../contexts/UserContext'
import { truncate } from '../../utils/handleString'
import { useTranslation } from 'react-i18next'

import * as S from './styled'
import LanguagePicker from '../../containers/LanguagePicker'
import { useLocation } from 'react-router-dom'

const UserInformation = ({ t }) => {
  const { i18n } = useTranslation()
  const { user, setUser } = useUserContext()
  const { state } = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('@Luxclusif/LoggedUser')
    setUser(null)
  }

  return (
    <Layout
      headerInfo={{ grid: 1, showUser: false, showLogo: false, path: state?.prevPath || '/home' }}
    >
      <S.UserName>
        {t('info.hello')}, {truncate(user?.name || user?.email, 10)}!
      </S.UserName>
      <LanguagePicker i18n={i18n} t={t} />
      <Button variant="primary" onClick={handleLogout}>
        {t('info.logout')}
      </Button>
    </Layout>
  )
}

export default UserInformation
