import { S } from './styles'

type Props = {
  text: string
}

export default function Button(props: Props) {
  return <S.Button>{props.text}</S.Button>
}
