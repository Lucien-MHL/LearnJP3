import { PageSection } from '../../elements/PageSection'
import styled from 'styled-components'

export const S = {
  EndSection: styled(PageSection)`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ButtonGroup: styled.div`
    margin-top: auto;

    & > button:first-child {
      margin-right: 20px;
    }
  `,
  Score: styled.header`
    position: relative;
  `,

  Number: styled.p`
    color: ${({ theme }) => theme.mercury};
    text-shadow: 0 5px 10px ${({ theme }) => theme.black};
    font-size: 90px;
  `,
  Text: styled.span`
    font-size: 24px;
    text-shadow: 0 5px 10px ${({ theme }) => theme.black};
    letter-spacing: 10px;
    margin-right: 30px;
  `,
  Stamp: styled.span`
    @font-face {
      font-family: AaJiuZhongXiao;
      src: url(./font/AaJiuZhongXiao-2.ttf);
    }

    user-select: none;
    display: flex;
    word-break: keep-all;
    font-size: 30px;
    letter-spacing: 5px;
    font-family: AaJiuZhongXiao, cursive;
    line-height: 46px;
    color: ${({ theme }) => theme.red};
    text-shadow: 0 5px 10px ${({ theme }) => theme.black};
    padding: 8px;
    padding-right: 3px;
    position: absolute;
    top: 40%;
    right: -70%;
    opacity: 0;
    animation: stamped 0.5s ease-in forwards;

    @keyframes stamped {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0.5;
        transform-origin: 50% 50%;
        transform: scale(5);
        transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
      }
      100% {
        opacity: 1;
        transform: rotate(-30deg) scale(1);
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 5%;
      left: -4px;
      width: 100%;
      height: 80%;
      border: 3px solid ${({ theme }) => theme.red};
      border-radius: 10px;
      filter: drop-shadow(0 5px 5px black);
    }
  `,
  Board: styled.section`
    width: 100%;
    outline: 1px solid red;
  `,
}
