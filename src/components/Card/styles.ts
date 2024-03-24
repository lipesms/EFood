import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  position: relative;
  border: 1px solid ${colors.laranjaClaro};
  max-width: 472px;
  font-size: 14px;
  line-height: 22px;
  background-color: ${colors.branco};

  img {
    width: 100%;
  }
`

export const TextContainer = styled.div`
  padding: 8px;

  & > p {
    padding: 16px 0;
  }
`

export const TitleReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 21px;
    text-align: end;
  }
`

export const RestaurantLink = styled(Link)`
  background-color: ${colors.laranjaClaro};
  color: ${colors.branco};
  text-decoration: none;
  padding: 4px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
