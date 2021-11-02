import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const AdminActionNav = () => {
  return (
    <UserNavWrapper>
      <UserNavList>
        <UserItem>
          <Link to='/panel/pozyczki'>Pożyczki</Link>
        </UserItem>
        <UserItem>
          <Link to='/konto/uzytkownicy'>Użytkownicy</Link>
        </UserItem>
        <UserItem>
          <Link to='/wyloguj'>Wyloguj</Link>
        </UserItem>
      </UserNavList>
    </UserNavWrapper>
  );
};

export default AdminActionNav;
