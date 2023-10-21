import styled from 'styled-components'

export const PageSection = styled.section`
  width: 850px;
  max-width: 100%;
  margin: auto;
  position: relative;

  /* 裝置寬度 > 850 時 */
  @media (min-width: 850px) {
    aspect-ratio: 4/3;
  }

  /* 裝置寬度 < 850 時 */
  @media (max-width: 850px) {
    height: 80%;
  }
`
