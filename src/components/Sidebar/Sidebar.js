import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useModalState from '../../hooks/useModalState';

// Utils
import devices from '../../utils/devices';

// Actions
import { userLogout } from '../../actions/userActions';

// Components
import Button from '../Button/Button';

// Styled Components
const StyledSidebar = styled.aside`
  margin-bottom: 2rem;
  background: #f2f5fe;
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;

  @media screen and ${devices.lg} {
    width: 30rem;
    padding-right: 2rem;
    margin-right: 2rem;
    border-radius: 0;
    background: transparent;
    border-right: 0.1rem solid ${({ theme }) => theme.gray[300]};
    box-shadow: none;
  }
`;

const TitleWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: ${({ theme }) => theme.primary};

  @media screen and ${devices.lg} {
    display: none;
  }
`;

const StyledNav = styled.nav`
  max-height: 0;
  transition: max-height 0.6s ease-in-out;

  @media screen and ${devices.lg} {
    margin-top: 2rem;
    background: #fff;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      max-height: 28rem;
    `}
`;

const StyledList = styled.ul``;

const StyledItem = styled.li`
  a {
    font-weight: 500;
    color: inherit;
  }

  .active {
    background: ${({ theme }) => theme.gray[100]};
  }

  :last-of-type {
    padding: 2rem;
    display: flex;

    button {
      flex: 1;
    }

    @media screen and ${devices.lg} {
      padding: 0;
    }
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

  @media screen and ${devices.lg} {
    padding: 2rem;
    margin-bottom: 1rem;
    border-bottom: 0;
    border-radius: ${({ theme }) => theme.radius.regular};

    :hover {
      background: ${({ theme }) => theme.gray[100]};
    }
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.userReducer.data?.isAdmin);

  const { isVisible, onToggle } = useModalState();

  const handleToggleButton = () => onToggle();

  const logout = () => dispatch(userLogout());

  return (
    <StyledSidebar>
      <TitleWrapper>
        <h3>Menu</h3>
        <button type='button' onClick={handleToggleButton}>
          Show menu
        </button>
      </TitleWrapper>
      <StyledNav isVisible={isVisible}>
        <StyledList>
          {isAdmin ? (
            <>
              <StyledItem>
                <StyledLink to='/panel/pozyczki'>Pożyczki</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/panel/użytkownicy'>Użytkownicy</StyledLink>
              </StyledItem>
              <StyledItem>
                <Button onClick={logout}>Wyloguj</Button>
              </StyledItem>
            </>
          ) : (
            <>
              <StyledItem>
                <StyledLink to='/konto'>Twoje konto</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/konto/nowa-pozyczka'>Nowa pożyczka</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/konto/pozyczki'>Pożyczki</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to='/konto/ustawienia'>Ustawienia</StyledLink>
              </StyledItem>
              <StyledItem>
                <Button onClick={logout}>Wyloguj</Button>
              </StyledItem>
            </>
          )}
        </StyledList>
      </StyledNav>
    </StyledSidebar>
  );
};

export default Sidebar;
