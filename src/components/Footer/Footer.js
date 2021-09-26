import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../../styles/GlobalStyle';

// Styled Components
const StyledFooter = styled.footer`
  color: #fff;
`;

const MainWrapper = styled.div`
  padding: 5rem 0;
  background: ${({ theme }) => theme.primary[400]};
`;

const CopyrightWrapper = styled.div`
  padding: 2rem 0;
  background: ${({ theme }) => theme.primary[600]};
`;

const Footer = () => (
  <StyledFooter>
    <MainWrapper>
      <Container>
        <h1>Footer</h1>
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
