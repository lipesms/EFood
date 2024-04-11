import { createGlobalStyle } from 'styled-components'

export const colors = {
  laranjaClaro: '#E66767',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2',
  branco: '#fff',
  preto: '#000'
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
    color: ${colors.laranjaClaro}
  }

  body{
    background-color: ${colors.begeClaro}
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
