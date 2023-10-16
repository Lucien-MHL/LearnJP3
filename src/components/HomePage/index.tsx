import { S } from './styles'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const { t } = useTranslation()
  return <S.Container>{t('title')}</S.Container>
}
