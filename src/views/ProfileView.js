import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Actions
import { userLogout } from '../actions/userActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Button from '../components/Button/Button';
import LoansList from '../components/LoansList/LoansList';

const ProfileView = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);

  const handleLogoutButton = () => dispatch(userLogout());

  if (!userState.token) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Helmet>
        <title>Moje Konto | Loando</title>
      </Helmet>
      <AccountLayout>
        <h1>Profile View</h1>
        <Button onClick={handleLogoutButton}>Wyloguj</Button>
        <LoansList />
      </AccountLayout>
    </>
  );
};

export default ProfileView;
