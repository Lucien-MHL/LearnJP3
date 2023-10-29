import { Option } from '../../../../redux/reducers/subjectSlice'
import { S } from './styles'

interface Props {
  options: Option[]
  onClick: React.MouseEventHandler<HTMLParagraphElement>
}

export default function AnswerByOption(props: Props) {
  const { options, onClick } = props
  return (
    <S.OptionGroup>
      {options.map(({ id, text }) => (
        <S.Option key={id}>
          <S.Text onClick={onClick}>{text}</S.Text>
        </S.Option>
      ))}
    </S.OptionGroup>
  )
}
