import styled, { css } from 'styled-components'

export const S = {
  RecordBoard: styled.section`
    width: 100%;
    height: 400px;
    padding: 32px 0;
  `,
  List: styled.main`
    max-width: 350px;
    padding: 5px 25px;
    height: 100%;
    overflow-y: overlay;
    margin: auto;

    // scrollbar style start here
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-button {
      height: 0;
      background: transparent;
    }

    &::-webkit-scrollbar-track-piece {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: -2px 5px 10px ${({ theme }) => theme.black};
      background-color: ${({ theme }) => `${theme.mercury}AA`};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: transparent;
    }
    // scrollbar style end here
  `,
  Item: styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.mercury};
    text-shadow: 0 5px 10px ${({ theme }) => theme.black};
    margin-bottom: 24px;
    letter-spacing: 2px;
  `,
  Subject: styled.span`
    font-size: 28px;
    width: 28px;
  `,
  Pronounce: styled.span<{ $color?: string }>`
    font-size: 22px;
    text-align: center;
    width: 42px;
    ${({ $color }) => css`
      color: ${$color};
    `};
  `,
}
