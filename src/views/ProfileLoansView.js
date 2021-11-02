import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

// Actions
import { addAlert } from '../actions/alertActions';

// Utils
import api from '../utils/api';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import LoanCardsList from '../components/LoanCardsList/LoanCardsList';
import Loader from '../components/Loader/Loader';

const ProfileLoansView = () => {
  const dispatch = useDispatch();

  const [loans, setLoans] = useState([]);

  const getLoans = async () => {
    try {
      const { data } = await api.get('/loan');
      setLoans(data);
    } catch (err) {
      if (!err.response) {
        dispatch(addAlert('Brak połaczenia z serwerem', 'error'));
      }

      if (err.response && err.response.status === 401) {
        dispatch(addAlert('Sesja wygasła', 'error'));
      }
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
        {loans.length === 0 && <h2>Nie masz obecnie żadnej pożyczki</h2>}
        {loans ? <LoanCardsList loans={loans} /> : <Loader />}
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
