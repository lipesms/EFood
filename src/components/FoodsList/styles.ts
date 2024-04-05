import styled from 'styled-components'
import { colors } from '../../styles'

import { FoodLink } from '../../components/Button/styles'

export const Container = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 48px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: o;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  padding: 32px;

  background-color: #e36676;
  z-index: 1;

  h3,
  p {
    color: ${colors.branco};
  }

  p {
    margin: 16px 0;
  }
`

export const AddCartButton = styled(FoodLink)`
  max-width: 220px;
`

export const Image = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

export const CloseButton = styled.img`
  position: absolute;
  height: 16px;
  width: 16px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
