import styled, { css } from 'styled-components'
import { PageSection } from '../../elements/PageSection'

export const S = {
  GameSection: styled(PageSection)<{ $isEnd: boolean }>`
    ${({ $isEnd }) =>
      $isEnd
        ? css`
            opacity: 1;
            animation: disappear 1s forwards linear;
          `
        : css`
            opacity: 0;
            animation: appear 1s forwards linear;
          `}
    @keyframes appear {
      to {
        opacity: 1;
      }
    }
    @keyframes disappear {
      to {
        opacity: 0;
      }
    }

    &::before {
      content: '';
      width: 85%;
      height: 3px;
      background-color: ${({ theme }) => theme.mercury};
      box-shadow: 0 5px 10px ${({ theme }) => theme.black};
      position: absolute;
      top: 75%;
      left: 0;
      right: 0;
      margin: auto;
    }

    @media (max-width: 850px) {
      &::before {
        top: 65%;
        box-shadow: 0 5px 10px ${({ theme }) => theme.black},
          0 140px ${({ theme }) => theme.mercury},
          0 145px 10px ${({ theme }) => theme.black};
      }
    }

    @media (min-width: 850px) {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 3px solid ${({ theme }) => theme.mercury};
        border-radius: 25px;
        filter: drop-shadow(3px 5px 4px ${({ theme }) => theme.black});
        pointer-events: none;
      }
    }
  `,
  Title: styled.p`
    position: absolute;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.mercury};
    text-align: center;
    text-shadow: 0 5px 10px ${({ theme }) => theme.black};
    font-size: 35px;
    top: -75px;

    @media (max-width: 850px) {
      font-size: 28px;
      top: -25px;
    }
  `,
  Subject: styled.p`
    user-select: none;
    width: 100%;
    height: 75%;
    color: ${({ theme }) => theme.mercury};
    font-size: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 10px 10px ${({ theme }) => theme.black};

    @media (max-width: 850px) {
      font-size: 200px;
      height: 60%;
    }
  `,
  Counter: styled.p`
    position: absolute;
    top: 67%;
    left: 50%;
    translate: -50%;
    color: ${({ theme }) => theme.mercury};
    text-shadow: 0 5px 4px ${({ theme }) => theme.black};
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 850px) {
      top: 58%;
      font-size: 20px;
      text-shadow: 0 3px 5px ${({ theme }) => theme.black};
    }
  `,
}
