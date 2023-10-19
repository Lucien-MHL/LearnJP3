import styled from 'styled-components'

export type Props = {
  placement: {
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
  }
}

export const S = {
  Section: styled.ul<{ $p: Props['placement'] }>`
    user-select: none;
    list-style: none;
    position: absolute;
    ${({ $p }) => $p}
    display: flex;

    & > li:first-child {
      margin-right: 24px;
    }
  `,
  Item: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p:last-child {
      font-size: 50px;
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
    font-size: 20px;
  `,
}
