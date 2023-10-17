import styled from 'styled-components'

export const S = {
  Button: styled.button`
    background-color: ${({ theme }) => theme.mine_shaft};
    color: ${({ theme }) => theme.mercury};
    padding: 5px 10px;
    text-align: center;
    font-size: x-large;
    letter-spacing: 5px;
    box-shadow: 0 10px 10px ${({ theme }) => theme.mine_shaft};
    cursor: pointer;
    transition: 0.15s ease-in-out;

    &:hover {
      translate: 1px -2px;
      box-shadow: -1px 12px 10px ${({ theme }) => theme.mine_shaft};
      font-weight: bold;
    }
  `,
}
