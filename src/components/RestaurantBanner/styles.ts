import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerImage = styled.div`
  height: 280px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 24px 0;

  * {
    color: ${colors.white};
    font-size: 32px;
    font-weight: 900;
  }

  h4 {
    font-weight: 100;
  }
`
