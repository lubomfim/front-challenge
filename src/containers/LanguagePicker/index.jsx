import * as S from './styled'

import { useState } from 'react'
import ToggleBoxes from '../../components/ToggleBoxes'

const LanguagePicker = ({ t, i18n }) => {
  const [languages, setLanguages] = useState([
    { title: 'Portuguese', code: 'pt', selected: i18n.language === 'pt' },
    { title: 'English', code: 'en', selected: i18n.language === 'en' }
  ])

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
    <>
      <S.LanguageTitle>{t('language')}</S.LanguageTitle>
      <ToggleBoxes condition={i18n.language} onClick={handlePickLanguage} list={languages} />
    </>
  )
}

export default LanguagePicker
