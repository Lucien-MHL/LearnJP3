import { getSubjectInfoByKey } from '../../redux/reducers/subjectSlice'
import { useAppSelector } from '../../redux/hooks'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { S } from './styles'

export default function CorrectAndFail() {
  const { t } = useTranslation()
  const theme = useTheme()
  const record = useAppSelector(getSubjectInfoByKey('record'))
  const correct = record.filter(item => item.answerStatus)
  const wrong = record.filter(item => !item.answerStatus)

  return (
    <S.Section>
      {correct.length !== 0 && (
        <S.Item>
          <S.Text>{t('correct')}</S.Text>
          <S.Text $color={theme.green}>
            {correct.length}
            <S.Bounce key={correct.length}>+1</S.Bounce>
          </S.Text>
        </S.Item>
      )}
      {wrong.length !== 0 && (
        <S.Item>
          <S.Text>{t('wrong')}</S.Text>
          <S.Text $color={theme.red}>
            {wrong.length}
            <S.Bounce key={wrong.length}>-1</S.Bounce>
          </S.Text>
        </S.Item>
      )}
    </S.Section>
  )
}
