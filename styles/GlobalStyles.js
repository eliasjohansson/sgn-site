import { createGlobalStyle } from "styled-components";

// @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,700');
const GlobalStyle = createGlobalStyle`

  *,*::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colorLightGrey};
    overflow-x: hidden;
  }
a, a:visited {
  text-decoration: none;
  color: ${({ theme }) => theme.colorPrimary}
  p { font: ${({ theme }) => theme.fontMobileP}; }
}
  h1 { 
    font: ${({ theme }) => theme.fontMobileH1}; 
    }
  h2 { font: ${({ theme }) => theme.fontMobileH2}; }
  h3 { font: ${({ theme }) => theme.fontMobileH3}; }
  h4 { font: ${({ theme }) => theme.fontMobileH4}; }
  p { font: ${({ theme }) => theme.fontMobileP}; }
  b { font: ${({ theme }) => theme.fontMobilePBold}; }
  small { font: ${({ theme }) => theme.fontMini}; }
h1::after {
  content: '.';
  color: ${({ theme }) => theme.colorAccent};
    background: none;
}
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media screen and (min-width: 900px) {
    h1 { font: ${({ theme }) => theme.fontDesktopH1}; }
    p { font: ${({ theme }) => theme.fontDesktopP}; }
    b { font: ${({ theme }) => theme.fontDesktopP}; font-weight: bold; }
    a {
  p { font: ${({ theme }) => theme.fontDesktopP}; }
}
  }

`;

export default GlobalStyle;
