import { S } from './styles'
import AnswerByInput, { SetValue } from './AnswerByInput'
import { getSubjectInfoByKey } from '../../../redux/reducers/subjectSlice'
import { useAppSelector } from '../../../redux/hooks'

export default function Answer() {
  const pronounce = useAppSelector(getSubjectInfoByKey('pronounce'))
  const onSubmit = (inputValue: string, setInputValue: SetValue) => {
    if (!inputValue) return
    setInputValue('')
  }

  return (
    <S.AnswerSection>
      <AnswerByInput onSubmit={onSubmit} />
    </S.AnswerSection>
  )
}
