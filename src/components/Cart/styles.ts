import styled from 'styled-components'

import { breackponits, colors } from '../../styles'

import trashCan from '../../assets/images/trash.svg'
import { RestaurantLink } from '../Button/styles'

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
  position: relative;
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
  background-color: ${colors.lightOrange};
  z-index: 1;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h3,
    p {
      padding-bottom: 16px;
      color: ${colors.beige};
      font-weight: bold;
    }

    ${RestaurantLink} {
      display: block;
      width: 100%;
      padding: 4px 8px;
      margin-top: 8px;
      color: ${colors.lightOrange};
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      background-color: ${colors.beige};
      border: none;
      cursor: pointer;
    }
  }

  .hidden {
    display: none;
  }
`

export const CartItem = styled.div`
  display: flex;
  background-color: ${colors.beige};
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
      background-color: ${colors.beige};
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
    color: ${colors.white};
  }
`

export const closeCartButton = styled.img`
  display: none;

  @media (max-width: ${breackponits.tablet}) {
    display: block;
    position: absolute;
    height: 16px;
    width: 16px;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`
