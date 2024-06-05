import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightOrange: '#E66767',
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2',
  white: '#fff',
  black: '#000'
}

export const breackponits = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${colors.lightOrange}
  }

  body{
    background-color: ${colors.lightBeige}
  }

  .container{
    position: relative;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media(max-width:${breackponits.desktop}){
      max-width: 90%;
    }
  }
`
