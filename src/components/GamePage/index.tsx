import { useTranslation } from 'react-i18next'
import { S } from './styles'
import Answer from './Answer'
import CorrectAndFail from '../../elements/CorrectAndFail'
import Subject from './Subject'
import Count from './Count'

export default function GamePage() {
  const { t } = useTranslation()

  return (
    <S.GameSection>
      <S.Title>
        {t('hiragana')} - {t('seion')}
      </S.Title>
      <Subject />
      <Count />
      <Answer />
      <CorrectAndFail
        placement={{
          left: '80%',
          bottom: 30,
        }}
      />
    </S.GameSection>
  )
}
