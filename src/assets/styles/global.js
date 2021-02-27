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
    background: #FAFAFA;
    color: #303030;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-family: 'Roboto', sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 2rem;
  }
`;