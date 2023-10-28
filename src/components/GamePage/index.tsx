import { getSubjectInfoByKey } from '../../redux/reducers/subjectSlice'
import { PageName, changePage } from '../../redux/reducers/pageSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useTranslation } from 'react-i18next'
import CorrectAndFail from './CorrectAndFail'
import { useEffect, useState } from 'react'
import Answer from './Answer'
import { S } from './styles'

export default function GamePage() {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const title = useAppSelector(getSubjectInfoByKey('title'))
  const topic = useAppSelector(getSubjectInfoByKey('topic'))
  const count = useAppSelector(getSubjectInfoByKey('count'))
  const total = useAppSelector(getSubjectInfoByKey('total'))
  const index = useAppSelector(state => state.subject.index)
  const [firstWord, secondWord] = title.split('-')
  const [isEnd, setIsEnd] = useState<boolean>(false)

  useEffect(() => {
    if (index <= total) return
    setIsEnd(!(index <= total))
    setTimeout(() => {
      dispatch(changePage(PageName.end))
    }, 750)
    return
  }, [index, total])

  return (
    <S.GameSection $isEnd={isEnd}>
      <S.Title>
        {t(firstWord)} - {t(secondWord)}
      </S.Title>
      <S.Subject>{topic}</S.Subject>
      <S.Counter>{`- ${count} / ${total} -`}</S.Counter>
      <Answer />
      <CorrectAndFail />
    </S.GameSection>
  )
}
