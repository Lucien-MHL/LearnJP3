import { PageSection } from '../../elements/PageSection'
import styled from 'styled-components'

export const S = {
  EndSection: styled(PageSection)`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: appear 1s forwards ease-in;
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
    &:has(button.active) {
      opacity: 1;
      animation: disappear 0.5s forwards linear;
    }
  `,
  ButtonGroup: styled.div`
    margin-top: auto;

    & > button:first-child {
      margin-right: 20px;
    }
  `,
}
