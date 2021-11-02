import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getLoansList, resetLoansList } from '../actions/loanActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import LoanCardsList from '../components/LoanCardsList/LoanCardsList';
import Loader from '../components/Loader/Loader';

const ProfileLoansView = () => {
  const dispatch = useDispatch();

  const loansListState = useSelector((state) => state.loanReducer.loans);

  useEffect(() => {
    dispatch(resetLoansList());
    dispatch(getLoansList());
  }, []);

  return (
    <>
      <Helmet>
        <title>Pożyczki | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Pożyczki' />
        {loansListState.isLoading && <Loader />}
        {loansListState.data.length !== 0 && <LoanCardsList loans={loansListState.data} />}
        {!loansListState.isLoading && loansListState.data.length === 0 && <h2>Nie masz obecnie żadnej pożyczki</h2>}
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
