import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { S } from './styles'

export default function CorrectAndFail() {
  const { t } = useTranslation()
  const { green, red } = useTheme()

  return (
    <S.Section>
      <S.Item>
        <S.Text>{t('correct')}</S.Text>
        <S.Text $color={green}>23</S.Text>
      </S.Item>
      <S.Item>
        <S.Text>{t('fail')}</S.Text>
        <S.Text $color={red}>4</S.Text>
      </S.Item>
    </S.Section>
  )
}
