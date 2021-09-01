import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
    min-height: 100vh;
    font-size: 14px;
    background-color: #39529C;
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
