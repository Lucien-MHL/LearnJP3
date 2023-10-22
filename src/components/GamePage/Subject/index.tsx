import { useAppSelector } from '../../../redux/hooks'
import { getSubjectInfoByKey } from '../../../redux/reducers/subjectSlice'
import { S } from './styles'

export default function Subject() {
  const topic = useAppSelector(getSubjectInfoByKey('topic'))

  return <S.Word>{topic}</S.Word>
}
