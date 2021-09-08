import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from '../../styles/GlobalStyle';

// Styled Components
const StyledHeader = styled.header`
  height: 10rem;
  background: red;
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Header = () => (
  <>
    <StyledHeader>
      <StyledContainer>
        <h1>Loando</h1>
      </StyledContainer>
    </StyledHeader>
  </>
);

export default Header;
