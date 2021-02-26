import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #303030;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }
`;