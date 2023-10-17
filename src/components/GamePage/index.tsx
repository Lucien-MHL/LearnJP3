import { S } from './styles'
import Answer from '../../elements/Answer'
// import { useTranslation } from 'react-i18next'

export default function GamePage() {
  return (
    <S.Container>
      <S.GameSection>
        <S.Subject>ツ</S.Subject>
        <S.Answer>
          <Answer />
        </S.Answer>
      </S.GameSection>
    </S.Container>
  )
}
