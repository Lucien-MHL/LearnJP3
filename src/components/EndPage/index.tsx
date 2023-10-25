import { PageName, changePage } from '../../redux/reducers/pageSlice'
import { useTranslation } from 'react-i18next'
import Button from '../../elements/Button'
import { useAppSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { Keys } from '../../assets/data'
import { S } from './styles'
import {
  getSubjectInfoByKey,
  setSubjectWithKey,
} from '../../redux/reducers/subjectSlice'
import { useMemo } from 'react'

export default function EndPage() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const title = useAppSelector(getSubjectInfoByKey('title'))

  const correct = useAppSelector(getSubjectInfoByKey('correct'))
  // const wrong = useAppSelector(getSubjectInfoByKey('wrong'))
  const total = useAppSelector(getSubjectInfoByKey('total'))
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

  const onRetryClick = () => {
    dispatch(setSubjectWithKey(title as Keys))
    dispatch(changePage(PageName.game))
  }
  const onBackToHomeClick = () => {
    dispatch(changePage(PageName.home))
  }

  return (
    <S.EndSection>
      <S.Score>
        <S.Number>
          <S.Text>分數:</S.Text>
          {score}
        </S.Number>
        <S.Stamp>{stampTitle}</S.Stamp>
      </S.Score>

      <S.Board></S.Board>

      <S.ButtonGroup>
        <Button onClick={onRetryClick}>{t('retry')}</Button>
        <Button onClick={onBackToHomeClick}>{t('back-to-home')}</Button>
      </S.ButtonGroup>
    </S.EndSection>
  )
}
