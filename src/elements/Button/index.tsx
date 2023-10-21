import React, { Ref } from 'react'
import { S } from './styles'

export type ClickButtonEvent = React.MouseEvent<HTMLButtonElement>

type Props = {
  children: React.ReactNode
  onClick?: (event: ClickButtonEvent) => void
}

const Button = React.forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
  const { children, onClick } = props
  return (
    <S.Button tabIndex={-1} onClick={onClick} ref={ref}>
      {children}
    </S.Button>
  )
})

export default Button
