import {
  getSubjectInfoByKey,
  setNextAndRecord,
} from '../../../redux/reducers/subjectSlice'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import AnswerByInput, { SetValue } from './AnswerByInput'
import { S } from './styles'

export default function Answer() {
  const dispatch = useAppDispatch()
  const pronounce = useAppSelector(getSubjectInfoByKey('pronounce'))

  const onSubmit = (inputValue: string, setInputValue: SetValue) => {
    if (!inputValue) return // 若為空值則不繼續執行

    const isCorrect = pronounce.answer === inputValue
    const id = pronounce.id
    dispatch(setNextAndRecord({ id, isCorrect }))
    setInputValue('')
  }

  return (
    <S.AnswerSection>
      <AnswerByInput onSubmit={onSubmit} />
    </S.AnswerSection>
  )
}
