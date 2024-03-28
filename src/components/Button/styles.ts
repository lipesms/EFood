import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantLink = styled(Link)`
  display: inline-block;
  padding: 4px 8px;
  margin-top: 16px;
  color: ${colors.branco};
  text-decoration: none;
  background-color: ${colors.laranjaClaro};
`
export const FoodLink = styled.button`
  display: block;
  width: 100%;
  padding: 4px 8px;
  margin-top: 8px;
  color: ${colors.laranjaClaro};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  background-color: ${colors.bege};
  border: none;
  cursor: pointer;
`
