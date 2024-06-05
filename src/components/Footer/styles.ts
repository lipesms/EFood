import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  height: 298px;
  padding: 40px 0;
  background-color: ${colors.beige};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  p {
    max-width: 480px;
    text-align: center;
    font-size: 10px;
  }
`

export const ProfessionalLinks = styled.ul`
  display: flex;
  gap: 8px;
  padding: 32px 0 80px;
`
