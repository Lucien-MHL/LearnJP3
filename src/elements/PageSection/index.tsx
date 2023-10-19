import styled from 'styled-components'

export const PageSection = styled.section`
  @media (min-width: 850px) {
    aspect-ratio: 4/3;
    width: 850px;
  }

  @media (max-width: 850px) {
    width: 100%;
    height: 80%;
  }
  margin: auto;
  position: relative;
`
