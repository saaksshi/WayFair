import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background:  ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primaryLight};
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
`;
