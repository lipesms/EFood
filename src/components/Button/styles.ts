import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantLink = styled(Link)`
  background-color: ${colors.laranjaClaro};
  color: ${colors.branco};
  text-decoration: none;
  padding: 4px 8px;
`
export const FoodLink = styled.button`
  display: block;
  width: 100%;
  background-color: ${colors.bege};
  color: ${colors.laranjaClaro};
  text-decoration: none;
  padding: 4px 8px;
  border: none;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`
