import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
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
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap' rel='stylesheet' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </>
  );
};

MainLayout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.arrayOf(PropTypes.node),
};

export default MainLayout;
