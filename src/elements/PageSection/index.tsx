import styled from 'styled-components'

export const PageSection = styled.section`
  /* 裝置寬度 > 850 時 */
  @media (min-width: 850px) {
    aspect-ratio: 4/3;
    width: 850px;
  }

  /* 裝置寬度 < 850 時 */
  @media (max-width: 850px) {
    width: 100%;
    height: 80%;
  }
  margin: auto;
  position: relative;
`
