import styled from 'styled-components'
import { PageSection } from '../../elements/PageSection'

export const S = {
  EndSection: styled(PageSection)`
    outline: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ButtonGroup: styled.div`
    margin-top: auto;

    & > button:first-child {
      margin-right: 20px;
    }
  `,
}
