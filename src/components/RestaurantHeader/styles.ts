import styled from 'styled-components'

export const Header = styled.header`
  height: 186px;
  width: 100%;

  & * {
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
  }

  & div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`