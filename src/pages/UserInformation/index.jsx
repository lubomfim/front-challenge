import { useState } from 'react'
import Button from '../../components/Button'
import Layout from '../../containers/Layout'
import { useUserContext } from '../../contexts/UserContext'
import { truncate } from '../../utils/handleString'
import { useTranslation } from 'react-i18next'

import * as S from './styled'

const UserInformation = () => {
  const { user, setUser } = useUserContext()
  const { i18n, t } = useTranslation()

  const [languages, setLanguages] = useState([
    { title: 'Portuguese', code: 'pt', selected: i18n.language === 'pt' },
    { title: 'English', code: 'en', selected: i18n.language === 'en' }
  ])

  const handleLogout = () => {
    localStorage.removeItem('@Luxclusif/LoggedUser')
    setUser(null)
  }

  const handlePickLanguage = (pick) => {
    const newArr = languages.map((el) => {
      return {
        ...el,
        selected: el === pick
      }
    })

    i18n.changeLanguage(pick.code)

    setLanguages(newArr)
  }

  return (
    <Layout headerInfo={{ grid: 1, showUser: false, showLogo: false, path: '/home' }}>
      <S.UserName>
        {t('hello')}, {truncate(user?.name || user?.email, 10)}!
      </S.UserName>
      <S.LanguageTitle>{t('language')}</S.LanguageTitle>
      <S.LanguagePicker>
        {languages.map((el) => (
          <S.LanguagePickerItem
            key={el.code}
            className={(el.selected || i18n.language === el.code) && 'selected'}
            onClick={() => handlePickLanguage(el)}
          >
            {el.title}
          </S.LanguagePickerItem>
        ))}
      </S.LanguagePicker>

      <Button variant="primary" onClick={handleLogout}>
        {t('logout')}
      </Button>
    </Layout>
  )
}

export default UserInformation
