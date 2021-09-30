import React from 'react';
import styled from 'styled-components';

// Utils
import devices from '../../utils/devices';

// Components
import { Container } from '../../styles/GlobalStyle';
import LoanCalc from '../LoanCalc/LoanCalc';
import LinkButton from '../LinkButton/LinkButton';

// Styled Components
const HeroSection = styled.section``;

const HeroWrapper = styled.div`
  //height: 35rem;
  padding: 5rem 0;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')
    no-repeat center;
  background-size: cover;
`;

const TextWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 4.2rem;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  font-size: 1.8rem;

  @media screen and ${devices.lg} {
    width: 65%;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  color: #fff;

  @media screen and ${devices.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroWrapper>
      <StyledContainer>
        <TextWrapper>
          <Title>You can do more with Loando</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam, delectus eum in ipsam itaque praesentium quam
            ratione recusandae velit?
          </Text>
          <LinkButton to='/about'>Dowiedz się więcej</LinkButton>
        </TextWrapper>
        <LoanCalc />
      </StyledContainer>
    </HeroWrapper>
  </HeroSection>
);

export default Hero;
