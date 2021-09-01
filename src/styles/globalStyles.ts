import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    min-height: 100vh;
    font-size: 14px;
    background-color: #39529C;
    font-family: 'Nanum Gothic', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  ul, p {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
