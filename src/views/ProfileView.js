import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Actions
import { userLogout } from '../actions/userActions';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import { Container } from '../styles/GlobalStyle';
import Button from '../components/Button/Button';
import LoansList from '../components/LoansList/LoansList';

const ProfileView = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);

  const handleLogoutButton = () => dispatch(userLogout());

  if (!userState.data) {
    return <Redirect to='/' />;
  }

  return (
    <MainLayout>
      <Container>
        <h1>Profile View</h1>
        <Button onClick={handleLogoutButton}>Wyloguj</Button>
        <LoansList />
      </Container>
    </MainLayout>
  );
};

export default ProfileView;
