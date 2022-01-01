import React from 'react';
import styled from 'styled-components';
import { FaIdCard, FaMoneyBill, FaHandshake } from 'react-icons/fa';

// Components
import { Container, Section } from '../../styles/GlobalStyle';
import StepCard from './StepCard/StepCard';
import devices from '../../utils/devices';
import Heading from '../Heading/Heading';

// Styled Components
const StyledSection = styled(Section)``;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media screen and ${devices.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Steps = () => (
  <StyledSection>
    <Container>
      <Heading title='Szybka pożyczka w trzech krokach' />
      <StepsGrid>
        <StepCard
          title='1. Składasz wniosek'
          description='Do złożenia wniosku potrzebujesz tylko jednej rzeczy: dowodu osobistego.'
          icon={<FaIdCard />}
        />
        <StepCard
          title='2. Otrzymujesz pieniądze'
          description='Po pozytywnym rozpatrzeniu wniosku, przelejemy środki na Twoje konto najszybciej jak to możliwe.'
          icon={<FaMoneyBill />}
        />
        <StepCard
          title='3. Spłacasz pożyczkę'
          description='Spłacasz pożyczkę w określonym terminie a następnie możesz wnioskować o nową'
          icon={<FaHandshake />}
        />
      </StepsGrid>
    </Container>
  </StyledSection>
);

export default Steps;
