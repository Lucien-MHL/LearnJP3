import {
  getSubjectInfoByKey,
  setNextAndRecord,
} from '../../../redux/reducers/subjectSlice'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks'
import AnswerByInput, { SetValue } from './AnswerByInput'
import { S } from './styles'
import AnswerByOption from './AnswerByOption'

export default function Answer() {
  const dispatch = useAppDispatch()
  const pronounce = useAppSelector(getSubjectInfoByKey('pronounce'))

  const onSubmit = (inputValue: string, setInputValue: SetValue) => {
    if (!inputValue) return // 若為空值則不繼續執行
    const payload = {
      id: pronounce.id,
      reply: inputValue,
      answer: pronounce.answer,
    }

    dispatch(setNextAndRecord({ ...payload }))
    setInputValue('')
  }

  const onClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const payload = {
      id: pronounce.id,
      reply: event.currentTarget.innerText,
      answer: pronounce.answer,
    }
    dispatch(setNextAndRecord({ ...payload }))
  }

  return (
    <S.AnswerSection>
      {pronounce.options ? (
        <AnswerByOption options={pronounce.options} onClick={onClick} />
      ) : (
        <AnswerByInput onSubmit={onSubmit} />
      )}
    </S.AnswerSection>
  )
}
