import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Components
import Button from '../Button/Button';

// Styled Components
const StyledSidebar = styled.aside`
  flex: 1;
  background: ${({ theme }) => theme.primary[500]};
`;

const StyledNav = styled.nav``;

const StyledList = styled.ul``;

const StyledItem = styled.li`
  :last-child {
    padding: 2rem;
  }

  ${Button} {
    width: 100%;
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 2rem;
  color: #fff;
  border-bottom: 0.1rem solid ${({ theme }) => theme.primary[400]};

  :hover {
    background: ${({ theme }) => theme.primary[400]};
  }
`;

const Sidebar = () => (
  <StyledSidebar>
    <StyledNav>
      <StyledList>
        <StyledItem>
          <StyledLink to='/konto'>Konto</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to='/konto/pozyczki'>Pożyczki</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to='/konto/ustawienia'>Ustawienia</StyledLink>
        </StyledItem>
        <StyledItem>
          <Button>Wyloguj</Button>
        </StyledItem>
      </StyledList>
    </StyledNav>
  </StyledSidebar>
);

export default Sidebar;
