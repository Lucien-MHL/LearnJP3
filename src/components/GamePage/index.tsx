import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../redux/hooks'
import { S } from './styles'
import Answer from './Answer'
import CorrectAndFail from '../../elements/CorrectAndFail'
import { getSubjectInfoByKey } from '../../redux/reducers/subjectSlice'

export default function GamePage() {
  const { t } = useTranslation()
  const title = useAppSelector(getSubjectInfoByKey('title'))
  const topic = useAppSelector(getSubjectInfoByKey('topic'))
  const count = useAppSelector(getSubjectInfoByKey('count'))
  const total = useAppSelector(getSubjectInfoByKey('total'))
  const [firstWord, secondWord] = title.split('-')

  return (
    <S.GameSection>
      <S.Title>
        {t(firstWord)} - {t(secondWord)}
      </S.Title>
      <S.Subject>{topic}</S.Subject>
      <S.Counter>{`- ${count} / ${total} -`}</S.Counter>
      <Answer />
      <CorrectAndFail
        placement={{
          left: '75%',
          bottom: 30,
        }}
      />
    </S.GameSection>
  )
}
