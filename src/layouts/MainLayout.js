import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

// Style
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Styled Components
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header fixed />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default MainLayout;
