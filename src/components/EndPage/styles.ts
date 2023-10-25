import { PageSection } from '../../elements/PageSection'
import styled from 'styled-components'

export const S = {
  EndSection: styled(PageSection)`
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
