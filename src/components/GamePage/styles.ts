import styled from 'styled-components'

export const S = {
  GameSection: styled.section`
    aspect-ratio: 4/3;
    width: 850px;
    margin: auto;
    position: relative;

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
}
