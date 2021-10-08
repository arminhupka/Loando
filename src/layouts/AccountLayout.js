import React from 'react';
import PropTypes from 'prop-types';
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
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and ${devices.md} {
    max-width: 100%;
  }

  @media screen and ${devices.lg} {
    //padding: unset;
    max-width: 122rem;
    padding: 0 2.4rem;
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  padding: 0 2.4rem 4rem 2.4rem;
  margin-top: 2rem;

  @media screen and ${devices.lg} {
    flex: 3;
    padding: 2rem;
  }
`;

const MainLayout = ({ children }) => {
  return (
    <>
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
