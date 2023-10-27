import { getSubjectInfoByKey } from '../../../redux/reducers/subjectSlice'
import { useAppSelector } from '../../../redux/hooks'
import { Trans } from 'react-i18next'
import { useTheme } from 'styled-components'
import { S } from './styles'

export default function RecordBoard() {
  const theme = useTheme()
  const record = useAppSelector(getSubjectInfoByKey('record'))
  const listOfWrong = record.filter(({ answerStatus }) => !answerStatus)

  return (
    <>
      {listOfWrong.length !== 0 && (
        <S.RecordBoard>
          <S.List>
            {listOfWrong.map(item => (
              <S.Item key={item.id}>
                <Trans
                  i18nKey='tell_the_true'
                  values={{
                    word: item.word,
                    answer: item.answer,
                    reply: item.reply,
                  }}
                  components={{
                    textA: <S.Subject />,
                    textB: <S.Pronounce $color={theme.green} />,
                    textC: <S.Pronounce $color={theme.red} />,
                  }}
                />
              </S.Item>
            ))}
          </S.List>
        </S.RecordBoard>
      )}
    </>
  )
}
