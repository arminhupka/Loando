import React from 'react';
import styled from 'styled-components';

// Icons
import { FaBars } from 'react-icons/fa';

// Hooks
import useModalState from '../../hooks/useModalState';

// Components
import { Container } from '../../styles/GlobalStyle';
import Nav from './Nav/Nav';

// Styled Components
const StyledHeader = styled.header`
  height: 10rem;
  background: ${({ theme }) => theme.primary};
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const HamburgerButton = styled.button`
  display: flex;
  font-size: 3rem;
  color: #fcfcfc;
  background: transparent;
  border: none;
`;

const Header = () => {
  const { isVisible, onToggle, onClose } = useModalState(false);

  const handleHamburger = () => onToggle();

  return (
    <StyledHeader>
      <StyledContainer>
        <h1>Loando</h1>
        <Nav isVisible={isVisible} onClose={onClose} />
        <HamburgerButton onClick={handleHamburger}>
          <FaBars />
        </HamburgerButton>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
