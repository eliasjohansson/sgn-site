import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700');

  *,*::before,*::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colorLightGrey};
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: bold;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: bold;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    font-weight: normal;
  }

  b {
    font-size: 16px;
    font-weight: bold;
  }

  small {
    font-size: 11px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
