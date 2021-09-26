import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import LoansList from '../components/LoansList/LoansList';

const ProfileLoansView = () => {
  return (
    <>
      <Helmet>
        <title>Pożyczki | Loando</title>
      </Helmet>
      <AccountLayout>
        <h1>Profile Loans View</h1>
        <LoansList />
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
