import styled from 'styled-components'

export const S = {
  AnswerSection: styled.main`
    width: 85%;
    height: 25%;
    z-index: 99;
    margin: auto;
    display: flex;
  `,
  Form: styled.form`
    width: 60%;
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
    font-family: BIZUDPMincho, sans-serif;

    &:focus {
      outline: none;
      caret-shape: block;
    }
  `,
}
