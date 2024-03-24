import { createGlobalStyle } from 'styled-components'

export const colors = {
  laranjaClaro: '#E66767',
  begeClaro: '#FFF8F2',
  branco: '#fff',
  preto: '#000'
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
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
