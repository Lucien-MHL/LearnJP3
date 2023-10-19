import { useState, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { S } from './styles'

export default function Answer() {
  const { t } = useTranslation()
  const [value, setValue] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const str: string = e.target.value
    setValue(str.replace(/[^a-z]/g, '')) // 輸入值只允許英文小寫
  }

  return (
    <S.AnswerSection>
      <S.Form>
        <S.Text>{t('insert-answer')}</S.Text>
        <S.Input type='text' value={value} onChange={onChange} maxLength={3} />
      </S.Form>
    </S.AnswerSection>
  )
}
