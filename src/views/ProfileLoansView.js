import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Utils
import api from '../utils/api';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import LoansList from '../components/LoansList/LoansList';
import Heading from '../components/Heading/Heading';

const ProfileLoansView = () => {
  const [loans, setLoans] = useState(null);

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
        <Heading title='Twoje pożyczki' />
        {loans && <LoansList loans={loans} />}
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
