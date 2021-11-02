import styled, { createGlobalStyle } from 'styled-components';
import devices from '../utils/devices';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #333;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  input {
    font-family: 'Poppins', sans-serif !important;
  }

  ul {
    list-style: none;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 4rem;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  h3 {
    font-size: 1.7rem;
    line-height: 2.4rem;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const Section = styled.section`
  padding: 4rem 0;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 132rem;
  padding: 0 2.4rem;
  margin: 0 auto;
`;

export const Row = styled.div`
  margin: 0 -1.5rem;
  margin-bottom: 1rem;

  @media screen and ${devices.md} {
    display: flex;
  }
`;

export const Col = styled.div`
  flex: 1;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and ${devices.md} {
    margin-bottom: 0;
  }
`;

export default GlobalStyle;
