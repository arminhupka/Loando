import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Icons
import { FaBars } from 'react-icons/fa';

// Utils
import devices from '../../utils/devices';

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

  a {
    color: #fff;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  font-size: 3rem;
  color: #fcfcfc;
  background: transparent;
  border: none;
  @media screen and ${devices.lg} {
    display: none;
  }
`;

const Header = () => {
  const { isVisible, onToggle, onClose } = useModalState(false);

  const handleHamburger = () => onToggle();

  return (
    <StyledHeader>
      <StyledContainer>
        <h1>
          <Link to='/'>Loando</Link>
        </h1>
        <Nav isVisible={isVisible} onClose={onClose} />
        <HamburgerButton onClick={handleHamburger}>
          <FaBars />
        </HamburgerButton>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
