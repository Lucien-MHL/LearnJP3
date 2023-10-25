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

export default function EndPage() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const title = useAppSelector(getSubjectInfoByKey('title'))

  const onRetryClick = () => {
    dispatch(setSubjectWithKey(title as Keys))
    dispatch(changePage(PageName.game))
  }
  const onBackToHomeClick = () => {
    dispatch(changePage(PageName.home))
  }

  return (
    <S.EndSection>
      <S.ButtonGroup>
        <Button onClick={onRetryClick}>{t('retry')}</Button>
        <Button onClick={onBackToHomeClick}>{t('back-to-home')}</Button>
      </S.ButtonGroup>
    </S.EndSection>
  )
}
