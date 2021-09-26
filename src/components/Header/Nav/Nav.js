import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// Utils
import devices from '../../../utils/devices';

// Components
import LinkButton from '../../LinkButton/LinkButton';

// Styled Components
const StyledNav = styled.nav`
  position: absolute;
  width: 70%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.primary[500]};
  transform: translateX(-100%);
  transition: 0.3s transform;
  z-index: 1;

  @media screen and ${devices.lg} {
    position: relative;
    width: auto;
    height: auto;
    top: unset;
    bottom: unset;
    background: transparent;
    transform: translateX(0);
    transition: none;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
    `}
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and ${devices.lg} {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  padding: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 0.1rem solid ${({ theme }) => theme.primary[400]};
`;

const PageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: collapse;
  transition: opacity 0.3s, visibility 0.3s;

  @media screen and ${devices.lg} {
    display: none;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const Nav = ({ isVisible, onClose }) => {
  const userState = useSelector((state) => state.userReducer);

  return (
    <>
      <StyledNav isVisible={isVisible}>
        <NavList>
          <NavItem>Strona Główna</NavItem>
          <NavItem>Oferta</NavItem>
          <NavItem>Kontakt</NavItem>
          <NavItem>
            {userState.token ? (
              <LinkButton href='/konto' title='Moje konto' />
            ) : (
              <LinkButton href='/zaloguj' title='Zaloguj się' />
            )}
          </NavItem>
        </NavList>
      </StyledNav>
      <PageOverlay isVisible={isVisible} onClick={onClose} />
    </>
  );
};

Nav.defaultProps = {
  isVisible: false,
  onClose: () => {},
};

Nav.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Nav;
