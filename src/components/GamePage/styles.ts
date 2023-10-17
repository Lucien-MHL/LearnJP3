import styled from 'styled-components'

export const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: ${({ theme }) =>
      `radial-gradient(${theme.gray},${theme.mine_shaft})`};
  `,
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
      filter: drop-shadow(0 5px 10px ${({ theme }) => theme.black});
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
  `,
  Answer: styled.main`
    width: 85%;
    height: 25%;
    z-index: 99;
    margin: auto;
    display: flex;
  `,
}
