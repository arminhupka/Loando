import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Utils
import api from '../utils/api';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import LoansList from '../components/LoansList/LoansList';

const ProfileLoansView = () => {
  const [loans, setLoans] = useState([]);

  const getLoans = async () => {
    const { data } = await api.get('/loan');
    setLoans(data);
  };

  useEffect(() => {
    getLoans();
  }, []);

  return (
    <>
      <Helmet>
        <title>Pożyczki | Loando</title>
      </Helmet>
      <AccountLayout>
        <h1>Profile Loans View</h1>
        {loans.length > 0 && <LoansList loans={loans} />}
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
