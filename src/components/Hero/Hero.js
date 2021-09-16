import React from 'react';
import styled from 'styled-components';

// Utils
import devices from '../../utils/devices';

// Components
import { Container } from '../../styles/GlobalStyle';
import LoanCalc from '../LoanCalc/LoanCalc';

// Styled Components
const HeroSection = styled.section``;

const HeroWrapper = styled.div`
  //height: 35rem;
  padding: 5rem 0;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')
    no-repeat center;
  background-size: cover;

  @media screen and ${devices.lg} {
    height: 55rem;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;

  h1 {
    font-size: 4.5rem;
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroWrapper>
      <StyledContainer>
        <LoanCalc />
      </StyledContainer>
    </HeroWrapper>
  </HeroSection>
);

export default Hero;
