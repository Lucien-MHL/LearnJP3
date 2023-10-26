import styled from 'styled-components'

export const S = {
  Score: styled.section`
    position: relative;
    margin: auto;
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
    user-select: none;
    display: inline-block;
    word-break: keep-all;
    font-family: cursive;
    font-size: 30px;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.red};
    padding: 8px;
    padding-right: 3px;
    position: absolute;
    top: -35%;
    left: 0;
    border: 3px solid ${({ theme }) => theme.red};
    border-radius: 10px;
    filter: drop-shadow(0 5px 10px black);
    opacity: 0;
    transform: rotate(-30deg) scale(5);
    animation: stamped 0.5s ease-in forwards;

    @keyframes stamped {
      0% {
        opacity: 0;
        top: 100%;
      }
      10% {
        opacity: 0.5;
        top: 100%;
        transform: scale(6);
        transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
      }
      100% {
        opacity: 1;
        transform: rotate(-30deg) scale(1);
      }
    }
  `,
}
