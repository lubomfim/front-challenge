import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { LANG_EN } from './en/translations'
import { LANG_PT } from './pt/translations'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: LANG_PT
      },
      en: {
        translation: LANG_EN
      }
    }
  })

i18n.changeLanguage('en')

export const handleChangeLanguage = (lang) => {
  i18n.changeLanguage(lang)
}
