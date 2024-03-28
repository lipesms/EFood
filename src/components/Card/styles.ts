import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  type: 'restaurant' | 'food'
}

const isRestaurant = (p: 'restaurant' | 'food') => p === 'restaurant'

export const CardContainer = styled.div<Props>`
  position: relative;
  border: 1px solid ${colors.laranjaClaro};
  max-width: ${(props) => (isRestaurant(props.type) ? '472px' : '320px')};
  font-size: 14px;
  line-height: 22px;
  background-color: ${(props) =>
    isRestaurant(props.type) ? colors.branco : colors.laranjaClaro};
  padding: ${(props) => (isRestaurant(props.type) ? '0' : '8px')};

  img {
    width: 100%;
  }
`

export const TextContainer = styled.div<Props>`
  padding: ${(props) => (isRestaurant(props.type) ? '8px' : '0')};

  h3,
  p {
    color: ${(props) =>
      isRestaurant(props.type) ? colors.laranjaClaro : colors.branco};
  }

  h3 {
    font-size: ${(props) => (isRestaurant(props.type) ? '18px' : '16px')};
  }
`

export const TitleReview = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: ${(props) => (isRestaurant(props.type) ? '18px' : '16px')};
  padding: 8px 0 16px;

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
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
