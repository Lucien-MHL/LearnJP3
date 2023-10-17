import styled from 'styled-components'

export const S = {
  Container: styled.div`
    user-select: none;
    width: 100%;
    height: 100%;
    display: flex;
    background: ${({ theme }) =>
      `radial-gradient(${theme.gray},${theme.mine_shaft})`};
  `,
  Section: styled.section`
    aspect-ratio: 4/3;
    width: 850px;
    margin: auto;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.p`
    width: 100%;
    color: ${({ theme }) => theme.mercury};
    font-size: 80px;
    text-align: center;
    text-shadow: 0 10px 10px ${({ theme }) => theme.black};
    word-wrap: break-word;
  `,
  StageGroup: styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: auto 0;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 3px;
      height: 110%;
      background-color: ${({ theme }) => theme.mercury};
      box-shadow: -1px 5px 10px ${({ theme }) => theme.black};
    }
  `,
  Stage: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > * {
      margin: 15px;
    }
  `,
  Name: styled.p`
    color: ${({ theme }) => theme.mercury};
    font-size: 30px;
    text-shadow: 0 5px 5px ${({ theme }) => theme.black};
  `,
}
