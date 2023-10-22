import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { S } from './styles'

export type SetValue = React.Dispatch<React.SetStateAction<string>>

interface Props {
  onSubmit: (value: string, setValue: SetValue) => void
}

const AnswerByInput: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation()
  const [value, setValue] = useState<string>('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str: string = e.target.value
    setValue(str.replace(/[^a-z]/g, '')) // 輸入值只允許英文小寫
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit(value, setValue)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Text>{t('insert-answer')}</S.Text>
      <S.Input
        type='text'
        value={value}
        onChange={onChange}
        maxLength={3}
        autoFocus
      />
    </S.Form>
  )
}

export default AnswerByInput
