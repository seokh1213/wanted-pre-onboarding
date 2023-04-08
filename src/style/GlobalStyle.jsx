import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }


  .page {
    padding: 2vh 10vw;
  }

  h1 {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export default GlobalStyle;
