import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

// Utils
// import devices from '../utils/devices';

// Style
import GlobalStyle, { Container } from '../styles/GlobalStyle';
import theme from '../styles/theme';

// Components
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import devices from '../utils/devices';

// Styled Components
const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
`;

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and ${devices.lg} {
    flex-direction: row;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem 0;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <StyledContainer>
          <Wrapper>
            <Sidebar />
            <Content>{children}</Content>
          </Wrapper>
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
