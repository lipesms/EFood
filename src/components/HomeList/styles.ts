import styled from 'styled-components'
import { breackponits } from '../../styles'

export const Container = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 120px;
  @media (max-width: ${breackponits.tablet}) {
    display: flex;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  column-gap: 80px;

  @media (max-width: ${breackponits.tablet}) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`
