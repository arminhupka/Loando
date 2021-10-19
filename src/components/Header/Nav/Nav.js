import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Utils
import devices from '../../../utils/devices';

// Components
import LinkButton from '../../LinkButton/LinkButton';

// Styled Components
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background: #fff;
  transform: translateX(-100%);
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.6s;
  z-index: 2;

  @media screen and ${devices.lg} {
    all: unset;
    height: 50%;
    padding-left: 4rem;
    margin-left: 4rem;
    border-left: 0.1rem solid rgba(0, 0, 0, 0.1);
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
    `}
`;

const NavList = styled.ul`
  @media screen and ${devices.lg} {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled.li`
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);

  & > a {
    display: block;
    padding: 2rem;
    font-size: 1.8rem;
    color: #797979;
    font-weight: 500;
  }

  .active {
    color: inherit;
  }

  ul {
    display: none;
  }

  ${LinkButton}:hover + ul {
    display: block;
  }

  :first-of-type {
    @media screen and ${devices.lg} {
      display: none;
    }
  }

  @media screen and ${devices.lg} {
    all: unset;

    & > a {
      font-size: 1.5rem;
      padding: 0;
      margin-right: 2rem;
      :hover {
        color: inherit;
      }
    }
  }
`;

const UserWrapper = styled.div`
  padding: 2rem;
  display: flex;
`;

const Avatar = styled.div`
  height: 6rem;
  width: 6rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: inherit;
    font-weight: 500;
  }
`;

const UserWelcome = styled.span`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.6s, visibility 0.6s;
  z-index: 1;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `} @media screen and ${devices.lg} {
    display: none;
  }
`;

const Nav = ({ isVisible, onClose }) => {
  const userState = useSelector((state) => state.userReducer);
  const listRef = useRef(null);

  useEffect(() => {
    const menuItem = Array.from(listRef.current.children);
    menuItem.forEach((item) => item.addEventListener('click', () => onClose()));
  }, []);

  return (
    <>
      <StyledNav isVisible={isVisible}>
        <NavList ref={listRef}>
          <NavItem>
            {userState.data ? (
              <UserWrapper>
                <Avatar>
                  {userState.data.firstName.charAt(0).toUpperCase()}
                  {userState.data.lastName.charAt(0).toUpperCase()}
                </Avatar>
                <InfoWrapper>
                  <UserWelcome>Witaj {userState.data.firstName}</UserWelcome>
                  <Link to='/konto'>Twoje konto</Link>
                </InfoWrapper>
              </UserWrapper>
            ) : (
              <UserWrapper>
                <InfoWrapper>
                  <UserWelcome>Witaj na Loando</UserWelcome>
                  <Link to='/zaloguj'>Zaloguj się</Link>
                </InfoWrapper>
              </UserWrapper>
            )}
          </NavItem>
          <NavItem>
            <NavLink onlyActiveOnIndex activeClassName='active' to='/'>
              Strona główna
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/oferta'>Oferta</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/kontakt'>Kontakt</NavLink>
          </NavItem>
        </NavList>
      </StyledNav>
      <Overlay isVisible={isVisible} onClick={onClose} />
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
