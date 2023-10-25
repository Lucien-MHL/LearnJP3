import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { S } from './styles'
import Answer from './Answer'
import CorrectAndFail from '../../elements/CorrectAndFail'
import { getSubjectInfoByKey } from '../../redux/reducers/subjectSlice'
import { PageName, changePage } from '../../redux/reducers/pageSlice'
import { useEffect } from 'react'

export default function GamePage() {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const title = useAppSelector(getSubjectInfoByKey('title'))
  const topic = useAppSelector(getSubjectInfoByKey('topic'))
  const count = useAppSelector(getSubjectInfoByKey('count'))
  const total = useAppSelector(getSubjectInfoByKey('total'))
  const index = useAppSelector(state => state.subject.index)
  const [firstWord, secondWord] = title.split('-')

  useEffect(() => {
    if (index <= total) return
    setTimeout(() => {
      dispatch(changePage(PageName.end))
    }, 750)
    return
  }, [index, total])

  return (
    <S.GameSection>
      <S.Title>
        {t(firstWord)} - {t(secondWord)}
      </S.Title>
      <S.Subject>{topic}</S.Subject>
      <S.Counter>{`- ${count} / ${total} -`}</S.Counter>
      {index <= total && <Answer />}
      <CorrectAndFail />
    </S.GameSection>
  )
}
