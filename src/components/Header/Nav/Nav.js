import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components
const StyledNav = styled.nav`
  position: absolute;
  width: 70%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.primaryDark};
  transform: translateX(-100%);
  transition: 0.3s transform;
  z-index: 1;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
    `}
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  padding: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 0.1rem solid ${({ theme }) => theme.primary};
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

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const Nav = ({ isVisible, onClose }) => (
  <>
    <StyledNav isVisible={isVisible}>
      <NavList>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Item</NavItem>
      </NavList>
    </StyledNav>
    <PageOverlay isVisible={isVisible} onClick={onClose} />
  </>
);

Nav.defaultProps = {
  isVisible: false,
  onClose: () => {},
};

Nav.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Nav;
