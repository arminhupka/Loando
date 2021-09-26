import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

// Style
import GlobalStyle, { Container } from '../styles/GlobalStyle';
import theme from '../styles/theme';

// Components
import Header from '../components/Header/Header';

// Styled Components
const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
`;

const MainContent = styled.div`
  flex: 4;
  padding: 2rem;
`;

const Sidebar = styled.aside`
  flex: 1;
  // eslint-disable-next-line no-shadow
  background: ${(props) => props.theme.primary[500]};
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
          <Sidebar>
            <p>Sidebar</p>
          </Sidebar>
          <MainContent>{children}</MainContent>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

MainLayout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.arrayOf(PropTypes.node),
};

export default MainLayout;
