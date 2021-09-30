import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

// Style
import GlobalStyle, { Container } from '../styles/GlobalStyle';
import theme from '../styles/theme';

// Components
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

// Utils
import devices from '../utils/devices';

// Styled Components
const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and ${devices.lg} {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  flex: 4;
  padding: 2rem;
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
        <StyledContainer>
          <Sidebar />
          <MainContent>{children}</MainContent>
        </StyledContainer>
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
