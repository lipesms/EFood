import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { colors } from '../../styles'

type InputGroupType = {
  size: 100 | 45 | 65 | 25
}

export const InputGroup = styled.div<InputGroupType>`
  display: flex;
  flex-direction: column;
  width: ${(props) => `${props.size}%`};
`
export const LabelElement = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 8px;
  color: ${colors.beige};
`
export const InputElement = styled.input`
  display: inline-block;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${colors.beige};
  color: ${colors.black};
  border: 4px solid transparent;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &.error {
    border-color: red;
  }
`

export const InputMasked = styled(InputMask)`
  display: inline-block;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${colors.beige};
  color: ${colors.black};
  border: 4px solid transparent;

  &.error {
    border-color: red;
  }
`

export const ConclusionMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  h2,
  p {
    color: ${colors.beige};
  }

  h2 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }
`
