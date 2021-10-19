import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';

// Styled Components
const UserLinkWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: inherit;
    font-weight: 500;

    svg {
      margin-left: 2rem;
      font-size: 2.5rem;
    }
  }
`;

const Avatar = styled.div`
  height: 5rem;
  width: 5rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  background: #94aef2;
  border-radius: 50%;
`;

const UserLink = () => {
  const userData = useSelector((state) => state.userReducer.data);

  return (
    <UserLinkWrapper>
      <Avatar>
        {userData.firstName.charAt(0).toUpperCase()}
        {userData.lastName.charAt(0).toUpperCase()}
      </Avatar>
      <Link to='/konto'>
        Twoje konto
        <MdKeyboardArrowDown />
      </Link>
    </UserLinkWrapper>
  );
};

export default UserLink;
