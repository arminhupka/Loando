import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

// Utils
import api from '../utils/api';

// Actions
import { addAlert, resetAlerts } from '../actions/alertActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import LoansList from '../components/LoansList/LoansList';

const AdminLoansView = () => {
  const dispatch = useDispatch();

  const [loans, setLoans] = useState([]);

  const getAllLoans = async () => {
    try {
      const { data } = await api.get('/loan/all');
      setLoans(data);
    } catch (err) {
      if (!err.response) {
        dispatch(addAlert('Brak połaczenia z serwerem', 'error'));
      }

      if (err.response && err.response.status === 401) {
        dispatch(addAlert('Sesja wygasła', 'error'));
      }

      if (err.response) {
        dispatch(addAlert('Wystąpił błąd', 'error'));
      }
    }
  };

  useEffect(() => {
    getAllLoans();
    return () => dispatch(resetAlerts());
  }, []);

  return (
    <>
      <Helmet>
        <title>Moje Konto | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Pożyczki' />
        <LoansList loans={loans} />
      </AccountLayout>
    </>
  );
};

export default AdminLoansView;
