import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset';


export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


  html {
    font-size: 62.5%;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    
  }

  * {
    font-size: 1.6rem;
    font-weight: 400;
    box-sizing: border-box;
  }
`;