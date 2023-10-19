import styled from 'styled-components'
import { PageSection } from '../../elements/PageSection'

export const S = {
  HomeSection: styled(PageSection)`
    user-select: none;
    display: flex;
    flex-direction: column;
  `,
  Title: styled.p`
    width: 100%;
    color: ${({ theme }) => theme.mercury};
    font-size: 80px;
    text-align: center;
    text-shadow: 0 10px 10px ${({ theme }) => theme.black};

    @media (max-width: 500px) {
      font-size: 60px;
    }
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
