import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Utils
import api from '../utils/api';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import LoanCardsList from '../components/LoanCardsList/LoanCardsList';
import Loader from '../components/Loader/Loader';

const ProfileLoansView = () => {
  const [loans, setLoans] = useState(null);

  const getLoans = async () => {
    try {
      const data = await api.get('/loan');
      setLoans(data.data);
    } catch (err) {
      console.log(err.response);
    }
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
        {loans ? <LoanCardsList loans={loans} /> : <Loader />}
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
