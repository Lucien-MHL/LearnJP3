import styled from 'styled-components'

export const S = {
  Section: styled.ul`
    list-style: none;
    position: absolute;
    left: 80%;
    bottom: 30px;
    display: flex;
  `,
  Item: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
      margin-right: 24px;
    }
  `,
  Text: styled.p<{ $color?: string }>`
    @font-face {
      font-family: MPLUSRounded1c;
      src: url('./font/MPLUSRounded1c-Medium.ttf');
    }
    font-family: MPLUSRounded1c, sans-serif;
    color: ${({ $color, theme }) => ($color ? $color : theme.mercury)};
    letter-spacing: 2px;
    text-shadow: 0 10px 10px ${({ theme }) => theme.black};

    &:last-child {
      font-size: 50px;
    }
  `,
}
