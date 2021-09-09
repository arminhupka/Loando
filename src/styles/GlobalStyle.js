import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    color: #333;
  }
  
  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 122rem;
  padding: 0 2.4rem;
  margin: 0 auto;
`;

export default GlobalStyle;
