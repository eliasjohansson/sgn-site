import {
  createGlobalStyle
} from 'styled-components';

const GlobalStyle = createGlobalStyle `

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700');
  *,*::before,*::after {
    box-sizing: border-box;
  }
  body {
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyle;