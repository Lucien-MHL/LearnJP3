import styled from 'styled-components'

export const S = {
  OptionGroup: styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    transform: translateY(25%);
    @media (min-width: 850px) {
      transform: none;
    }
  `,
  Option: styled.li`
    width: 33%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Text: styled.p`
    user-select: none;
    color: ${({ theme }) => theme.mercury};
    text-shadow: 0px 5px 10px ${({ theme }) => theme.black};
    font-size: 24px;
  `,
}
