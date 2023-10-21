import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../redux/hooks'
import { S } from './styles'
import Answer from './Answer'
import CorrectAndFail from '../../elements/CorrectAndFail'
import Subject from './Subject'
import Count from './Count'
import { selectSubjectInfoByKey } from '../../redux/reducers/subjectSlice'

export default function GamePage() {
  const { t } = useTranslation()
  const title = useAppSelector(selectSubjectInfoByKey('title')) as string
  const [firstWord, secondWord] = title?.split('-')

  return (
    <S.GameSection>
      {firstWord && secondWord ? (
        <S.Title>
          {t(firstWord)} - {t(secondWord)}
        </S.Title>
      ) : null}
      <Subject />
      <Count />
      <Answer />
      {/* <CorrectAndFail
        placement={{
          left: '80%',
          bottom: 30,
        }}
      /> */}
    </S.GameSection>
  )
}
