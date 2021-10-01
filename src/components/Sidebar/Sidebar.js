import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsArrow90DegDown } from 'react-icons/bs';

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
  align-items: center;
  color: #fff;
  background: ${({ theme }) => theme.primary[600]};

  @media screen and ${devices.lg} {
    display: none;
  }
`;

const StyledButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  svg {
    font-size: 3rem;
    color: #fff;
    transition: transform 0.1s;
  }

  ${({ active }) =>
    active &&
    css`
      svg {
        transform: rotate(90deg);
      }
    `}
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
        <StyledButton onClick={handleButton} type='button' active={visible}>
          <BsArrow90DegDown />
        </StyledButton>
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
