import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

// Components
import { Container } from '../../styles/GlobalStyle';

// Styled Components
const StyledFooter = styled.footer`
  color: #fff;
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
  background: ${({ theme }) => theme.primary};
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
