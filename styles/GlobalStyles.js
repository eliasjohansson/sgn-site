import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }
  body {
    background-color: rebeccapurple;
  }
`;

export default GlobalStyle;
