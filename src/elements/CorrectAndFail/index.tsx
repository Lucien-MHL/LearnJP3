import { useAppSelector } from '../../redux/hooks'
import { getSubjectInfoByKey } from '../../redux/reducers/subjectSlice'
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
          <S.Text $color={theme.green}>{correct.length}</S.Text>
        </S.Item>
      )}
      {wrong.length !== 0 && (
        <S.Item>
          <S.Text>{t('fail')}</S.Text>
          <S.Text $color={theme.red}>{wrong.length}</S.Text>
        </S.Item>
      )}
    </S.Section>
  )
}
