import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../../styles/GlobalStyle';
import Branding from '../Branding/Branding';

// Styled Components
const StyledFooter = styled.footer`
  color: #fff;
`;

const MainWrapper = styled.div`
  padding: 5rem 0;
  background: ${({ theme }) => theme.primary};
`;

const CopyrightWrapper = styled.div`
  padding: 2rem 0;
  background: ${({ theme }) => theme.primaryDark};
`;

const Footer = () => (
  <StyledFooter>
    <MainWrapper>
      <Container>
        <Branding large white />
      </Container>
    </MainWrapper>
    <CopyrightWrapper>
      <Container>
        <span>copyright</span>
      </Container>
    </CopyrightWrapper>
  </StyledFooter>
);

export default Footer;
