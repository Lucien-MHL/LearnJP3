import { useTranslation } from 'react-i18next'
import { S } from './styles'
import Answer from './Answer'
import CorrectAndFail from './CorrectAndFail'
import Subject from './Subject'
import Count from './Count'

export default function GamePage() {
  const { t } = useTranslation()

  return (
    <>
      <S.GameSection>
        <Count />
        <S.Title>
          {t('hiragana')} - {t('seion')}
        </S.Title>
        <CorrectAndFail />
        <Subject />
        <Answer />
      </S.GameSection>
    </>
  )
}
