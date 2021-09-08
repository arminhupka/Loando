import React from 'react';
import styled from 'styled-components';

// Styled Components
const StyledNav = styled.nav`
  position: absolute;
  width: 70%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.primaryDark};
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

const Nav = () => (
  <StyledNav>
    <NavList>
      <NavItem>Item</NavItem>
      <NavItem>Item</NavItem>
      <NavItem>Item</NavItem>
      <NavItem>Item</NavItem>
    </NavList>
  </StyledNav>
);

export default Nav;
