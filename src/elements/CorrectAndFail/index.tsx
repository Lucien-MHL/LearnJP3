import { getSubjectInfoByKey } from '../../redux/reducers/subjectSlice'
import { useAppSelector } from '../../redux/hooks'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { S, Props } from './styles'

export default function CorrectAndFail({ placement }: Props) {
  const { t } = useTranslation()
  const theme = useTheme()
  const correct = useAppSelector(getSubjectInfoByKey('correct'))
  const wrong = useAppSelector(getSubjectInfoByKey('wrong'))

  return (
    <S.Section $p={placement}>
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
