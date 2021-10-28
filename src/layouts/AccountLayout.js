import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

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
import Alert from '../components/Alert/Alert';

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

const AccountLayout = ({ children }) => {
  const alerts = useSelector((state) => state.alertReducer);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {alerts.map((alert, index) => (
          <Alert key={alert.id} type={alert.type} message={alert.message} idx={index} />
        ))}
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

AccountLayout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node.isRequired,
};

export default AccountLayout;
