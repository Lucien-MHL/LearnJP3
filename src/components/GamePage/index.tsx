import { S } from './styles'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

export default function GamePage() {
  const { t } = useTranslation()

  return (
    <>
      <S.Title>
        {t('hiragana')} - {t('seion')}
      </S.Title>
      <S.GameSection>
        <S.Subject>ツ</S.Subject>
        <S.Answer>
          <Answer />
        </S.Answer>
      </S.GameSection>
    </>
  )
}
