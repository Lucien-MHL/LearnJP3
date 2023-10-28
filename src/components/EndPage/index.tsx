import { PageName, changePage } from '../../redux/reducers/pageSlice'
import { useAppSelector } from '../../redux/hooks'
import { useTranslation } from 'react-i18next'
import RecordBoard from './RecordBoard'
import Button from '../../elements/Button'
import { useDispatch } from 'react-redux'
import { Keys } from '../../assets/data'
import { S } from './styles'
import {
  getSubjectInfoByKey,
  setSubjectWithKey,
} from '../../redux/reducers/subjectSlice'
import Score from './Score'
import { useRef } from 'react'

export default function EndPage() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const title = useAppSelector(getSubjectInfoByKey('title'))
  const retryRef = useRef<HTMLButtonElement>(null)
  const backToHomeRef = useRef<HTMLButtonElement>(null)

  const onRetryClick = () => {
    retryRef.current?.classList.add('active')
    setTimeout(() => {
      dispatch(setSubjectWithKey(title as Keys))
      dispatch(changePage(PageName.game))
      retryRef.current?.classList.remove('active')
    }, 500)
  }
  const onBackToHomeClick = () => {
    backToHomeRef.current?.classList.add('active')
    setTimeout(() => {
      dispatch(changePage(PageName.home))
      backToHomeRef.current?.classList.remove('active')
    }, 500)
  }

  return (
    <S.EndSection>
      <Score />
      <RecordBoard />
      <S.ButtonGroup>
        <Button ref={retryRef} onClick={onRetryClick}>
          {t('retry')}
        </Button>
        <Button ref={backToHomeRef} onClick={onBackToHomeClick}>
          {t('back-to-home')}
        </Button>
      </S.ButtonGroup>
    </S.EndSection>
  )
}
