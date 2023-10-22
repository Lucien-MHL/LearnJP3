import styled from 'styled-components'
import { PageSection } from '../../elements/PageSection'

export const S = {
  GameSection: styled(PageSection)`
    @keyframes appear {
      to {
        opacity: 1;
      }
    }

    & > *,
    &::before {
      opacity: 0;
      animation: appear 1s forwards ease-in-out;
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
  `,
}
