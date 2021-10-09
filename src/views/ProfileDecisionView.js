import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Actions
import { resetNewLoan } from '../actions/loanActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import Loader from '../components/Loader/Loader';
import Decision from '../components/Decision/Decision';

const ProfileLoansView = () => {
  const dispatch = useDispatch();

  const decisionState = useSelector((state) => state.loanReducer.newLoan);

  useEffect(() => {
    return () => dispatch(resetNewLoan());
  }, []);

  if (!decisionState.isLoading && decisionState.granted === null && decisionState.data === null) {
    return <Redirect to='/konto' />;
  }

  return (
    <>
      <Helmet>
        <title>Decyzja | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Decyzja' />
        {decisionState.isLoading && <Loader />}
        {decisionState.data && decisionState.granted && <Decision success />}
        {!decisionState.data && decisionState.granted === false && <Decision />}
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
