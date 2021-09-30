import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Utils
import devices from '../../utils/devices';

// Actions
import { userLogout } from '../../actions/userActions';

// Components
import Button from '../Button/Button';

// Styled Components
const StyledSidebar = styled.aside`
  margin-top: 2rem;
  background: ${({ theme }) => theme.primary[500]};

  @media screen and ${devices.lg} {
    margin-top: 0;
    flex: 1;
  }
`;

const TitleWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: ${({ theme }) => theme.primary[600]};

  @media screen and ${devices.lg} {
    display: none;
  }
`;

const StyledNav = styled.nav`
  max-height: ${({ visible }) => (visible ? '30rem' : 0)};
  transition: max-height ease-in-out, 0.3s;
  overflow: hidden;
  @media screen and ${devices.lg} {
    max-height: 100%;
  }
`;

const StyledList = styled.ul``;

const StyledItem = styled.li`
  :last-child {
    padding: 2rem;
  }

  button {
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

const Sidebar = () => {
  const dispatch = useDispatch();

  const logout = () => dispatch(userLogout());

  const [visible, setVisible] = useState(false);

  const handleButton = () => setVisible(!visible);

  return (
    <StyledSidebar>
      <TitleWrapper>
        <h3>Twoje konto</h3>
        <button onClick={handleButton} type='button'>
          Show menu
        </button>
      </TitleWrapper>
      <StyledNav visible={visible}>
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
            <Button alt onClick={logout}>
              Wyloguj
            </Button>
          </StyledItem>
        </StyledList>
      </StyledNav>
    </StyledSidebar>
  );
};

export default Sidebar;
