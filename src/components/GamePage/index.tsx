import { S } from './styles'
import Answer from '../../elements/Answer'
import { useTranslation } from 'react-i18next'

export default function GamePage() {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Title>
        {t('hiragana')} - {t('seion')}
      </S.Title>
      <S.GameSection>
        <S.Subject>ツ</S.Subject>
        <S.Answer>
          <Answer />
        </S.Answer>
      </S.GameSection>
    </S.Container>
  )
}
