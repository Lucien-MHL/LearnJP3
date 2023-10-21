import styled from 'styled-components'

export const S = {
  Button: styled.button`
    user-select: none;
    -webkit-user-select: none;
    background-color: ${({ theme }) => theme.mine_shaft};
    color: ${({ theme }) => theme.mercury};
    padding: 5px 10px;
    padding-right: 5px;
    font-size: x-large;
    letter-spacing: 5px;
    box-shadow: 0 10px 10px ${({ theme }) => theme.mine_shaft};
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:hover {
      transform: translate(3px, -4px);
      box-shadow: -3px 14px 10px ${({ theme }) => theme.mine_shaft};
      font-weight: bold;
    }

    &:active {
      border-style: outset;
    }
  `,
}
