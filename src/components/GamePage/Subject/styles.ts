import styled from 'styled-components'

export const S = {
  Word: styled.p`
    user-select: none;
    width: 100%;
    height: 75%;
    color: ${({ theme }) => theme.mercury};
    font-size: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 10px 10px ${({ theme }) => theme.black};
  `,
}
