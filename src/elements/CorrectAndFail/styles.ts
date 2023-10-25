import styled from 'styled-components'

export const S = {
  Section: styled.ul`
    user-select: none;
    list-style: none;
    position: absolute;
    left: 75%;
    bottom: 30px;
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
    position: relative;
  `,
  Bounce: styled.span`
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;

    @keyframes show {
      to {
        top: -75px;
        opacity: 0;
      }
    }
    animation: show 0.75s ease-out forwards;
  `,
}
