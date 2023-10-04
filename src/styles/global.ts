import { css, createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset';


export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  @font-face {
    font-family: 'HakgyoansimWoojuR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html {
    font-size: 62.5%;
  }

  html, body {
  font-style: normal;
  font-family: 'Pretendard-Regular';
}

  * {
    font-size: 1.6rem;
    font-weight: 400;
    box-sizing: border-box;
  }`;