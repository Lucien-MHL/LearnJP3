import { useState, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

function AnswerByInput() {
  const { t } = useTranslation()
  const [value, setValue] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const str: string = e.target.value
    setValue(str.replace(/[^a-z]/g, '')) // 輸入值只允許英文小寫
  }
  return (
    <S.Form>
      <S.Text>{t('insert-answer')}</S.Text>
      <S.Input type='text' value={value} onChange={onChange} maxLength={3} />
    </S.Form>
  )
}

const S = {
  Form: styled.form`
    width: 50%;
    height: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
  `,
  Text: styled.p`
    user-select: none;
    position: absolute;
    color: ${({ theme }) => theme.mercury};
    letter-spacing: 3px;
    font-size: 28px;
    left: 0;
    translate: -110%;
    text-shadow: 0 8px 10px ${({ theme }) => theme.black};
  `,
  Input: styled.input`
    display: inline-block;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.mercury};
    text-align: center;
    font-size: 50px;
    letter-spacing: 5px;
    background: ${({ theme }) => `${theme.mine_shaft}AA`};
    border-radius: 15px;
    border: none;
    font-family: PlaypenSans, cursive;

    &:focus {
      outline: none;
    }
  `,
}

export default AnswerByInput
