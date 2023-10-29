import styled from 'styled-components'

export const S = {
  Form: styled.form`
    width: 50%;
    height: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: 850px) {
      flex-direction: column;
      width: 65%;
      height: 100%;
    }
  `,
  Text: styled.p`
    user-select: none;
    position: absolute;
    color: ${({ theme }) => theme.mercury};
    letter-spacing: 3px;
    font-size: 28px;
    left: 0;
    transform: translateX(-110%);
    text-shadow: 0 8px 10px ${({ theme }) => theme.black};

    @media (max-width: 850px) {
      position: static;
      transform: none;
      font-size: 22px;
      margin: 32px 0;
    }
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

    @media (max-width: 850px) {
      height: 50%;
    }
  `,
}
