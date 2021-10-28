import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Actions
import { userLogout } from '../../../../actions/userActions';

// Styled Components
const UserNavWrapper = styled.div`
  position: absolute;
  width: 30rem;
  top: 100%;
  right: 0;
  //display: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
`;

const UserNavList = styled.ul`
  padding: 0.8rem 0;
  margin-top: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray[100]};
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 2;
`;

const UserItem = styled.li`
  & > a {
    display: block;
    padding: 1rem 1.6rem;
    color: #797979;
    font-weight: 500;

    :hover {
      color: inherit;
    }
  }
`;

const UserActionsNav = () => {
  const dispatch = useDispatch();

  const logout = () => dispatch(userLogout());

  return (
    <UserNavWrapper>
      <UserNavList>
        <UserItem>
          <Link to='/konto'>Moje konto</Link>
        </UserItem>
        <UserItem>
          <Link to='/konto/pozyczki'>Pożyczki</Link>
        </UserItem>
        <UserItem>
          <Link to='/konto/ustawienia'>Ustawienia</Link>
        </UserItem>
        <UserItem>
          <a href='/' onClick={logout}>
            Wyloguj
          </a>
        </UserItem>
      </UserNavList>
    </UserNavWrapper>
  );
};

export default UserActionsNav;
