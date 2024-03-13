import { createGlobalStyle } from "styled-components";

const Component = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1;
  }

  #__next, body {
    position: relative;
    z-index: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  li, ul, ol, dl {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  div, header, aside, section, article, main, footer {
  }

  body {
    font-family: 'Noto Sans KR';
    font-size: 14px;
    margin: 0;
  }
 `;

export default Component;
