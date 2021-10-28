import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

// Components
import { Container } from '../../styles/GlobalStyle';
import Branding from '../Branding/Branding';

// Styled Components
const BrandingWrapper = styled.div`
  margin-bottom: 2rem;
`;

const StyledFooter = styled.footer`
  color: #fff;
`;

const MainWrapper = styled.div`
  padding: 5rem 0;
  background: ${({ theme }) => theme.primary};
`;

const MainContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  background: ${({ theme }) => theme.primary};
`;

const Column = styled.div`
  & > * {
    margin-left: 1rem;
  }
`;

const CopyrightWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.primaryDark};
`;

const CopyContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 2rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <MainWrapper>
      <MainContainer>
        <Column>
          <BrandingWrapper>
            <Branding large white />
          </BrandingWrapper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae dolore eius eveniet iusto laudantium nemo
            nihil officia, saepe voluptatibus?
          </p>
        </Column>
      </MainContainer>
    </MainWrapper>
    <CopyrightWrapper>
      <CopyContainer>
        <Column>
          <span>Loando &copy; | Wszystkie prawa zastrzeżone</span>
        </Column>
        <Column>
          <FaFacebookF />
          <FaGithub />
        </Column>
      </CopyContainer>
    </CopyrightWrapper>
  </StyledFooter>
);

export default Footer;
