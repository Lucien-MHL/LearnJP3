import styled from 'styled-components'

export const S = {
  CountSection: styled.section`
    position: absolute;
    top: 67%;
    left: 50%;
    translate: -50%;
    color: ${({ theme }) => theme.mercury};
    text-shadow: 0 5px 4px ${({ theme }) => theme.black};
    font-size: 30px;
    font-weight: bold;
  `,
}
