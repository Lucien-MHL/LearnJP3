import { S } from './styles'

type Props = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export default function Button(props: Props) {
  const { children, onClick } = props
  return <S.Button onClick={onClick}>{children}</S.Button>
}
