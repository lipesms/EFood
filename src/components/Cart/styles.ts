import styled from 'styled-components'
import { colors } from '../../styles'

import trashCan from '../../assets/images/trash.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
  background-color: ${colors.laranjaClaro};
  z-index: 1;
`

export const CartItem = styled.div`
  display: flex;
  background-color: ${colors.bege};
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;

    h3 {
      font-size: 18px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
    }

    button {
      width: 16px;
      height: 16px;
      background-image: url(${trashCan});
      background-color: ${colors.bege};
      border: 0;
      cursor: pointer;
      align-self: flex-end;
    }
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 0 16px;

  &,
  & > * {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.branco};
  }
`
