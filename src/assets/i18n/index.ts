import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh_tw from './zh_tw.json'

i18n.use(initReactI18next).init({
  resources: {
    zh: {
      translation: zh_tw,
    },
  },
  lng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})
