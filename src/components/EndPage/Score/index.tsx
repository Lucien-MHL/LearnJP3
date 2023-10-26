import { getSubjectInfoByKey } from '../../../redux/reducers/subjectSlice'
import { useAppSelector } from '../../../redux/hooks'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { S } from './styles'

export default function Score() {
  const { t } = useTranslation()
  const record = useAppSelector(getSubjectInfoByKey('record'))
  const total = useAppSelector(getSubjectInfoByKey('total'))
  const correct = record.filter(({ answerStatus }) => answerStatus)
  const score = +((correct.length / total) * 100).toFixed(1)

  const stampTitle = useMemo(() => {
    switch (true) {
      case score >= 80 && score <= 99:
        return t('stamp-title.1')
      case score >= 60 && score < 80:
        return t('stamp-title.2')
      case score >= 25 && score < 60:
        return t('stamp-title.3')
      case score >= 0 && score < 25:
        return t('stamp-title.4')
      default:
        return t('stamp-title.0')
    }
  }, [])

  return (
    <S.Score>
      <S.Number>
        <S.Text>得分:</S.Text>
        {score}
      </S.Number>
      <S.Stamp>{stampTitle}</S.Stamp>
    </S.Score>
  )
}
