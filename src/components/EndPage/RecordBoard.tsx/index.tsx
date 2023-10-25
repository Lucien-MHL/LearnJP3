import { S } from './styles'
import data, { Keys } from '../../../assets/data'

type Props = {
  recordData: {
    correct: string[]
    wrong: string[]
    title: string
  }
}

export default function RecordBoard(props: Props) {
  const { correct, wrong, title } = props.recordData
  const currentCharapterData = data[title as Keys]

  return <S.RecordBoard></S.RecordBoard>
}
